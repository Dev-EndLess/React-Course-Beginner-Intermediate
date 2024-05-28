import React from 'react'
import logo from './images/logo.jpg'

function Navbar() {
  return (
    <nav>
      <img 
      className="nav--logo" 
      src={logo} 
      alt="" />
      <h1>AirBnB Project going Wrong</h1>
    </nav>
  )
}

export default Navbar