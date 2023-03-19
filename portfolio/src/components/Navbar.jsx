import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'


const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu)
  } 

  return (
    <div className='bg-transparent text-gray-100 fixed w-full h-20 flex items-center justify-between px-8'>
      <div>
        <h1 className=' font-[Birthstone] tracking-wide text-4xl font-light text-violet-600'>{'<Alex Lauri />'}</h1>
        {/* <img src={logo} alt='Logo Image' /> */}
      </div>
      {/* Menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div className='md:hidden cursor-pointer z-10 absolute top-1.4 right-0 m-6' onClick={handleMobileMenuToggle}>
        {showMobileMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
      {/* Mobile menu */}
      <ul className={showMobileMenu ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center opacity-100' : 'hidden'}>
        <li className='py-6 text-4xl '>
          <Link onClick={handleMobileMenuToggle} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl '>
          <Link onClick={handleMobileMenuToggle} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl '>
          <Link onClick={handleMobileMenuToggle} to='home' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl '>
          <Link onClick={handleMobileMenuToggle} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl '>
          <Link onClick={handleMobileMenuToggle} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] hover:p-6 duration-300 bg-[#0A66C2] rounded-r-xl m-2'>
            <a className='flex justify-between items-center w-full text-white' href=''>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] hover:pl-9 duration-300 bg-[#333333] rounded-r-xl m-2'>
            <a className='flex justify-between items-center w-full text-white' href=''>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] hover:pl-9 duration-300 bg-[#00ACEE] rounded-r-xl m-2'>
            <a className='flex justify-between items-center w-full text-white' href=''>
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] hover:pl-10 duration-300 bg-[#DB4437] rounded-r-xl m-2'>
            <a className='flex justify-between items-center w-full text-white' href=''>
              Gmail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-1px] hover:pl-14 duration-300 bg-[#15c915aa] rounded-r-xl m-2'>
            <a className='flex justify-between items-center w-full text-white' href=''>
              CV <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
