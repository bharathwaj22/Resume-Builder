// import React, { useState } from "react";

// const steps = ["Beginner", "Novice", "Intermediate", "Skilled", "Pro"];

// function SkillsForm() {
//   const [selected, setSelected] = useState(2); // default selected (0-based)

//   const stepWidth = 120; // distance between steps (adjust as needed)

//   return (
//     <div className="w-full flex flex-col items-center p-4">
//       {/* Skill name */}
//       <h2 className="text-lg font-semibold mb-4">JavaScript</h2>

//       {/* Line with steps */}
//       <div className="relative w-[600px] h-10 bg-gray-300 rounded-xl ">
//         {/* Moving indicator */}
//         <div
//           className="absolute top-0 left-0 h-10 w-[120px] bg-blue-500 rounded-xl transition-all duration-500"
//           style={{ transform: `translateX(${selected * stepWidth}px)` }}
//         ></div>

//         {/* Clickable step markers */}
//         {steps.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => setSelected(index)}
//             className="absolute top-0 left-0 w-[120px]  cursor-pointer"
//             style={{ transform: `translateX(${index * stepWidth}px)` }}
//           ></div>
//         ))}
//       </div>

//       {/* Step labels */}
//       <div className="flex justify-between w-[600px]   mt-2 text-sm font-medium text-gray-700">
//         {steps.map((label, index) => (
//           <span key={index} className="text-center w-[120px] h-[50px]">
//             {label}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SkillsForm;


import React, { useState } from "react";

const steps = [ "Novice", "Beginner","Intermediate", "Skilled", "Pro"];
const colors = ["#b2e2ff", "#98d8ff", "#64c5ff", "#30b2ff", "#05a2ff"];
// light blue → sky blue → blue → darker → darkest

function SkillsForm() {
  const [selected, setSelected] = useState(2);
  const stepWidth = 55; // distance between steps

  return (
    <section>
      <div className="p-4 bg-white h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-md">
        <h1 className="text-[24px] font-roboto font-semibold text-[#2e404a] mb-2">Skills

        </h1>
        <p className="text-[#3e5679] text-[16px] font-nunito font-normal mb-8">
          Add your most relevant professional skills.


        </p>

        <h2 className="text-lg font-semibold mb-4">{steps[selected]}</h2>

        {/* Line with steps */}
        <div className="relative w-[300px] h-10">
          {/* Background line */}
          <div className="absolute top-1/2 transform -translate-y-1/2 w-[275px] h-[50px] bg-[#ddf2ff] rounded-md"></div>

          {/* Middle vertical separators */}
          {steps.slice(1).map((_, index) => (
            <div
              key={index}
              className="absolute top-1 bottom-0 w-[2px] h-8 bg-[#99dbff]"
              style={{ left: `${(index + 1) * stepWidth}px` }}
            ></div>
          ))}

          {/* Moving indicator with dynamic color */}
          <div
            className="absolute -top-1 left-0 h-[50px] w-[55px] rounded-md transition-all duration-500"
            style={{
              transform: `translateX(${selected * stepWidth}px)`,
              backgroundColor: colors[selected]
            }}
          ></div>

          {/* Clickable step markers */}
          {steps.map((_, index) => (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className="absolute top-0 left-0 w-[55px] h-10 cursor-pointer"
              style={{ transform: `translateX(${index * stepWidth}px)` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsForm;

