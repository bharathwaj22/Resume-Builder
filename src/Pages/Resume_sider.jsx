import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image1 from '../assets/images/resume1.svg.svg'
import Image2 from '../assets/images/resume2.svg.svg'
import Image3 from '../assets/images/resume3.svg.svg'
import Image4 from '../assets/images/resume4.svg.svg'
import Image5 from '../assets/images/resume5.svg.svg'
import Image6 from '../assets/images/resume6.svg.svg'
import Image7 from '../assets/images/resume7.svg.svg'
import Image8 from '../assets/images/resume8.svg.svg'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Resume_sider() {
  const navigate = useNavigate();
  const [activeTemplateId, setActiveTemplateId] = useState(1); 
  console.log("activeTemplateId",activeTemplateId)


  // const clickChooseTemplate = () => {
  //   const selectedTemplate = templates[currentIndex];
  //   if (selectedTemplate) {
  //     navigate(`/Resume-details/${selectedTemplate.id}`, { state: selectedTemplate });
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }
  // };

 
    const clickchoosetemplate = () => {
        navigate('/Resume-details')

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

  // const clickChooseTemplate = () => {
  //   const selectedTemplate = templates[currentIndex];
  //   if (selectedTemplate) {
  //     const encodedName = encodeURIComponent(selectedTemplate.name); // handle spaces safely
  //     navigate(`/Resume-details/${selectedTemplate.id}/${encodedName}`);
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }
  // };



  // const clickChooseTemplate = (index) => {

  //   console.log("aaaa")


  //   const selectedTemplate = templates[currentIndex];
  //   if (selectedTemplate) {
  //     navigate(`/Resume-details/${selectedTemplate.id}`, {
  //       state: selectedTemplate,
  //     });
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }
  // };



  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
    },
    smallDesktop: {
      breakpoint: { max: 1024, min: 900 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 900, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  // ✅ Sample Resume Templates (replace URLs with your actual ones)
  const templates = [
    { id: 1, img: Image1, name: "Modern" },
    { id: 2, img: Image2, name: "Classic" },
    { id: 3, img: Image3, name: "Elegant" },
    { id: 4, img: Image4, name: "Minimal" },
    { id: 5, img: Image5, name: "Creative" },
    { id: 6, img: Image6, name: "Corporate" },
    { id: 7, img: Image7, name: "Minimal" },
    { id: 8, img: Image8, name: "Elegant" },
  ];

  const clickChooseTemplate = () => {
    const selectedTemplate = templates.find((t) => t.id === activeTemplateId);
    if (selectedTemplate) {
      console.log("selectedTemplate",selectedTemplate)
      navigate("/Resume-details", { state: { template: selectedTemplate } });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };



  return (
    <div className="bg-[#2d424d] h-[600px] md:h-[750px]  text-white py-20">
      {/* Header Section */}
      <div className="text-center px-4">
        <h2 className=" text-[30px] md:text-[45px] font-roboto font-bold leading-tight">
          Choose your <span className="text-[#05a2ff]">favorite template and build</span>,
          your resume in minutes!
        </h2>
        <p className="mt-4 text-[16px] font-nunito max-w-3xl mx-auto">
          Build a professional, error-free, and ATS-friendly resume in minutes with our AI-powered generator. Explore 40+ modern templates.
        </p>
        <button className="mt-8 bg-white text-[#05a2ff] font-semibold py-3 px-8 rounded-lg hover:bg-blue-100 shadow-lg transition duration-300"onClick={clickchoosetemplate} >
          View All Templates
        </button>
      </div>

      {/* Carousel Section */}
      <div className="mt-16 relative  ">
        <Carousel
             responsive={responsive}
          swipeable
          draggable
          showDots={false}
          infinite
          autoPlay
          autoPlaySpeed={2000}
          keyBoardControl
          arrows
          centerMode
          containerClass="carousel-container"
          itemClass="px-3"
          afterChange={(nextSlide) => {
            // ✅ Calculate center item index correctly
            const itemsPerSlide = window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3;
            const centerIndex = (nextSlide + Math.floor(itemsPerSlide / 2)) % templates.length;
            const currentTemplate = templates[centerIndex];
            if (currentTemplate) {
              setActiveTemplateId(currentTemplate.id);
            }
          }}

        >
          {templates.map((t) => (
            <div
              key={t.id}
              className={` ${ t.id === activeTemplateId ? "scale-105" : ""
                }`}


            >
              <div className="rounded-xl shadow-lg overflow-hidden h-full ">
                {/* <p>{t.id}</p> */}
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full  object-cover"
                />
              </div>

              <div className="p-4  text-center text-[22px] font-roboto font-semibold text-[#2e404a]">
                {t.name}
              </div>
              {/* <div className='flex justify-center absolute w-full bottom-28 '>
          <button className="mt-5 px-6 py-3 bg-[#05a2ff] hover:bg-[#0589d5] text-white font-semibold rounded-lg  transition " onClick={clickchoosetemplate}>
            Use This Template
          </button>
        </div> */}
 {/* {t.id === activeTemplateId && ( 
  console.log("t.id === activeTemplateId ",t.id === activeTemplateId ),   
    <div className="flex justify-center absolute w-full bottom-28">
        <button
          className="mt-5 px-6 py-3 bg-[#05a2ff] hover:bg-[#0589d5] text-white font-semibold rounded-lg transition"
          onClick={() => clickchoosetemplate(t.id)}  
        >
          Use This Template
        </button>
      </div>
    )} */}
            </div>
            
          ))}


        </Carousel>

         <div className="absolute left-0 right-0 bottom-16 flex justify-center">
        <button
          className="px-8 py-4 bg-[#05a2ff] hover:bg-[#0589d5] text-white text-lg font-semibold rounded-lg shadow-xl transition-transform hover:-translate-y-1"
          onClick={clickChooseTemplate}
        >
          Use This Template
        </button>
      </div>
        
      </div>
    </div>
  );
}

export default Resume_sider;
