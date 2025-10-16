// import React, { useState, useEffect } from "react";
// import { IoMdAdd } from "react-icons/io";
// import { FiChevronDown, FiTrash2, FiBook, FiAward } from "react-icons/fi";

// export default function FinalizeForm() {
//   const sections = [
//     { title: "Languages", type: "language", icon: <FiBook size={20} /> },
//     { title: "Certifications and licenses", type: "full", icon: <FiAward size={20} /> },
//   ];

//   const [openSections, setOpenSections] = useState({});
//   const [skills, setSkills] = useState([{ id: 1, name: "", level: 0 }]);
//   const [experiences, setExperiences] = useState([{ id: Date.now(), skill: "", isOpen: false }]);
//   const [deletePopup, setDeletePopup] = useState({ show: false, section: null });

//   const steps = ["None", "Beginner", "Intermediate", "Advanced", "Expert"];
//   const stepWidth = 60;
//   const colors = ["#fff", "#a3d0ff", "#64b5f6", "#1e88e5", "#1565c0"];

//   // Disable body scroll when popup is open
//   useEffect(() => {
//     document.body.style.overflow = deletePopup.show ? "hidden" : "auto";
//     return () => (document.body.style.overflow = "auto");
//   }, [deletePopup.show]);

//   const handleToggleSection = (title) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [title]: !prev[title],
//     }));
//   };

//   const confirmDeleteSection = (title) => {
//     setDeletePopup({ show: true, section: title });
//   };

//   const deleteSection = () => {
//     const title = deletePopup.section;
//     setOpenSections((prev) => ({ ...prev, [title]: false }));
//     setDeletePopup({ show: false, section: null });
//   };

//   const cancelDelete = () => setDeletePopup({ show: false, section: null });

//   const toggleExperience = (id) => {
//     setExperiences((prev) =>
//       prev.map((exp) => (exp.id === id ? { ...exp, isOpen: !exp.isOpen } : exp))
//     );
//   };

//   const addExperience = () => {
//     setExperiences((prev) => [...prev, { id: Date.now(), skill: "", isOpen: false }]);
//   };

//   const deleteExperience = (id) => {
//     setExperiences((prev) => prev.filter((exp) => exp.id !== id));
//   };

//   const handleChange = (id, field, value) => {
//     setExperiences((prev) =>
//       prev.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
//     );
//   };

//   return (
//     <section>
//       <div className="p-4 bg-white h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-md space-y-4 relative">

//         {/* Section Buttons */}
//         <div className="flex flex-wrap gap-4">
//           {sections.map(
//             (section, idx) =>
//               !openSections[section.title] && (
//                 <button
//                   key={idx}
//                   onClick={() => handleToggleSection(section.title)}
//                   className="w-[300px] px-4 py-3 border rounded-lg bg-white hover:bg-gray-50 transition-all font-semibold flex justify-between items-center"
//                 >
//                   <span className="flex items-center gap-2">
//                     {section.icon} {section.title}
//                   </span>
//                   <FiChevronDown />
//                 </button>
//               )
//           )}
//         </div>

//         {/* Languages Section */}
//         {openSections["Languages"] && (
//           <div className="space-y-4 pb-10 mt-3">
        
//               <div
//                 key={experiences.id}
//                 className="border rounded-2xl bg-white transition-all duration-300 overflow-hidden"
//               >
//                 {/* Header */}
//                 <div
//                   className="flex justify-between items-center cursor-pointer p-4"
//                   onClick={() => toggleExperience(experiences.id)}
//                 >
//                   <div className="text-[#94a1ab] font-nunito font-normal text-[16px]">
//                   "New Skill
//                   </div>

//                   <div className="flex gap-4 items-center">
//                     <div
//                       className={`transition-transform duration-300 ${
//                         experiences.isOpen ? "rotate-180" : "rotate-0"
//                       }`}
//                     >
//                       <FiChevronDown size={22} className="text-[#cad8e1]" />
//                     </div>
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         deleteExperience(experiences.id);
//                       }}
//                       className="text-[#cad8e1] hover:text-[#ff0033]"
//                     >
//                       <FiTrash2 size={18} />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Collapsible Content */}
//                     {experiences.map((exp) => (
//                 <div
//                   className={`transition-all duration-500 overflow-hidden ${
//                     exp.isOpen ? "max-h-[400px] opacity-100 p-4" : "max-h-0 opacity-0 p-0"
//                   }`}
//                 >
//                   <input
//                     type="text"
//                     value={exp.skill}
//                     onChange={(e) => handleChange(exp.id, "skill", e.target.value)}
//                     placeholder="Enter skill"
//                     className="w-full p-3 border rounded-lg mb-3"
//                   />
//                   <button
//                     onClick={addExperience}
//                     className="flex items-center gap-2 text-blue-500 font-bold"
//                   >
//                     <IoMdAdd /> Add Another
//                   </button>
//                 </div>
//                   ))}
//               </div>
          
