import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Particles from './components/Particles'
// import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = React.useState(null)

  return (
    <>
      <Particles />
      <Navbar />
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
