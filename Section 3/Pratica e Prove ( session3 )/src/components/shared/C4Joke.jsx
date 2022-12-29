import React, { useState } from 'react'

function C4Joke(props) {

  const [show, setShow] = useState(false)

  function mostraPunchline() {
    setShow(prevState => !prevState)
  }

  return (
    <div>
      <h3>{props.setup}</h3>
      { show && <p>{props.punchline}</p>}
      <button onClick={mostraPunchline}>{show ? 'Hide' : 'Show'} Punchline</button>
    </div>
  )
}

export default C4Joke