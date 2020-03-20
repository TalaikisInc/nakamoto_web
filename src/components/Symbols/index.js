import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

export default class Symbols extends Component {
  render () {
    const symbols = [
      'Bitcoin',
      'Ethereum',
      'Lunyr',
      'Maid Safe Coin',
      'Monaco',
      'BitDegree',
      'Mithril',
      'Better Betting',
      'XRP',
      'Maker',
      'Cardano',
      'Red Pulse Phoenix Binance Coin',
      'Aion',
      'Neo',
      'Numeraire',
      'Nimiq',
      'Synereo',
      'Nexo',
      'Aragon',
      'NGC',
      'Ardor',
      'ARK',
      'Aeron',
      'Nxt',
      'Cosmos',
      'OmiseGo',
      'Ontology',
      'BANKEX',
      'PumaPay',
      'Particl',
      'Bitcoin Diamond',
      'Basic Attention Token',
      'Bitcoin Cash',
      'Paxos Standard Token',
      'TenXPay',
      'Pillar',
      'Binance token',
      'Polymath',
      'Bancor Network Token',
      'Power Ledger',
      'Bread Token',
      'Quantum',
      'ABYSS',
      'ProCurrency',
      'Bitcoin Gold',
      'BitTorrent',
      'Patientory',
      'Ripio Credit Network',
      'Civic',
      'Dai',
      'Augur',
      'Dash',
      'iEx.ec',
      'Salt',
      'Decred',
      'DENT',
      'Stox',
      'SmartCash',
      'Enjin Coin',
      'DigiByte',
      'Storj',
      'DigixDAO',
      'Stratis',
      'Dogecoin',
      'Telcoin',
      'Edgeless',
      'EOS',
      'Tron',
      'TrueUSD',
      'Ethereum Classic',
      'USDCoin',
      'Tether USD',
      'Ethos',
      'VeChain',
      'FunFair',
      'Viberate',
      'Golem',
      'Gas',
      'Waves',
      'Gnosis',
      'Wings DAO',
      'Groestlcoin',
      'XEM',
      'Stellar',
      'Gemini Dollar',
      'Monero',
      'Huobi Token',
      'Tezos',
      'Verge',
      'Komodo',
      'Kyber',
      'ZCoin',
      'ChainLink Token',
      'Zcash',
      'Loopring',
      'Waltonchain',
      'Lisk',
      'Tether ERC20',
      'Trustcoin',
      'Digitex Future',
      'Horizen (ZenCash)',
      'Litecoin',
      '0x token',
      'Humaniq',
      'Zap',
      'Bitcoin Rhodium',
      'Swarm City'
    ]
    const links1 = (
      <div>
        { symbols.slice(0, 19).map((symbol, i) => {
          return <div key={i}><a href={`/cryptocurrencies/${symbol.replace(/\s/g, '-')}`} id="sym-link" title={`Trade ${symbol}`}>{ symbol }</a></div>
        })}
      </div>
    )
    const links2 = (
      <div>
        { symbols.slice(19, 37).map((symbol, i) => {
          return <div key={i}><a href={`/cryptocurrencies/${symbol.replace(/\s/g, '-')}`} id="sym-link" title={`Trade ${symbol}`}>{ symbol }</a></div>
        })}
      </div>
    )
    const links3 = (
      <div>
        { symbols.slice(37, 55).map((symbol, i) => {
          return <div key={i}><a href={`/cryptocurrencies/${symbol.replace(/\s/g, '-')}`} id="sym-link" title={`Trade ${symbol}`}>{ symbol }</a></div>
        })}
      </div>
    )
    const links4 = (
      <div>
        { symbols.slice(55, 73).map((symbol, i) => {
          return <div key={i}><a href={`/cryptocurrencies/${symbol.replace(/\s/g, '-')}`} id="sym-link" title={`Trade ${symbol}`}>{ symbol }</a></div>
        })}
      </div>
    )
    const links5 = (
      <div>
        { symbols.slice(73, 91).map((symbol, i) => {
          return <div key={i}><a href={`/cryptocurrencies/${symbol.replace(/\s/g, '-')}`} id="sym-link" title={`Trade ${symbol}`}>{ symbol }</a></div>
        })}
      </div>
    )
    const links6 = (
      <div>
        { symbols.slice(91, 110).map((symbol, i) => {
          return <div key={i}><a href={`/cryptocurrencies/${symbol.replace(/\s/g, '-')}`} id="sym-link" title={`Trade ${symbol}`}>{ symbol }</a></div>
        })}
      </div>
    )

    return (
      <Row className="pt-5 container text-center">
        <Col className="col-sm-2 col-12">{ links1 }</Col>
        <Col className="col-sm-2 col-12">{ links2 }</Col>
        <Col className="col-sm-2 col-12">{ links3 }</Col>
        <Col className="col-sm-2 col-12">{ links4 }</Col>
        <Col className="col-sm-2 col-12">{ links5 }</Col>
        <Col className="col-sm-2 col-12">{ links6 }</Col>
      </Row>
    )
  }
}
