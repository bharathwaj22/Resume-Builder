import React, { useContext } from "react";
import { CreateContext } from "../App";

function Resume1() {

  let UseContext = useContext(CreateContext)

  console.log("UseContextdd", UseContext)
  return (


    <div className=" bg-white border border-gray-100" style={{
      width: "210mm",
      // height: "297mm",
      padding: "5mm",
      boxSizing: "border-box",
    }}>
      {/* HEADER */}
      <div className="bg-yellow-400  p-4 rounded-md  px-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">


            <img
              src="https://via.placeholder.com/90"
              alt="profile"
              className="w-20 h-20 rounded-sm border-2 border-white mr-4"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900 uppercase">
                {UseContext?.firstName || "Name"}            </h1>
              <p className="text-gray-800 font-medium">{UseContext?.
                lastName
                || "Role"} </p>
            </div>
          </div>

          <section className="mt-6 px-10">
            <h2 className="text-lg font-semibold text-white border-b pb-1 mb-2 bg-black w-fit p-2 rounded-md">
              DETAILS
            </h2>
            <p className="text-gray-700 text-sm">
              {UseContext?.address
                || "Address"}   , {UseContext?.city
                  || "City"}   , {UseContext?.country || "Country"}  ,{UseContext?.postcode || "PostCode"}
            </p>
            <p className="text-gray-700 text-sm">{UseContext?.phone

              || "Phone"}</p>
            <p className="text-gray-700 text-sm">{UseContext?.email
              || "Email"}</p>
          </section>
        </div>

        <div className="flex items-center gap-4 mt-4">
          {/* LinkedIn */}
          <a
            href={UseContext?.linkedin || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full text-sm transition-all duration-300 shadow"
          >
            <i className="fab fa-linkedin text-lg"></i>
            <span>LinkedIn</span>
          </a>

          {/* Portfolio */}
          <a
            href={UseContext?.portfolio || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-3 py-1.5 rounded-full text-sm transition-all duration-300 shadow"
          >
            <i className="fas fa-globe text-lg"></i>
            <span>Portfolio</span>
          </a>
        </div>

        {/* <div className="flex items-center gap-4 mt-4">
          {UseContext?.linkedin && (
            <a
              href={UseContext.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full text-sm transition-all duration-300 shadow"
            >
              <i className="fab fa-linkedin text-lg"></i>
              <span>LinkedIn</span>
            </a>
          )}

          {UseContext?.portfolio && (
            <a
              href={UseContext.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-3 py-1.5 rounded-full text-sm transition-all duration-300 shadow"
            >
              <i className="fas fa-globe text-lg"></i>
              <span>Portfolio</span>
            </a>
          )}
        </div> */}


      </div>

      {/* DETAILS */}


      {/* job title */}
      <section className="mt-6 px-10">
        <h2 className="text-lg font-semibold text-white uppercase border-b pb-1 mb-2 bg-black w-fit p-2 rounded-md">
          job title
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          {UseContext?.jobTitle || "Job Title"}
        </p>
      </section>
      {/* Keywords */}
      <section className="mt-6 px-10">
        <h2 className="text-lg font-semibold text-white uppercase border-b pb-1 mb-2 bg-black w-fit p-2 rounded-md">
          Keywords
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          {UseContext?.tags?.join(" ,") || "Keywords"}
        </p>
      </section>
      {/* tones */}
      <section className="mt-6 px-10">
        <h2 className="text-lg font-semibold text-white uppercase border-b pb-1 mb-2 bg-black w-fit p-2 rounded-md">
          Tones
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          {UseContext?.tones?.join(", ")
            || "Tones"}
        </p>
      </section>

      {/* SUMMARY */}
      <section className="mt-6 px-10">
        <h2 className="text-lg font-semibold text-white border-b pb-1 mb-2 bg-black w-fit p-2 rounded-md">
          SUMMARY
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: UseContext?.text || "Results-driven professional with over 5 years of experience in delivering high-quality work across diverse business environments. Skilled in managing multiple priorities, optimizing workflows, and driving team success through collaboration and strategic problem-solving. Known for excellent communication, adaptability, and attention to detail." }} />

        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="mt-6 px-10">
        <h2 className="text-lg font-semibold text-white border-b pb-1 mb-2 bg-black w-fit p-2 rounded-md">
          EXPERIENCE
        </h2>
        <div>
          {UseContext?.experiences
            && UseContext?.experiences
              .length > 0 ? (
            UseContext?.experiences
              .map((exp) => (
                <div key={exp.id} className="border-b pb-4">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {exp.jobTitle || "Job Title"}{" "}
                    <span className="text-gray-500 font-normal">
                      — {exp.employer || "Employer"}
                    </span>
                    <span className="text-gray-500 font-normal">
                      — {exp.location || "Location"}
                    </span>
                  </h3>

                  <p className="text-gray-600 text-sm italic mt-1">
                    {exp.startDate || "Start Date"} — {exp.endDate || "End Date"}
                  </p>

                  <div className="list-disc ml-6 mt-2 text-sm text-gray-700 space-y-1">
                    <div dangerouslySetInnerHTML={{ __html: exp.text || "Responsibility" }} />
                  </div>
                </div>
              ))
          ) : (
            <p className="text-gray-500 italic">No experience added yet.</p>
          )}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mt-6 px-10">
        <h2 className="text-lg font-semibold text-white border-b pb-1 mb-2 bg-black w-fit p-2 rounded-md">
          EDUCATION
        </h2>
        <div>
          {UseContext?.education

            && UseContext?.education
              .length > 0 ? (
            UseContext?.education
              .map((exp) => (
                <div key={exp.id} className="border-b pb-4">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {exp.
                      schoolname || "School Name"}
                    <span className="text-gray-500 font-normal">
                      — {exp.degree || "Degree"}
                    </span>
                    <span className="text-gray-500 font-normal">
                      — {exp.location || "Location"}
                    </span>
                  </h3>

                  <p className="text-gray-600 text-sm italic mt-1">
                    {exp.startDate || "Start Date"} — {exp.endDate || "End Date"}
                  </p>

                  <div className="list-disc ml-6 mt-2 text-sm text-gray-700 space-y-1">
                    <div dangerouslySetInnerHTML={{ __html: exp.text || "Responsibility" }} />
                  </div>
                </div>
              ))
          ) : (
            <p className="text-gray-500 italic">No experience added yet.</p>
          )}
        </div>
      </section>

      {/* SKILLS */}
      <section className="mt-6  px-10">
        <h2 className="text-lg font-semibold text-white border-b pb-1 mb-2 bg-black w-fit p-2 rounded-md">
          SKILLS
        </h2>
        {/* <div className="grid grid-cols-2 gap-x-8 gap-y-3">
          {UseContext?.skills.map((skill, index) => (
            <div key={index}>
              <p className="text-sm text-gray-800 mb-1">{skill.skill || "Skill"}</p>
              {skill.level !== null && (
                <div className="h-[4px] w-full bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#0c0c1e]"
                    style={{
                      width: `${(skill.level / 4) * 100}%`, // 0–4 = 5 levels total
                    }}
                  ></div>
                </div>
              )}

            </div>
          ))}
        </div> */}

        {UseContext?.skills?.some(skill => skill.level !== null) ? (
  // ✅ Grid view when at least one skill has a level
  <div className="grid grid-cols-2 gap-x-8 gap-y-3">
    {UseContext.skills.map((skill, index) => (
      <div key={index}>
        <p className="text-sm text-gray-800 mb-1">
          {skill.skill || "Skill"}
        </p>
        {skill.level !== null && (
          <div className="h-[4px] w-full bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#0c0c1e]"
              style={{
                width: `${(skill.level / 4) * 100}%`, // 0–4 = 5 levels
              }}
            ></div>
          </div>
        )}
      </div>
    ))}
  </div>
) : (
  // ✅ Bullet-point list when all levels are null
  <ul className="list-disc pl-6 space-y-1 text-sm text-gray-800">
    {UseContext.skills.map((skill, index) => (
      <li key={index}>{skill.skill || "Skill"}</li>
    ))}
  </ul>
)}

      </section>
    </div>


  );
}

export default Resume1;
