import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronUp, FiTrash2 } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";

import { Editor } from 'primereact/editor';


import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import { FaRegLightbulb } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FiX } from "react-icons/fi";


import { motion, AnimatePresence } from "framer-motion";


export default function Experience_form() {

  const [experiences, setExperiences] = useState([
    {
      id: Date.now(),
      jobTitle: "",
      employer: "",
      location: "",
      startDate: "",
      endDate: "",
      isOpen: true,
      touched: {},
      showPicker: false,
      year: new Date().getFullYear(),
    },
  ]);

  const pickerRefs = useRef({});
  const inputRefs = useRef({});

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: Date.now(),
        jobTitle: "",
        employer: "",
        location: "",
        startDate: "",
        endDate: "",
        isOpen: true,
        touched: {},
        showPicker: false,
        year: new Date().getFullYear(),
      },
    ]);
  };

  const toggleForm = (id) => {
    setExperiences((prev) =>
      prev.map((exp) =>
        exp.id === id ? { ...exp, isOpen: !exp.isOpen } : exp
      )
    );
  };

  const handleChange = (id, field, value) => {
    setExperiences((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  };

  const handleBlur = (id, field) => {
    setExperiences((prev) =>
      prev.map((exp) =>
        exp.id === id
          ? { ...exp, touched: { ...exp.touched, [field]: true } }
          : exp
      )
    );
  };

  const deleteExperience = (id) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  const handleSelect = (id, value) => {
    setExperiences((prev) =>
      prev.map((exp) =>
        exp.id === id
          ? { ...exp, endDate: value, showPicker: false }
          : exp
      )
    );
  };

  const togglePicker = (id) => {
    setExperiences((prev) =>
      prev.map((exp) =>
        exp.id === id ? { ...exp, showPicker: !exp.showPicker } : exp
      )
    );
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      setExperiences((prev) =>
        prev.map((exp) => {
          const picker = pickerRefs.current[exp.id];
          const input = inputRefs.current[exp.id];
          if (picker && input &&
            !picker.contains(event.target) &&
            !input.contains(event.target)) {
            return { ...exp, showPicker: false };
          }
          return exp;
        })
      );
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // useEffect(() => {
  //   experiences.forEach((exp) => {
  //     const picker = pickerRefs.current[exp.id];
  //     const input = inputRefs.current[exp.id];
  //     if (picker && input && exp.showPicker) {
  //       const inputRect = input.getBoundingClientRect();
  //       const pickerHeight = picker.offsetHeight;
  //       const viewportHeight = window.innerHeight;

  //       // If not enough space below, open upward
  //       if (inputRect.bottom + pickerHeight + 8 > viewportHeight) {
  //         picker.style.top = "auto";
  //         picker.style.bottom = `${inputRect.height + 8}px`;
  //       } else {
  //         picker.style.bottom = "auto";
  //         picker.style.top = `${inputRect.height + 8}px`;
  //       }
  //     }
  //   });
  // }, [experiences]);
  const [skillTipsClicked, setSkillTipsClicked] = useState(false)

  return (

    <section className="">
      <div className="p-4 relative bg-white h-[500px]  scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-md">

        <div className="flex justify-between">  <h1 className="text-[24px] font-roboto ffont-bold  text-[#2E404A]  mb-2">
          Experience
        </h1>
          <div className=" inline-block text-left">
            <button
              onClick={() => setSkillTipsClicked((prev) => !prev)}
              className="flex items-center gap-2 bg-[#fff9eb] border border-[#eec66a]
                   rounded-lg px-3 py-1 text-[16px] text-[#2E404A]font-nunito font-normal  transition-all"
            >
              {/* Bulb Icon */}
              <motion.div
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaRegLightbulb className="text-yellow-400 text-lg" />
              </motion.div>
              Experience Tips

              {/* Animated Arrow */}
              <motion.div
                animate={{ rotate: skillTipsClicked ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-600 text-lg"
              >
                <IoIosArrowDown />
              </motion.div>
            </button>

          </div></div>
        <p className="text-[#3e5679] text-[16px] font-nunito font-normal mb-8">
          List your work experience starting with the most recent position first.
        </p>

        <div className="space-y-4 pb-10">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="border rounded-2xl p-4 overflow-hidden -z-40 bg-white transition-all duration-300"
            >
              {/* Header */}
              <div
                onClick={() => toggleForm(exp.id)}
                className="flex justify-between items-center cursor-pointer group p-2 rounded-md b"
              >
                <div className="text-[#94a1ab] font-nunito font-normal text-[16px]">
                  <div>{exp.jobTitle || "Job Title"}, {exp.employer || "Employer"}</div>
                  <div>{exp.startDate || "MM/YYYY"} - {exp.endDate || "MM/YYYY"}</div>
                </div>

                <div className="flex justify-end gap-4">
                  <div
                    className={`transition-transform duration-300 ${exp.isOpen ? "rotate-180" : "rotate-0"}`}
                  >
                    <FiChevronDown
                      size={22}
                      className="text-[#cad8e1] group-hover:text-[#2da2ff]"
                    />
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // prevent toggling the form
                      deleteExperience(exp.id);
                    }}
                    className="flex items-center gap-1 text-[#cad8e1] hover:text-[#ff0033]"
                    type="button"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div
                className={`transition-all duration-500  ${exp.isOpen ? " h-full md:max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Job Title */}
                    <div>
                      <label className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
                        Job Title
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={exp.jobTitle}
                          onChange={(e) => handleChange(exp.id, "jobTitle", e.target.value)}
                          onBlur={() => handleBlur(exp.id, "jobTitle")}
                          placeholder="Enter your job title"
                          className="w-full p-3 pr-12 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-[#abdffc] focus:shadow-md transition-all duration-300"
                        />
                        {exp.touched.jobTitle && exp.jobTitle.trim() !== "" && (
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

                    {/* Employer */}
                    <div>
                      <label className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
                        Employer
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={exp.employer}
                          onChange={(e) => handleChange(exp.id, "employer", e.target.value)}
                          onBlur={() => handleBlur(exp.id, "employer")}
                          placeholder="Employer"
                          className="w-full p-3 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-[#abdffc] focus:shadow-md transition-all duration-300"
                        />
                        {exp.touched.employer && exp.employer.trim() !== "" && (
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

                  {/* Location + Dates */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
                        Location
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={exp.location}
                          onChange={(e) => handleChange(exp.id, "location", e.target.value)}
                          onBlur={() => handleBlur(exp.id, "location")}
                          placeholder="Location"
                          className="w-full p-3 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-[#abdffc] focus:shadow-md transition-all duration-300"
                        />
                        {exp.touched.location && exp.location.trim() !== "" && (
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
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
                          Start Date
                        </label>
                        <input
                          type="month"
                          value={exp.startDate}
                          onChange={(e) => handleChange(exp.id, "startDate", e.target.value)}
                          onBlur={() => handleBlur(exp.id, "startDate")}
                          className="w-full p-3 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-[#abdffc] focus:shadow-md transition-all duration-300"
                        />
                      </div>
                      {/* <div>
                        <label className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
                          End Date
                        </label>
                        <input
                          type="month"
                          value={exp.endDate}
                          onChange={(e) => handleChange(exp.id, "endDate", e.target.value)}
                          onBlur={() => handleBlur(exp.id, "endDate")}
                          className="w-full p-3 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-[#abdffc] focus:shadow-md transition-all duration-300"
                        />
                      </div> */}

                      <div className="relative inline-block">
                        <label className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
                          End Date
                        </label>
                        <input
                          type="text"
                          readOnly
                          ref={(el) => (inputRefs.current[exp.id] = el)}
                          value={exp.endDate}
                          onClick={() => togglePicker(exp.id)}
                          placeholder="MM/YYYY"
                          className="w-full p-3 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-[#abdffc] focus:shadow-md transition-all duration-300"
                        />

                        {/* Dropdown */}
                        {exp.showPicker && (
                          <div
                            ref={(el) => (pickerRefs.current[exp.id] = el)}
                            className="absolute right-10 -mt-24 w-60 bg-white shadow-xl rounded-lg p-4 z-[2147483647]"
                          >
                            {/* Year Header */}
                            <div className="flex justify-between items-center mb-3">
                              <button
                                onClick={() =>
                                  handleChange(exp.id, "year", exp.year - 1)
                                }
                                className="px-2 text-gray-500 hover:text-black"
                              >
                                &lt;
                              </button>
                              <span className="font-semibold">{exp.year}</span>
                              <button
                                onClick={() =>
                                  handleChange(exp.id, "year", exp.year + 1)
                                }
                                className="px-2 text-gray-500 hover:text-black"
                              >
                                &gt;
                              </button>
                            </div>

                            {/* Month Grid */}
                            <div className="grid grid-cols-3 gap-2 text-center">
                              {months.map((month) => (
                                <div
                                  key={month}
                                  onClick={() =>
                                    handleSelect(exp.id, `${month} ${exp.year}`)
                                  }
                                  className="p-2 rounded-md cursor-pointer hover:bg-blue-100 active:bg-blue-200 transition text-gray-700"
                                >
                                  {month}
                                </div>
                              ))}
                            </div>

                            {/* Currently work here */}
                            <div className="mt-3 text-center border-t pt-2">
                              <button
                                onClick={() =>
                                  handleSelect(exp.id, "Currently work here")
                                }
                                className="text-blue-500 hover:underline text-sm"
                              >
                                Currently work here
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
                      Description
                    </label>
                    <div>
                      <div className="card rounded-lg">
                        <Editor className="rounded-lg" onTextChange={(e) => setText(e.htmlValue)} style={{ height: '150px' }} />
                      </div>
                    </div>


                  </div>

                </div>
              </div>
            </div>
          ))}

          {/* Add Experience */}
          <button
            onClick={addExperience}
            className="flex items-center text-[16px] font-nunito font-bold gap-2 text-[#2da2ff] px-4 py-2 rounded-md w-full mt-2"
          >
            <IoMdAdd className="w-6 h-6" /> Add Work Experience
          </button>
        </div>

        {skillTipsClicked && (
        <AnimatePresence>
          <div className=" z-50 flex items-start justify-end overflow-y-auto overflow-x-hidden  " onClick={() => setSkillTipsClicked(false)}>
            <div className="absolute inset-0 left-[30%]  flex items-center justify-center  bg-transparent  h-full top-20">
              {/* Animated modal container */}
              <motion.div
                initial={{ y: 70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 70, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                  duration: 0.4
                }}
                className="w-screen py-3 lg:w-[30vw]  rounded-xl bg-white 
           border-1 shadow-[0_0_25px_rgba(59,130,246,0.3)]"

              >
                <div className="flex justify-between items-center  px-4">
                  <div className=" w-full  font-nunito font-bold text-[14px] text-[#2E404A]">
                    Experience tips
                  </div>
                  <div
                    onClick={() => setSkillTipsClicked(false)}
                    className="text-gray-300 font-extrabold text-xl hover:text-gray-400 focus:outline-none w-8 h-8 flex items-center justify-center cursor-pointer"
                  >
                    <FiX />
                  </div>
                </div>
                <hr />

                <p className="text-gray-700 text-sm leading-relaxed p-4">
                  <div className="">
                    {/* ✅ Positive tips */}
                    <div className="flex items-start gap-2">
                      <FiCheckCircle className="text-green-500 text-xl mt-1" />
                      <div>
                        <p className="font-nunito font-bold text-[14px] text-[#2E404A]">Skip “responsible for”</p>
                        <p className="font-nunito font-normal text-[14px] text-[#2E404A]">Use action verbs like “led”, “improved”, or “created.”</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 mt-3">
                      <FiCheckCircle className="text-green-500 text-xl mt-1" />
                      <div>
                        <p className="font-nunito font-bold text-[14px] text-[#2E404A]">Use bullet points</p>
                        <p className="font-nunito font-normal text-[14px] text-[#2E404A]">
                          Make your achievements stand out with concise bullet points.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 mt-3">
                      <FiCheckCircle className="text-green-500 text-xl mt-1" />
                      <div>
                        <p className="font-nunito font-bold text-[14px] text-[#2E404A]">Keep descriptions short and clear</p>
                        <p className="font-nunito font-normal text-[14px] text-[#2E404A]">
                          Aim for 4–5 of your strongest, most relevant skills.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 mt-3">
                      <FiCheckCircle className="text-green-500 text-xl mt-1" />
                      <div>
                        <p className="font-nunito font-bold text-[14px] text-[#2E404A]">Show your impact</p>
                        <p className="font-nunito font-normal text-[14px] text-[#2E404A]">
                          Highlight your accomplishments, not generic duties.
                        </p>
                      </div>
                    </div>


                    <div className="flex items-start gap-2 mt-3">
                      <FiCheckCircle className="text-green-500 text-xl mt-1" />
                      <div>
                        <p className="font-nunito font-bold text-[14px] text-[#2E404A]">Add numbers when possible</p>
                        <p className="font-nunito font-normal text-[14px] text-[#2E404A]">
                          Stats speak louder than words and prove impact.

                        </p>
                      </div>
                    </div>

                    <hr className="my-2" />

                    {/* ❌ Negative tips */}
                    <div className="flex items-start gap-2 mt-3">
                      <FiXCircle className="text-red-500 text-xl mt-1" />
                      <div>
                        <p className="font-nunito font-bold text-[14px] text-[#2E404A]">Don't abbreviate job titles</p>
                        <p className="font-nunito font-normal text-[14px] text-[#2E404A]">
Write the full job title so it’s easy to understand.                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 mt-3">
                      <FiXCircle className="text-red-500 text-xl mt-1" />
                      <div>
                        <p className="font-nunito font-bold text-[14px] text-[#2E404A]">Don’t use “I” or full sentences</p>
                        <p className="font-nunito font-normal text-[14px] text-[#2E404A]">
Keep bullet points short, starting with action verbs.

                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 mt-3">
                      <FiXCircle className="text-red-500 text-xl mt-1" />
                      <div>
                        <p className="font-nunito font-bold text-[14px] text-[#2E404A]">Don’t exaggerate or lie
</p>
                        <p className="font-nunito font-normal text-[14px] text-[#2E404A]">
                          False claims can backfire during interviews.
                        </p>
                      </div>
                    </div>
                  </div>
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatePresence>
      )}
      </div>
      

    </section>
  );
}
