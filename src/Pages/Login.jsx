import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
      const nagivate = useNavigate();

    
  const [showPassword, setShowPassword] = useState(false);

    const clickforgetpage = () => {
    nagivate('/forget-password')
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className=" bg-[#f8fbff]">
        <Header/>
      <div className=" flex justify-center pt-20 pb-10 rounded-xl shadow-sm p-8 text-center">
        <div className="w-[450px]">
        <h2 className="text-[28px] font-roboto font-semibold text-[#2e404a] mb-6">
          Welcome back! Please log in
        </h2>

        {/* Google Login */}
        <button className="w-full flex items-center justify-center bg-white gap-2 border rounded-lg py-2 hover:bg-gray-50 transition">
          <FcGoogle size={22} />
          <span className="text-gray-700 font-medium">Log in with Google</span>
        </button>

        {/* Apple Login */}
        <button className="w-full flex items-center justify-center bg-white  gap-2 border rounded-lg py-2 mt-3 hover:bg-gray-50 transition">
          <FaApple size={22} />
          <span className="text-gray-700 font-medium">Log in with Apple</span>
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-3 text-gray-400 text-sm font-medium">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Email Field */}
        <div className="text-left mb-4">
          <label className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Enter email"
            autoComplete="off"
                  className="w-full p-3 pr-12 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none  focus:border-blue-500    focus:ring-2 focus:ring-[#abdffc]  focus:shadow-md  transition-all duration-300"
          />
        </div>

        {/* Password Field */}
        <div className="text-left mb-6">
          <div className="flex justify-between items-center">
            <label className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">Password</label>
            <div  className="text-blue-500 text-sm font-medium hover:underline"
            onClick={clickforgetpage}>
              Forgot password?
            </div>
          </div>
          <div className="relative mt-1">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
                  className="w-full p-3 pr-12 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none  focus:border-blue-500    focus:ring-2 focus:ring-[#abdffc]  focus:shadow-md  transition-all duration-300"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FiEye size={20} /> : < FiEyeOff size={20} />}
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button className="w-full bg-[#05a2ff] hover:bg-[#0088e6] text-white font-semibold py-3 rounded-lg shadow-md transition">
          Log In
        </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
