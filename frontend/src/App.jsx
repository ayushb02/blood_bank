import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Dashboard } from './pages/Dashboard'
import { NewForm } from './pages/newForm'
import Bloodavailablity from './pages/Bloodavailability'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Signin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/newform' element={<NewForm/>}/>
          <Route path='/bloodavailability' element={<Bloodavailablity/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
