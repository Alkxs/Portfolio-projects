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
    <div 
    // className='md:bg-gray-400 md:hover:border md:hover:border-black  md:dark:bg-gray-700 md:hover:dark:border-white hover:scale-105 md:p-2 flex items-center justify-center shadow-sm rounded-xl cursor-pointer transition duration-200'
    >
      <DarkModeSwitch 
      className=''
      checked={darkMode} 
      onChange={toggleDarkMode} 
      size={30} 
      moonColor='black' 
      sunColor='white' />
    </div>
  )
}
export default Switcher