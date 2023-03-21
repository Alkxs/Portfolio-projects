import profile from '../assets/profile.png'


const About = ({}) => {
  return (
    <section name='about' className='w-full h-screen bg-gray-100 dark:bg-[#0a192f] text-[#0a192f] dark:text-gray-200 flex flex-col items-center justify-center'>
      {/* Container */}
      <div className='flex flex-col justify-start items-center mx-auto px-8 max-w-4xl'>
        <div className='w-full h-auto'>
          <p className='text-4xl font-bold inline border-b-4 border-violet-600'>About</p>
        </div>

        <div className='max-w-2xl w-full flex justify-center items-center'>
          <div className='flex justify-center items-center w-1/2 '>
            <img className='rounded-2xl w-3/4' src={profile}></img>
          </div>
          <div className='w-1/2 max-h-screen grid grid-rows-8 gap-4'>
            <div>I am Alex Lauri</div>
            <div>
              I am a fullstack web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web
              animations.
            </div>
            <div>Full Name   : Alex Lauri</div>
            <div>Age         : 32 Years </div>
            <div>Nationality : Italian </div>
            <div>Languages   : Italian, English, French</div>
            <div> Address    : 22 Georg-Kempf-Strasse, Zurich, Switzerland</div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About