import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {

  return (
    <ThemeProvider>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <ScrollTop />
      <Footer />
    </ThemeProvider>
  )
}

export default App
