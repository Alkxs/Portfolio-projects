import profile from '../assets/profile.png'


const About = () => {
  return (
    <section name='about'>
      <h2 className='title'>About</h2>
      <div className='container'>
        <div className='about-card bg-white w-full flex flex-col md:flex-row justify-center items-center gap-10 p-10 py-16 max-w-6xl border rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-black dark:border-cyan-500 dark:bg-dark-main dark:hover:shadow-white  '>
          <div className='flex justify-center items-center sm:w-full md:w-2/5'>
            <img className='rounded-2xl h-full md:w-full' src={profile}></img>
          </div>
          <div className='sm:w-3/4 md:w-3/5 dark:text-gray-200 flex flex-col justify-start items-center pl-10 md:gap-8'>
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