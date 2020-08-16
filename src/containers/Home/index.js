import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'

import NavBar from 'components/NavBar'
import GenCode from 'components/GenCode'
import Hero from 'components/Hero'
import WhiteLabel from 'components/WhiteLabel'
import Features from 'components/Features'
import Symbols from 'components/Symbols'
import Footer from 'components/Footer'

class Home extends Component {
  /*
  componentDidMount () {
    if (process.env.NODE_ENV === 'production') {
      if (!window.GA_INITIALIZED) {
        this._initGA()
        window.GA_INITIALIZED = true
      }
      this._logPageView()
    }
  }
  */

  render () {
    return (
      <div id="container">
        <NavBar />
        <Container>
          <Hero />
        </Container>
        <GenCode />
        <Features />
        <WhiteLabel />
        <Container>
          <Row>
            <Symbols />
          </Row>
          <Footer />
        </Container>
      </div>
    )
  }
}

export default Home
