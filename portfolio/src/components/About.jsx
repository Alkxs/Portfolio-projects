import profile from '../assets/profile.png'


const About = ({}) => {
  return (
    <section name='about'>
      <h2 className='title'>About</h2>
      <div className='container'>
        <div className='w-full flex flex-col md:flex-row justify-center items-center gap-6 px-6 max-w-5xl'>
          <div className='flex justify-center items-center sm:w-full md:w-1/3 '>
            <img className='rounded-2xl w-60 md:w-full' src={profile}></img>
          </div>
          <div className='sm:w-3/4 md:w-2/3 max-h-screen flex flex-col justify-start items-center md:gap-4'>
            <div className='w-full text-left'>👋 Hi! I'm Alex, a Full Stack Web Developer from Italy 🇮🇹</div>
            <div className='w-full text-left'>
              🌐 Experienced in the MERN stack, with a strong focus on Front End Development 🎨
            </div>
            <div className='w-full text-left'>🏔️ Currently living in Zurich, embracing new challenges and eager to contribute to the local tech scene 🌟 </div>
            <div className='w-full text-left'>👨‍💻 Passionate about learning new technologies and keeping up with industry trends 🚀</div>
            <div className='w-full text-left'>🖥️ Proudly designed and developed my own portfolio website from scratch 🔧</div>
            <div className='w-full text-left'>🌍 Skilled at working with diverse teams in multicultural environments 🤝</div>
            <div className='w-full text-left'> 💡 Excited to bring innovative solutions to your web development needs! 💫</div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About