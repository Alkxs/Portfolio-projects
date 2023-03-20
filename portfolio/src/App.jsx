import { useState } from 'react'

import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
// import Footer from './components/Footer'

function App() {
  // const [darkMode, setDarkMode] = useState(true)

  // function toggleDarkMode() {
  //   setDarkMode((prevDarkMode) => !prevDarkMode)
  // }

  return (
    <>
      <Navbar/>
      <Home /> 
      <About />
      <Projects />
      <Skills />
      <Contact />

      {/* 
        <Footer /> */}
    </>
  )
}

export default App
