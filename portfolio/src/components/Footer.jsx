import footerBackground from '../../public/footerBackground.png'
import {FaGithub, FaLinkedin, FaTwitter, FaEnvelope} from 'react-icons/fa'

const Footer = () => {
  return (
    <div name='footer' className='h-20' style={{ backgroundImage: `url(${footerBackground})` }}>
      <div className='w-full h-full flex justify-around items-center'>
        <h3>&copy; {new Date().getFullYear()} Alex Lauri </h3>
        <div className='flex'>
          <a href='https://github.com/Alkxs' target='_blank' rel='noopener noreferrer' className='github px-2 sm:px-5 text-black'>
            <FaGithub className='hover:text-[#333333]' size={30} />
          </a>
          <a href='https://www.linkedin.com/in/alexlauri/' target='_blank' rel='noopener noreferrer' className='linkedin px-2 sm:px-5 text-black'>
            <FaLinkedin className='hover:text-[#006599]' size={30} />
          </a>
          <a href='https://twitter.com/AlksLau' target='_blank' rel='noopener noreferrer' className='twitter px-2 sm:px-5 text-black'>
            <FaTwitter className='hover:text-[#2daae4]' size={30} />
          </a>
          <a href='mailto:alex.mav.80@gmail.com' target='_blank' rel='noopener noreferrer' className='gmail px-2 sm:px-5 text-black'>
            <FaEnvelope className='hover:text-[#f14436]' size={30} />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Footer
