import React, { Component } from 'react'
import { Nav, Collapse, NavItem, NavLink, NavbarToggler } from 'reactstrap'

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
        <a href="/" className="navbar-brand" id="brand">NAKAMOTO</a>
        <NavbarToggler onClick={this._toggle} />
        <button onClick={() => this._toggle()} type="button" className="navbar-toggle" data-toggle="navbar">
          <span className="caret"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Collapse isOpen={navOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#services" id="white" className="text-font">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" id="white" className="text-font">Google Play</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.facebook.com/NakamotoWallet" id="white" className="text-font">Facebook</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </nav>
    )
  }
}
