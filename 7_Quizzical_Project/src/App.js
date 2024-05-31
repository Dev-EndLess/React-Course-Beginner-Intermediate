import './App.css';
import Home from './main/Home';
import Quizzical from './main/Quizzical';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [start, setStart] = useState(false);

  function startGame() {
    setStart(true);
  }

  function restartGame() {
    setStart(false);
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={start ? <Navigate to="/quizzical" /> : <Home startGame={startGame} />} />
          <Route path="/quizzical" element={<Quizzical onPlayAgain={restartGame} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
