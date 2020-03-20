import React from 'react'
import { Row, Col } from 'reactstrap'

const Footer = ({ black }) => (
  <Row>
    <Col className="pt-5">
      { black ?
        <p className="text-center">&copy; { new Date().getFullYear() } <a href="https://talaikis.com">Blockchain Developer</a></p>
        : 
        <p className="text-center" id="white">&copy; { new Date().getFullYear() } <a href="https://talaikis.com" id="white">Blockchain Developer</a></p>
      }
    </Col>
  </Row>
)

export default Footer
