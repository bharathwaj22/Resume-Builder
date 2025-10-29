import React from 'react'
import { FaArrowsToDot } from "react-icons/fa6";

const Resume4 = () => {

    const experience1=[
        "Performed adequate research to ensure a deep understanding of case.",
        "Prepared legal documents without error and in a timely manner.",
        "Analyed laws in relation to the situation of a client.",
        "Filed briefings, collected evidence, and presented cases to judges and junors.",
        "Worked to build and foster trusting relationships with clients.",
    ]
    const experience2=[
        "Worked with clients to understand their circumstance and needs.",
        "Mediated disputes and sought to enforce the proper regulations.",
        "Counseled clients about the law and legal options.",
        "Effectively represented clients in criminal and civil court proceedings.",
        "Maintained the integrity and confidentiality of all cases.",
        "Sought to understand and protect the interest of persons and a=businesses.",
    ]
  return (
    <div className=" bg-white border border-gray-100 mx-auto" style={{
            width: "210mm",
            // height: "297mm",
            padding: "5mm",
            boxSizing: "border-box",
        }}> 
        {/* header */}
     <div className=''>
      <p className='text-center text-[19px] font-bold uppercase'>howard jones</p>
      <p className='text-center text-[12px] font-bold mt-1 mb-1'>Lawyer</p>
      <p className='text-center text-sm'>15 Yardley Road, San Francisco, United States, CA 94131</p>
      <div className='text-center gap-6 w-full flex justify-center mt-4 mb-3'>
        <span className='text-[12px] font-bold'>howard.jones@gmail.com</span>
        <span className='text-[12px] font-bold'>(415) 555-2671</span>
      </div>
        <hr className='mt-2 mb-4'/>
        </div>
        {/* summary */}
        <div>
            <p className='text-center bg-gray-100 font-bold uppercase text-[17px]'>summary</p>
            <p className='mt-2 mb-8 text-[14px]'>Experienced and innovative Lawyer with a passion and dedication to justice. Highly organized, and skilled in public speaking. Bringing forth a proven track record of achieving favorable outcomes for clients. Adopt in preparing for trials, reviewing documents and effectively presenting cases in court. A strong leader who works well under pressure, and understands the complexities of the legal system.</p>
        </div>
        {/* experience */}
        <div>
            <p className='text-center bg-gray-100 font-bold uppercase text-[17px]'>Experience</p>
            <div className='flex mt-2 text-[13px]'>
                <FaArrowsToDot className='w-5 h-4 mr-1' />
                <p className=''>Lawyer, Madison and Fletcher Attorneys at Law </p>
                <p>.....................................................................</p>
                <div className='flex justify-center gap-1 items-center'>
                    <p>Dec 2010</p>
                    <hr className='w-3'></hr>
                    <p>Aug 2018</p>
                </div>
            </div>
            <p className='text-end text-[13px] mt-1'>San Francisco</p>
            <p className='list-disc list-inside space-y-1 text-[13px] decoration-1 p-2 decoration-amber-400'>
            {experience1.map((experience1, index) => (
                <li>{experience1}</li>
            ))}
            </p>
            <div className='flex mt-4 mb-2 text-[13px]'>
                <FaArrowsToDot className='w-5 h-4 mr-1' />
                <p>Lawyer, Johnson & Levine, LLC </p>
                <p>..................................................................................................</p>
                <div className='flex justify-center gap-1 items-center'>
                    <p>Sep 2010</p>
                    <hr className='w-3'></hr>
                    <p>Oct 2014</p>
                </div>
            </div>
            <p className='text-end text-[13px] mt-1'>Los Angeles</p>
            <p className='list-disc list-inside space-y-1 text-[13px] decoration-1 p-2 decoration-amber-400'>
                {experience2.map((experience2, index) => (
                    <li>{experience2}</li>
                ))}
            </p>
        </div>
        {/* education */}
        <div>
        <p className='text-center bg-gray-100 font-bold mt-3 uppercase text-[17px]'>Education</p>
         <div className='flex mt-4 mb-2 text-[13px]'>
                <FaArrowsToDot className='w-5 h-4 mr-1' />
                <p>New York Law School</p>
                <p>..............................................................................................................................</p>
                <div className='flex justify-center gap-1 items-center'>
                    <p>2003</p>
                    <hr className='w-3'></hr>
                    <p>2006</p>
                </div>
            </div>
        <div className='flex text-[14px] justify-between mt-1 mb-3'>
            <i>Juris,Doctor</i>
            <p>New York</p>
        </div>
        <div className='flex mt-4 mb-2 text-[13px]'>
                <FaArrowsToDot className='w-5 h-4 mr-1' />
                <p>New York University</p>
                <p>.................................................................................................................................</p>
                <div className='flex justify-center gap-1 items-center'>
                    <p>1999</p>
                    <hr className='w-3'></hr>
                    <p>2003</p>
                </div>
            </div>
        <div className='flex justify-between text-[14px] mt-1 mb-2'>
            <i>Juris, Bachelor of Economics</i>
            <p>New York</p>
        </div>
        </div>
        {/* skills */}
        <div>
            <p className='text-center bg-gray-100 font-bold uppercase text-[17px]'>Skills</p>
        <div className='flex'>
            <div className='w-[50%] text-[14px]'>
              <p>Regulatory Compliance ......................</p>
              <p>Contract Negotiation Skills ................</p>
              <p>Family Law .........................................</p>
            </div>
            <div className='w-[50%] text-[14px]'>
               <p>Execellent Communication Skills ...................</p>
               <p>Mediation Skills ..............................................</p>
               <p>Immigration Law ............................................</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Resume4
