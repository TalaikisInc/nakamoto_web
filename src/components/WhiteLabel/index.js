import React from 'react'
import { Row, Col } from 'reactstrap'

const WhiteLabel = () => (
  <div  id="main">
    <a name="services" />
    <div className="pt-5 pb-5 mt-5 mt-lg-0">
      <h1 className="display-4 text-center pt-5" id="white">Services</h1>
      <Row className="m-0">
        <Col className="col-sm-3 col-12"></Col>
        <Col className="col-sm-6 col-12 p-5">
          <p className="lead" id="white">
            Full range of blockchain solutions for businesses, from white labeling <a href="https://nakamotowallet.org/" id="white">Ethereum Wallet app</a> along with integrated dApps and contracts to any scaling solutions.
          </p>
          <h3 id="white">
            Basic White Label Benefits for Businesses
          </h3>
          <ul>
            <li id="white">Analytics (know what your users really want)</li>
            <li id="white">Internationalization (reach any country you want)</li>
            <li id="white">Own name, logo</li>
            <li id="white">No servers to run</li>
            <li id="white">High security</li>
          </ul>
          <h3 id="white">
            Advanced White Label
          </h3>
          <ul>
            <li id="white">Own design (look and feel like your brand)</li>
            <li id="white">Integrated mobile and/ or web dApp(s) (do the business via blockchain contracts)</li>
            <li id="white">Custom and standard contracts (contracts connected to our web or mobile dApp)</li>
            <li id="white">Proxy APIs between the app(s) and blockchain (better performance)</li>
            <li id="white">Private blockchain</li>
          </ul>
        </Col>
        <Col className="col-sm-3 col-12"></Col>
      </Row>
    </div>
  </div>
)

export default WhiteLabel
