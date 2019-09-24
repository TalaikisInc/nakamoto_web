import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ReactGA from 'react-ga'

import NavBar from 'components/NavBar'
import GenCode from 'components/GenCode'
import Hero from 'components/Hero'

class App extends Component {
  constructor(props) {
    super(props)
    this._initGA = this._initGA.bind(this)
    this._logPageView = this._logPageView.bind(this)
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

  render() {
    return (
      <div id="conatiner">
        <NavBar />
        <Container>
          <Hero />
        </Container>
        <GenCode />
        <Container>
          <Row>
            <Col className="pt-5">
              <p className="text-center" id="white">&copy; { new Date().getFullYear() } <a href="https://talaikis.com" id="white">Developer</a></p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
