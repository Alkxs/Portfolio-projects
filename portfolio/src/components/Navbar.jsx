import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo.svg'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu)
  } 

  return (
    <div className='bg-[#0a192f] text-gray-100 fixed w-full h-20 flex items-center justify-between px-4'>
      <div className='mt-4' style={{ width: '10rem' }}>
        {/* <h1 className='font-[railway] text-sm font-light w-24'>{'<Alex Lauri />'}</h1> */}
        <img src={logo} alt='Logo Image' />
      </div>
      {/* Menu */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div className='md:hidden cursor-pointer z-10 absolute top-0 right-0 m-6' onClick={handleMobileMenuToggle}>
        {showMobileMenu ? <FaTimes/> : <FaBars/>}
      </div>
      {/* Mobile menu */}
      <ul className={showMobileMenu ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center opacity-95' : 'hidden'}>
        <li className='py-6 text-4xl '>Home</li>
        <li className='py-6 text-4xl '>About</li>
        <li className='py-6 text-4xl '>Projects</li>
        <li className='py-6 text-4xl '>Skills</li>
        <li className='py-6 text-4xl '>Contact</li>
      </ul>
      {/* Social Icons */}
      <div></div>
    </div>
  )
}
export default Navbar
