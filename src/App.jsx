import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Componets/Homepage'
import Choose_template from './Componets/Choose_template'
import Resume_details from './Componets/Resume_details'
import Contact from './Pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
       <Route path='/choose-template' element={<Choose_template/>}/>
              <Route path='/Resume-details' element={<Resume_details/>}/>
              <Route path='/contact-us' element={<Contact/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
