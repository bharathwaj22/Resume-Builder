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
    <footer className="bg-[#243841] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex  justify-evenly gap-10">

        {/* Logo and description */}
        <div>
          <div className="flex items-center ju gap-2 mb-4">
            <div className="bg-[#5bbcff] w-fit p-1 h-fit flex items-center justify-center rounded-md font-bold text-xl">
              Aryu
            </div>
            <h2 className="text-2xl font-semibold">Resume</h2>
          </div>
          <p className="text-gray-300 leading-relaxed w-64 text-start">
            We help job seekers stand out in the highly competitive labor
            market with Aryu Cv!
          </p>
        </div>

        {/* Resources */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Resume Builder</li>
            <li>Resume Formatting</li>
            <li>Resume Writing</li>
            <li>Resume Writing Guide</li>
            <li>Professional Resume</li>
            <li>Entry-level Resume</li>
            <li>Student Resume</li>
          </ul>
        </div> */}

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          {/* <ul className="space-y-2 text-gray-300">
            <li onClick={clickploicypage}>Privacy Policy</li>
            <li onClick={clickcookiespage}>Cookie Policy</li>
            <li onClick={clicktermspage}>Terms & Conditions</li>
            <li onClick={clicksubscriptionpage}>Subscription Terms</li>
            <li onClick={clickcontactpage}>Contact Us</li>
          </ul> */}
          <ul className="space-y-2 text-gray-300">
            <li onClick={clickploicypage} className="cursor-pointer hover:text-blue-500 transition-colors">
              Privacy Policy
            </li>
            <li onClick={clickcookiespage} className="cursor-pointer hover:text-blue-500 transition-colors">
              Cookie Policy
            </li>
            <li onClick={clicktermspage} className="cursor-pointer hover:text-blue-500 transition-colors">
              Terms & Conditions
            </li>
            <li onClick={clicksubscriptionpage} className="cursor-pointer hover:text-blue-500 transition-colors">
              Subscription Terms
            </li>
            <li onClick={clickcontactpage} className="cursor-pointer hover:text-blue-500 transition-colors">
              Contact Us
            </li>
          </ul>

        </div>

        {/* Contact and Payment Icons */}
        <div className="flex flex-col justify-between">
          <div>


            <a
              href="https://aryutechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 mb-4">
              © 2025. Aryu Technologies.
              All rights reserved.
            </a>
            <p className="text-gray-300">
              Email:{" "}
              <a href="mailto:help@bettercv.com" className="text-[#5bbcff]">
                Aryu@gmail.com
              </a>
            </p>
          </div>

          <div className="flex gap-4 mt-6 text-3xl text-gray-300">
            <FaCcMastercard />
            <FaCcVisa />
            <FaCcPaypal />
            <FaCcAmex />
            <FaCcDiscover />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
