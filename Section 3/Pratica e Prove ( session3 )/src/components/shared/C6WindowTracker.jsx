import React, { useState, useEffect } from 'react'

function C6WindowTracker() {

  const [windowWidth, setWindowWith] = useState(window.innerWidth)

  useEffect(() => {
    function watchWidth() {
      console.log('setting up...')
      setWindowWith(window.innerWidth)
    }

    window.addEventListener('resize', watchWidth)

    return function() {
      console.log('cleaning up...')
      window.removeEventListener('resize', watchWidth)
    }
  }, [])

  return (
    <h1>Window width: {windowWidth}</h1>
  )
}

export default C6WindowTracker