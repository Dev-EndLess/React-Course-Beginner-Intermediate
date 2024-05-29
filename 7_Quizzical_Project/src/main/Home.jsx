import React from 'react'

function Home({startGame}) {
  return (
    <div className='home'>
      <h1>Quizzical</h1>
      <p>This is my last project in React Course.</p>
      <button 
      onClick={() => startGame()}>Start Quiz</button>
    </div>
  )
}

export default Home