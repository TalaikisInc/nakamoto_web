import React, { Component } from 'react'
import { Label, Input, FormGroup, Row, Col, Alert } from 'reactstrap'
import { QRCode } from 'react-qrcode-logo'
import Web3 from 'web3'

import logo from 'assets/logo.png'
const web3 = new Web3()

export default class GenCode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amount: null,
      type: '0',
      recipientError: false,
      amntErr: false,
      taErr: false,
      tokenAddress: null,
      recipient: null,
    }
    this._setType = this._setType.bind(this)
    this._setRecipient = this._setRecipient.bind(this)
    this._setTokenAddr = this._setTokenAddr.bind(this)
    this._setAmount = this._setAmount.bind(this)
  }

  _setType (e) {
    e.preventDefault()
    const { target } = e
    this.setState({ type: target.value })
  }

  _setRecipient (e) {
    e.preventDefault()
    this.setState({ recipientError: false })
    const { target } = e
    const recipient = target.value
    if (recipient.length === 42 && web3.utils.isAddress(recipient)) {
      this.setState({ recipient })
    } else {
      this.setState({ recipientError: true })
    }
  }

  _setTokenAddr (e) {
    e.preventDefault()
    this.setState({ taErr: false })
    const { target } = e
    const tokenAddress = target.value
    if (tokenAddress.length === 42 && web3.utils.isAddress(tokenAddress)) {
      this.setState({ tokenAddress })
    } else {
      this.setState({ taErr: true })
    }
  }

  _setAmount (e) {
    e.preventDefault()
    this.setState({ amntErr: false })
    const { target } = e
    const a = parseFloat(target.value)
    if (a && a > 0) {
      this.setState({ amount: parseFloat(target.value) })
    } else {
      this.setState({ amntErr: true })
    }
  }

  render () {
    const { type, amount, tokenAddress, recipient, recipientError, taErr, amntErr } = this.state
    let value
    if (amount !== null && recipient !== null) {
      if (type === '0') {
        value = JSON.stringify({
          a: amount,
          t: recipient,
          s: 'ETH'
        })
      } else {
        if (tokenAddress !== null) {
          value = JSON.stringify({
            a: amount,
            t: recipient,
            s: tokenAddress
          })
        }
      }
    }
    const amnt = amntErr ? <Alert color="danger">
        Wrong amount
      </Alert> : null

    return (
      <div className="pt-5 pb-5 mt-5 mt-lg-0" id="main">
        <h1 className="display-4 text-center p-5" id="white">Generate Payment Code</h1>
        <Row className="m-0">
          <Col className="col-sm-3 col-12"></Col>
          <Col className="col-sm-3 col-12 p-5">
            <FormGroup>
              <Label for="typeSelect" id="white">Type</Label>
              <Input type="select" name="select" id="typeSelect" onChange={this._setType}>
                <option value="0">Ether</option>
                <option value="1">Tokens</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="recipient" id="white">Recipient</Label>
              <Input name="recipient" id="recipient" placeholder="Recipient account" onChange={this._setRecipient} />
              { recipientError ? <Alert color="danger">
                Wrong recipient account
              </Alert> : null }
            </FormGroup>
            { type === '1' ?<FormGroup>
              <Label for="tokenAddress" id="white">Token Address</Label>
              <Input name="tokenAddress" id="tokenAddress" placeholder="Token address" onChange={this._setTokenAddr} />
              { taErr ? <Alert color="danger">
                Wrong token address
              </Alert> : null }
            </FormGroup> : null }
            { type === '0' ? <FormGroup>
              <Label for="amount" id="white">Amount</Label>
              <Input name="amount" id="amount" placeholder="Amount, Ethers" onChange={this._setAmount} />
              { amnt }
            </FormGroup>
            : <FormGroup>
                <Label for="amount" id="white">Amount</Label>
                <Input name="amount" id="amount" placeholder="Amount, tokens" onChange={this._setAmount} />
                { amnt }
              </FormGroup>
            }
          </Col>
          <Col className="col-sm-3 col-12 p-5 text-center">
            { value ? <a href="nakamoto://send"><QRCode value={value} ecLevel="H" size={250} logoImage={logo} qrStyle="dots" /></a> : null }
          </Col>
          <Col className="col-sm-3 col-12"></Col>
        </Row>
      </div>
    )
  }
}
