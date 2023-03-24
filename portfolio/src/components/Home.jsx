import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <>
      <section name='home' className='bg-gray-200 h-screen'>
        {/* Container */}
        <div className='container'>
          <p className='text-purple-600 text-2xl tracking-wide'>Hi There, I am </p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#0a192f] dark:text-white'>Alex Lauri</h1>
          <h2 className='text-3xl sm:text-4xl font-light text-gray-500 dark:text-gray-400'>
            <Typewriter
              options={{
                strings: ['Front-End Developer', 'Full-stack Developer'],
                autoStart: true,
                loop: true,
                skipAddStyles: true,
              }}
            />
          </h2>
          <div>
            <Link to='projects' smooth={true} duration={500}>
            <button className='text-[#0a192f] dark:text-white group border-[#0a192f] dark:border-white border-2 px-6 py-3 my-2 flex items-center hover:bg-violet-600 dark:hover:border-violet-600 rounded-md'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-4' />
              </span>
            </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home