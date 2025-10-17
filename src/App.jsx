import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Componets/Homepage'
import Choose_template from './Componets/Choose_template'
import Resume_details from './Componets/Resume_details'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Forget_password from './Pages/Forget_password'
import TermsPage from './Pages/TermsPage'
import Policy from './Pages/Polciy'
import Cookies from './Pages/Cookies'
import Subscription from './Pages/Subscription'
import Layout from './Componets/Layout'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <BrowserRouter>
       <Layout>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/choose-template' element={<Choose_template />} />
          <Route path='/Resume-details' element={<Resume_details />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/loginig' element={<Login />} />
          <Route path='/forget-password' element={<Forget_password />} />
{/* terms pages */}
          <Route path='/terms-conditions' element={<TermsPage />} />
           <Route path='/policy' element={<Policy/>} />
            <Route path='/cookies' element={<Cookies/>} />

            <Route path='/subscription' element={<Subscription/>} />



        </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
