import React, { Component } from 'react'
import { Container } from 'reactstrap'

import CustomRouter from 'containers/CustomRouter'
import HowToBuySell from 'containers/HowToBuySell'

export default class HowToSell extends Component {
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

    if (path.includes('how-to-buy-and-sell')) {
      return <HowToBuySell />
    }

    if (path.includes('how-to-sell')) {
      const s = path.split('how-to-sell-')
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
      `/how-to-sell-${symbol}-and-get-cash`,
      `/how-to-sell-${symbol}-and-make-money`
    ] : []
    const links = (
      <ul>
        { routes.map((route, i) => {
          const suffix = route.split(`how-to-sell-${symbol}-`)[1].split('-').join(' ')
          return <li key={i}><a href={route}>How to Sell { symbol } { suffix }</a></li>
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