//           </div>
//         )}

//         {/* Certifications Section */}
//         {openSections["Certifications and licenses"] && (
//           <div className="border rounded-2xl p-4 bg-white overflow-hidden transition-all duration-300 space-y-4">
//             <div className="flex justify-between items-center mb-2">
//               <h2 className="text-[#94a1ab] font-nunito font-medium text-[18px]">
//                 Certifications and licenses
//               </h2>
//               <button
//                 onClick={() => confirmDeleteSection("Certifications and licenses")}
//                 className="flex items-center gap-1 text-[#cad8e1] hover:text-[#ff0033]"
//               >
//                 <FiTrash2 size={18} /> Delete
//               </button>
//             </div>
//             <p className="text-[#374151] font-nunito">All fields here are open and visible.</p>
//           </div>
//         )}
//       </div>

//       {/* Full-Screen Delete Confirmation Popup */}
//       {deletePopup.show && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-sm text-center">
//             <p className="text-sky-500 font-semibold mb-4">
//               Are you sure you want to delete "{deletePopup.section}"?
//             </p>
//             <div className="flex justify-around gap-4">
//               <button
//                 onClick={deleteSection}
//                 className="bg-sky-500 text-white font-bold px-4 py-2 rounded-md"
//               >
//                 Yes
//               </button>
//               <button
//                 onClick={cancelDelete}
//                 className="bg-gray-200 text-gray-700 font-bold px-4 py-2 rounded-md"
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }


