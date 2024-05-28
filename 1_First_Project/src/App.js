import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import './Style.css'

function App() {

  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return <div>
  <Header 
  darkMode={darkMode}
  toggle={toggleDarkMode}
  />
  <MainContent
  darkMode={darkMode}
  />
  <Footer 
  darkMode={darkMode}
  />
  </div>
}

export default App

