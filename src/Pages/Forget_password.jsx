import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Header from "./Header";
import Footer from "./Footer";

const Forget_password = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className=" bg-[#f8fbff]">
        <Header/>
      <div className=" flex justify-center pt-20 pb-10 rounded-xl shadow-sm p-8 text-center">
        <div className="w-[450px]">
        <h2 className="text-[28px] font-roboto font-semibold text-[#2e404a] mb-6">
          Forgot your password?
        </h2>
        <div className="text-[18px] font-nunito font-normal text-[#133a75]">Enter the email address associated with your account and we’ll send you a link to reset your password.</div>



        {/* Email Field */}
        <div className="text-left mb-4">
          <label className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Enter email"
            autoComplete="new-email" 
            className="w-full p-3 pr-12 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none  focus:border-blue-500    focus:ring-2 focus:ring-[#abdffc]  focus:shadow-md  transition-all duration-300"
          />
        </div>

     

        {/* Login Button */}
        <button className="w-full bg-[#05a2ff] hover:bg-[#0088e6] text-white font-semibold py-3 rounded-lg shadow-md transition">
         Send Reset Link
        </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Forget_password;
