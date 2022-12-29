import React from 'react'

function Stars(props) {
  const starIcon = props.star ? props.red : props.black

  return (
    <div className="card--info">
    <img src={starIcon}
    className="card--favorite"
    onClick={() => props.handleClick()}
    />
  </div>
  )
}

export default Stars