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
          Hardworking Student seeking employment. Ready to utilize my skills
          and passion to further the mission of a company. Technologically
          adept, offering experience with many different social media
          platforms, office technology programs, and advanced computer skills.
          Bringing forth a positive attitude and the willingness and
          motivation to learn new programs.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="mt-6 px-10">
        <h2 className="text-lg font-semibold text-white border-b pb-1 mb-2 bg-black w-fit p-2 rounded-md">
          EXPERIENCE
        </h2>
        <div>
          <h3 className="font-semibold text-gray-900">
            Sales Associate, Big Apple Bookstore, New York
          </h3>
          <p className="text-gray-600 text-sm italic">Sep 2015 — Jun 2018</p>
          <ul className="list-disc ml-6 mt-2 text-sm text-gray-700 space-y-1">
            <li>Greeted customers and assisted them with finding books.</li>
            <li>
              Offered literary suggestions based on the needs and desires of
              the customer.
            </li>
            <li>
              Followed directions from my Supervisor and managed projects with
              precision.
            </li>
            <li>
              Organized books and adhered to the policies and mission of the
              bookstore.
            </li>
          </ul>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mt-6 px-10">
        <h2 className="text-lg font-semibold text-white border-b pb-1 mb-2 bg-black w-fit p-2 rounded-md">
          EDUCATION
        </h2>
        <div className="mb-3">
          <h3 className="font-semibold text-gray-900">
            Bachelor, Communications, New York University, New York
          </h3>
          <p className="text-gray-600 text-sm italic">2016 — Current</p>
          <p className="text-gray-700 text-sm">
            Working towards a Communications Degree.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">
            High School Diploma, Regis High School, New York
          </h3>
          <p className="text-gray-600 text-sm italic">2012 — 2016</p>
          <p className="text-gray-700 text-sm">Graduated with High Honors.</p>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mt-6  px-10">
        <h2 className="text-lg font-semibold text-white border-b pb-1 mb-2 bg-black w-fit p-2 rounded-md">
          SKILLS
        </h2>
        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
          <li>Advanced Communication Skills</li>
          <li>Motivated Attitude</li>
          <li>Office Technology Skills</li>
          <li>Social Media Platforms</li>
        </ul>
      </section>
    </div>


  );
}

export default Resume1;
