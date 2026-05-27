import LoadingScreen from './components/LoadingScreen.jsx'
import './index.css'
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import LandingPage from './components/sections/LandingPage.jsx';
import MobileMenu from './components/MobileMenu.jsx';
import LandscapeWork from './components/sections/LandscapeWork.jsx';
import ReelsWork from './components/sections/ReelsWork.jsx';
import StillsWork from './components/sections/StillsWork.jsx';
function App () {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <LandingPage />
    <LandscapeWork />
    <ReelsWork />
    <StillsWork />
    </div>
    </>
    
  )
}

export default App;