const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-gray-300 dark:bg-[#0a192f] text-[#0a192f] dark:text-gray-200  flex justify-center items-center p-4 pt-6'>
      <form className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-violet-600'>contact</p>
          <p className='py-4'>Submit the form below or shoot me an email - myemail@gmail.com</p>
        </div>
        <input
          className='bg-gray-600 dark:bg-[#ccd6f6] text-gray-300 dark:text-black p-2 rounded-md
        '
          type='text'
          placeholder='name'
          name='name'
        />
        <input className='my-4 p-2 bg-gray-600 dark:bg-[#ccd6f6] text-gray-300 dark:text-black rounded-md' type='email' placeholder='email' name='email' />
        <textarea
          className='bg-gray-600 dark:bg-[#ccd6f6] text-gray-300 dark:text-black p-2 rounded-md'
          name='message'
          rows='10'
          placeholder='message'
        ></textarea>
        <button className='text-[#0a192f] dark:text-white border-[#0a192f] dark:border-white border-2 hover:bg-violet-600 hover:border-violet-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md'>
          Let's Collaborate
        </button>
      </form>
    </div>
  )
}
export default Contact