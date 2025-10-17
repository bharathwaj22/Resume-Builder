import React from 'react'
import Header from '../Pages/Header'
import Carousel from '../Pages/Carousel'
import BetterCV from '../Pages/Bettercv'
import Resume_sider from '../Pages/Resume_sider'
import Image1 from '../assets/images/Rectangle 1.svg'
import Image2 from '../assets/images/Rectangle 2.svg'
import Image3 from '../assets/images/Rectangle 4.svg'
import Image4 from '../assets/images/Rectangle 3.svg'
import Image6 from '../assets/images/resume6.svg.svg'
import HomeImage from '../assets/images/home-resume.svg'
import Faq from '../Pages/Faq'
import BackImage from "../assets/images/backimage.webp"
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion";
import homegroup1 from '../assets/images/home-group1.svg'
import homegroup2 from '../assets/images/home-group2.svg'
import homegroup3 from '../assets/images/home-group3.svg'
import homegroup4 from '../assets/images/home-group4.svg'
import homegroup5 from '../assets/images/home-group5.png'

import home1 from '../assets/images/home1.png'
import home2 from '../assets/images/home2.png'
import home3 from '../assets/images/home3.png'
import home4 from '../assets/images/home4.png'
import home5 from '../assets/images/home5.png'

import doubleresume from '../assets/images/doubleresume.png'
import Footer from '../Pages/Footer'


