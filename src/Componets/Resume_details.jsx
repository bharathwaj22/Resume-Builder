import React, { useContext } from 'react'
import Header from '../Pages/Header'
import { useState, useRef, useEffect } from 'react';
import { FaFolder, FaStar, FaPalette, FaFileAlt, FaUser, FaBriefcase } from "react-icons/fa";
import Contact_form from '../Forms/Contact_form';
import Experience_form from '../Forms/Experience_form';
import Education_form from '../Forms/Education_form';
import Skills_form from '../Forms/Skills_form';
import Summary_form from '../Forms/Summary_form';
import Finalize_form from '../Forms/Finalize_form';
import Image6 from '../assets/images/resume6.svg.svg'
import { useLocation } from 'react-router-dom';
import { CreateContext } from '../App';
import Resume1 from '../Templates/Resume1';





function Resume_details() {

    // let UseContext = useContext(CreateContext)
    // console.log("UseContextdd", UseContext)

    const location = useLocation();
    const templateId = location.state?.templateId;

    console.log("Received Template ID:", templateId);
    const tabsData = [
        { id: "contacts", name: "Contacts" },
        { id: "experience", name: "Experience" },
        { id: "education", name: "Education" },
        { id: "skills", name: "Skills" },
        { id: "summary", name: "Summary" },
        { id: "finalize", name: "Finalize" },
    ];

    const tabWidths = {
        contacts: 5,
        experience: 25,
        education: 43,
        skills: 60,
        summary: 77,
        finalize: 99,
    };

    const [activeTab, setActiveTab] = useState("contacts");

    const setAllTaskDetails = (tab) => console.log("Setting task details for:", tab.id);

    const renderTabContent = () => {
        switch (activeTab) {
            case "contacts":
                return <Contact_form />;
            case "experience":
                return <Experience_form />;
            case "education":
                return <Education_form />;
            case "skills":
                return <Skills_form />;
            case "summary":
                return <Summary_form />;
            case "finalize":
                return <Finalize_form />;
            default:
                return null;
        }
    };
    const currentIndex = tabsData.findIndex(tab => tab.id === activeTab);

    const nextTab = tabsData[currentIndex + 1];
    const prevTab = tabsData[currentIndex - 1];

    return (
        <div className='bg-[#eff2f9] h-full'>
            <Header />

            <section className='flex flex-wrap md:flex-nowrap mt-5 p-3 '>
                {/* left tab  */}
                <div className=' w-full md:w-[50%] '>

                    <div className='bg-white  rounded-lg p-1 '>
                        {/* <div className="relative w-full p-">
                            <div className="flex flex-wrap justify-between relative z-10">
                                {tabsData.map((tab) => {
                                    const isActive = tab.id === activeTab;
                                    return (
                                        <div key={tab.id} className="flex flex-col items-center">
                                            <button
                                                onClick={() => {
                                                    setActiveTab(tab.id);
                                                    setAllTaskDetails(tab);
                                                }}
                                                className={`
                  p-2 text-[16px] font-nunito font bg-white
                  transition-colors duration-200 ease-in-out
                  ${isActive ? "text-[#5da2ff]" : "text-[#8d9ea8] hover:text-[#5da2ff]"}
                `}
                                            >
                                                {tab.name}
                                            </button>

                                            <div
                                                className={`
                  w-3 h-3 rounded-full border-2 mt-1 z-10
                  ${isActive
                                                        ? "border-[#5da2ff] bg-white shadow-[0_0_0_4px_#a3d9ff]"
                                                        : "border-[#5da2ff] bg-white"
                                                    }
                  transition-all duration-300 ease-in-out
                `}
                                            ></div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="absolute left-0 right-0 bottom-[5px] h-0.5 bg-[#5da2ff]"></div>


                        </div> */}

                        <div className="relative w-full">
                            {/* Tabs + Dots container */}
                            <div className="hidden md:flex  justify-between relative z-10">
                                {tabsData.map((tab, index) => {
                                    const isActive = tab.id === activeTab;
                                    return (
                                        <div key={tab.id} className="flex flex-col items-center ">
                                            {/* Tab Label */}
                                            <button
                                                onClick={() => {
                                                    setActiveTab(tab.id);
                                                    setAllTaskDetails(tab);
                                                }}
                                                className={`
              p-2 text-[16px] font-nunito bg-white 
              transition-colors duration-200 ease-in-out
              ${isActive ? "text-[#5da2ff]" : "text-[#8d9ea8] hover:text-[#5da2ff]"}
            `}
                                            >
                                                {tab.name}
                                            </button>

                                            {/* Dot */}
                                            <div
                                                className={`
              w-3 h-3 rounded-full border-2 mt-1 z-10
              ${isActive
                                                        ? "border-[#5da2ff] bg-white shadow-[0_0_0_4px_#a3d9ff]"
                                                        : "border-[#5da2ff] bg-white"}
              transition-all duration-300 ease-in-out
            `}
                                            ></div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Base line */}
                            <div className="absolute left-0 right-0 bottom-[5px] h-0.5 bg-[#d4e7ff]"></div>

                            {/* Progress Line (animated) */}
                            <div
                                className="absolute left-[6px] bottom-[5px] h-0.5 bg-[#5da2ff] transition-all duration-500 ease-in-out"
                                style={{
                                    width: `${tabWidths[activeTab] || 0}%`,
                                }}
                            ></div>



                        </div>


                        <div className="mt-5">
                            {renderTabContent()}


                        </div>
                    </div>
                    {/* perivous */}

                    <div className="bg-white p-4 mt-3 text-right rounded-lg flex justify-between  ">
                        {prevTab && (
                            <button
                                className="bg-white text-[#374151] border border-gray-300 px-6 py-2 rounded-lg mr-3 font-nunito font-semibold hover:bg-gray-100 transition-colors duration-300"
                                onClick={() => setActiveTab(prevTab.id)}
                            >
                                Back
                            </button>
                        )}

                        {nextTab && (
                            <button
                                className="bg-[#05a2ff] text-white px-6 py-2 rounded-lg font-nunito font-semibold hover:bg-[#0875b4] transition-colors duration-300"
                                onClick={() => setActiveTab(nextTab.id)}
                            >
                                Next {nextTab.name}
                            </button>
                        )}
                    </div>
                </div>
                {/* right resume */}
                {/* <div className="w-[50%] p-2 hidden md:flex justify-center">
                    <div className="overflow-hidden rounded-xl w-[70%] shadow-lg hover:shadow-2xl transition-shadow duration-300 flex justify-center">
                        <img
                            src={Image6}
                            alt="image6"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div> */}
                <div className="hidden md:flex justify-center w-[50%] ">
  <div className="w-[70%] overflow-visible    flex justify-center">
 
   
        <div
          className="w-full h-full"
          style={{
            transform: "scale(0.8)", // scale down to fit
            transformOrigin: "center top",
            width: "210mm",
            height: "297mm",
          }}
        >
          <Resume1 />
  
    </div>
  </div>
</div>




            </section>
        </div>
    )
}

export default Resume_details
