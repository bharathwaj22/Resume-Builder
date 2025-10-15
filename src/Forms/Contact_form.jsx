import React, { useState } from "react";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [firstTouched, setFirstTouched] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastTouched, setLastTouched] = useState(false);

  const [jobTitle, setJobTitle] = useState("");
  const [jobTouched, setJobTouched] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);

  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const [showAdditional, setShowAdditional] = useState(false);


  const isValid = (value, touched) => touched && value.trim() !== "";

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
              <input
                type="text"
                id="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                onBlur={() => setJobTouched(true)}
                placeholder="Accountant"
                  className="w-full p-3 pr-12 border text-[#a8bdca] text-[16px] font-nunito font-normal rounded-lg bg-[#f7f9fc] shadow-sm focus:outline-none  focus:border-blue-500    focus:ring-2 focus:ring-[#abdffc]  focus:shadow-md  transition-all duration-300"
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
                  <label htmlFor="phone" className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
                    Country
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      onBlur={() => setPhoneTouched(true)}
                      placeholder="Country"
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
                    City
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => setEmailTouched(true)}
                      placeholder="City"
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-[#374151] text-[16px] font-nunito font-normal mb-1">
                    Address
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      onBlur={() => setPhoneTouched(true)}
                      placeholder="Address"
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
                    Post code
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => setEmailTouched(true)}
                      placeholder="Post code"
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
