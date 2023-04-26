import profile from '../assets/profile.png'


const About = () => {
  return (
    <section name='about'>
      <h2 className='title'>About</h2>
      <div className='container'>
        <div className='about-card bg-white w-full flex flex-col lg:flex-row justify-center items-center py-16 gap-12 xl:gap-10 lg:p-10 xl:py-16 sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-6xl border rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-black dark:border-cyan-500 dark:bg-dark-main dark:hover:shadow-white  '>
          <div className='flex justify-center items-center lg:w-2/5'>
            <img className='rounded-2xl h-full w-4/5 lg:w-full' src={profile}></img>
          </div>
          <div className='lg:w-3/5 w-full dark:text-gray-200 flex flex-col justify-start items-center px-12 xl:px-0 xl:pl-10 md:gap-6 xl:gap-8'>
            <div className='w-full text-left flex justify-start'>
              <div>👋</div>
              <div className='pl-4 font-normal'>Hi! I am Alex, a Full Stack Web Developer from Italy </div>
            </div>
            <div className='w-full text-left flex justify-start'>
              <div>🌐</div>
              <div className='pl-4 font-normal'>Proficient in the MERN stack, with a focus on Front End Development</div>
            </div>
            <div className='w-full text-left flex justify-start'>
              <div>🏔️</div>
              <div className='pl-4 font-normal'>Currently living in Zurich, eager to contribute to the local tech scene</div>
            </div>
            <div className='w-full text-left flex justify-start'>
              <div>👨‍💻</div>
              <div className='pl-4 font-normal'>Passionate about technologies and keeping up with industry trends</div>
            </div>
            <div className='w-full text-left flex justify-start'>
              <div>🖥️</div>
              <div className='pl-4 font-normal'>Proudly designed and developed my own portfolio from scratch</div>
            </div>
            <div className='w-full text-left flex justify-start'>
              <div>🌍</div>
              <div className='pl-4 font-normal'>Skilled at working with diverse teams in multicultural environments</div>
            </div>
            <div className='w-full text-left flex justify-start'>
              <div>💡</div>
              <div className='pl-4 font-normal'>Excited to bring creative solutions to your web development needs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About