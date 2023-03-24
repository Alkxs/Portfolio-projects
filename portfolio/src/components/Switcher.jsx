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
    <div className='transform scale-75 md:scale-100'>
      <DarkModeSwitch checked={darkMode} onChange={toggleDarkMode} size={40} moonColor='black' sunColor='white' />
    </div>
  )
}
export default Switcher