function Homepage() {


    const nagivate = useNavigate();

    const clickchoosetemplate = () => {
        nagivate('/choose-template')

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className=''>
            <Header />
            {/* home */}

            <section className='bg-[#edf9ff] '>
                <div className='bg-[#edf9ff] px-10 flex justify-center gap-10 pt-10 pb-4'>
                    {/* left side */}
                    <div className='w-[50%] pt-5'>
                        <div className='flex gap-2 items-center'><div className='w-2 h-2 bg-green-500 rounded-full animate-pulse duration-[10ms] '></div><div><span className='text-[#2e404a] text-[16px] font-nunito font-bold'>52,551</span> <span className='text-[#44555f] text-[16px] font-nunito font-normal'>Best online resume builder templates</span></div></div>

                        <h1 className='font-roboto text-[60px] text-[#2e404a] font-bold w-[80%] leading-[67.6px] mt-3'>  Build Your <span class="text-[#05A2FF]">Perfect Resume</span> in Minutes</h1>
                        <div className=' font-nunito text-[18px] text-[#2e404a] font-normal leading-[25.2px] mt-6'>Easily create a standout resume fast with templates you can customize to fit your style.</div>

                        <button className='  border-2 border-[#05a2ff] hover:bg-[#0589d5] text-[16px] bg-[#05a2ff] p-3 px-5 rounded-lg text-white font-nunito font-bold cursor-pointer mt-10' onClick={clickchoosetemplate}>Create New Resume</button>

                        <div class="flex items-center  gap-8 rounded-lg mt-10">
                            <div class=" items-center">
                                <div class="text-green-400   bg-green-100 px-3 py-1 rounded-md w-fit font-nunito font-semibold text-[22px]">
                                    48%
                                </div>
                                <p class="text-[#77ADCE] text-[16px] mt-1 text-center font-nunito font-normal">
                                    more likely to get hired
                                </p>
                            </div>

                            <div class="w-px h-16 bg-blue-300"></div>

                            <div class=" items-center">
                                <div class="text-[#ffb020]   bg-[#eef3ee] px-3 py-1 rounded-md w-fit font-nunito font-semibold text-[22px]">
                                    12%
                                </div>
                                <p class="text-[#77ADCE] text-[16px] mt-1 text-center font-nunito font-normal">
                                    better pay with your next job
                                </p>
                            </div>
                        </div>


                    </div>
                    {/* right side */}
                    <div className='w-[50%]  flex justify-center    '>



                        {/* <div className="relative flex justify-center mt-5 h-full   w-[70%] ">
                            <motion.div
                                className="rounded-xl w-[80%] h-full relative overflow-hidden pt-5 "
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <img
                                    src={HomeImage}
                                    alt="Home"
                                    className="w-full h-fit object-cover"
                                />


                            </motion.div>
                            <motion.div
                                className="absolute top-0 left-0 w-full h-full z-50"
                                animate={{ y: [0, -10, 0] }} 
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut",
                                }}
                            >
                                <img
                                    src={homegroup1}
                                    alt="homegroup1"
                                    className="absolute top-5 right-10 w-12 h-12 shadow-lg "
                                />

                                <img
                                    src={homegroup2}
                                    alt="homegroup2"
                                    className="absolute top-20 right-10 w-12 h-12 shadow-lg "
                                />
                            </motion.div>
                        </div> */}

                        <div className="relative flex justify-center items-center  mt-5 h-full   w-[90%]">

                            {/* White circular background */}
                            <motion.div
                                className="absolute bg-[#ffffffad] rounded-full  w-[500px] h-[500px] z-0"
                            // initial={{ opacity: 0, scale: 0.8 }}
                            // animate={{ opacity: 1, scale: [1, 1.05, 1] }} 
                            // transition={{
                            //     duration: 4,
                            //     ease: "easeInOut",
                            //     repeat: Infinity,
                            //     repeatType: "mirror",
                            // }}
                            ></motion.div>

                            {/* Main Image (appears over the white circle) */}
                            <motion.div
                                className="relative z-10 w-[60%] h-auto"
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <img
                                    src={HomeImage}
                                    alt="Home"
                                    className="w-full h-auto object-contain"
                                />
                            </motion.div>

                            {/* Floating animated icons */}
                            <motion.div
                                className="absolute -top-8 left-10 w-full h-full z-20"
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut",
                                }}
                            >
                                {/* Top-right floating image */}
                                <img
                                    src={homegroup1}
                                    alt="homegroup1"
                                    className="absolute top-8 right-[25%] w-12 h-12 shadow-lg"
                                />

                                {/* Bottom-right floating image */}
                                <img
                                    src={homegroup2}
                                    alt="homegroup2"
                                    className="absolute top-24 right-[25%] w-12 h-12 shadow-lg"
                                />
                            </motion.div>

                            {/* sider */}

                            <motion.div
                                className="absolute -top-8 right-[40%] w-full h-full z-20"
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                {/* Top-right floating image */}
                                <img
                                    src={homegroup3}
                                    alt="homegroup1"
                                    className="absolute top-56 right-[25%] w-36 h-36 "
                                />

                                {/* Bottom-right floating image */}
                                <img
                                    src={homegroup4}
                                    alt="homegroup2"
                                    className="absolute bottom-10 right-[25%] w-28 h-28 "
                                />
                            </motion.div>
                            {/* downer */}

                            <div
                                className="absolute -top-8 left-0 w-full h-full z-20"

                            >


                                {/* Bottom-right floating image */}
                                <img
                                    src={homegroup5}
                                    alt="homegroup2"
                                    className="absolute bottom-1 right-[25%] w-44 h-28 "
                                />
                            </div>
                        </div>

                    </div>



                </div>
                <div className='flex  bg-[#edf9ff] px-20 pt-10 pb-9'>
                    <div className='font-nunito font-semibold text-[18px] text-[#34404a] w-[40%]'>
                        Our customers have been hired at:
                    </div>
                    <div className="flex justify-between items-center gap-4 w-[60%]">
                        <img
                            src={home5}
                            alt="doubleresume"
                            className=" object-cover "
                        />
                        <img
                            src={home1}
                            alt="doubleresume"
                            className=" object-cover "
                        />
                        <img
                            src={home2}
                            alt="doubleresume"
                            className=" object-cover "
                        />
                        <img
                            src={home3}
                            alt="doubleresume"
                            className=" object-cover "
                        />
                        <img
                            src={home4}
                            alt="doubleresume"
                            className=" object-cover "
                        />
                    </div>

                </div>
            </section>

            <section className='bg-white px-20 pt-10'>
                <div className='bg-[#edf9ff] flex justify-between mt-5 rounded-xl  items-center'>
                    <div className="inline-block  duration-300 ">
                        <img
                            src={doubleresume}
                            alt="Double Resume"
                            className="w-full h-20 object-cover rounded-md"
                        />
                    </div>

                    <div className='flex gap-3 font-roboto font-semibold text-[22px] text-[#2e404a] p-5'>
                        <div className='border-2 border-[#ddf2ff]  bg-[#ddf2ff] px-3 rounded-md' >1209</div>
                        <div>people are creating their resumes with BetterCV right now!</div>
                    </div>
                    <div className='p-5'>          <button className='border-2 border-[#05a2ff] hover:bg-[#0589d5] text-[16px] bg-[#05a2ff] p-3 px-5 rounded-lg text-white font-nunito font-bold cursor-pointer ' onClick={clickchoosetemplate}>Create New Resume</button></div>


                </div>

                {/* collosale */}

                <div>
                    <div className='mt-10 pt-5 text-center text-[#2e404a] font-roboto font-bold text-[40px]'>
                        What People Are Saying About <span className='text-[#05a2ff]'>Our Resume Builder</span>
                    </div>


                    <Carousel />
                </div>

                {/* better cv builder */}
                <div>
                    <BetterCV />
                </div>



            </section>

            {/* resume sider */}
            <section>
                <Resume_sider />
            </section>
            <section className='bg-[linear-gradient(182deg,rgba(239,248,255,1)_28%,rgba(255,255,255,1)_100%)] '>
                <h2 className="font-roboto font-semibold text-[40px] text-[#2e404a] text-center pt-36">Landing Your Ideal Job Starts Here</h2>



                <div className='flex justify-center gap-5 mt-10'>
                    <div className='w-[22%]'>

                        <div className='w-full'><img src={Image1} alt="image1" className='w-full' />
                        </div>
                        <div className='text-center text-[#2E404A] text-[20px] font-nunito font-bold mt-4 '>Craft Your Perfect Cover Letter</div>
                        <div className='text-center text-[#8d9eb3] text-[16px] font-nunito font-normal mt-4 '>Let AI help you create a compelling introduction that highlights your strengths and grabs attention—quickly and naturally.</div>
                    </div>
                    <div className='w-[22%]'>

                        <div className='w-full'><img src={Image2} alt="image1" className='w-full' />
                        </div>
                        <div className='text-center text-[#2E404A] text-[20px] font-nunito font-bold mt-4 '>Discover Jobs That Fit You</div>
                        <div className='text-center text-[#8d9eb3] text-[16px] font-nunito font-normal mt-4 '>Search, filter, and save opportunities tailored to your skills, experience, and career goals. Find roles that truly match what you’re looking for.</div>
                    </div>
                    <div className='w-[22%]'>

                        <div className='w-full'><img src={Image4} alt="image1" className='w-full' />
                        </div>
                        <div className='text-center text-[#2E404A] text-[20px] font-nunito font-bold mt-4 '>One-Click Applications</div>
                        <div className='text-center text-[#8d9eb3] text-[16px] font-nunito font-normal mt-4 '>Skip repetitive forms. Submit your resume instantly with automated applications, so you can focus on interviews and preparation.</div>
                    </div>
                    <div className='w-[22%]'>

                        <div className='w-full'><img src={Image3} alt="image1" className='w-full' />
                        </div>
                        <div className='text-center text-[#2E404A] text-[20px] font-nunito font-bold mt-4 '>Guidance from Career Experts</div>
                        <div className='text-center text-[#8d9eb3] text-[16px] font-nunito font-normal mt-4 '>Connect with professional career coaches who provide personalized advice, help refine your resume, set actionable goals, and guide you toward success.
                        </div>
                    </div>

                </div>

                <div className='flex justify-center'>
                    <button className="mt-5 px-6 py-3 bg-[#05a2ff] text-white font-semibold rounded-lg  transition hover:bg-[#0589d5] " onClick={clickchoosetemplate}>
                        Create My Resume for Free
                    </button>
                </div>

            </section>


            {/* faq*/}
            <section>
                <Faq /></section>


            <section className='bg-[#edf9ff]  mt-10'>

                <div className='flex justify-center p-20 '>
                    <div className='bg-[radial-gradient(circle,rgba(92,100,110,1)_0%,rgba(49,82,102,1)_47%)] h-[350px] w-[75%] rounded-xl flex justify-center px-10 items-center relative '>
                        <img src={BackImage} alt="backimage" className='absolute w-full h-full inset-0 z-50' />

                        <div>
                            <div className='text-white text-[40px] font-roboto font-bold  text-center'>Get noticed, get hired faster</div>
                            <div className='text-white text-[16px] font-nunito font-normal  text-center mt-5'>It’s easier with BetterCV. Build a professional, job-winning resume in minutes!</div>

                            <div className='flex justify-center '>
                                <button className="mt-5 px-6 py-3 bg-[#05a2ff] hover:bg-[#0875b4] cursor-pointer text-white font-semibold rounded-lg  transition " onClick={clickchoosetemplate}>
                                    Land My Dream Job
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </section>


            <Footer />

        </div>
    )
}

export default Homepage
