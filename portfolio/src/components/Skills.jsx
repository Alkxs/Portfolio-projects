// import Bootstrap from '../assets/skills/bootstrap.png'
// import GIT from '../assets/skills/git.png'
// import Express from '../assets/skills/express.png'
// import Vite from '../assets/skills/vitejs.png'
import HTML from '../assets/skills/html.png'
import CSS from '../assets/skills/css.png'
import Tailwind from '../assets/skills/tailwind.png'
import JavaScript from '../assets/skills/javascript.png'
import React from '../assets/skills/react.png'
import Node from '../assets/skills/node.png'
import MongoDB from '../assets/skills/mongoDB.png'
import Github from '../assets/skills/github.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-gray-300 dark:bg-[#0a192f] text-[#0a192f] dark:text-gray-200'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-6 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-violet-600'>Skills</p>
          <p className='py-4'>These are the technologies I work with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='HTML icon' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt='HTML icon' />
            <p className='my-4'>Tailwind</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt='HTML icon' />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={React} alt='HTML icon' />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt='HTML icon' />
            <p className='my-4'>Node</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={MongoDB} alt='HTML icon' />
            <p className='my-4'>MongoDB</p>
          </div>
          <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Github} alt='HTML icon' />
            <p className='my-4'>Github</p>
          </div>
          {/* <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Bootstrap} alt="HTML icon" />
            <p className='my-4'>Bootstrap</p>
          </div> */}
          {/* <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GIT} alt="HTML icon" />
            <p className='my-4'>GIT</p>
          </div> */}
          {/* <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Express} alt="HTML icon" />
            <p className='my-4'>Express</p>
          </div> */}
          {/* <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Vite} alt="HTML icon" />
            <p className='my-4'>Vite</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default Skills