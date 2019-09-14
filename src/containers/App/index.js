import React, { PureComponent, Fragment } from 'react'
import { Jumbotron, Container, Label, Input, FormGroup, Modal, ModalHeader, Carousel, CarouselControl, CarouselIndicators, CarouselItem, CarouselCaption, Nav, Row, Col, Navbar, NavItem, NavLink, Collapse, NavbarBrand, NavbarToggler, ModalBody, ModalFooter, Button, Alert } from 'reactstrap'
import ReactGA from 'react-ga'
import { QRCode } from 'react-qrcode-logo'
import Web3 from 'web3'

import logo from 'assets/logo.png'
import items from 'containers/App/items'
const web3 = new Web3()

class App extends PureComponent {
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
      modal: false,
      navOpen: false,
      activeIndex: 0
    }
    this._initGA = this._initGA.bind(this)
    this._logPageView = this._logPageView.bind(this)
    this._setType = this._setType.bind(this)
    this._setRecipient = this._setRecipient.bind(this)
    this._setTokenAddr = this._setTokenAddr.bind(this)
    this._setAmount = this._setAmount.bind(this)
    this._toggle = this._toggle.bind(this)
    this._navToggle = this._navToggle.bind(this)
    this._onExiting = this._onExiting.bind(this)
    this._onExited = this._onExited.bind(this)
    this._next = this._next.bind(this)
    this._previous = this._previous.bind(this)
    this._goToIndex = this._goToIndex.bind(this)
  }

  _initGA () {
    ReactGA.initialize(process.env.GA_TRACKING_ID)
    // console.log('Initialized')
  }

  _logPageView () {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
    // console.log(`Logged: ${window.location.pathname}`)
  }

  componentDidMount () {
    if (process.env.NODE_ENV === 'production') {
      if (!window.GA_INITIALIZED) {
        this._initGA()
        window.GA_INITIALIZED = true
      }
      this._logPageView()
    }
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
  
  _toggle () {
    this.setState((prevState) => ({
      modal: !prevState.modal
    }))
  }

  _navToggle () {
    this.setState({
      navOpen: !this.state.navOpen
    })
  }

  _onExiting () {
    this.animating = true
  }

  _onExited () {
    this.animating = false
  }

  _next () {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  _previous () {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  _goToIndex (newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }
  

  render() {
    const { type, amount, tokenAddress, recipient, modal, recipientError, taErr, navOpen, amntErr, activeIndex } = this.state
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
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this._onExiting}
          onExited={this._onExited}
          key={item.id}>
          <img src={item.src} alt={item.altText} height="650" />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      )
    })

    return (
      <Fragment>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Nakamoto</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={navOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Google Play</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.facebook.com/NakamotoWallet">Facebook</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Row>
          <Col className="col-9">
            <Row>
              <Col>
                <Jumbotron fluid>
                  <Container>
                    <h1 className="display-3">Nakamoto Ethereum Wallet</h1>
                    <p className="lead">Nakamoto Ethereum Wallet is a decentralized, secure mobile Ethereum and ERC-20 tokens wallet. Private keys and seeds are encrypted with the password only you can know, and stored on your own device only.</p>
                  </Container>
                </Jumbotron>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1 className="display-4 text-center p-5">Generate Payment Code</h1>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col className="pb-5">
                <FormGroup>
                  <Label for="typeSelect">Type</Label>
                  <Input type="select" name="select" id="typeSelect" onChange={this._setType}>
                    <option value="0">Ether</option>
                    <option value="1">Tokens</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="recipient">Recipient</Label>
                  <Input name="recipient" id="recipient" placeholder="Recipient account" onChange={this._setRecipient} />
                  { recipientError ? <Alert color="danger">
                    Wrong recipient account
                  </Alert> : null }
                </FormGroup>
                { type === '1' ?<FormGroup>
                  <Label for="tokenAddress">Token Address</Label>
                  <Input name="tokenAddress" id="tokenAddress" placeholder="Token address" onChange={this._setTokenAddr} />
                  { taErr ? <Alert color="danger">
                    Wrong token address
                  </Alert> : null }
                </FormGroup> : null }
                { type === '0' ? <FormGroup>
                  <Label for="amount">Amount</Label>
                  <Input name="amount" id="amount" placeholder="Amount, Ethers" onChange={this._setAmount} />
                  { amnt }
                </FormGroup>
                : <FormGroup>
                    <Label for="amount">Amount</Label>
                    <Input name="amount" id="amount" placeholder="Amount, tokens" onChange={this._setAmount} />
                    { amnt }
                  </FormGroup>
                }
              </Col>
              <Col>
                { value ? <QRCode value={value} ecLevel="H" size={250} logoImage={logo} qrStyle="dots" /> : null }
              </Col>
              <Col></Col>
            </Row>
          </Col>
          <Col className="col-3">
            <Carousel
              activeIndex={activeIndex}
              next={this._next}
              previous={this._previous}>
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this._goToIndex} />
              { slides }
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this._previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this._next} />
            </Carousel>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col>
              <p className="text-center">&copy; { new Date().getFullYear() } <a href="https://talaikis.com">Developer</a></p>
            </Col>
          </Row>
        </Container>
        <Modal isOpen={modal} toggle={this._toggle}>
          <ModalHeader toggle={this._toggle}>Error</ModalHeader>
          <ModalBody>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this._toggle}>OK</Button>{' '}
          </ModalFooter>
        </Modal>
      </Fragment>
    )
  }
}

export default App
