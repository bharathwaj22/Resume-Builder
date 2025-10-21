import { useNavigate } from 'react-router-dom'
import Aryu_logo from "../assets/images/aryu_logo.svg"
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";



function Header() {
  const nagivate = useNavigate();
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


  const clickloginpage = () => {
    nagivate('/loginig')
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

    const [menuOpen, setMenuOpen] = useState(false);
  return (
    // <section className='bg-white shadow-[0_6px_12px_0_#5bbcff80] sticky top-0 z-50'>
    //   <div className='flex justify-between p-4 px-10 items-center'>
    //     <div
    //       className="flex items-center gap-2 text-[#2e404a] text-[20px] md:text-[25px] font-nunito font-bold cursor-pointer"
    //       onClick={clickhomepage}
    //     >
    //       {/* <img src={Aryu_logo} alt="Logo" className="w-8 h-8 object-contain" /> */}
    //       <span>Resumint Resume Builder</span>
    //     </div>
    //     <div className='flex justify-between gap-4 '>
    //       <div className='border-2 border-[#05a2ff] text-[16px] text-[#05a2ff] p-3 px-6 rounded-md font-nunito font-bold cursor-pointer' onClick={clickcontactpage}>Contact us</div>
    //       <div className='border-2 border-[#05a2ff] text-[16px] bg-[#05a2ff] p-3 px-5 rounded-md text-white font-nunito font-bold cursor-pointer' onClick={clickloginpage}>Log in</div>
    //     </div>
    //   </div>


    // </section>

     
    <header className="bg-white shadow-[0_6px_12px_0_#5bbcff80] sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        {/* --- Logo --- */}
        <div
          className="flex items-center gap-2 text-[#2e404a] text-[20px] md:text-[25px] font-nunito font-bold cursor-pointer"
          onClick={clickhomepage}
        >
          <span>Resumint Resume Builder</span>
        </div>

        {/* --- Desktop Buttons --- */}
        <div className="hidden md:flex gap-4">
          <button
            onClick={clickcontactpage}
            className="border-2 border-[#05a2ff] text-[16px] text-[#05a2ff] py-2 px-5 rounded-md font-nunito font-bold hover:bg-[#05a2ff]/10 transition"
          >
            Contact Us
          </button>
          <button
            onClick={clickloginpage}
            className="border-2 border-[#05a2ff] bg-[#05a2ff] text-[16px] py-2 px-5 rounded-md text-white font-nunito font-bold hover:bg-[#0094f0] transition"
          >
            Log in
          </button>
        </div>

        {/* --- Mobile Menu Icon --- */}
        <div className="md:hidden">
          {menuOpen ? (
            <FiX
              className="text-[#2e404a] text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-[#2e404a] text-3xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

     <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dimmed Background */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            ></motion.div>

            {/* Popup Menu Card */}
            <motion.div
              className="fixed top-20 left-[8%]  z-50 w-[85%] max-w-sm -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.9, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -50 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 text-[#2e404a] hover:text-[#05a2ff] transition"
              >
                <FiX size={24} />
              </button>

              <h2 className="text-[#2e404a] text-xl font-semibold mb-6">Menu</h2>

               <button
                onClick={() => {
                  clickhomepage();
                  setMenuOpen(false);
                }}
                className="w-full text-center bg-[#05a2ff] text-white py-3 rounded-md font-bold hover:bg-[#0094f0] transition mb-3"
              >
                Home
              </button>
              <button
                onClick={() => {
                  clickcontactpage();
                  setMenuOpen(false);
                }}
                className="w-full text-center border border-[#05a2ff] text-[#05a2ff] py-3 rounded-md font-bold hover:bg-[#05a2ff]/10 transition mb-3"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  clickloginpage();
                  setMenuOpen(false);
                }}
                className="w-full text-center bg-[#05a2ff] text-white py-3 rounded-md font-bold hover:bg-[#0094f0] transition"
              >
                Log in
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
