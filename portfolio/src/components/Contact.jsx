const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-[#0a192f] flex justify-center items-center p-4 pt-6'>
      <form className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-violet-600 text-gray-100'>contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - myemail@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2
        ' type='text' placeholder='name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='message'></textarea>
        <button className="text-white border-2 hover:bg-violet-600 hover:border-violet-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
      </form>
    </div>
  )
}
export default Contact