import React, { Component } from 'react'
import ReactGA from 'react-ga'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from 'containers/Home'
import AffiliatePrograms from 'containers/AffiliatePrograms'
import Exchanges from 'containers/Exchanges'
import Notfound from 'containers/Notfound'
import CustomRouter from 'containers/CustomRouter'
import SymbolPage from 'containers/SymbolPage'

class App extends Component {
  constructor (props) {
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

  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Bitcoin-cryptocurrency-affiliate-programs" component={AffiliatePrograms} />
          <Route exact path="/exchanges" component={Exchanges} />
          <Route path="/cryptocurrencies/:symbol" component={SymbolPage} />
          <Route path="/:customPath" component={CustomRouter} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    )
  }
}

export default App
