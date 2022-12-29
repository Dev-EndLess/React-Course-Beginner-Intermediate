import React from 'react'
import logo from './l2-logo.jpeg'

function Navbar() {
  return (
    <nav className='nav--bar'>
      <img className='nav--logo' src={logo} alt="" />
    </nav>
  )
}

export default Navbar