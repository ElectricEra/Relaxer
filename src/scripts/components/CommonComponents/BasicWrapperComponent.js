import React from 'react'

export const BasicWrapper = (props) => {
  return (
    <div className="row">
      <div className="col s0 l2"></div>
      <div className="col s12 l8">
        {props.children}
      </div>
      <div className="col s0 l2"></div>
    </div>
  )
}
