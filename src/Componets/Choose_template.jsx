import React, { useContext } from 'react'
// import { useState } from 'react'
import { FaThLarge, FaList } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import Image1 from '../assets/images/resume1.svg.svg'
import Image2 from '../assets/images/resume2.svg.svg'
import Image3 from '../assets/images/resume3.svg.svg'
import Image4 from '../assets/images/resume4.svg.svg'
import Image5 from '../assets/images/resume5.svg.svg'
import Image6 from '../assets/images/resume6.svg.svg'
import Image7 from '../assets/images/resume7.svg.svg'
import Image8 from '../assets/images/resume8.svg.svg'
import { Description } from '@headlessui/react';

import { FaFolder, FaStar, FaPalette, FaFileAlt, FaUser, FaBriefcase } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Footer from '../Pages/Footer';
import Header from '../Pages/Header';
import { CreateContext } from '../App';



function Choose_template() {
    const nagivate = useNavigate();
    const clickresumedetails = () => {
        nagivate('/Resume-details')
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    let UseContext=useContext(CreateContext)

    console.log(UseContext);
    

    const steps = [
        { id: 1, name: 'Choose template' },
        { id: 2, name: 'Enter your details' },
        { id: 3, name: 'Download resume' },

    ];

    // Step 1: Define the tabs and their corresponding content (templates)


    // const tabsData = [
    //     {
    //         id: 'all',
    //         name: 'All Templates',
    //         // ... icon ...
    //         templateTitle: 'Explore All Resume Styles', // New Field
    //         templateDescription: 'A comprehensive collection of all our professional, modern, and simple resume designs.', // New Field
    //         templates: [
    //             { id: 1, style: 'Kelly Blackwell', image: Image1 , description: "A sleek, contemporary design with bold headings and clean lines."},
    //             { id: 2, style: 'Howard Jones', image: Image2 },
    //             { id: 3, style: 'Samantha Williams', image: Image3 },
    //             { id: 4, style: 'Olivia Taylor', image: Image4 },
    //             { id: 5, style: 'Daniel Carter', image: Image5 },
    //             { id: 6, style: 'Emma Johnson', image: Image6 },
    //         ],
    //     },
    //     {
    //         id: 'simple',
    //         name: 'Simple',
    //         // ... icon ...
    //         templateTitle: 'Clean and Minimal Templates', // New Field
    //         templateDescription: 'For a straightforward, distraction-free, and effective presentation of your career history.', // New Field
    //         templates: [
    //             { id: 1, style: 'Kelly Blackwell', color: 'bg-red-50' },
    //             { id: 2, style: 'Howard Jones', color: 'bg-white' },
    //             { id: 3, style: 'Samantha Williams', color: 'bg-pink-50' },
    //         ],
    //     },
    //     {
    //         id: 'modern',
    //         name: 'Modern',
    //         // ... icon ...
    //         templateTitle: 'Contemporary Design Resumes', // New Field
    //         templateDescription: 'Templates featuring bold layouts, distinct typography, and unique visual elements.', // New Field
    //         templates: [
    //             { id: 1, style: 'Kelly Blackwell', color: 'bg-red-50' },
    //             { id: 2, style: 'Howard Jones', color: 'bg-white' },
    //             { id: 3, style: 'Samantha Williams', color: 'bg-pink-50' },
    //         ],
    //     },
    //     // ... continue adding templateTitle and templateDescription for 'one-column', 'photo', and 'professional' ...
    //     {
    //         id: 'one-column',
    //         name: 'One column',
    //         // ... icon ...
    //         templateTitle: 'Focused Single Column Layouts',
    //         templateDescription: 'Ideal for linear reading and when space needs to be utilized vertically without complex sidebars.',
    //         templates: [
    //             { id: 1, style: 'Kelly Blackwell', color: 'bg-red-50' },
    //             { id: 2, style: 'Howard Jones', color: 'bg-white' },
    //             { id: 3, style: 'Samantha Williams', color: 'bg-pink-50' },
    //         ],
    //     },
    //     {
    //         id: 'photo',
    //         name: 'With photo',
    //         // ... icon ...
    //         templateTitle: 'Templates Designed for a Headshot',
    //         templateDescription: 'Incorporate your professional picture seamlessly into the design to add a personal touch.',
    //         templates: [
    //             { id: 1, style: 'Kelly Blackwell', color: 'bg-red-50' },
    //             { id: 2, style: 'Howard Jones', color: 'bg-white' },
    //             { id: 3, style: 'Samantha Williams', color: 'bg-pink-50' },
    //         ],
    //     },
    //     {
    //         id: 'professional',
    //         name: 'Professional',
    //         // ... icon ...
    //         templateTitle: 'Classic Corporate Resumes',
    //         templateDescription: 'Time-tested, elegant, and industry-standard formats perfect for any senior or traditional role.',
    //         templates: [
    //             { id: 1, style: 'Kelly Blackwell', color: 'bg-red-50' },
    //             { id: 2, style: 'Howard Jones', color: 'bg-white' },
    //             { id: 3, style: 'Samantha Williams', color: 'bg-pink-50' },
    //         ],
    //     },
    // ];

    const tabsData = [
        {
            id: 'all',
            name: 'All Templates',
            icon: <FaFolder className="inline-block mr-2" />, // Folder icon

            templateTitle: 'Explore All Resume Styles',
            templateDescription: 'A comprehensive collection of all our professional, modern, and simple resume designs.',
            templates: [
                { id: 1, style: 'Kelly Blackwell', image: Image1, description: "A sleek, contemporary design with bold headings and clean lines." },
                { id: 2, style: 'Howard Jones', image: Image2, description: "Professional layout with modern typography." },
                { id: 3, style: 'Samantha Williams', image: Image3, description: "Minimalist style emphasizing clarity and simplicity." },
                { id: 4, style: 'Olivia Taylor', image: Image4, description: "Creative design with eye-catching sections." },
                { id: 5, style: 'Daniel Carter', image: Image5, description: "Structured layout with clear hierarchy." },
                { id: 6, style: 'Emma Johnson', image: Image6, description: "Elegant design with professional fonts and spacing." },
            ],
        },
        {
            id: 'simple',
            name: 'Simple',
            icon: <FaStar className="inline-block mr-2" />, // Star icon

            templateTitle: 'Clean and Minimal Templates',
            templateDescription: 'For a straightforward, distraction-free, and effective presentation of your career history.',
            templates: [
                { id: 1, style: 'Kelly Blackwell', image: Image6, description: "Clean and simple layout for minimal distractions." },
                { id: 2, style: 'Howard Jones', image: Image5, description: "Professional minimal style focusing on readability." },
                { id: 3, style: 'Samantha Williams', image: Image4, description: "Elegant simplicity with soft color tones." },
                { id: 4, style: 'Olivia Taylor', image: Image2, description: "Straightforward structure emphasizing content." },
                { id: 5, style: 'Daniel Carter', image: Image1, description: "Modern simple layout with clear headings." },
                { id: 6, style: 'Emma Johnson', image: Image3, description: "Minimalist design with professional fonts." },
            ],
        },
        {
            id: 'modern',
            name: 'Modern',
            icon: <FaPalette className="inline-block mr-2" />, // Palette icon

            templateTitle: 'Contemporary Design Resumes',
            templateDescription: 'Templates featuring bold layouts, distinct typography, and unique visual elements.',
            templates: [
                { id: 1, style: 'Kelly Blackwell', image: Image1, description: "Bold modern layout with dynamic sections." },
                { id: 2, style: 'Howard Jones', image: Image5, description: "Typography-focused modern resume style." },
                { id: 3, style: 'Samantha Williams', image: Image3, description: "Creative modern layout with color accents." },
                { id: 4, style: 'Olivia Taylor', image: Image6, description: "Innovative sections with modern design elements." },
                { id: 5, style: 'Daniel Carter', image: Image2, description: "Contemporary design focusing on readability." },
                { id: 6, style: 'Emma Johnson', image: Image4, description: "Modern resume with clean lines and hierarchy." },
            ],
        },
        {
            id: 'one-column',
            name: 'One column',
            icon: <FaFileAlt className="inline-block mr-2" />, // File icon

            templateTitle: 'Focused Single Column Layouts',
            templateDescription: 'Ideal for linear reading and when space needs to be utilized vertically without complex sidebars.',
            templates: [
                { id: 1, style: 'Kelly Blackwell', image: Image6, description: "Single column layout emphasizing clarity." },
                { id: 2, style: 'Howard Jones', image: Image4, description: "Linear and straightforward design." },
                { id: 3, style: 'Samantha Williams', image: Image2, description: "Focused layout for quick readability." },
                { id: 4, style: 'Olivia Taylor', image: Image5, description: "Clean vertical structure with emphasis on content." },
                { id: 5, style: 'Daniel Carter', image: Image3, description: "Simple one-column professional design." },
                { id: 6, style: 'Emma Johnson', image: Image1, description: "Elegant single-column resume format." },
            ],
        },
        {
            id: 'photo',
            name: 'With photo',
            icon: <FaUser className="inline-block mr-2" />, // User icon

            templateTitle: 'Templates Designed for a Headshot',
            templateDescription: 'Incorporate your professional picture seamlessly into the design to add a personal touch.',
            templates: [
                { id: 1, style: 'Kelly Blackwell', image: Image1, description: "Headshot-friendly layout with clean sections." },
                { id: 2, style: 'Howard Jones', image: Image2, description: "Professional design incorporating photo." },
                { id: 3, style: 'Samantha Williams', image: Image3, description: "Photo-friendly layout emphasizing clarity." },
                { id: 4, style: 'Olivia Taylor', image: Image4, description: "Modern design integrating a headshot." },
                { id: 5, style: 'Daniel Carter', image: Image5, description: "Elegant photo layout for professional resumes." },
                { id: 6, style: 'Emma Johnson', image: Image6, description: "Headshot-integrated simple and clean design." },
            ],
        },
        {
            id: 'professional',
            name: 'Professional',
            icon: <FaBriefcase className="inline-block mr-2" />, // Briefcase icon

            templateTitle: 'Classic Corporate Resumes',
            templateDescription: 'Time-tested, elegant, and industry-standard formats perfect for any senior or traditional role.',
            templates: [
                { id: 1, style: 'Kelly Blackwell', image: Image5, description: "Classic professional layout with traditional structure." },
                { id: 2, style: 'Howard Jones', image: Image3, description: "Elegant corporate resume format." },
                { id: 3, style: 'Samantha Williams', image: Image1, description: "Professional clean layout with formal styling." },
                { id: 4, style: 'Olivia Taylor', image: Image2, description: "Classic layout with emphasis on experience." },
                { id: 5, style: 'Daniel Carter', image: Image4, description: "Industry-standard professional resume." },
                { id: 6, style: 'Emma Johnson', image: Image6, description: "Formal resume layout for corporate jobs." },
            ],
        },
    ];



    const [activeTab, setActiveTab] = useState('all');
    const [allTaskDetails, setAllTaskDetails] = useState(tabsData[0]);
    // console.log("act,iveallTaskDetailsTab", allTaskDetails)
    const [underlineStyle, setUnderlineStyle] = useState({ width: 0, transform: 'translateX(0px)' });

    // Ref to hold all tab buttons
    const tabRefs = useRef([]);
    // Ref to hold the container for calculating relative position
    const containerRef = useRef(null);

    // Effect to calculate and update the underline position/width
    useEffect(() => {
        if (containerRef.current && tabRefs.current.length > 0) {
            const activeTabElement = tabRefs.current.find(
                (ref) => ref && ref.dataset.tabId === activeTab
            );

            if (activeTabElement) {
                const containerLeft = containerRef.current.getBoundingClientRect().left;
                const activeTabLeft = activeTabElement.getBoundingClientRect().left;

                setUnderlineStyle({
                    width: activeTabElement.offsetWidth,
                    transform: `translateX(${activeTabLeft - containerLeft}px)`,
                });
            }
        }
    }, [activeTab]);

    const currentTab = tabsData.find(tab => tab.id === activeTab);

    return (
        <section className='bg-white'>
            <Header />
            <div className='flex justify-center p-4 px-10 items-center'>
                {/* <div className='text-[#2e404a] text-[25px] font-nunito font-bold'>Aryu Resume</div> */}
                <div className='hidden md:flex  justify-between mt-3 '>
                    <div className="flex justify-center items-center ">
                        {steps.map((step, index) => {
                            const isCurrent = step.id === 1;
                            const isActive = step.id <= 1;

                            return (
                                <React.Fragment key={step.id}>
                                    <div className="flex items-center ">
                                        {/* Step Indicator (The numbered circle) */}
                                        <div
                                            className={`
              w-7 h-7 rounded-full flex items-center justify-center  text-[18px] font-nunito font-bold transition-colors duration-300 
              ${isCurrent
                                                    ? 'bg-[#05a2ff] text-white shadow-lg'
                                                    : 'bg-[#dde8ee] text-[#a8bdca]'
                                                }
            `}
                                        >
                                            {step.id}
                                        </div>

                                        {/* The Step Name/Label */}
                                        <div
                                            className={`ml-3 text-[16px] font-nunito font-normal  transition-colors duration-300
              ${isCurrent
                                                    ? 'text-[#0a337d]' // Active Text
                                                    : 'text-[#babec1]' // Inactive Text
                                                }
            `}
                                        >
                                            {step.name}
                                        </div>
                                    </div>

                                    {/* Separator Line */}
                                    {index < steps.length - 1 && (
                                        <div className="w-8 h-0.5 bg-gray-300 mx-1 " />
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
                {/* <div className='w-[10%]'></div> */}
            </div>


            {/* resume template */}

            <section className='px-4 md:px-20 pt-10 pb-20'>
                <div className='font-roboto text-[30px] md:text-[52px] text-[#2e404a] font-bold text-center mt-3'>{allTaskDetails?.templateTitle}</div>
                <div className=' font-nunito text-[18px] text-[#2e404a] font-normal leading-[25.2px] text-center mt-3'>{allTaskDetails?.
                    templateDescription}</div>


                {/* resume all template */}
                <div className="container mt-10 pt-10 ">


                    <div ref={containerRef} className="relative border-b border-gray-200">
                        <div className="flex  justify-between overflow-scroll md:overflow-hidden -mb-px">


                            <div
                                className="absolute bottom-0 h-0.5 bg-[#05a2ff] transition-all duration-300 ease-in-out"
                                style={{ width: `${underlineStyle.width}px`, transform: underlineStyle.transform }}
                            />

                            {tabsData.map((tab, index) => {
                                const isActive = tab.id === activeTab;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            setActiveTab(tab.id);
                                            setAllTaskDetails(tab);
                                        }}
                                        // Set the ref and a data attribute for useEffect to find it
                                        ref={el => tabRefs.current[index] = el}
                                        data-tab-id={tab.id}
                                        className={`
                  inline-flex items-center justify-center p-2 text-[20px] font-nunito font-bold  border-b-2 
                  transition-colors duration-200 ease-in-out whitespace-nowrap
                  ${isActive
                                                ? 'text-[#05a2ff] '
                                                : 'text-[#8d9ea8] border-transparent hover:[#8d9ea8] hover:border-gray-300'
                                            }
                `}
                                    >
                                        {tab.icon}
                                        {tab.name}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* 2. TAB CONTENT (Template Grid - same as before) */}
                    {/* ... (Your template grid content goes here) ... */}
                    <div className="py-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                            {currentTab && currentTab.templates.map((template) => (

                                <div className='' key={template.id}>
                                    <div

                                        className="relative bg-[#f7f9fc] rounded-lg shadow-md overflow-hidden group border-2 border-transparent cursor-pointer p-5"
                                    >
                                        {/* Image Container with Hover Shadow */}
                                        <div
                                            className=" w-full  flex items-center justify-center overflow-hidden relative rounded-lg
                       group-hover:shadow-[0_20px_60px_rgba(135,206,235,0.5)]  transition-all duration-500   "
                                        >
                                            {/* Image */}
                                            <img
                                                src={template.image}
                                                alt={template.style}
                                                className="relative z-10  w-fulll h-full object-contain rounded-lg"
                                            />

                                        </div>
                                        <div className="flex justify-end mt-3 ">


                                            <div className="flex space-x-2">
                                                <button className="px-2 p-1 bg-[#bac1c6] text-white font-nunito text-[12px] font-normal rounded-sm hover:bg-gray-300 transition-colors">
                                                    PDF
                                                </button>
                                                <button className="px-2 p-1 bg-[#bac1c6] text-white font-nunito text-[12px] font-normal  rounded-sm hover:bg-gray-300 transition-colors">
                                                    DOCX
                                                </button>
                                            </div>
                                        </div>

                                        {/* Button overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                                            <button
                                                className="px-6 py-3 bg-[#05a2ff] hover:bg-[#0875b4] text-white font-semibold rounded-lg shadow-xl transition-all"
                                                onClick={clickresumedetails}
                                            >
                                                Use This Template
                                            </button>
                                        </div>

                                        {/* Color Pickers and Download Buttons Section */}

                                    </div>
                                    <div className=" text-start text-[22px] font-roboto font-semibold text-[#30424c] mt-2">
                                        {template.style}
                                    </div>
                                    <div className=" text-start text-[14px] font-nunito font-normal text-[#778389]">
                                        {template?.description}
                                    </div>
                                </div>







                            ))}
                        </div>
                        {currentTab?.templates.length === 0 && (
                            <p className="text-center text-gray-500 mt-10 text-lg">
                                No templates found for the **{currentTab.name}** style yet.
                            </p>
                        )}
                    </div>
                </div>

            </section>

            <Footer />


        </section>
    )
}

export default Choose_template

