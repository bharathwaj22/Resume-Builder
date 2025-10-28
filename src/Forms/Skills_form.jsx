import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
import { FiX } from "react-icons/fi";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";





const steps = ["Novice", "Beginner", "Intermediate", "Skilled", "Pro"];
const colors = ["#b2e2ff", "#98d8ff", "#64c5ff", "#30b2ff", "#05a2ff"];

function SkillsForm() {
  const [isActive, setIsActive] = useState(true);

  const [selected, setSelected] = useState(2);
  const stepWidth = 55;

  const [experiences, setExperiences] = useState([
    { skill: "", level: 2, id: Date.now() + Math.random() },
  ]);

  const addExperience = () => {
    setExperiences([
      ...experiences,
      { skill: "", level: 2, id: Date.now() + Math.random() },
    ]);
  };

  // Update skill or level individually
  const handleChange = (id, field, value) => {
    setExperiences((prev) =>
      prev.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  // Delete a skill
  const handleDelete = (id) => {
    setExperiences((prev) => prev.filter((exp) => exp.id !== id));
  };



  const [skillTipsClicked, setSkillTipsClicked] = useState(false)


  return (
    <section className="">
      <div className=" relative p-4 bg-white h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-md">
        <div className="flex justify-between">  <h1 className="text-[24px] font-roboto ffont-bold  text-[#2E404A]  mb-2">
          Skills
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
              Skills Tips

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
        <p className="text-[#3e5679] text-[16px] font-nunito font-normal mb-3">
          Add your most relevant professional skills.
        </p>
        <div className="flex  gap-5">  <div
          onClick={() => setIsActive(!isActive)}
          className={`relative w-12 h-6 rounded-full cursor-pointer transition ${isActive ? "bg-[#05a2fe]" : "bg-[#ebf1f4]"
            }`}
        >
          <div
            className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition ${isActive ? "translate-x-6" : "translate-x-0"
              }`}
          ></div>

        </div>
          <div className="text-[#3e5679] text-[16px] font-nunito font-normal">
            Show experience level</div></div>


        <div className="space-y-4 pb-10 mt-3">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="border rounded-2xl p-4 bg-white transition-all duration-300 "
            >
              <div className="flex md:hidden  justify-end">
                  <button
                      onClick={() => handleDelete(exp.id)}
                      className="  flex items-center gap-1 text-[#cad8e1] hover:text-[#ff0033]"
                    >
                      <FiTrash2 size={16} />
                    </button>
              </div>
              <div className="flex flex-wrap justify-between items-start gap-4">
                {/* Skill input */}
                <div className="flex-1">
                  <label className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
                    Skills
                  </label>
                  <input
                    type="text"
                    value={exp.skill}
                    onChange={(e) =>
                      handleChange(exp.id, "skill", e.target.value)
                    }
                    placeholder="Enter skill"
                    className="w-full p-3 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-[#abdffc] focus:shadow-md transition-all duration-300"
                  />
                </div>

                {/* Level slider */}
                <div className="">
                  <div className="text-[16px] font-nunito font-normal">
                    <span className="text-[#2e4067]"> Level — </span><span className="text-[#2da2ff]">{steps[exp.level]}</span>
                  </div>
                  <div className="flex  items-center mt-2">
                    <div className={`relative w-[300px] h-10 transition ${isActive ? "" : "opacity-50 pointer-events-none"
                      }`}>
                      {/* Background line */}
                      <div className="absolute top-1/2 transform -translate-y-1/2 w-[275px] h-[50px] bg-[#ddf2ff] rounded-md"></div>

                      {steps.slice(1).map((_, index) => (
                        <div
                          key={index}
                          className="absolute top-1 bottom-0 w-[1px] h-8 bg-[#99dbff]"
                          style={{ left: `${(index + 1) * stepWidth}px` }}
                        ></div>
                      ))}

                      <div
                        className="absolute -top-1 left-0 h-[50px] w-[55px] rounded-md transition-all duration-500"
                        style={{
                          transform: `translateX(${exp.level * stepWidth}px)`,
                          backgroundColor: colors[exp.level],
                        }}
                      ></div>

                      {steps.map((_, index) => (
                        <div
                          key={index}
                          onClick={() => handleChange(exp.id, "level", index)}
                          className="absolute top-0 left-0 w-[55px] h-10 cursor-pointer"
                          style={{ transform: `translateX(${index * stepWidth}px)` }}
                        ></div>
                      ))}


                    </div>
                    <button
                      onClick={() => handleDelete(exp.id)}
                      className=" hidden md:flex items-center gap-1 text-[#cad8e1] hover:text-[#ff0033]"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>

                </div>

                {/* Delete button */}

              </div>
            </div>
          ))}

          {/* Add Experience */}
          <button
            onClick={addExperience}
            className="flex items-center text-[16px] font-nunito font-bold gap-2 text-[#2da2ff] px-4 py-2 rounded-md w-full mt-2"
          >
            <IoMdAdd className="w-6 h-6" /> Add Skills
          </button>
        </div>

  {skillTipsClicked && (
        <AnimatePresence>
          <div className=" z-50 flex items-start justify-end overflow-y-auto overflow-x-hidden  " onClick={() => setSkillTipsClicked(false)}>
            <div className="absolute inset-0 left-[30%]  flex items-center justify-center  bg-transparent  h-full">
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
                    Skills tips
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
                        <p className="font-nunito font-bold text-[14px] text-[#2E404A]">List job-relevant skills</p>
                        <p className="font-nunito font-normal text-[14px] text-[#2E404A]">Match the job you're applying for.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 mt-3">
                      <FiCheckCircle className="text-green-500 text-xl mt-1" />
                      <div>
                        <p className="font-nunito font-bold text-[14px] text-[#2E404A]">Use keywords from job description</p>
                        <p className="font-nunito font-normal text-[14px] text-[#2E404A]">
                          It helps you pass Applicant Tracking Systems (ATS).
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 mt-3">
                      <FiCheckCircle className="text-green-500 text-xl mt-1" />
                      <div>
                        <p className="font-nunito font-bold text-[14px] text-[#2E404A]">Keep it concise</p>
                        <p className="font-nunito font-normal text-[14px] text-[#2E404A]">
                          Aim for 4–5 of your strongest, most relevant skills.
                        </p>
                      </div>
                    </div>

                    <hr className="my-2" />

                    {/* ❌ Negative tips */}
                    <div className="flex items-start gap-2 mt-3">
                      <FiXCircle className="text-red-500 text-xl mt-1" />
                      <div>
                        <p className="font-nunito font-bold text-[14px] text-[#2E404A]">Don't include outdated tools and software</p>
                        <p className="font-nunito font-normal text-[14px] text-[#2E404A]">
                          Show you're up to date with current tech.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 mt-3">
                      <FiXCircle className="text-red-500 text-xl mt-1" />
                      <div>
                        <p className="font-nunito font-bold text-[14px] text-[#2E404A]">Don't list general traits as skills</p>
                        <p className="font-nunito font-normal text-[14px] text-[#2E404A]">
                          Avoid terms like “hard-working” or “fast learner.”
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 mt-3">
                      <FiXCircle className="text-red-500 text-xl mt-1" />
                      <div>
                        <p className="font-nunito font-bold text-[14px] text-[#2E404A]">Don't lie about your skills</p>
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

export default SkillsForm;
