import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom"

export const NewForm = () => {
  const navigate = useNavigate();
  const [bloodType , setBloodType] = useState("");

  return (
    <div className='justify-center h-screen pt-16 max-w-sm mx-auto'>
      <div className='mb-5  '>
        <label
          className='flex justify-left  mb-2 text-sm font-medium text-gray-900 dark:text-black'
        >
          Patient Name
        </label>
        <input
          type='text'
          id='email'
          className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
          placeholder='Name'
          required
        />
      </div>
      <label
        className='flex justify-left  mb-2 text-sm font-medium text-gray-900 dark:text-black'
      >
        Blood Types
      </label>
      <select
      onChange={(e)=>{
        const selectedBloodType = e.target.value;
        setBloodType(selectedBloodType);
      }}
       
        className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
      >
        <option value="A_positive">A+</option>
        <option value="A_negative">A-</option>
        <option value="B_positive">B+</option>
        <option value="B_negative">B-</option>
        <option value="O_positive">O+</option>
        <option value="O_negative">O-</option>
        <option value="AB_positive">AB+</option>
        <option value="AB_negative">AB-</option>
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
      onClick={() => {
        axios.post("http://localhost:3000/api/v1/blood/donated", {
            bloodType: bloodType
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then((response) => {
          console.log(response) 
          alert("Thank you for donating")})
    .catch((err) => {
      console.log(err)
          })
        
        navigate("/dashboard")
        console.log(bloodType)
    }}
        
        className=' m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Donate Blood
      </button>
      <button
      onClick={() => {
        axios.post("http://localhost:3000/api/v1/blood/recieved", {
            bloodType: bloodType
          }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }
      ).then((response) => {
        console.log(response)
      alert("Your request is accepted") })
  .catch((err) => {
    console.log(err)
        })

        
        navigate("/dashboard")
        console.log(bloodType)
    }}
      
        className=' m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
        Receive Blood
      </button>
    </div>
  )
}
