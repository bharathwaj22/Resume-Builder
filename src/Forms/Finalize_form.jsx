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


// import React, { useState, useEffect } from "react";
// import { IoMdAdd } from "react-icons/io";
// import { FiChevronDown, FiTrash2, FiBook, FiAward } from "react-icons/fi";

// export default function FinalizeForm() {
//   const sections = [
//     { title: "Languages", type: "language", icon: <FiBook size={20} /> },
//     { title: "Certifications and licenses", type: "full", icon: <FiAward size={20} /> },
//     { title: "Hobbies and interests", type: "full", icon: <FiAward size={20} /> },

//   ];

//   const [openSections, setOpenSections] = useState({});
//   const [experiences, setExperiences] = useState([
//     { id: Date.now(), skills: [{ id: 1, name: "" }], isOpen: false },
//   ]);
//   const [deletePopup, setDeletePopup] = useState({ show: false, section: null });

//   // Disable body scroll when popup is open
//   useEffect(() => {
//     document.body.style.overflow = deletePopup.show ? "hidden" : "auto";
//     return () => (document.body.style.overflow = "auto");
//   }, [deletePopup.show]);

//   // Toggle section open/close
//   const handleToggleSection = (title) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [title]: !prev[title],
//     }));
//   };

//   // Confirm deletion popup
//   const confirmDeleteSection = (title) => {
//     setDeletePopup({ show: true, section: title });
//   };

//   const deleteSection = () => {
//     const title = deletePopup.section;
//     setOpenSections((prev) => ({ ...prev, [title]: false }));
//     setDeletePopup({ show: false, section: null });
//   };

//   const cancelDelete = () => setDeletePopup({ show: false, section: null });

//   // Toggle experience card open/close
//   const toggleExperience = (id) => {
//     setExperiences((prev) =>
//       prev.map((exp) => (exp.id === id ? { ...exp, isOpen: !exp.isOpen } : exp))
//     );
//   };

//   // Add new experience card
//   const addExperience = () => {
//     setExperiences((prev) => [
//       ...prev,
//       { id: Date.now(), skills: [{ id: 1, name: "" }], isOpen: true },
//     ]);
//   };

//   // Delete entire experience card
//   const deleteExperience = (id) => {
//     setExperiences((prev) => prev.filter((exp) => exp.id !== id));
//   };

//   // Add skill inside a card
//   const addSkill = (expId) => {
//     setExperiences((prev) =>
//       prev.map((exp) =>
//         exp.id === expId
//           ? { ...exp, skills: [...exp.skills, { id: Date.now(), name: "" }] }
//           : exp
//       )
//     );
//   };

//   // Delete skill inside a card
//   const deleteSkill = (expId, skillId) => {
//     setExperiences((prev) =>
//       prev.map((exp) =>
//         exp.id === expId
//           ? { ...exp, skills: exp.skills.filter((s) => s.id !== skillId) }
//           : exp
//       )
//     );
//   };

//   // Handle skill input change
//   const handleSkillChange = (expId, skillId, value) => {
//     setExperiences((prev) =>
//       prev.map((exp) =>
//         exp.id === expId
//           ? {
//             ...exp,
//             skills: exp.skills.map((s) =>
//               s.id === skillId ? { ...s, name: value } : s
//             ),
//           }
//           : exp
//       )
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
//             {experiences.map((exp) => (
//               <div
//                 key={exp.id}
//                 className="border rounded-2xl bg-white transition-all duration-300 overflow-hidden"
//               >
//                 {/* Header */}
//                 <div
//                   className="flex justify-between items-center cursor-pointer p-4"
//                   onClick={() => toggleExperience(exp.id)}
//                 >
//                   <div className="text-[#94a1ab] font-nunito font-normal text-[16px]">
//                     Skill Set
//                   </div>

//                   <div className="flex gap-4 items-center">
//                     <div
//                       className={`transition-transform duration-300 ${exp.isOpen ? "rotate-180" : "rotate-0"
//                         }`}
//                     >
//                       <FiChevronDown size={22} className="text-[#cad8e1]" />
//                     </div>
//                     <button
//                       onClick={() => confirmDeleteSection("Languages")}
//                       className="flex items-center gap-1 text-[#cad8e1] hover:text-[#ff0033]"
//                     >
//                       <FiTrash2 size={18} /> Delete
//                     </button>
//                   </div>
//                 </div>

