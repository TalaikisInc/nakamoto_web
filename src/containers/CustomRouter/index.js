import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import HowToSell from 'containers/HowToSell'
import HowToBuySell from 'containers/HowToBuySell'
import { getInflation } from 'utils/inflation'
import Meta from 'components/Meta'
import Footer from 'components/Footer'

export default class HowToBuy extends Component {
  constructor (props) {
    super(props)
    this.state = {
      symbol: false,
      country: false,
      suffix: false
    }
  }

  componentDidMount () {
    const { history } = this.props
    const path = history.location.pathname
    if (path.includes('how-to-sell')) {
      return <HowToSell />
    }

    if (path.includes('how-to-buy-and-sell')) {
      return <HowToBuySell />
    }

    if (path.includes('how-to-buy')) {
      const s = path.split('how-to-buy-')
      if (path.includes('-in-')) {
        const symbol = s[1].split('-in-')[0]
        const country = s[1].split('-in-')[1]
        this.setState({ symbol, country })
      } else {
        let symbol
        if (s[1].split('-').length === 1) {
          symbol = s[1]
          this.setState({ symbol })
        } else {
          symbol = s[1].split('-')[0]
          const suffix = s[1].split('-').join(' ').replace(`${symbol} `, '')
          this.setState({ symbol, suffix })
        }
      }
    } else {
      history.push('not-found')
    }
  }

