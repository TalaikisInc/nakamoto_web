import React from 'react'

import { feats } from 'utils'
import Box from 'components/Box'

const Features = () => (
  <section className="features">
    <h1 className="display-4 text-center p-5" id="white">Why Nakamoto Ethereum Wallet?</h1>
    <div className="row cards">
      <div className="col-sm-1 col-12"></div>
      { feats.slice(0, 3).map((f) => {
        return (
          <Box key={f.id} text={f.text} icon={f.icon} title={f.title} />
        )
      }) }
      <div className="col-sm-1 col-12"></div>
    </div>
    <div className="row cards">
      <div className="col-sm-1 col-12"></div>
      { feats.slice(3, 6).map((f) => {
        return (
          <Box key={f.id} text={f.text} icon={f.icon} title={f.title} />
        )
      }) }
      <div className="col-sm-1 col-12"></div>
    </div>
    <div className="button-line">
      <a href="./code.html" className="button">Start Coding.</a>
    </div>
  </section>
)

export default Features
