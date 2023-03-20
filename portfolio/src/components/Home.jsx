import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <>
      <div name='home' className='bg-gray-300 dark:bg-[#0a192f] w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-violet-600'>Hi there, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#0a192f] dark:text-white'>Alex Lauri</h1>
          <h2 className='text-4xl sm:text-6xl font-bold text-gray-500 dark:text-gray-600'>I am a Full Stack Developer</h2>
          <p className='text-[#8892b0] py-4 max-w-700px'>
            Expertly designing and developing custom web applications that solve complex problems and enhance user experiences.
          </p>
          <div>
            <button className='text-[#0a192f] dark:text-white group border-[#0a192f] dark:border-white border-2 px-6 py-3 my-2 flex items-center hover:bg-violet-600 dark:hover:border-violet-600 rounded-md'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-4' />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home