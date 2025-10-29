import React from 'react'
import pic from "../assets/images/home1.png"

const Resume2 = () => {
  
  const summary =[
   "Senior Analyst with 5+ years of experience in data analysis, business intelligence, and process optimization. Skilled in driving operational efficiency,forecasting, and leading data-driven strategies to support business decisions and improvements. Strong communicator focused on results."
  ]
  const skills =[
    "Project Management",
    "Data-driven Decision Making",
    "SQL & Excel",
    "Financial Analysis",
    "Business Intelligence tools",
    "Statistical Modeling",
  ]
  const experience =[
    "Spearhead data analysis and reporting for key business functions, identifying trends and providing insights to improve company performance and profitability",
    "Conduct in-depth market analysis and competitive benchmarking to inform strategic decisions,resulting in a 15% increase in market share within one year.",
    "Develop predictive models to forecast sales performance and customer behavior, contributing to more accurate budgeting and resource allocation.",
  ]
  const business =[
    "Analyzed and interpreted large datasets to identify business opportunities and recommend process improvements, leading to a 20% reduction in operational costs.",
    "Created detailed financial models and dashboards to track key performance indicators (KPIs), enabling data-driven decision-making across departments.",
    "Worked closely with project managers to monitor progress on major initiatives, ensuring projects were delivered on time and within budget.",
  ]
  return (
    <div className=" bg-white border border-gray-100" style={{
      width: "210mm",
      // height: "297mm",
      padding: "5mm",
      boxSizing: "border-box",
    }}>
        {/* header */}
        <div className='flex  header py-5 rounded-tl-3xl rounded-tr-3xl border-b border-gray-300 mx-auto'>
        <div className="flex justify-center items-center  ">
          <img className='w-28 h-40 object-cover shadow-sm' src={pic} alt="profile"/>
        </div>
        <div className=" pl-10">
          <p className='text-3xl tracking-wide text-gray-800 leading-tight'>Samanthan Williams</p>
          <p className='text-xs font-serif py-1 text-[11px] font-semibold mt-1 mb-1'>Senior Analyst</p>
          <p className='text-xs py-4 text-[12px] leading-snug '>New York, NY, 10001</p>
          <p className='text-xs font-serif '>samantha.Williams@example.com</p>
          <p className='text-xs py-2'>(555) 789-1234</p>
        </div>
        </div>
        {/* body*/}
        <div className='flex  gap-3 mx-auto'>
            {/* left side */}
            <div className="w-[60%] pt-5 pl-5">
              {/* summary */}
             <div className='mb-5'>
              <p className="text-[15px] font-semibold underline underline-offset-4 decoration-2 decoration-gray-800 mb-2 tracking-wide">SUMMARY</p>
              {summary.map((summary, index) => (
                <p key={index} className='text-[13px] text-gray-700 leading-[1.4rem] tracking-tight text-justify '>{summary}</p>
              ))}
            </div>  
             <div className='w-full max-w-md mx-auto rounded-2xl '>
                <p className="text-[15px] font-semibold uppercase underline underline-offset-4 decoration-2 decoration-gray-800 mb-2">skills</p>
                <p className="list-disc list-inside marker:mr-0 marker:text-gray-800 text-[12.5px] text-gray-700 leading-5 space-y-1 ">
                   {skills.map((skills, index) => (
                    <li key={index} className='leading-relaxed text-md list-style'>{skills}</li>
                   ))}
                </p>
             </div>
            </div>
            <div className='w-1 border-l border-gray-300 mx-1'></div>
            {/* right */}
            <div >
              <div className="w-full pt-5 pr-5">
                {/* experience */}
               <div className="text-[15px] font-semibold underline underline-offset-4 decoration-gray-800 decoration-2 mb-2 ">EXPERIENCE</div>
               <div className='flex justify-between items-center mt-2 mb-2'>
                <i className='text-[11.5px] font-semibold'>Senior Analyst</i>
                <div className='flex justify-center items-center text-[11.5px] font-semibold gap-1'>
                  <i>Jul 2021</i>
                  <hr className='w-3 text-black border-l'/>
                  <i>Current</i>
                </div>
               </div>
               <div>
               <p className='text-[12px] text-gray-700 mb-2'>Loom & Lantern Co. -New York, NY</p>
               <ul>
                {experience.map((experience, index) => (
                  <li key={index} className='list-disc list-inside marker:mr-0 marker:text-gray-800 text-[12.5px] text-gray-700 leading-5 space-y-1 '>{experience}</li>
                ))}
               </ul>
               </div>
               <div className='flex justify-between items-center mt-2 mb-2'>
                <i className='text-[11.5px] font-semibold'>Business Analyst</i>
                <div className='flex justify-center items-center text-[11.5px] font-semibold gap-1'>
                  <i>Aug 2017</i>
                  <hr className='w-3 text-black border-l'/>
                  <i>May 2021</i>
                </div>
               </div>
               <p className='text-[12px] text-gray-700 mb-2'>Willow & Wren Ltd. -New York, NY</p>
               <ul>
                {business.map((business, index) => (
                  <li key={index} className='list-disc list-inside text-gray-700 text-[12.5px] marker:mr-0 marker:text-grey-800 leading-5 space-y-1'>{business}</li>
                ))}
               </ul>
              </div>
              <div>
              <p className="text-[15px] font-semibold underline underline-offset-4 mb-3 mt-4 decoration-2 decoration-gray-800">EDUCATION</p>
              <div className='flex justify-between items-center mt-2 mb-2'>
                <i className='text-[11.5px] font-semibold'>New York University</i>
                <div className='flex justify-center items-center text-[11.5px] font-semibold gap-1'>
                  <i>2013</i>
                  <hr className='w-3 text-black border-l'/>
                  <i>2017</i>
                </div>
               </div>
              <p className="text-gray-700 text-[12.5px] pb-10">New York, NY | Bachelor of Science in Economics</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Resume2
