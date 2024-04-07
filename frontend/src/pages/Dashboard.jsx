import { useEffect, useState } from 'react'
import { Appbar } from '../components/Appbar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'
import axios from 'axios'
import { NewForm } from './newForm'

export const Dashboard = () => {
  return (
    <>
      <Appbar />
      <div className=' bg-[url(../img2.jpg)] flex  bg-no-repeat bg-cover bg-center bg-fixed h-screen'>
        <NewForm />
      </div>
    </>
  )
}
