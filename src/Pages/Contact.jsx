import React, { useState } from "react";
import Header from './Header'
import { motion } from 'framer-motion';
import Contactimage from "../assets/images/contact-us.webp"
import ContactCards from "./ContactCards";
import Faq from "./Faq";
import Footer from "./Footer";


function Contact() {
    const containerVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };


    const [firstName, setFirstName] = useState("");
    const [firstTouched, setFirstTouched] = useState(false);

    const [lastName, setLastName] = useState("");
    const [lastTouched, setLastTouched] = useState(false);

    const [message, setMessage] = useState("")

    const [showAdditional, setShowAdditional] = useState(false);


    const isValid = (value, touched) => touched && value.trim() !== "";


    return (
        <div className=''>
            <Header />

            <div className="pb-20 bg-[#edf9ff]  p-4">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="p-8 md:p-12 mb-5 font-roboto "
                >
                    <h1 className="font-roboto font-bold text-[52px] text-[#2e404a] text-center mt-14">
                        Contact us
                    </h1>
                    <p className="font-nunito text-[18px] text-[#0a3370] font-normal text-center ">
                        If you need assistance with our service or have any questions, don't hesitate to get
                        <p>in touch with us.</p>
                    </p>
                </motion.div>


                <div className='flex justify-center  '>
                    <div className="w-[60%] flex justify-center ">
                        <div className="bg-white w-[70%] border-2 border-gray-300 rounded-md p-5">
                            <div className="flex gap-10 justify-between mt-3">
                                {/* First Name */}
                                <div className="w-[50%] ">
                                    <label htmlFor="firstName" className="block text-[#374151] text-[18px] font-nunito font-bold mb-1">
                                        First name
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="firstName"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            onBlur={() => setFirstTouched(true)}
                                            placeholder="Enter your first name"
                                            className="w-full p-3 pr-12 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-white shadow-sm focus:outline-none  focus:border-blue-500    focus:ring-2 focus:ring-[#abdffc]  focus:shadow-md  transition-all duration-300"
                                        />
                                        {isValid(firstName, firstTouched) && (
                                            <div className="absolute inset-y-0 right-2 flex items-center">
                                                <div className="bg-green-500 rounded-full h-4 w-4 flex items-center justify-center">
                                                    <svg
                                                        className="h-3 w-3 text-white"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>

                                        )}
                                    </div>
                                </div>

                                {/* Last Name */}
                                <div className="w-[50%]">
                                    <label htmlFor="lastName" className="block text-[#374151] text-[18px] font-nunito font-bold mb-1">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="lastName"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            onBlur={() => setLastTouched(true)}
                                            placeholder="Enter Enail"
                                            className="w-full p-3 pr-12 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#ffffff] shadow-sm focus:outline-none  focus:border-blue-500    focus:ring-2 focus:ring-[#abdffc]  focus:shadow-md  transition-all duration-300"
                                        />
                                        {isValid(lastName, lastTouched) && (
                                            <div className="absolute inset-y-0 right-2 flex items-center">
                                                <div className="bg-green-500 rounded-full h-4 w-4 flex items-center justify-center">
                                                    <svg
                                                        className="h-3 w-3 text-white"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className=" mt-5">
                                {/* First Name */}
                                <div>
                                    <label htmlFor="firstName" className="block text-[#374151] text-[18px] font-nunito font-bold mb-1">
                                        Message
                                    </label>
                                    <div className="">
                                        <textarea
                                            type="text"
                                            id="message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Enter your first name"
                                            className="w-full h-60 p-3 pr-12 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#ffffff] shadow-sm focus:outline-none  focus:border-blue-500    focus:ring-2 focus:ring-[#abdffc]  focus:shadow-md  transition-all duration-300"
                                        />

                                    </div>
                                </div>

                                {/* Last Name */}

                            </div>

                            <div className="flex justify-center">
                                <button className='border-2 border-[#05a2ff] hover:bg-[#0589d5] text-[16px] bg-[#05a2ff] p-3 px-10 rounded-lg text-white font-nunito font-bold cursor-pointer mt-5' >Submit</button>

                            </div>
                        </div>
                    </div>

                    <div className=" w-[35%] ">
                        <motion.img
                            src={Contactimage}
                            alt="contact"
                            className=" object-cover rounded-lg"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }} // smooth transition
                        />
                    </div>
                </div>

            </div>

            <div>

                <ContactCards />
            </div>

            <div>

                <Faq />
            </div>

             <div>

                <Footer/>
            </div>


        </div>
    )
}

export default Contact
