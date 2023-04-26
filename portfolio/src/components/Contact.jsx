const Contact = () => {
  return (
    <section name='contact'>
      <h2 className='title'>contact</h2>
      <div className='container'>
        <form className='form-card bg-gray-100 dark:bg-[#112b52] flex flex-col max-w-2xl w-full rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-black border border-gray-200 dark:border-cyan-500 p-10'>
          <div className='pb-8'></div>
          <input
            className='border dark:border-cyan-500  text-black dark:bg-dark-main p-2 rounded-md
        '
            type='text'
            placeholder='name'
            name='name'
          />
          <input className='my-4 p-2 dark:bg-dark-main border dark:border-cyan-500 text-gray-300 rounded-md' type='email' placeholder='email' name='email' />
          <textarea className='border dark:border-cyan-500 dark:bg-dark-main text-gray-300 p-2 rounded-md' name='message' rows='10' placeholder='message'></textarea>
          <button className='text-[#0a192f] dark:bg-dark-main dark:text-white border border-[#0a192f] hover:border-cyan-500 dark:border dark:border-cyan-500 hover:text-white hover:bg-cyan-500 dark:hover:border-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 duration-300 px-6 py-3 mt-20 mx-auto flex items-center rounded-md'>
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
export default Contact