import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Box = ({ title, icon, text }) => {
  return (
    <div className="col-sm-3 col-12 card">
      <div>
        <FontAwesomeIcon icon={icon} size="3x" id="icon" />
      </div>
      <h3 className="box-h3">{ title }</h3>
      <p>{ text }</p>
    </div>
  )
}

export default Box
