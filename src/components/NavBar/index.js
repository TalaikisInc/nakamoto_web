import React, { Component } from 'react'
import { Nav, Collapse, NavItem, NavLink } from 'reactstrap'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false
    }
    this._toggle = this._toggle.bind(this)
  }

  _toggle () {
    this.setState((prevState) => ({
      navOpen: !prevState.navOpen
    }))
  }

  render () {
    const { navOpen } = this.state

    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse">
        <a href="/" className="navbar-brand" id="white">NAKAMOTO</a>
        <button onClick={() => this._toggle()} type="button" className="navbar-toggle">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Collapse isOpen={navOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/" id="white">Google Play</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.facebook.com/NakamotoWallet" id="white">Facebook</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </nav>
    )
  }
}
