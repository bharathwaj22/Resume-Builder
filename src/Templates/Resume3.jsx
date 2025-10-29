import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Resume3 = () => {
   
  const skills=[
    "Analytical Thinking",
    "Tolerant & Flexible",
    "Team Leadership",
    "Organization & Prioritization",
    "Strong Communication",
    "Web app development",
    "Computer engineering",
    "Web security",
  ]
  const summary=[
    "Administrative assistant with 9+ years of experience organizing presentations, preparing facility reports, and maintaining the atmost confidentiality. Possesses a B.A. in history and expertise in microsoft Excel. Looking to leverage my wealth of Knowledge and experience into the open administrative assistant role at your organization."
  ]
  const admin=[
    "Schedule and coordinate meetings, appointments, and travel arrangements for supervisors, managers, and c-level executives.",
    "Trained 2 administrative assistants durings a period of company expansion to ensure attention to detail and adherence to company.",
  ]
  const Secretary=[
    "Typed documents such as correspondence, drafts, memos, and emails, and prepared 3 reports weekly for management.",
    "Opened, sorted, adn distributed incoming messages and correspondence to the appropriate personal.",
    "Purchased and maintained office supply inventories, and always careful to adhere to budgeting practices.",
  ]

  return (
    <div className='flex w-[50%] mx-auto '>
      {/* left side */}
      <div className='w-[45%] p-5 mx-auto bg-gray-100 rounded-tl-2xl'>
       <p className='text-3xl uppercase text-gray-600'>Kelly</p>
       <p className='text-3xl mb-3 uppercase text-gray-600'>BlackWell</p>
       <p className='font-semibold mb-5 text-gray-600'>Administrative Assistant</p>
       <p className='text-[17px] font-medium uppercase text-gray-600 pb-1 tracking-widest'>Details</p>
       <div className="border-b border-gray-500 "></div>
       <div className='py-3'> 
       <div className='flex items-center gap-2 pb-1'>
        <div className='p-1 bg-black rounded-full'>
         <FaEnvelope className='text-white' />
        </div>
       <p className='text-sm text-gray-600'>Kelly.blackwell@example.com</p>
       </div>
       <div className="flex items-center gap-2 pt-1 pb-1">
        <div className='p-1 bg-black rounded-full'>
        <FaPhoneAlt className='text-white' />
        </div>
        <p className='text-sm text-gray-600'>(210) 286-1624</p>
       </div>
       <div className="flex items-center gap-2">
        <div className='p-1 bg-black rounded-full'>
        <FaMapMarkerAlt className='text-white ' />
        </div>
        <p className='text-sm text-gray-600'>1685 N Commerce Island PKwy,Weston, FL 33326, United States</p>
       </div>
       </div>
       <p className='text-[17px] font-medium uppercase pt-2 tracking-widest text-gray-600 pb-1 '>skills</p>
       <p className='border-b border-gray-500'></p>
       <p className='list-disc list-inside space-y-1 pt-3'>
       {skills.map((skills, index) => (
        <li key={index} className='leading-relaxed text-gray-500 '>{skills}</li>
       ))}
       </p>
      </div>
      {/* right side */}
      <div className='w-[50%] mx-auto'>
       <p className='text-[17px] font-medium uppercase pt-2 text-gray-600 pb-1 tracking-widest'>Summary</p>
       <p className='list-disc list-inside space-y-1 border-b-2 border-gray-300'></p>
       <p className='list-disc list-inside space-y-1 pt-3 text-[15px] pb-2 text-gray-500'>
       {summary.map((summary, index) => (
        <p key={index}>{summary}</p>
       ))}
       </p>
       <p className='text-[17px] font-medium uppercase pt-2 text-gray-600 pb-1 tracking-widest'>Experience</p>
       <div className='border-b-2 border-gray-300 '></div>
       <div className='flex gap-1 items-center text-gray-500 pt-3 pb-1'>
        <p>Sep 2017</p>
        <hr className='w-3 text-gray-600'></hr>
        <p>Current</p>
       </div>
       <p className='flex items-center text-gray-600 font-bold '>Administrative Assistant</p>
       <p className='text-gray-500 pt-1 pb-2'>Redford & Sons, Boston, MA</p>
       <p className='list-disc list-inside text-gray-500 space-y-1 pb-4'>
       {admin.map((admin, index) => (
        <li key={index} >{admin}</li>
       ))}
       </p>
       <div className='flex gap-1 items-center text-gray-500'>
        <p>Jun 2016</p>
        <hr className='w-3 text-gray-600'></hr>
        <p>Aug 2017</p>
       </div>
       <p className='flex items-center text-gray-600 font-bold '>Secretary</p>
       <p className='text-gray-500 pt-1 pb-2'>Bright Spot Ltd., Boston</p>
       <p className="list-disc list-inside text-gray-500 space-y-1 pb-4">
       {Secretary.map((Secretary, index) => (
        <li key={index}>{Secretary}</li>
       ))}
       </p>
       <p className='text-[17px] font-medium uppercase pt-2 text-gray-600 pb-1 tracking-widest'>Education</p>
       <div className='border-b-2 border-gray-300 '></div>
       <div className='flex gap-1 items-center pt-3 text-gray-500'>
        <p>2004</p>
        <hr className='w-3 text-gray-600'></hr>
        <p>2009</p>
       </div>
       <p className='flex items-center text-gray-600 font-bold pt-1 pb-1'>Bachelor of Arts, Finance</p>
       <p className='text-gray-500 pb-20'>Brown University, Providence, RI</p>
      </div>
    </div>
  )
}

export default Resume3
