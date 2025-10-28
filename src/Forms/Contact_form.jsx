import React, { useContext, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { CreateContext } from "../App";


export default function ContactForm() {

  const { firstName, setFirstName } = useContext(CreateContext)
  const { lastName, setLastName } = useContext(CreateContext)
  const { jobTitle, setJobTitle } = useContext(CreateContext)
  const { phone, setPhone } = useContext(CreateContext)
  const { email, setEmail } = useContext(CreateContext)
  const { tags, setTags } = useContext(CreateContext)
  const { tones, setTones } = useContext(CreateContext)
  const {address, setAddress} = useContext(CreateContext);

  const {city, setCity} = useContext(CreateContext);
  const {country, setCountry} = useContext(CreateContext);
  const {postcode, setPostcode} = useContext(CreateContext);



  console.log("usecontect", firstName)
  // const [firstName, setFirstName] = useState("");
  const [firstTouched, setFirstTouched] = useState(false);

  // const [lastName, setLastName] = useState("");
  const [lastTouched, setLastTouched] = useState(false);

  // const [jobTitle, setJobTitle] = useState(null);
  const [jobTouched, setJobTouched] = useState(false);

  // const [phone, setPhone] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);

  // const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  // const [address, setAddress] = useState("");
  const [addressTouched, setAddressTouched] = useState("");

  // const [city, setCity] = useState("");
  const [cityTouched, setCityTouched] = useState("");
  // const [country, setCountry] = useState("");
  const [countryTouched, setCountryTouched] = useState(false);
  // const [postcode, setPostcode] = useState("");
  const [postTouched, setPostTouched] = useState("");
  const [showAdditional, setShowAdditional] = useState(false);


  const isValid = (value, touched) => touched && value.trim() !== "";


  // const jobTitles = [
  //   { label: "Accountant", value: "accountant" },
  //   { label: "Developer", value: "developer" },
  //   { label: "Designer", value: "designer" },
  // ];

  // const allKeywords = {
  //   accountant: ["Finance", "Excel", "Auditing", "Tax", "Budgeting"],
  //   developer: ["JavaScript", "React", "Node.js", "APIs", "Git", "CI/CD", "Cloud", "Python", "DevOps"],
  //   designer: ["Figma", "Photoshop", "UI/UX", "Illustrator", "Wireframe"],
  // };

  // const allTones = {
  //   accountant: ["Analytical", "technical", "detail-oriented"],
  //   developer: ["JavaScript", "React", "Node.js", "APIs", "Git", "CI/CD", "Cloud", "Python", "DevOps"],
  //   designer: ["Figma", "Photoshop", "UI/UX", "Illustrator", "Wireframe"],
  // };

  const jobData = {
    "technology": {
      title: "Technology / Software Engineering / IT",
      tones: ["Analytical", "Technical", "Detail-oriented"],
      keywords: [
        "Agile", "APIs", "CI/CD", "Cloud", "Debugging", "Automation",
        "Git", "JavaScript", "Python", "React", "Node.js", "AWS", "DevOps"
      ]
    },
    "marketing": {
      title: "Marketing / Advertising / Content",
      tones: ["Persuasive", "Creative", "Metrics-driven"],
      keywords: [
        "ROI", "Brand Awareness", "SEO", "Engagement", "Campaigns", "PPC",
        "Analytics", "Copywriting", "Social Media"
      ]
    },
    "finance": {
      title: "Finance / Accounting / Banking",
      tones: ["Precise", "Formal", "Data-driven"],
      keywords: [
        "Financial Analysis", "Forecasting", "Audit", "Compliance",
        "GAAP", "Risk Management", "Variance", "Reconciliation"
      ]
    },
    "healthcare": {
      title: "Healthcare / Nursing / Medicine",
      tones: ["Compassionate", "Professional", "Patient-focused"],
      keywords: [
        "Patient Care", "Clinical Procedures", "EMR", "Safety",
        "Interdisciplinary Collaboration", "Documentation", "HIPAA"
      ]
    },
    "education": {
      title: "Education / Teaching / Academia",
      tones: ["Supportive", "Structured", "Communicative"],
      keywords: [
        "Curriculum Design", "Lesson Planning", "Student Engagement",
        "Differentiation", "Assessment", "SEN"
      ]
    },
    "sales": {
      title: "Sales / Retail / Customer Service",
      tones: ["Energetic", "Results-oriented", "Personable"],
      keywords: ["Targets", "Upselling", "CRM", "Customer Satisfaction", "Retention", "Negotiation"]
    },
    "engineering": {
      title: "Engineering / Construction / Manufacturing",
      tones: ["Technical", "Safety-conscious", "Results-driven"],
      keywords: ["CAD", "Project Management", "Quality Control", "Safety", "Blueprint Reading", "ISO Standards"]
    },
    "law": {
      title: "Law / Legal / Compliance",
      tones: ["Formal", "Detail-oriented", "Precise"],
      keywords: ["Case Management", "Litigation", "Research", "Drafting", "Compliance", "GDPR", "Corporate Law"]
    },
    "design": {
      title: "Design / Arts / Media",
      tones: ["Visual", "Creative", "Concise"],
      keywords: ["UX/UI", "Branding", "Adobe Suite", "Typography", "Storytelling", "Wireframing"]
    },
    "data_science": {
      title: "Data Science / Analytics",
      tones: ["Analytical", "Quantitative", "Evidence-based"],
      keywords: ["Machine Learning", "SQL", "Python", "Data Visualization", "Regression", "Tableau", "Power BI"]
    },
    "human_resources": {
      title: "Human Resources / Recruitment",
      tones: ["Empathetic", "Structured", "Strategic"],
      keywords: ["Talent Acquisition", "Employee Relations", "HRIS", "Performance Management", "Onboarding"]
    },
    "administration": {
      title: "Administration / Operations / Logistics",
      tones: ["Organized", "Efficient", "Dependable"],
      keywords: ["Scheduling", "Inventory", "Vendor Management", "Process Improvement", "MS Office", "Reporting"]
    }
  };


  const jobTitles = Object.keys(jobData).map((key) => ({
    label: jobData[key].title,
    value: jobData[key].title
  }));

  const selectedJob = Object.values(jobData).find(
    (job) => job.title === jobTitle
  );

  // const [tags, setTags] = useState([]);
  // const [tones, setTones] = useState([]);


  const removeTone = (tone) => {
    setTones(tones.filter((t) => t !== tone));
  };

  const removeTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (

    <section>
      <div className="p-4 bg-white h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-md">
        <h1 className="text-[24px] font-roboto font-semibold text-[#2e404a] mb-2">Contacts</h1>
        <p className="text-[#3e5679] text-[16px] font-nunito font-normal mb-8">
          Add your up-to-date contact information so employers and recruiters can easily reach you.
        </p>

        <form>
          {/* Name Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
                First name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  onBlur={() => setFirstTouched(true)}
                  placeholder="Enter your first name"
                  className="w-full p-3 pr-12 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none  focus:border-blue-500    focus:ring-2 focus:ring-[#abdffc]  focus:shadow-md  transition-all duration-300"
                />
                {isValid(firstName, firstTouched) && (
                  <div className="absolute inset-y-0 right-2 flex items-center">
                    <div className="bg-green-500 rounded-full h-4 w-4 flex items-center justify-center">
                      <svg
                        className="h-3 w-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                )}
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
                Last name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  onBlur={() => setLastTouched(true)}
                  placeholder="Taylor"
                  className="w-full p-3 pr-12 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none  focus:border-blue-500    focus:ring-2 focus:ring-[#abdffc]  focus:shadow-md  transition-all duration-300"
                />
                {isValid(lastName, lastTouched) && (
                  <div className="absolute inset-y-0 right-2 flex items-center">
                    <div className="bg-green-500 rounded-full h-4 w-4 flex items-center justify-center">
                      <svg
                        className="h-3 w-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Job Title */}
          <div className="mb-6">
            <label htmlFor="jobTitle" className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
              Desired job title
            </label>
            <div className="relative">
              {/* <input
                type="text"
                id="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                onBlur={() => setJobTouched(true)}
                placeholder="Accountant"
                  className="w-full p-3 pr-12 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none  focus:border-blue-500    focus:ring-2 focus:ring-[#abdffc]  focus:shadow-md  transition-all duration-300"
              /> */}

              <Dropdown
                value={jobTitle}
                onChange={(e) => {
                  setJobTitle(e.value); // store selected value
                  setTags([]);          // reset tags
                  setTones([]);
                  setJobTouched(true);
                }}
                // onBlur={() => setJobTouched(true)}
                options={jobTitles}
                optionLabel="label"
                placeholder="Select Title"
                filter
                // onBlur={() => setTouched(true)}
                className="w-full p-2 pr-12 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none  focus:border-blue-500    focus:ring-2 focus:ring-[#abdffc]  focus:shadow-md  transition-all duration-300"
              />
              {isValid(jobTitle, jobTouched) && (
                <div className="absolute inset-y-0 right-2 flex items-center">
                  <div className="bg-green-500 rounded-full h-4 w-4 flex items-center justify-center">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* keywords */}

          {jobTitle && (
            <div className="mt-4 w-full relative mb-4">
              {/* Fieldset container */}
              <fieldset className="border border-sky-300 rounded-lg p-4 bg-[#f7f9fc] shadow-sm transition-all duration-300">
                {/* Legend label inside border */}
                <legend className="text-[#374151] text-[16px] font-nunito font-normal px-2">
                  Keywords
                </legend>

                {/* Tags Input Container */}
                <div className="flex flex-wrap items-center gap-2 mt-2 max-h-48 overflow-y-auto border-b-2 border-[#aedcf6] pb-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-sky-100 text-[#05a2ff] px-3 py-1 rounded-full flex items-center gap-2 text-sm font-medium shadow-sm hover:bg-sky-200 transition-colors duration-200"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="text-[#05a2ff] hover:text-sky-900 font-bold focus:outline-none"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>

                {/* All Keywords Display */}
                {/* <div className="flex flex-wrap gap-2 mt-3">
                  {allKeywords[jobTitle].map((kw) => (
                    <button
                      key={kw}
                      type="button"
                      onClick={() => !tags.includes(kw) && setTags([...tags, kw])}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200
              ${tags.includes(kw)
                          ? "bg-sky-400 text-white cursor-not-allowed"
                          : "bg-sky-100 text-sky-600 hover:bg-sky-200"
                        }`}
                      disabled={tags.includes(kw)}
                    >
                      {kw}
                    </button>
                  ))}
                </div> */}

                <div className="flex flex-wrap gap-2 mt-3">
                  {selectedJob?.keywords
                    .filter((kw) => !tags.includes(kw)) // hide already selected keywords
                    .map((kw) => (
                      <button
                        key={kw}
                        type="button"
                        onClick={() => setTags([...tags, kw])} // add selected keyword
                        className="px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-800 hover:bg-sky-200 transition-all duration-200"
                      >
                        {kw}
                      </button>
                    ))}
                </div>

              </fieldset>
            </div>
          )}


          {/* tones */}

          {jobTitle && (
            <div className="mt-4 w-full relative mb-4">
              <fieldset className="border border-sky-300 rounded-lg p-4 bg-[#f7f9fc] shadow-sm transition-all duration-300">
                <legend className="text-[#374151] text-[16px] font-nunito font-normal px-2">
                  Tones
                </legend>

                {/* Selected Tones */}
                <div className="flex flex-wrap items-center gap-2 mt-2 max-h-48 overflow-y-auto pb-2  border-b-2 border-[#aedcf6]">
                  {tones.map((tone) => (
                    <span
                      key={tone}
                      className="bg-sky-100 text-[#05a2ff] px-3 py-1 rounded-full flex items-center gap-2 text-sm font-medium shadow-sm hover:bg-sky-200 transition-colors duration-200"
                    >
                      {tone || "enter"}
                      <button
                        type="button"
                        onClick={() => removeTone(tone)}
                        className="text-[#05a2ff] hover:text-sky-900 font-bold focus:outline-none"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>


                {/* All Available Tones */}
                {/* <div className="flex flex-wrap gap-2 mt-3">
        {allTones[jobTitle].map((tone) => (
          <button
            key={tone}
            type="button"
            onClick={() => !tones.includes(tone) && setTones([...tones, tone])}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200
              ${tones.includes(tone)
                ? "bg-sky-400 text-white cursor-not-allowed"
                : "bg-sky-100 text-[#05a2ff] hover:bg-sky-200"
              }`}
            disabled={tones.includes(tone)}
          >
            {tone}
          </button>
        ))}
      </div> */}
                {/* All Available Tones */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {selectedJob?.tones
                    .filter((tone) => !tones.includes(tone)) // hide selected tones
                    .map((tone) => (
                      <button
                        key={tone}
                        type="button"
                        onClick={() => setTones([...tones, tone])}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-600 hover:bg-sky-200 transition-all duration-200"
                      >
                        {tone}
                      </button>
                    ))}
                </div>

              </fieldset>
            </div>
          )}







          {/* Phone + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
                Phone
              </label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={() => setPhoneTouched(true)}
                  placeholder="305-123-4444"
                  className="w-full p-3 pr-12 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none  focus:border-blue-500    focus:ring-2 focus:ring-[#abdffc]  focus:shadow-md  transition-all duration-300"
                />
                {isValid(phone, phoneTouched) && (
                  <div className="absolute inset-y-0 right-2 flex items-center">
                    <div className="bg-green-500 rounded-full h-4 w-4 flex items-center justify-center">
                      <svg
                        className="h-3 w-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailTouched(true)}
                  placeholder="you@example.com"
                  className="w-full p-3 pr-12 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none  focus:border-blue-500    focus:ring-2 focus:ring-[#abdffc]  focus:shadow-md  transition-all duration-300"
                />
                {isValid(email, emailTouched) && (
                  <div className="absolute inset-y-0 right-2 flex items-center">
                    <div className="bg-green-500 rounded-full h-4 w-4 flex items-center justify-center">
                      <svg
                        className="h-3 w-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Additional Info Button */}
          <div className=" bg-white">
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${showAdditional ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Phone */}
                <div>
                  <label htmlFor="Country" className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
                    Country
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="Country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      onBlur={() => setCountryTouched(true)}
                      placeholder="Country"
                      className="w-full p-3 pr-12 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none  focus:border-blue-500    focus:ring-2 focus:ring-[#abdffc]  focus:shadow-md  transition-all duration-300"
                    />
                    {isValid(country, countryTouched) && (
                      <div className="absolute inset-y-0 right-2 flex items-center">
                        <div className="bg-green-500 rounded-full h-4 w-4 flex items-center justify-center">
                          <svg
                            className="h-3 w-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="City" className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
                    City
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      onBlur={() => setCityTouched(true)}
                      placeholder="City"
                      className="w-full p-3 pr-12 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none  focus:border-blue-500    focus:ring-2 focus:ring-[#abdffc]  focus:shadow-md  transition-all duration-300"
                    />
                    {isValid(city, cityTouched) && (
                      <div className="absolute inset-y-0 right-2 flex items-center">
                        <div className="bg-green-500 rounded-full h-4 w-4 flex items-center justify-center">
                          <svg
                            className="h-3 w-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* addres */}
                <div>
                  <label htmlFor="Address" className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
                    Address
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      onBlur={() => setAddressTouched(true)}
                      placeholder="Address"
                      className="w-full p-3 pr-12 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none  focus:border-blue-500    focus:ring-2 focus:ring-[#abdffc]  focus:shadow-md  transition-all duration-300"
                    />
                    {isValid(address, addressTouched) && (
                      <div className="absolute inset-y-0 right-2 flex items-center">
                        <div className="bg-green-500 rounded-full h-4 w-4 flex items-center justify-center">
                          <svg
                            className="h-3 w-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* post */}
                <div>
                  <label htmlFor="Post" className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
                    Post code
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="Post"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                      onBlur={() => setPostTouched(true)}
                      placeholder="Post code"
                      className="w-full p-3 pr-12 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none  focus:border-blue-500    focus:ring-2 focus:ring-[#abdffc]  focus:shadow-md  transition-all duration-300"
                    />
                    {isValid(postcode, postTouched) && (
                      <div className="absolute inset-y-0 right-2 flex items-center">
                        <div className="bg-green-500 rounded-full h-4 w-4 flex items-center justify-center">
                          <svg
                            className="h-3 w-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 13.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowAdditional(!showAdditional)}
              className="flex items-center text-[#2da2ff] hover:text-[#2da2ff] font-semibold mt-2 mb-2"
            >
              Additional information
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-300 ${showAdditional ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>


          </div>
        </form>
      </div>


    </section>
  );
}
