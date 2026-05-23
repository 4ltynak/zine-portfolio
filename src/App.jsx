import LandingPage from './components/sections/LandingPage.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'
import './index.css'
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'

function App () {
  const [isLoaded, setIsLoaded] = useState(false);


  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      </div>
    </>
    
  )
}

export default App;