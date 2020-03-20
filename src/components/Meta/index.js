import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title }) => {
  const fullTitle = `${title} | Nakamoto Wallet`
  return (
    <Helmet>
      <title>{ fullTitle }</title>
    </Helmet>
  )
}

export default Meta
