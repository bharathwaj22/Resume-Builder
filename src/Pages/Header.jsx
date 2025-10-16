import React from 'react'
import { useNavigate } from 'react-router-dom'
import Aryu_logo from "../assets/images/aryu_logo.svg"

function Header() {
  const nagivate = useNavigate ();
  const clickhomepage = () => {
      nagivate('/')
        window.scrollTo({
   top: 0,
   behavior: "smooth",
 });
}

   const clickcontactpage = () => {
      nagivate('/contact-us')
        window.scrollTo({
   top: 0,
   behavior: "smooth",
 });
  }
  return (
    <section className='bg-white shadow-[0_6px_12px_0_#5bbcff80]'>
        <div className='flex justify-between p-4 px-10 items-center'>
<div
  className="flex items-center gap-2 text-[#2e404a] text-[25px] font-nunito font-bold cursor-pointer"
  onClick={clickhomepage}
>
  <img src={Aryu_logo} alt="Logo" className="w-8 h-8 object-contain" />
  <span>Resume</span>
</div>
            <div className='flex justify-between gap-4'>
                <div className='border-2 border-[#05a2ff] text-[16px] text-[#05a2ff] p-3 px-6 rounded-md font-nunito font-bold cursor-pointer' onClick={clickcontactpage}>Contact us</div>
                <div className='border-2 border-[#05a2ff] text-[16px] bg-[#05a2ff] p-3 px-5 rounded-md text-white font-nunito font-bold cursor-pointer'>Log in</div>
            </div>
        </div>

      
    </section>
  )
}

export default Header