  render () {
    const { country, symbol, suffix } = this.state
    const routes = !country && !suffix && symbol ? [
      `/how-to-buy-${symbol}-without-an-ID`,
      `/how-to-buy-${symbol}-online`,
      `/how-to-buy-${symbol}-with-bank-account`,
      `/how-to-buy-${symbol}-with-Paypal`,
      `/how-to-buy-${symbol}-with-credit-card`,
      `/how-to-buy-${symbol}-with-debit-card`,
      `/how-to-buy-${symbol}-with-cash`,
      `/how-to-buy-${symbol}-and-send-it`,
      `/how-to-buy-${symbol}-and-use-it`,
      `/how-to-buy-${symbol}-to-my-wallet`,
      `/how-to-buy-${symbol}-fast`,
      `/how-to-buy-${symbol}-cheap`,
      `/how-to-buy-${symbol}-directly`,
      `/how-to-buy-${symbol}-on-dark-web`,
      `/how-to-buy-${symbol}-on-deep-web`,
      `/how-to-buy-${symbol}-discreetly`,
      `/how-to-buy-${symbol}-currency`,
      `/how-to-buy-${symbol}-on-decentralized-exchange`,
      `/how-to-buy-${symbol}-easily`,
      `/how-to-buy-${symbol}-instantly`,
      `/how-to-buy-${symbol}-in-Algeria`,
      `/how-to-buy-${symbol}-in-Egypt`,
      `/how-to-buy-${symbol}-in-Morocco`,
      `/how-to-buy-${symbol}-in-Nigeria`,
      `/how-to-buy-${symbol}-in-South-Africa`,
      `/how-to-buy-${symbol}-in-Canada`,
      `/how-to-buy-${symbol}-in-United-States`,
      `/how-to-buy-${symbol}-in-Costa-Rica`,
      `/how-to-buy-${symbol}-in-Mexico`,
      `/how-to-buy-${symbol}-in-Nicaragua`,
      `/how-to-buy-${symbol}-in-Jamaica`,
      `/how-to-buy-${symbol}-in-Trinidad-and-Tobago`,
      `/how-to-buy-${symbol}-in-Ecuador`,
      `/how-to-buy-${symbol}-in-Argentina`,
      `/how-to-buy-${symbol}-in-Bolivia`,
      `/how-to-buy-${symbol}-in-Brazil`,
      `/how-to-buy-${symbol}-in-Chile`,
      `/how-to-buy-${symbol}-in-Colombia`,
      `/how-to-buy-${symbol}-in-Venezuela`,
      `/how-to-buy-${symbol}-in-Kyrgyzstan`,
      `/how-to-buy-${symbol}-in-Uzbekistan`,
      `/how-to-buy-${symbol}-in-Cyprus`,
      `/how-to-buy-${symbol}-in-Russia`,
      `/how-to-buy-${symbol}-in-United-Arab-Emirates`,
      `/how-to-buy-${symbol}-in-Israel`,
      `/how-to-buy-${symbol}-in-Saudi-Arabia`,
      `/how-to-buy-${symbol}-in-Jordan`,
      `/how-to-buy-${symbol}-in-Lebanon`,
      `/how-to-buy-${symbol}-in-Turkey`,
      `/how-to-buy-${symbol}-in-Iran`,
      `/how-to-buy-${symbol}-in-Bangladesh`,
      `/how-to-buy-${symbol}-in-India`,
      `/how-to-buy-${symbol}-in-Nepal`,
      `/how-to-buy-${symbol}-in-Pakistan`,
      `/how-to-buy-${symbol}-in-China`,
      `/how-to-buy-${symbol}-in-Hong-Kong`,
      `/how-to-buy-${symbol}-in-Japan`,
      `/how-to-buy-${symbol}-in-South-Korea`,
      `/how-to-buy-${symbol}-in-Taiwan`,
      `/how-to-buy-${symbol}-in-Cambodia`,
      `/how-to-buy-${symbol}-in-Indonesia`,
      `/how-to-buy-${symbol}-in-Malaysia`,
      `/how-to-buy-${symbol}-in-Philippines`,
      `/how-to-buy-${symbol}-in-Singapore`,
      `/how-to-buy-${symbol}-in-Thailand`,
      `/how-to-buy-${symbol}-in-Vietnam`,
      `/how-to-buy-${symbol}-in-Brunei`,
      `/how-to-buy-${symbol}-in-Austria`,
      `/how-to-buy-${symbol}-in-Croatia`,
      `/how-to-buy-${symbol}-in-Czech-Republic`,
      `/how-to-buy-${symbol}-in-Germany`,
      `/how-to-buy-${symbol}-in-Hungary`,
      `/how-to-buy-${symbol}-in-Poland`,
      `/how-to-buy-${symbol}-in-Romania`,
      `/how-to-buy-${symbol}-in-Slovakia`,
      `/how-to-buy-${symbol}-in-Slovenia`,
      `/how-to-buy-${symbol}-in-Switzerland`,
      `/how-to-buy-${symbol}-in-Belarus`,
      `/how-to-buy-${symbol}-in-Ukraine`,
      `/how-to-buy-${symbol}-in-Denmark`,
      `/how-to-buy-${symbol}-in-Estonia`,
      `/how-to-buy-${symbol}-in-Finland`,
      `/how-to-buy-${symbol}-in-Iceland`,
      `/how-to-buy-${symbol}-in-Lithuania`,
      `/how-to-buy-${symbol}-in-Norway`,
      `/how-to-buy-${symbol}-in-Sweden`,
      `/how-to-buy-${symbol}-in-Bosnia- and-Herzegovina`,
      `/how-to-buy-${symbol}-in-Bulgaria`,
      `/how-to-buy-${symbol}-in-Greece`,
      `/how-to-buy-${symbol}-in-Italy`,
      `/how-to-buy-${symbol}-in-Malta`,
      `/how-to-buy-${symbol}-in-Macedonia`,
      `/how-to-buy-${symbol}-in-Spain`,
      `/how-to-buy-${symbol}-in-Portugal`,
      `/how-to-buy-${symbol}-in-Belgium`,
      `/how-to-buy-${symbol}-in-France`,
      `/how-to-buy-${symbol}-in-Ireland`,
      `/how-to-buy-${symbol}-in-Luxembourg`,
      `/how-to-buy-${symbol}-in-Netherlands`,
      `/how-to-buy-${symbol}-in-United-Kingdom`,
      `/how-to-buy-${symbol}-in-New-Zealand`,
      `/how-to-buy-${symbol}-in-Australia`,
      `/how-to-buy-${symbol}-in-Namibia`,
      `/how-to-buy-${symbol}-in-Zimbabwe`
    ] : []
    const links = (
      <ul>
        { routes.map((route, i) => {
          const suffix = route.split(`how-to-buy-${symbol}-`)[1].split('-').join(' ')
          return <li key={i}><a href={route}>How to Buy { symbol } { suffix }</a></li>
        })}
      </ul>
    )

    const CountryBlock = (
      <Row className="pt-5 pb-5">
        <Col className="col-sm-2 col-12"></Col>
        <Col className="col-sm-3 col-12">
          { getInflation(country) }
        </Col>
        <Col className="col-sm-1 col-12"></Col>
      </Row>
    )

    const OtherBlock = (
      <div />
    )

    return (
      <Container>
        <Meta title={symbol} />
        { country && symbol ? <CountryBlock />
          : null
        }
        { suffix && symbol ? <OtherBlock />
          : null
        }

        { !suffix && !country && symbol ? links
          : null }
        <Footer black />
      </Container>
    )
  }
}