//                 {/* Collapsible Content */}
//                 <div
//                   className={`transition-all duration-500 overflow-hidden ${exp.isOpen ? "max-h-[600px] opacity-100 p-4" : "max-h-0 opacity-0 p-0"
//                     }`}
//                 >
//                   {exp.skills.map((skill) => (
//                     <div key={skill.id} className="flex items-center gap-2 mb-2">
//                       <input
//                         type="text"
//                         value={skill.name}
//                         onChange={(e) =>
//                           handleSkillChange(exp.id, skill.id, e.target.value)
//                         }
//                         placeholder="Enter skill"
//                         className="w-full p-3 border rounded-lg"
//                       />
//                       <button
//                         onClick={() => deleteSkill(exp.id, skill.id)}
//                         className="text-[#cad8e1] hover:text-[#ff0033]"
//                       >
//                         <FiTrash2 size={18} />
//                       </button>
//                     </div>
//                   ))}

//                   <button
//                     onClick={() => addSkill(exp.id)}
//                     className="flex items-center gap-2 text-blue-500 font-bold mt-2"
//                   >
//                     <IoMdAdd /> Add Another Skill
//                   </button>
//                 </div>
//               </div>
//             ))}

//             {/* <button
//               onClick={addExperience}
//               className="flex items-center gap-2 text-blue-500 font-bold mt-2"
//             >
//               <IoMdAdd /> Add New Skill Set
//             </button> */}
//           </div>
//         )}

//         {/* Certifications Section */}
//         {openSections["Certifications and licenses"] && (
//           <div className="space-y-4 pb-10 mt-3">
//             {experiences.map((exp) => (
//               <div
//                 key={exp.id}
//                 className="border rounded-2xl bg-white transition-all duration-300 overflow-hidden"
//               >
//                 {/* Header */}
//                 <div
//                   className="flex justify-between items-center cursor-pointer p-4"
//                   onClick={() => toggleExperience(exp.id)}
//                 >
//                   <div className="text-[#94a1ab] font-nunito font-normal text-[16px]">
//                     Skill Set
//                   </div>

//                   <div className="flex gap-4 items-center">
//                     <div
//                       className={`transition-transform duration-300 ${exp.isOpen ? "rotate-180" : "rotate-0"
//                         }`}
//                     >
//                       <FiChevronDown size={22} className="text-[#cad8e1]" />
//                     </div>
//                     <button
//                       onClick={() => confirmDeleteSection("Languages")}
//                       className="flex items-center gap-1 text-[#cad8e1] hover:text-[#ff0033]"
//                     >
//                       <FiTrash2 size={18} /> Delete
//                     </button>
//                   </div>
//                 </div>

//                 {/* Collapsible Content */}
//                 <div
//                   className={`transition-all duration-500 overflow-hidden ${exp.isOpen ? "max-h-[600px] opacity-100 p-4" : "max-h-0 opacity-0 p-0"
//                     }`}
//                 >
//                   {exp.skills.map((skill) => (
//                     <div key={skill.id} className="flex items-center gap-2 mb-2">
//                       <input
//                         type="text"
//                         value={skill.name}
//                         onChange={(e) =>
//                           handleSkillChange(exp.id, skill.id, e.target.value)
//                         }
//                         placeholder="Enter skill"
//                         className="w-full p-3 border rounded-lg"
//                       />
//                       <button
//                         onClick={() => deleteSkill(exp.id, skill.id)}
//                         className="text-[#cad8e1] hover:text-[#ff0033]"
//                       >
//                         <FiTrash2 size={18} />
//                       </button>
//                     </div>
//                   ))}

//                   <button
//                     onClick={() => addSkill(exp.id)}
//                     className="flex items-center gap-2 text-blue-500 font-bold mt-2"
//                   >
//                     <IoMdAdd /> Add Another Skill
//                   </button>
//                 </div>
//               </div>
//             ))}

//             {/* <button
//               onClick={addExperience}
//               className="flex items-center gap-2 text-blue-500 font-bold mt-2"
//             >
//               <IoMdAdd /> Add New Skill Set
//             </button> */}
//           </div>
//         )}