import React, { useState, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import { FiChevronDown, FiTrash2, FiBook, FiAward } from "react-icons/fi";

export default function FinalizeForm() {
  const sections = [
    { title: "Languages", type: "language", icon: <FiBook size={20} /> },
    { title: "Certifications and licenses", type: "full", icon: <FiAward size={20} /> },
        { title: "Hobbies and interests", type: "full", icon: <FiAward size={20} /> },

  ];

  const [openSections, setOpenSections] = useState({});
  const [experiences, setExperiences] = useState([
    { id: Date.now(), skills: [{ id: 1, name: "" }], isOpen: false },
  ]);
  const [deletePopup, setDeletePopup] = useState({ show: false, section: null });

  // Disable body scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = deletePopup.show ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [deletePopup.show]);

  // Toggle section open/close
  const handleToggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // Confirm deletion popup
  const confirmDeleteSection = (title) => {
    setDeletePopup({ show: true, section: title });
  };

  const deleteSection = () => {
    const title = deletePopup.section;
    setOpenSections((prev) => ({ ...prev, [title]: false }));
    setDeletePopup({ show: false, section: null });
  };

  const cancelDelete = () => setDeletePopup({ show: false, section: null });

  // Toggle experience card open/close
  const toggleExperience = (id) => {
    setExperiences((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, isOpen: !exp.isOpen } : exp))
    );
  };

  // Add new experience card
  const addExperience = () => {
    setExperiences((prev) => [
      ...prev,
      { id: Date.now(), skills: [{ id: 1, name: "" }], isOpen: true },
    ]);
  };

  // Delete entire experience card
  const deleteExperience = (id) => {
    setExperiences((prev) => prev.filter((exp) => exp.id !== id));
  };

  // Add skill inside a card
  const addSkill = (expId) => {
    setExperiences((prev) =>
      prev.map((exp) =>
        exp.id === expId
          ? { ...exp, skills: [...exp.skills, { id: Date.now(), name: "" }] }
          : exp
      )
    );
  };

  // Delete skill inside a card
  const deleteSkill = (expId, skillId) => {
    setExperiences((prev) =>
      prev.map((exp) =>
        exp.id === expId
          ? { ...exp, skills: exp.skills.filter((s) => s.id !== skillId) }
          : exp
      )
    );
  };

  // Handle skill input change
  const handleSkillChange = (expId, skillId, value) => {
    setExperiences((prev) =>
      prev.map((exp) =>
        exp.id === expId
          ? {
              ...exp,
              skills: exp.skills.map((s) =>
                s.id === skillId ? { ...s, name: value } : s
              ),
            }
          : exp
      )
    );
  };

  return (
    <section>
      <div className="p-4 bg-white h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-md space-y-4 relative">

        {/* Section Buttons */}
        <div className="flex flex-wrap gap-4">
          {sections.map(
            (section, idx) =>
              !openSections[section.title] && (
                <button
                  key={idx}
                  onClick={() => handleToggleSection(section.title)}
                  className="w-[300px] px-4 py-3 border rounded-lg bg-white hover:bg-gray-50 transition-all font-semibold flex justify-between items-center"
                >
                  <span className="flex items-center gap-2">
                    {section.icon} {section.title}
                  </span>
                  <FiChevronDown />
                </button>
              )
          )}
        </div>

        {/* Languages Section */}
        {openSections["Languages"] && (
          <div className="space-y-4 pb-10 mt-3">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="border rounded-2xl bg-white transition-all duration-300 overflow-hidden"
              >
                {/* Header */}
                <div
                  className="flex justify-between items-center cursor-pointer p-4"
                  onClick={() => toggleExperience(exp.id)}
                >
                  <div className="text-[#94a1ab] font-nunito font-normal text-[16px]">
                    Skill Set
                  </div>

                  <div className="flex gap-4 items-center">
                    <div
                      className={`transition-transform duration-300 ${
                        exp.isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <FiChevronDown size={22} className="text-[#cad8e1]" />
                    </div>
                     <button
                onClick={() => confirmDeleteSection("Languages")}
                className="flex items-center gap-1 text-[#cad8e1] hover:text-[#ff0033]"
              >
                <FiTrash2 size={18} /> Delete
              </button>
                  </div>
                </div>

                {/* Collapsible Content */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    exp.isOpen ? "max-h-[600px] opacity-100 p-4" : "max-h-0 opacity-0 p-0"
                  }`}
                >
                  {exp.skills.map((skill) => (
                    <div key={skill.id} className="flex items-center gap-2 mb-2">
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) =>
                          handleSkillChange(exp.id, skill.id, e.target.value)
                        }
                        placeholder="Enter skill"
                        className="w-full p-3 border rounded-lg"
                      />
                      <button
                        onClick={() => deleteSkill(exp.id, skill.id)}
                        className="text-[#cad8e1] hover:text-[#ff0033]"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  ))}

                  <button
                    onClick={() => addSkill(exp.id)}
                    className="flex items-center gap-2 text-blue-500 font-bold mt-2"
                  >
                    <IoMdAdd /> Add Another Skill
                  </button>
                </div>
              </div>
            ))}

            {/* <button
              onClick={addExperience}
              className="flex items-center gap-2 text-blue-500 font-bold mt-2"
            >
              <IoMdAdd /> Add New Skill Set
            </button> */}
          </div>
        )}

        {/* Certifications Section */}
        {openSections["Certifications and licenses"] && (
          <div className="border rounded-2xl p-4 bg-white overflow-hidden transition-all duration-300 space-y-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-[#94a1ab] font-nunito font-medium text-[18px]">
                Certifications and licenses
              </h2>
              <button
                onClick={() => confirmDeleteSection("Certifications and licenses")}
                className="flex items-center gap-1 text-[#cad8e1] hover:text-[#ff0033]"
              >
                <FiTrash2 size={18} /> Delete
              </button>
            </div>
            <p className="text-[#374151] font-nunito">All fields here are open and visible.</p>
          </div>
        )}
      </div>

      {/* Full-Screen Delete Confirmation Popup */}
      {deletePopup.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-sm text-center">
            <p className="text-sky-500 font-semibold mb-4">
              Are you sure you want to delete "{deletePopup.section}"?
            </p>
            <div className="flex justify-around gap-4">
              <button
                onClick={deleteSection}
                className="bg-sky-500 text-white font-bold px-4 py-2 rounded-md"
              >
                Yes
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-200 text-gray-700 font-bold px-4 py-2 rounded-md"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

