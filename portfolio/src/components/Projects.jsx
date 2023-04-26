import project1 from '../../public/project-images/therafit.png'
import project2 from '../../public/project-images/portfolio.png'
import project3 from '../../public/project-images/quizzle.png'
import { a } from 'react-scroll'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si'

const Projects = () => {
  return (
    <section name='projects'>
      <h2 className='title'>Projects</h2>
      <div className='container'>
        <div className='w-full max-w-6xl flex flex-col justify-center items-center gap-20'>
          {/* Project 1 */}
          <div className='project-card flex justify-center items-center mx-auto h-[500px] transition-shadow duration-300 cursor-pointer bg-white max-w-6xl rounded-2xl shadow-2xl hover:shadow-2xl hover:shadow-black dark:hover:shadow-white'>
            <div className='flex justify-center items-center h-full w-2/3 rounded-l-2xl'>
              <img className='rounded-l-2xl h-full w-full object-cover border-r border-grey-100 dark:border dark:border-cyan-500' src={project1}></img>
            </div>

            <div className='w-1/3 dark:text-gray-200 dark:bg-dark-main flex flex-col justify-around items-center h-full px-4 rounded-r-2xl dark:border dark:border-cyan-500'>
              <h3 className='text-4xl font-bold mb-2'>TheraFit</h3>
              <div className='flex justify-center items-center gap-4'>
                <SiHtml5 size={30} className='hover:scale-125 duration-300 text-[#E44D26]' />
                <SiCss3 size={30} className='hover:scale-125 duration-300 text-[#1572B6]' />
                <SiJavascript size={30} className='hover:scale-125 duration-300 text-[#F7DF1E]' />
                <SiReact size={30} className='hover:scale-125 duration-300 text-[#61DAFB]' />
                <SiNodedotjs size={30} className='hover:scale-125 duration-300 text-[#68A063]' />
                <SiExpress size={30} className='hover:scale-125 duration-300 text-[#000000 ]' />
                <SiMongodb size={30} className='hover:scale-125 duration-300 text-[#4DB33D]' />
              </div>
              <p className='text-lg'>A customizable web app that allows users to create and track their workouts and exercises.</p>

              <div className='buttons-container space-y-8'>
                <div className='flex w-full items-center justify-center'>
                  <a href='https://github.com/Alkxs/TheraFit' target='_blank'>
                    <button className='text-[#0a192f] dark:text-white  border-[#0a192f] dark:border-white border-2 px-3 py-2 hover:text-cyan-500 hover:border-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 rounded-md hover:scale-105 duration-300'>
                      Source Code
                    </button>
                  </a>
                </div>

                <div className='flex justify-center items-center w-full gap-10 px-20'>
                  <a href='https://demo.com/' target='_blank' className='flex-grow flex-1'>
                    <button className='text-[#0a192f] dark:text-white  border-[#0a192f] dark:border-white border-2 px-3 py-2  hover:text-cyan-500 hover:border-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 rounded-md hover:scale-105 duration-300'>
                      Demo
                    </button>
                  </a>
                  <a href='https://demo.com/' target='_blank' className='flex-grow flex-1'>
                    <button className='text-[#0a192f] dark:text-white  border-[#0a192f] dark:border-white border-2 px-4 py-2 hover:text-cyan-500 hover:border-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 rounded-md hover:scale-105 duration-300'>
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className='project-card flex justify-center items-center mx-auto h-[500px] transition-shadow duration-300 rounded-2xl cursor-pointer bg-white max-w-6xl shadow-2xl hover:shadow-2xl hover:shadow-black dark:hover:shadow-white'>
            <div className=' w-2/3 flex justify-center items-center h-full rounded-l-2xl'>
              <img className='h-full w-full object-fill rounded-l-2xl dark:border dark:border-cyan-500' src={project2}></img>
            </div>

            <div className='w-1/3 dark:text-gray-200 dark:bg-dark-main flex flex-col justify-around items-center h-full px-4 dark:border dark:border-cyan-500 rounded-r-2xl'>
              <h3 className='text-4xl font-bold mb-2'> Portfolio</h3>
              <div className='flex justify-center items-center gap-4'>
                <SiHtml5 size={30} className='hover:scale-125 duration-300 text-[#E44D26]' />
                <SiCss3 size={30} className='hover:scale-125 duration-300 text-[#1572B6]' />
                <SiTailwindcss size={30} className='hover:scale-125 duration-300 text-[#06B6D4]' />
                <SiJavascript size={30} className='hover:scale-125 duration-300 text-[#F7DF1E]' />
                <SiReact size={30} className='hover:scale-125 duration-300 text-[#61DAFB]' />
              </div>
              <p className='text-lg'>My portfolio project built from scratch using the latest technologies and modern libraries.</p>

              <div className='buttons-container space-y-8'>
                <div className='flex w-full items-center justify-center'>
                  <a href='https://github.com/Alkxs/Portfolio-projects/tree/main/portfolio' target='_blank'>
                    <button className='text-[#0a192f] dark:text-white  border-[#0a192f] dark:border-white border-2 px-3 py-2 hover:text-cyan-500 hover:border-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 rounded-md hover:scale-105 duration-300'>
                      Source Code
                    </button>
                  </a>
                </div>

                <div className='flex justify-center items-center w-full gap-10 px-20'>
                  <a href='https://demo.com/' target='_blank' className='flex-grow flex-1'>
                    <button className='text-[#0a192f] dark:text-white  border-[#0a192f] dark:border-white border-2 px-3 py-2  hover:text-cyan-500 hover:border-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 rounded-md hover:scale-105 duration-300'>
                      Demo
                    </button>
                  </a>
                  <a href='https://demo.com/' target='_blank' className='flex-grow flex-1'>
                    <button className='text-[#0a192f] dark:text-white  border-[#0a192f] dark:border-white border-2 px-4 py-2 hover:text-cyan-500 hover:border-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 rounded-md hover:scale-105 duration-300'>
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className='project-card flex justify-center items-center mx-auto h-[500px] transition-shadow duration-300 cursor-pointer bg-white max-w-6xl rounded-2xl shadow-2xl hover:shadow-2xl hover:shadow-black dark:hover:shadow-white'>
            <div className='flex justify-center items-center h-full w-2/3 rounded-l-2xl'>
              <img className='rounded-l-2xl h-full w-full object-cover border-r border-grey-100 dark:border dark:border-cyan-500' src={project3}></img>
            </div>

            <div className='w-1/3 dark:text-gray-200 dark:bg-dark-main flex flex-col justify-around items-center h-full px-4 rounded-r-2xl dark:border dark:border-cyan-500'>
              <h3 className='text-4xl font-bold mb-2'>Quizzle</h3>
              <div className='flex justify-center items-center gap-4'>
                <SiHtml5 size={30} className='hover:scale-125 duration-300 text-[#E44D26]' />
                <SiCss3 size={30} className='hover:scale-125 duration-300 text-[#1572B6]' />
                <SiJavascript size={30} className='hover:scale-125 duration-300 text-[#F7DF1E]' />
                <SiReact size={30} className='hover:scale-125 duration-300 text-[#61DAFB]' />
              </div>
              <p className='text-lg'>An engaging quiz app offering a personalized knowledge-testing challenge</p>

              <div className='buttons-container space-y-8'>
                <div className='flex w-full items-center justify-center'>
                  <a href='https://github.com/Alkxs/TheraFit' target='_blank'>
                    <button className='text-[#0a192f] dark:text-white  border-[#0a192f] dark:border-white border-2 px-3 py-2 hover:text-cyan-500 hover:border-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 rounded-md hover:scale-105 duration-300'>
                      Source Code
                    </button>
                  </a>
                </div>

                <div className='flex justify-center items-center w-full gap-10 px-20'>
                  <a href='https://demo.com/' target='_blank' className='flex-grow flex-1'>
                    <button className='text-[#0a192f] dark:text-white  border-[#0a192f] dark:border-white border-2 px-3 py-2  hover:text-cyan-500 hover:border-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 rounded-md hover:scale-105 duration-300'>
                      Demo
                    </button>
                  </a>
                  <a href='https://demo.com/' target='_blank' className='flex-grow flex-1'>
                    <button className='text-[#0a192f] dark:text-white  border-[#0a192f] dark:border-white border-2 px-4 py-2 hover:text-cyan-500 hover:border-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 rounded-md hover:scale-105 duration-300'>
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects