const About = ({darkMode}) => {
  return (
    <div
      name='about'
      className={`w-full h-screen bg-gray-300 dark:bg-[#0a192f] text-[#0a192f] dark:text-gray-200 flex flex-col items-center justify-center
    ${darkMode ? 'dark' : 'light text-[#0a192f]'}`}
    >
      <div className='flex flex-col justify-center items-center w-full h-full max-w-[1000px]'>
        <div className='max-w-[1000] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-violet-600'>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-left text-4xl font-bold'>
            <p>Hi. I'm Alex, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves the lives of those around me. I specialize in creating sofware for clients ranging
              from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at
              your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About