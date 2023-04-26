import cardSkills from '../data/cardSkills'


const Skills = () => {
  
  return (
    <section name='skills'>
      <h2 className='title'>Skills</h2>
      <div className='container'>
        <div className='skills-card bg-white dark:bg-dark-main w-full justify-center items-center rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-black border dark:hover:shadow-white border-gray-200 dark:border-cyan-500'>
          <div className='skills-container grid gap-8 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 pt-14 '>
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
        </div>
      </div>
    </section>
  )
}
export default Skills

 