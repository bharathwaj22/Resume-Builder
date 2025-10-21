import React from "react";
import {
  FaCcMastercard,
  FaCcVisa,
  FaCcPaypal,
  FaCcAmex,
  FaCcDiscover,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const nagivate = useNavigate();
  // const clicktermspage = () => {
  //   nagivate('/terms-conditions')
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }

  //   const clickploicypage = () => {
  //   nagivate('/policy')
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }
  //     const clickcookiespage = () => {
  //   nagivate('/cookies')
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }

  //       const clicksubscriptionpage = () => {
  //   nagivate('/subscription')
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }

  //   const clickcontactpage = () => {
  //   nagivate('/contact-us')
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // }

  const clicktermspage = () => {
    window.open('/terms-conditions', '_blank');
  };

  const clickploicypage = () => {
    window.open('/policy', '_blank');
  };

  const clickcookiespage = () => {
    window.open('/cookies', '_blank');
  };

  const clicksubscriptionpage = () => {
    window.open('/subscription', '_blank');
  };

  const clickcontactpage = () => {
    window.open('/contact-us', '_blank');
  };


  return (
    // <footer className="bg-[#243841] text-white py-12 px-6 md:px-16">
    //   <div className="max-w-7xl mx-auto flex flex-wrap  justify-evenly gap-10">

    //     {/* Logo and description */}
    //     <div className="w-full md-w-fit">
    //       <div className="flex items-center gap-2 mb-4">
    //         <div className="bg-[#5bbcff] w-fit p-1 h-fit flex items-center justify-center rounded-md font-bold text-xl">
    //           Resumint
    //         </div>
    //         <h2 className="text-2xl font-semibold">Resume</h2>
    //       </div>
    //       <p className="text-gray-300 leading-relaxed w-64 text-start">
    //         We help job seekers stand out in the highly competitive labor
    //         market with Aryu Cv!
    //       </p>
    //     </div>

    //     {/* Resources */}
    //     {/* <div>
    //       <h3 className="text-lg font-semibold mb-4">Resources</h3>
    //       <ul className="space-y-2 text-gray-300">
    //         <li>Resume Builder</li>
    //         <li>Resume Formatting</li>
    //         <li>Resume Writing</li>
    //         <li>Resume Writing Guide</li>
    //         <li>Professional Resume</li>
    //         <li>Entry-level Resume</li>
    //         <li>Student Resume</li>
    //       </ul>
    //     </div> */}

    //     {/* Support */}
    //     <div className="w-full md:w-fit">
    //       <h3 className="text-lg font-semibold mb-4 ">Support</h3>
    //       {/* <ul className="space-y-2 text-gray-300">
    //         <li onClick={clickploicypage}>Privacy Policy</li>
    //         <li onClick={clickcookiespage}>Cookie Policy</li>
    //         <li onClick={clicktermspage}>Terms & Conditions</li>
    //         <li onClick={clicksubscriptionpage}>Subscription Terms</li>
    //         <li onClick={clickcontactpage}>Contact Us</li>
    //       </ul> */}
    //       <ul className="space-y-2 text-gray-300">
    //         <li onClick={clickploicypage} className="cursor-pointer hover:text-blue-500 transition-colors">
    //           Privacy Policy
    //         </li>
    //         <li onClick={clickcookiespage} className="cursor-pointer hover:text-blue-500 transition-colors">
    //           Cookie Policy
    //         </li>
    //         <li onClick={clicktermspage} className="cursor-pointer hover:text-blue-500 transition-colors">
    //           Terms & Conditions
    //         </li>
    //         <li onClick={clicksubscriptionpage} className="cursor-pointer hover:text-blue-500 transition-colors">
    //           Subscription Terms
    //         </li>
    //         <li onClick={clickcontactpage} className="cursor-pointer hover:text-blue-500 transition-colors">
    //           Contact Us
    //         </li>
    //       </ul>

    //     </div>

    //     {/* Contact and Payment Icons */}
    //     <div className="flex flex-col justify-between md:w-fit">
    //       <div>


    //         <a
    //           href="https://aryutechnologies.com/"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-gray-300 mb-4">
    //           © 2025. Aryu Technologies.
    //           All rights reserved.
    //         </a>
    //         <p className="text-gray-300">
    //           Email:{" "}
    //           <a href="mailto:help@bettercv.com" className="text-[#5bbcff]">
    //             Aryu@gmail.com
    //           </a>
    //         </p>
    //       </div>

    //       <div className="flex gap-4 mt-6 text-3xl text-gray-300">
    //         <FaCcMastercard />
    //         <FaCcVisa />
    //         <FaCcPaypal />
    //         <FaCcAmex />
    //         <FaCcDiscover />
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer className="bg-[#243841] text-white py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
        
        {/* --- Logo & Description --- */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-[#5bbcff] px-2 py-1 rounded-md font-bold text-xl">
              Resumint
            </div>
            <h2 className="text-2xl font-semibold">Resume</h2>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-xs">
            We help job seekers stand out in the highly competitive labor market
            with Aryu CV!
          </p>
        </div>

        {/* --- Support Links --- */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li
              onClick={clickploicypage}
              className="cursor-pointer hover:text-[#5bbcff] transition-colors"
            >
              Privacy Policy
            </li>
            <li
              onClick={clickcookiespage}
              className="cursor-pointer hover:text-[#5bbcff] transition-colors"
            >
              Cookie Policy
            </li>
            <li
              onClick={clicktermspage}
              className="cursor-pointer hover:text-[#5bbcff] transition-colors"
            >
              Terms & Conditions
            </li>
            <li
              onClick={clicksubscriptionpage}
              className="cursor-pointer hover:text-[#5bbcff] transition-colors"
            >
              Subscription Terms
            </li>
            <li
              onClick={clickcontactpage}
              className="cursor-pointer hover:text-[#5bbcff] transition-colors"
            >
              Contact Us
            </li>
          </ul>
        </div>

        {/* --- Contact & Payment Section --- */}
        <div className="flex flex-col justify-between space-y-6">
          <div className="text-gray-300 space-y-2">
            <a
              href="https://aryutechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#5bbcff] transition-colors"
            >
              © 2025 Aryu Technologies. All rights reserved.
            </a>
            <p>
              Email:{" "}
              <a
                href="mailto:help@bettercv.com"
                className="text-[#5bbcff] hover:underline"
              >
                Aryu@gmail.com
              </a>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-3xl text-gray-400">
            <FaCcMastercard className="hover:text-[#5bbcff] transition-colors" />
            <FaCcVisa className="hover:text-[#5bbcff] transition-colors" />
            <FaCcPaypal className="hover:text-[#5bbcff] transition-colors" />
            <FaCcAmex className="hover:text-[#5bbcff] transition-colors" />
            <FaCcDiscover className="hover:text-[#5bbcff] transition-colors" />
          </div>
        </div>
      </div>

      {/* --- Divider & Bottom Text --- */}
      {/* <div className="mt-10 border-t border-gray-600 pt-6 text-center text-gray-400 text-sm">
        Designed with ❤️ by <span className="text-[#5bbcff]">Aryu Team</span>
      </div> */}
    </footer>
  );
};

export default Footer;
