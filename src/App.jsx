import { createContext, useState } from 'react'
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
import Resume1 from './Templates/Resume1'

export const CreateContext = createContext(); // Create context

function App() {
  const [globalState, setGlobalState] = useState(0)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [jobTitle, setJobTitle] = useState("");

  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");

  const [tags, setTags] = useState([]);
  const [tones, setTones] = useState([]);

  const [address, setAddress] = useState("");

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postcode, setPostcode] = useState("");

  const [experiences, setExperiences] = useState([
    {
      id: Date.now(),
      jobTitle: "",
      employer: "",
      location: "",
      startDate: null,
      endDate: null,
      isOpen: true,
      touched: {},
      showPicker: false,
      year: new Date().getFullYear(),
    },
  ]);




  return (
    <>

      <CreateContext.Provider value={{ globalState, setGlobalState, firstName, setFirstName, lastName, setLastName, jobTitle, setJobTitle, phone, setPhone, email, setEmail, tags, setTags, tones, setTones, address, setAddress, city, setCity, country, setCountry, postcode, setPostcode, experiences, setExperiences }}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/choose-template' element={<Choose_template />} />
              <Route path='/Resume-details' element={<Resume_details />} />
              {/* <Route path="/Resume-details/:id/:name" element={<Resume_details />} /> */}

              <Route path='/contact-us' element={<Contact />} />
              <Route path='/loginig' element={<Login />} />
              <Route path='/forget-password' element={<Forget_password />} />
              {/* terms pages */}
              <Route path='/terms-conditions' element={<TermsPage />} />
              <Route path='/policy' element={<Policy />} />
              <Route path='/cookies' element={<Cookies />} />

              <Route path='/subscription' element={<Subscription />} />

              {/* resume template */}

              <Route path='/resume1' element={<Resume1 />} />




            </Routes>
          </Layout>
        </BrowserRouter>
      </CreateContext.Provider>


    </>
  )
}

export default App
