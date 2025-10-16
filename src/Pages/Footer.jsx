import React from "react";
import {
  FaCcMastercard,
  FaCcVisa,
  FaCcPaypal,
  FaCcAmex,
  FaCcDiscover,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#243841] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Logo and description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-[#5bbcff] w-fit p-1 h-fit flex items-center justify-center rounded-md font-bold text-xl">
              Aryu
            </div>
            <h2 className="text-2xl font-semibold">Resume</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            We help job seekers stand out in the highly competitive labor
            market with Aryu Cv!
          </p>
        </div>

        {/* Resources */}
        <div>
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
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Terms & Conditions</li>
            <li>Subscription Terms</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact and Payment Icons */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-gray-300 mb-4">
              © 2025. Aryu Technologies. <br />
              All rights reserved.
            </p>
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
