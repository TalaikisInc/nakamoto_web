import React, { Component } from 'react'
import { Container } from 'reactstrap'

import CustomRouter from 'containers/CustomRouter'
import HowToSell from 'containers/HowToSell'

export default class HowToBuySell extends Component {
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
    if (path.includes('how-to-buy')) {
      return <CustomRouter />
    }

    if (path.includes('how-to-sell')) {
      return <HowToSell />
    }

    if (path.includes('how-to-buy-and-sell')) {
      const s = path.split('how-to-buy-and-sell')
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
      `/how-to-buy-and-sell-${symbol}-in-Kyrgyzstan`,
      `/how-to-buy-and-sell-${symbol}-in-Uzbekistan`,
      `/how-to-buy-and-sell-${symbol}-in-Cyprus`,
      `/how-to-buy-and-sell-${symbol}-in-Russia`,
      `/how-to-buy-and-sell-${symbol}-in-United-Arab-Emirates`,
      `/how-to-buy-and-sell-${symbol}-in-Israel`,
      `/how-to-buy-and-sell-${symbol}-in-Saudi-Arabia`,
      `/how-to-buy-and-sell-${symbol}-in-Jordan`,
      `/how-to-buy-and-sell-${symbol}-in-Lebanon`,
      `/how-to-buy-and-sell-${symbol}-in-Turkey`,
      `/how-to-buy-and-sell-${symbol}-in-Iran`,
      `/how-to-buy-and-sell-${symbol}-in-Bangladesh`,
      `/how-to-buy-and-sell-${symbol}-in-India`,
      `/how-to-buy-and-sell-${symbol}-in-Nepal`,
      `/how-to-buy-and-sell-${symbol}-in-Pakistan`,
      `/how-to-buy-and-sell-${symbol}-in-China`,
      `/how-to-buy-and-sell-${symbol}-in-Hong-Kong`,
      `/how-to-buy-and-sell-${symbol}-in-Japan`,
      `/how-to-buy-and-sell-${symbol}-in-South-Korea`,
      `/how-to-buy-and-sell-${symbol}-in-Taiwan`,
      `/how-to-buy-and-sell-${symbol}-in-Cambodia`,
      `/how-to-buy-and-sell-${symbol}-in-Indonesia`,
      `/how-to-buy-and-sell-${symbol}-in-Malaysia`,
      `/how-to-buy-and-sell-${symbol}-in-Philippines`,
      `/how-to-buy-and-sell-${symbol}-in-Singapore`,
      `/how-to-buy-and-sell-${symbol}-in-Thailand`,
      `/how-to-buy-and-sell-${symbol}-in-Vietnam`,
      `/how-to-buy-and-sell-${symbol}-in-Brunei`,
      `/how-to-buy-and-sell-${symbol}-in-Austria`,
      `/how-to-buy-and-sell-${symbol}-in-Croatia`,
      `/how-to-buy-and-sell-${symbol}-in-Czech-Republic`,
      `/how-to-buy-and-sell-${symbol}-in-Germany`,
      `/how-to-buy-and-sell-${symbol}-in-Hungary`,
      `/how-to-buy-and-sell-${symbol}-in-Poland`,
      `/how-to-buy-and-sell-${symbol}-in-Romania`,
      `/how-to-buy-and-sell-${symbol}-in-Slovakia`,
      `/how-to-buy-and-sell-${symbol}-in-Slovenia`,
      `/how-to-buy-and-sell-${symbol}-in-Switzerland`,
      `/how-to-buy-and-sell-${symbol}-in-Belarus`,
      `/how-to-buy-and-sell-${symbol}-in-Ukraine`,
      `/how-to-buy-and-sell-${symbol}-in-Denmark`,
      `/how-to-buy-and-sell-${symbol}-in-Estonia`,
      `/how-to-buy-and-sell-${symbol}-in-Finland`,
      `/how-to-buy-and-sell-${symbol}-in-Iceland`,
      `/how-to-buy-and-sell-${symbol}-in-Lithuania`,
      `/how-to-buy-and-sell-${symbol}-in-Norway`,
      `/how-to-buy-and-sell-${symbol}-in-Sweden`,
      `/how-to-buy-and-sell-${symbol}-in-Bosnia- and-Herzegovina`,
      `/how-to-buy-and-sell-${symbol}-in-Bulgaria`,
      `/how-to-buy-and-sell-${symbol}-in-Greece`,
      `/how-to-buy-and-sell-${symbol}-in-Italy`,
      `/how-to-buy-and-sell-${symbol}-in-Malta`,
      `/how-to-buy-and-sell-${symbol}-in-Macedonia`,
      `/how-to-buy-and-sell-${symbol}-in-Spain`,
      `/how-to-buy-and-sell-${symbol}-in-Portugal`,
      `/how-to-buy-and-sell-${symbol}-in-Belgium`,
      `/how-to-buy-and-sell-${symbol}-in-France`,
      `/how-to-buy-and-sell-${symbol}-in-Ireland`,
      `/how-to-buy-and-sell-${symbol}-in-Luxembourg`,
      `/how-to-buy-and-sell-${symbol}-in-Netherlands`,
      `/how-to-buy-and-sell-${symbol}-in-United-Kingdom`,
      `/how-to-buy-and-sell-${symbol}-in-New-Zealand`,
      `/how-to-buy-and-sell-${symbol}-in-Australia`,
      `/how-to-buy-and-sell-${symbol}-in-Namibia`,
      `/how-to-buy-and-sell-${symbol}-in-Zimbabwe`,
    ] : []
    const links = (
      <ul>
        { routes.map((route, i) => {
          const suffix = route.split(`how-to-buy-and-sell${symbol}-`)[1].split('-').join(' ')
          return <li key={i}><a href={route}>How to Buy and Sell { symbol } { suffix }</a></li>
        })}
      </ul>
    )

    return (
      <Container>
        { country && symbol ? <></> // get inflation rate
          : null
        }
        { suffix && symbol ? <></>
          : null
        }

        { !suffix && !country && symbol ? links
          : null }
      </Container>
    )
  }
}
