import React, { Component } from 'react'
import { Carousel, CarouselControl, CarouselIndicators, CarouselItem, Row, Col } from 'reactstrap'

import items from 'containers/App/items'

export default class Hero extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this._onExiting = this._onExiting.bind(this)
    this._onExited = this._onExited.bind(this)
    this._next = this._next.bind(this)
    this._previous = this._previous.bind(this)
    this._goToIndex = this._goToIndex.bind(this)
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

  render () {
    const { activeIndex } = this.state
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this._onExiting}
          onExited={this._onExited}
          key={item.id}>
          <img src={item.src} alt={item.altText} width="100%" />
        </CarouselItem>
      )
    })

    return (
      <Row>
        <Col className="col-sm-9 col-12 p-5">
          <h1 className="display-3" id="white">Nakamoto Ethereum Wallet</h1>
          <p className="lead" id="white">Nakamoto Ethereum Wallet is a decentralized, secure mobile Ethereum and ERC-20 tokens wallet. Private keys and seeds are encrypted with the password only you can know, and stored on your own device only.</p>
          <div>
            <a href='https://play.google.com/store/apps/details?id=com.nakamoto.free&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' height="100em" /></a>
          </div>
        </Col>
        <Col className="col-sm-3 col-12 pb-5">
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
    )
  }
}