import { useState } from 'react'
import { BottomWarning } from '../components/BottomWarning'
import { Button } from '../components/Button'
import { Heading } from '../components/Heading'
import { InputBox } from '../components/InputBox'
import { SubHeading } from '../components/SubHeading'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('');
  const navigate = useNavigate()

  return (
    <>
      <div className='  bg-[url(../bb.jpg)] h-screen flex justify-center bg-no-repeat bg-cover bg-center bg-fixed '>
        <div className='flex flex-col justify-center'>
          <div className='rounded-lg bg-red-100 w-80 text-center p-2 h-max px-4'>
            <Heading label={'Sign up'} />
            <SubHeading label={'Enter your infromation to create an account'} />
            <InputBox
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              placeholder='John'
              label={'First Name'}
            />
            <InputBox
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              placeholder='Doe'
              label={'Last Name'}
            />
            <InputBox
              onChange={(e) => {
                setUsername(e.target.value)
              }}
              placeholder='ayush@gmail.com'
              label={'Email'}
            />
            <InputBox
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              placeholder='123456'
              label={'Password'}
            />
            <InputBox
              onChange={(e) => {
                setAddress(e.target.value)
              }}
              placeholder='1-D, Hawkings Street'
              label={'Address'}
            />
            <div className='pt-4'>
              <Button
                onClick={async () => {
                  const response = await axios.post(
                    'http://localhost:3000/api/v1/user/signup',
                    {
                      username,
                      firstName,
                      lastName,
                      password,
                      address
                    }
                  ).then((response)=>{
                    console.log(response)
                    localStorage.clear()
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('firstName', firstName)
                    localStorage.setItem('lastName', lastName)
                    localStorage.setItem('address',response.data.address)
                    navigate('/dashboard')
                    })
                  
                }}
                label={'Sign up'}
              />
            </div>
            <BottomWarning
              label={'Already have an account?'}
              buttonText={'Sign in'}
              to={'/'}
            />
          </div>
        </div>
      </div>
    </>
  )
}
