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

function Resume_sider() {
     const nagivate = useNavigate();

    const clickchoosetemplate = () => {
        nagivate('/choose-template')

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 4,
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

  return (
    <div className="bg-[#2d424d] h-[700px] text-white py-20">
      {/* Header Section */}
      <div className="text-center px-4">
        <h2 className="text-[45px] font-roboto font-bold leading-tight">
          Choose your <span className="text-[#05a2ff]">favorite template and build</span>,
          your resume in minutes!
        </h2>
        <p className="mt-4 text-[16px] font-nunito max-w-3xl mx-auto">
          Build a professional, error-free, and ATS-friendly resume in minutes with our AI-powered generator. Explore 40+ modern templates.
        </p>
        <button className="mt-8 bg-white text-[#05a2ff] font-semibold py-3 px-8 rounded-lg hover:bg-blue-100 shadow-lg transition duration-300" onClick={clickchoosetemplate}>
          View All Templates
        </button>
      </div>

      {/* Carousel Section */}
      <div className="mt-16 relative ">
        <Carousel
          responsive={responsive}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          arrows={true}
          containerClass="carousel-container"
          itemClass="px-3"
        >
          {templates.map((t) => (
            <div
              key={t.id}
            //   className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"


            >
              <div className="rounded-xl shadow-lg overflow-hidden ">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="p-4 text-center text-[22px] font-roboto font-semibold text-[#2e404a]">
                {t.name}
              </div>
            </div>
          ))}


        </Carousel>
        <div className='flex justify-center absolute w-full bottom-28'>
          <button className="mt-5 px-6 py-3 bg-[#05a2ff] hover:bg-[#0589d5] text-white font-semibold rounded-lg  transition "  onClick={clickchoosetemplate}>
            Use This Template
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume_sider;