//              {openSections["Hobbies and interests"] && (
//            <div className="space-y-4 pb-10 mt-3">
//             {experiences.map((exp) => (
//               <div
//                 key={exp.id}
//                 className="border rounded-2xl bg-white transition-all duration-300 overflow-hidden"
//               >
//                 {/* Header */}
//                 <div
//                   className="flex justify-between items-center cursor-pointer p-4"
//                   onClick={() => toggleExperience(exp.id)}
//                 >
//                   <div className="text-[#94a1ab] font-nunito font-normal text-[16px]">
//                     Skill Set
//                   </div>

//                   <div className="flex gap-4 items-center">
//                     <div
//                       className={`transition-transform duration-300 ${exp.isOpen ? "rotate-180" : "rotate-0"
//                         }`}
//                     >
//                       <FiChevronDown size={22} className="text-[#cad8e1]" />
//                     </div>
//                     <button
//                       onClick={() => confirmDeleteSection("Hobbies and interestss")}
//                       className="flex items-center gap-1 text-[#cad8e1] hover:text-[#ff0033]"
//                     >
//                       <FiTrash2 size={18} /> Delete
//                     </button>
//                   </div>
//                 </div>

//                 {/* Collapsible Content */}
//                 <div
//                   className={`transition-all duration-500 overflow-hidden ${exp.isOpen ? "max-h-[600px] opacity-100 p-4" : "max-h-0 opacity-0 p-0"
//                     }`}
//                 >
//                   {exp.skills.map((skill) => (
//                     <div key={skill.id} className="flex items-center gap-2 mb-2">
//                       <input
//                         type="text"
//                         value={skill.name}
//                         onChange={(e) =>
//                           handleSkillChange(exp.id, skill.id, e.target.value)
//                         }
//                         placeholder="Enter skill"
//                         className="w-full p-3 border rounded-lg"
//                       />
//                       <button
//                         onClick={() => deleteSkill(exp.id, skill.id)}
//                         className="text-[#cad8e1] hover:text-[#ff0033]"
//                       >
//                         <FiTrash2 size={18} />
//                       </button>
//                     </div>
//                   ))}

//                   <button
//                     onClick={() => addSkill(exp.id)}
//                     className="flex items-center gap-2 text-blue-500 font-bold mt-2"
//                   >
//                     <IoMdAdd /> Add Another Skill
//                   </button>
//                 </div>
//               </div>
//             ))}

//             {/* <button
//               onClick={addExperience}
//               className="flex items-center gap-2 text-blue-500 font-bold mt-2"
//             >
//               <IoMdAdd /> Add New Skill Set
//             </button> */}
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
import {
  FiChevronDown,
  FiTrash2,
  FiBook,
  FiAward,
  FiGlobe,
  FiUser,
  FiEdit3,
} from "react-icons/fi";
import { Editor } from 'primereact/editor';

import { Description } from "@headlessui/react";


const steps = ["Novice", "Beginner", "Intermediate", "Skilled", "Pro"];
const colors = ["#b2e2ff", "#98d8ff", "#64c5ff", "#30b2ff", "#05a2ff"];


