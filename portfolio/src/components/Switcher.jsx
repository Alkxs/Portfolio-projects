import {useState} from 'react'
import useToggleDark from '../hooks/useToggleDark'
import {DarkModeSwitch} from 'react-toggle-dark-mode'

const Switcher = () => {
  const [colorTheme, setTheme] = useToggleDark()
  const [darkMode, setDarkMode] = useState(colorTheme === 'dark' ? true : false)

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme)
    setDarkMode(checked)
  }

  return (
      <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} 
      size={20} moonColor='black' sunColor='white' />
  )
}
export default Switcher