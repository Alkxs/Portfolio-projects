import cardSkills from '../data/cardSkills'


const Skills = () => {
  
  return (
    <section name='skills'>
      <h2 className='title'>Skills</h2>
      <div className='skills-container'>
        {cardSkills.map((skill) => {
          return (
            <div className='skills-content' key={skill.id}>
              <img src={skill.img} alt={skill.title} />
              <h4 className='text-black dark:text-gray-200'>{skill.title}</h4>
              <span className='border' style={{ '--border-color': skill.color }} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Skills

 // <section>
    //   {/* Container */}
    //   <div className='max-w-[1000px] mx-auto p-6 flex flex-col justify-center w-full h-full'>
    //     <div>
    //       <p className='text-4xl font-bold inline border-b-4 border-violet-600'>Skills</p>
    //       <p className='py-4'>These are the technologies I work with</p>
    //     </div>

    //     <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
    //       <div className='shadow-md shadow-black hover:scale-110 duration-500'>
    //         <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
    //         <p className='my-4'>HTML</p>
    //       </div>
    //       <div className='shadow-md shadow-black hover:scale-110 duration-500'>
    //         <img className='w-20 mx-auto' src={CSS} alt='HTML icon' />
    //         <p className='my-4'>CSS</p>
    //       </div>
    //       <div className='shadow-md shadow-black hover:scale-110 duration-500'>
    //         <img className='w-20 mx-auto' src={Tailwind} alt='HTML icon' />
    //         <p className='my-4'>Tailwind</p>
    //       </div>
    //       <div className='shadow-md shadow-black hover:scale-110 duration-500'>
    //         <img className='w-20 mx-auto' src={JavaScript} alt='HTML icon' />
    //         <p className='my-4'>JavaScript</p>
    //       </div>
    //       <div className='shadow-md shadow-black hover:scale-110 duration-500'>
    //         <img className='w-20 mx-auto' src={React} alt='HTML icon' />
    //         <p className='my-4'>React</p>
    //       </div>
    //       <div className='shadow-md shadow-black hover:scale-110 duration-500'>
    //         <img className='w-20 mx-auto' src={Node} alt='HTML icon' />
    //         <p className='my-4'>Node</p>
    //       </div>
    //       <div className='shadow-md shadow-black hover:scale-110 duration-500'>
    //         <img className='w-20 mx-auto' src={MongoDB} alt='HTML icon' />
    //         <p className='my-4'>MongoDB</p>
    //       </div>
    //       <div className='shadow-md shadow-black hover:scale-110 duration-500'>
    //         <img className='w-20 mx-auto' src={Github} alt='HTML icon' />
    //         <p className='my-4'>Github</p>
    //       </div>
    //       {/* <div className='shadow-md shadow-black hover:scale-110 duration-500'>
    //         <img className='w-20 mx-auto' src={Bootstrap} alt="HTML icon" />
    //         <p className='my-4'>Bootstrap</p>
    //       </div> */}
    //       {/* <div className='shadow-md shadow-black hover:scale-110 duration-500'>
    //         <img className='w-20 mx-auto' src={GIT} alt="HTML icon" />
    //         <p className='my-4'>GIT</p>
    //       </div> */}
    //       {/* <div className='shadow-md shadow-black hover:scale-110 duration-500'>
    //         <img className='w-20 mx-auto' src={Express} alt="HTML icon" />
    //         <p className='my-4'>Express</p>
    //       </div> */}
    //       {/* <div className='shadow-md shadow-black hover:scale-110 duration-500'>
    //         <img className='w-20 mx-auto' src={Vite} alt="HTML icon" />
    //         <p className='my-4'>Vite</p>
    //       </div> */}
    //     </div>
    //   </div>
    // </section>