export default function FinalizeForm() {
  const [isActive, setIsActive] = useState(true);

  const [selected, setSelected] = useState(2);
  const stepWidth = 55;
  const sections = [
    { title: "Languages", icon: <FiBook size={20} />, description: "If relevant, add your native language and any foreign languages you know." },
    { title: "Certifications and licenses", icon: <FiAward size={20} />, description: "Add credentials that back up your expertise." },
    { title: "Hobbies and interests", icon: <FiAward size={20} />, description: "Include activities relevant to your job or industry." },
    { title: "Awards and honors", icon: <FiAward size={20} />, description: "Share achievements and milestones you’re proud of." },
    { title: "Websites and social media", icon: <FiGlobe size={20} />, description: "Share your portfolio, blog, LinkedIn, or other related websites." },
    { title: "References", icon: <FiUser size={20} />, description: "This builds trust and confidence in your candidacy." },
    { title: "Custom section", icon: <FiEdit3 size={20} />, description: "Create a custom section for any extra info you’d like to add." },
  ];

  const initialSkillData = {};
  sections.forEach((section, idx) => {
    initialSkillData[section.title] = [{ id: Date.now() + idx, name: "", level: 3 }];
  });

  const [openSections, setOpenSections] = useState({});
  const [skillsData, setSkillsData] = useState(initialSkillData);
  const [deletePopup, setDeletePopup] = useState({ show: false, section: null });
  // const [collapseStates, setCollapseStates] = useState({});

  const [collapseStates, setCollapseStates] = useState(() => {
    const initialState = {};
    sections.forEach(section => {
      initialState[section.title] = true;
    });
    return initialState;
  });


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

  // Collapse toggle inside each section
  const toggleCollapse = (section) => {
    setCollapseStates((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Add skill
  const addSkill = (section) => {
    setSkillsData((prev) => ({
      ...prev,
      [section]: [...prev[section], { id: Date.now(), name: "", level: 3 }],
    }));
  };

  // Delete skill
  const deleteSkill = (section, skillId) => {
    setSkillsData((prev) => ({
      ...prev,
      [section]: prev[section].filter((s) => s.id !== skillId),
    }));
  };

  // Handle skill input change
  // const handleSkillChange = (section, skillId, value) => {
  //   setSkillsData((prev) => ({
  //     ...prev,
  //     [section]: prev[section].map((s) =>
  //       s.id === skillId ? { ...s, name: value } : s
  //     ),
  //   }));
  // };

  const handleSkillChange = (section, skillId, value, type = "name") => {
    setSkillsData((prev) => ({
      ...prev,
      [section]: prev[section].map((s) =>
        s.id === skillId
          ? type === "level"
            ? { ...s, level: value }
            : { ...s, name: value }
          : s
      ),
    }));
  };



  return (
    <section>
      <div className="p-4 bg-white h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-md space-y-4 relative">



        {/* Open Sections */}
        {sections.map(
          (section) =>
            openSections[section.title] && (
              <div key={section.title} className="space-y-4 pb- mt-3 ">
                <div
                  className="border rounded-2xl bg-white transition-all duration-300 overflow-hidden"
                >
                  {/* Header */}
                  <div
                    className="flex justify-between items-center cursor-pointer p-4 group"
                    onClick={() => toggleCollapse(section.title)}
                  >
                    <div className="flex gap-3 items-center">
                      {/* Icon box */}
                      <div className="bg-[#ddf2ff] w-10 h-10 flex items-center justify-center rounded-md">
                        <span className="text-[#47c4ff] text-xl">{section.icon}</span>
                      </div>

                      {/* Text content */}
                      <div>
                        <div className="text-[#2E404A] font-nunito font-bold text-[16px] group-hover:text-[#24b3f6] ">
                          {section.title}
                        </div>
                        <div className="text-[#2E404A] font-nunito font-normal text-[14px] group-hover:text-[#24b3f6]">
                          {section.description}
                        </div>
                      </div>
                    </div>


                    <div className="flex gap-4 items-center">
                      <div
                        className={`transition-transform duration-300 ${collapseStates[section.title] ? "rotate-180" : "rotate-0"
                          }`}
                      >
                        <FiChevronDown size={22} className="text-[#cad8e1] group-hover:text-[#24b3f6]" />
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          confirmDeleteSection(section.title);
                        }}
                        className="flex items-center gap-1 text-[#cad8e1] hover:text-[#ff0033]"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Collapsible Content */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${collapseStates[section.title]
                      ? "max-h-full opacity-100 p-4"
                      : "max-h-0 opacity-0 p-0"
                      }`}
                  >




                    {skillsData[section.title]?.map((skill, index) => (
                      <div key={skill.id} className="flex justify-between items-center gap-3 ">
                        {section.title === "Languages" && (
                          <div className="flex justify-between items-start gap-4 w-full ">
                            {/* Skill input */}
                            <div className="flex-1 ">
                              <label className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
                                languages
                              </label>
                              <input
                                type="text"
                                // value={exp.skill}
                                // onChange={(e) =>
                                //   handleChange(exp.id, "skill", e.target.value)
                                // }
                                placeholder="Enter "
                                className="w-full p-3 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-[#abdffc] focus:shadow-md transition-all duration-300"
                              />
                            </div>

                            {/* Level slider */}
                            <div className=" ">
                              <div className="text-[16px] font-nunito font-normal">
                                <span className="text-[#2e4067]"> Level — </span><span className="text-[#2da2ff]">{steps[skill.level]}</span>
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
                                      transform: `translateX(${skill.level * stepWidth}px)`,
                                      backgroundColor: colors[skill.level],
                                    }}
                                  ></div>

                                  {steps.map((_, index) => (
                                    <div
                                      key={index}
                                      onClick={() =>
                                        handleSkillChange(section.title, skill.id, index, "level")
                                      } className="absolute top-0 left-0 w-[55px] h-10 cursor-pointer"
                                      style={{ transform: `translateX(${index * stepWidth}px)` }}
                                    ></div>
                                  ))}


                                </div>

                              </div>

                            </div>

                            {/* Delete button */}

                          </div>
                        )}

                        {section.title === "Certifications and licenses" && (


                          <div className="card rounded-lg focus-within:shadow-md focus-within:outline-none focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-[#abdffc] transition-all duration-300 border border-gray-200">
                            <Editor
                              className="rounded-lg text-gray-500"
                              onTextChange={(e) => setText(e.htmlValue)}
                              style={{ height: "150px" }}
                            />
                          </div>


                        )}

                        {section.title === "References" && (
                          <label className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={skill.checked || false}
                              onChange={(e) =>
                                setSkillsData((prev) => ({
                                  ...prev,
                                  [section.title]: prev[section.title].map((s) =>
                                    s.id === skill.id ? { ...s, checked: e.target.checked } : s
                                  ),
                                }))
                              }
                              className="w-5 h-5 accent-bg-[#05a2ff]  cursor-pointer"
                            />
                            <span className="select-none">Show that you're ready to share references if needed.</span>
                          </label>

                        )}

                        {section.title === "Websites and social media" && (
                          <>
                            <div className="flex w-full gap-4 mb-2 bor">
                              <input
                                type="text"
                                value={skill.name1 || ""}
                                onChange={(e) =>
                                  setSkillsData((prev) => ({
                                    ...prev,
                                    [section.title]: prev[section.title].map((s) =>
                                      s.id === skill.id ? { ...s, name1: e.target.value } : s
                                    ),
                                  }))
                                }
                                placeholder="Website URL"
                                className="w-full p-3 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-[#abdffc] focus:shadow-md transition-all duration-300"
                              />

                              <input
                                type="text"
                                value={skill.name2 || ""}
                                onChange={(e) =>
                                  setSkillsData((prev) => ({
                                    ...prev,
                                    [section.title]: prev[section.title].map((s) =>
                                      s.id === skill.id ? { ...s, name2: e.target.value } : s
                                    ),
                                  }))
                                }
                                placeholder="Social Media URL"
                                className="w-full p-3 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-[#abdffc] focus:shadow-md transition-all duration-300"
                              />
                              <hr className="border-t border-gray-300 my-4" />
                            </div>


                          </>
                        )}



                        {section.title === "Awards and honors" && (


                          <div className="card rounded-lg focus-within:shadow-md focus-within:outline-none focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-[#abdffc] transition-all duration-300 border border-gray-200">
                            <Editor
                              className="rounded-lg text-gray-500"
                              onTextChange={(e) => setText(e.htmlValue)}
                              style={{ height: "150px" }}
                            />
                          </div>


                        )}

                        {/* {["Hobbies and interests", "Custom section"].includes(section.title) && */}

                        {section.title === "Hobbies and interests" && (
                          <div className="  rounded-lg mb-2 w-full">
                            <label
                              htmlFor={`input-${section.title}-${skill.id}`}
                              className="block text-gray-700 font-semibold mb-2 ">
                              {section.title}
                            </label>
                            <input
                              id={`input-${section.title}-${skill.id}`}
                              type="text"
                              value={skill.name}
                              onChange={(e) =>
                                handleSkillChange(section.title, skill.id, e.target.value)
                              }
                              placeholder={`Enter ${section.title.toLowerCase()}`}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            />
                            <hr className="mt-3"></hr>
                          </div>
                        )}

                        {section.title === "Custom section" && (
                          <div className="rounded-lg mb-4 w-full">
                            {/* Section Name */}
                            <label
                              htmlFor={`input-section-${skill.id}`}
                              className="block text-gray-700 font-semibold mb-2"
                            >
                              Section name
                            </label>
                            <input
                              id={`input-section-${skill.id}`}
                              type="text"
                              value={skill.name}
                              onChange={(e) =>
                                handleSkillChange(section.title, skill.id, e.target.value)
                              }
                              placeholder={`Enter ${section.title.toLowerCase()}`}
                              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            />
                            <div>  <label
                              htmlFor={`editor-description-${skill.id}`}
                              className="block text-gray-700 font-semibold mb-2 mt-4"
                            >
                              Description
                            </label>
                              <div
                                className="card rounded-lg focus-within:shadow-md focus-within:outline-none focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-[#abdffc] transition-all duration-300 border border-gray-200"
                                id={`editor-description-${skill.id}`}
                              >
                                <Editor
                                  className="rounded-lg text-gray-500"
                                  onTextChange={(e) => setText(e.htmlValue)}
                                  style={{ height: "150px" }}
                                />
                              </div></div>
                            {/* Description */}


                            {/* Divider line */}
                            <hr className="border-t border-gray-300 my-4" />
                          </div>
                        )}


                        {/* Delete Button */}
                        {/* <div>
                          <button
                            onClick={() => deleteSkill(section.title, skill.id)}
                            className="text-[#cad8e1] hover:text-[#ff0033] self-end"
                          >
                            <FiTrash2 size={18} />
                          </button>
                        </div> */}
                        <div>
                          {!["Certifications and licenses", "Awards and honors", "References"].includes(section.title) && (
                            <button
                              onClick={() => deleteSkill(section.title, skill.id)}
                              className="text-[#cad8e1] hover:text-[#ff0033] self-end"
                            >
                              <FiTrash2 size={18} />
                            </button>
                          )}
                        </div>

                      </div>
                    ))}


                    {/* <button
                      onClick={() => addSkill(section.title)}
                      className="flex items-center gap-2 text-[#05a2ff] font-bold mt-2"
                    >
                      <IoMdAdd />Add {section.title}
                    </button> */}
                    {!["Certifications and licenses", "Awards and honors", "References"].includes(section.title) && (
                      <button
                        onClick={() => addSkill(section.title)}
                        className="flex items-center gap-2 text-[#05a2ff] font-bold mt-2"
                      >
                        <IoMdAdd /> Add {section.title}
                      </button>
                    )}

                  </div>
                </div>
              </div>
            )
        )}


        {/* Section Buttons */}
        {/* <div className="flex flex-wrap gap-4">
          {sections.map(
            (section, idx) =>
              !openSections[section.title] && (
                <button
                  key={idx}
                  onClick={() => handleToggleSection(section.title)}
                  className="w-[48%] px-4 py-5 border rounded-lg bg-[#f7f9fc] hover:bg-gray-50 transition-all font-semibold flex justify-between items-center"
                >
                  <span className="flex items-center gap-2">
                    {section.icon} {section.title}
                  </span>
                   <IoMdAdd  className="w-6 h-6 text-gray-400"/>
                </button>
              )
          )}
        </div> */}
        <div className="flex flex-wrap gap-4">
          {sections.map(
            (section, idx) =>
              !openSections[section.title] && (
                <button
                  key={idx}
                  onClick={() => handleToggleSection(section.title)}
                  className="w-[48%] px-4 py-5 border rounded-lg bg-[#f7f9fc] 
                     hover:bg-[#f6fcff] transition-all duration-300 font-semibold flex justify-between items-center group"
                >
                  <div className="flex items-center gap-2">
                    {/* Icon */}
                    <div className="bg-[#ddf2ff] w-8 h-8 flex items-center justify-center rounded-md">
                      <span
                        className="pt-1 text-[#47c4ff] text-xl 
            
             relative group-hover:z-10 
             transform transition-all duration-200 ease-in-out 
             group-hover:scale-[1.3]"
                      >
                        {section.icon}
                      </span>






                    </div>

                    {/* Text */}
                    <span className="text-[#7c878f] font-nunito text-[16px]  font-normal  transition-all duration-300">
                      {section.title}
                    </span>
                  </div>

                  {/* Optional extra icon on right (like add) */}
                  <IoMdAdd className="w-6 h-6 text-gray-400 group-hover:text-[#47c4ff]
                             transform transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-125" />
                </button>
              )
          )}
        </div>


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

