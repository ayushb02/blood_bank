export const NewForm = () => {
  return (
    <form className='justify-center h-screen pt-16 max-w-sm mx-auto'>
      <div className='mb-5  '>
        <label
          for='email'
          className='flex justify-center  mb-2 text-sm font-medium text-gray-900 dark:text-black'
        >
          Patient Name
        </label>
        <input
          type='email'
          id='email'
          className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
          placeholder='Name'
          required
        />
      </div>
      <label
        for='countries'
        class='flex justify-center  mb-2 text-sm font-medium text-gray-900 dark:text-black'
      >
        Blood Types
      </label>
      <select
        id='countries'
        class='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
      >
        <option>A+</option>
        <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>O+</option>
        <option>O-</option>
        <option>AB+</option>
        <option>AB-</option>
      </select>

      <div className=' mt-5 justify-center flex items-start mb-5'>
        <div className='flex items-center h-5'>
          <input
            id='terms'
            type='checkbox'
            value=''
            className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-bl dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-black dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
            required
          />
        </div>
        <label
          for='terms'
          className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          I agree with the{' '}
          <a
            href='#'
            className='text-blue-600 hover:underline dark:text-gray-900'
          >
            terms and conditions
          </a>
        </label>
      </div>
      <button
        type='submit'
        className=' m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Donate Blood
      </button>
      <button
        type='submit'
        className=' m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Receive Blood
      </button>
    </form>
  )
}
