import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

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



  return (
    <section>
      <div className="p-4 bg-white h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-md">
        <div className="flex justify-between">  <h1 className="text-[24px] font-roboto font-semibold text-[#2e404a] mb-2">
          Skills
        </h1>
          <div className="relative inline-block text-left">
            <button
              className="flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 font-semibold hover:bg-gray-200 transition-none"
            >
              Skills tips
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
              <div className="flex justify-between items-start gap-4">
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
                  <div className="flex items-center mt-2">
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
                      className="flex items-center gap-1 text-[#cad8e1] hover:text-[#ff0033]"
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



      </div>
    </section>
  );
}

export default SkillsForm;
