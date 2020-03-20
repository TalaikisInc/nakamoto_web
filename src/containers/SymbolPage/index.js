import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'reactstrap'
import YouTube from 'react-youtube'

import { symbols } from 'utils/changely'
import Meta from 'components/Meta'
import Footer from 'components/Footer'
const opts = {
  width: '100%',
  playerVars: {
    autoplay: 0
  }
}

export default class SymbolPage extends Component {
  constructor (props) {
    super(props)
    this.state = { symbol: false, slug: false, data: false }
    this._onReady = this._onReady.bind(this)
  }

  componentDidMount () {
    const { history } = this.props
    const path = history.location.pathname
    const slug = path.split('/')[2]
    const symbol = slug.split('-').join(' ')
    const data = symbols.filter((e) => e.name === symbol)[0]
    this.setState({ slug, symbol, data })
  }

  _onReady (e) {
    e.target.pauseVideo()
  }

  render () {
    const { symbol, slug, data } = this.state

    return (
      data && symbol && slug ? <Container>
        <Meta title={symbol} />
        <Row className="pt-5 pb-5">
          <Col className="col-sm-2 col-12"></Col>
          <Col className="col-sm-3 col-12">
            { data.noIcon ? null :
              <img src={require(`cryptocurrency-icons/svg/color/${data.symbol.toLowerCase()}.svg`)} alt={symbol} width="250px" />
            }
          </Col>
          <Col className="col-sm-6 col-12 pt-5">
            <h1 className="display-3">{ symbol }</h1>
            <p className="lead">{ data.description }</p>
            <YouTube
              videoId={data.video}
              opts={opts}
              onReady={this._onReady} />
            <div className="pt-5"><a href={`/how-to-buy-${slug}`} title={`Buy ${symbol}`}>{`How to buy ${symbol}`}</a></div>
            <div><a href={`/how-to-sell-${slug}`} title={`Sell ${symbol}`}>{`How to sell ${symbol}`}</a></div>
            <div><a href={`/how-to-buy-and-sell-${slug}`} title={`Trade ${symbol}`}>{`Trade ${symbol}`}</a></div>
          </Col>
          <Col className="col-sm-1 col-12"></Col>
        </Row>
        <Footer black />
      </Container> : null
    )
  }
}
