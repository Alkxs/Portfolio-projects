const Contact = () => {
  return (
    <section name='contact' className='bg-gray-200'>
      <h2 className='title'>contact</h2>
      <div className='container'>
        <form className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
          </div>
          <input
            className='bg-white dark:bg-[#ccd6f6] text-gray-300 dark:text-black p-2 rounded-md
        '
            type='text'
            placeholder='name'
            name='name'
          />
          <input className='my-4 p-2 bg-white dark:bg-[#ccd6f6] text-gray-300 dark:text-black rounded-md' type='email' placeholder='email' name='email' />
          <textarea
            className='bg-white dark:bg-[#ccd6f6] text-gray-300 dark:text-black p-2 rounded-md'
            name='message'
            rows='10'
            placeholder='message'
          ></textarea>
          <button className='text-[#0a192f] dark:text-white border-[#0a192f] dark:border-white border-2 hover:bg-violet-600 hover:border-violet-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md'>
            Let's Collaborate
          </button>
        </form>
      </div>
    </section>
  )
}
export default Contact