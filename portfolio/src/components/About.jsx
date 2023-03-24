import profile from '../assets/profile.png'


const About = ({}) => {
  return (
    <section name='about'>
      <h2 className='title'>About</h2>
      <div className='container'>
        <div className='max-w-4xl w-full flex flex-col md:flex-row justify-center items-center gap-4 px-6'>
          <div className='flex justify-center items-center sm:w-full md:w-1/2 '>
            <img className='rounded-2xl sm:w-60 md:w-3/4' src={profile}></img>
          </div>
          <div className='sm:w-3/4 md:w-1/2 max-h-screen grid grid-rows-8 md:gap-4'>
            <div>I am Alex Lauri</div>
            <div className='pb-4'>
              I am a fullstack web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web
              animations.
            </div>
            <div>Full Name : Alex Lauri</div>
            <div>Age : 32 Years </div>
            <div>Nationality : Italian </div>
            <div>Languages : Italian, English, French</div>
            <div> Address : 22 Georg-Kempf-Strasse, Zurich, Switzerland</div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About