import './App.css';
import Quizzical from './main/Quizzical';
import Home from './main/Home';
import { useState } from 'react';

function App() {

  const [start, setStart] = useState(false)

  function startGame() {
    setStart(prevState => !prevState)
  }

  return (
    <div className="app">
      <Quizzical/>
      {/* {start ?
      <Quizzical/> : <Home 
      startGame={startGame}/>} */}
    </div>
  );
}

export default App;
