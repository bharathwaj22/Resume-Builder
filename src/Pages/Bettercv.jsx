import { FaStar, FaMagic, FaFileAlt, FaCheckCircle, FaMountain, FaHandHoldingUsd } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const features = [
    {
        icon: <FaFileAlt size={24} />,
        title: 'Professional Templates',
        description: 'Choose from 40+ modern templates designed to suit every career level.',
    },
    {
        icon: <FaCheckCircle size={24} />,
        title: 'ATS-Friendly Templates',
        description: 'Your resume is built to get through the applicant tracking software used by top companies.',
    },
    {
        icon: <FaFileAlt size={24} />,
        title: 'Stress-Free Written Content',
        description: 'Build your resume quickly with ready-made content—no need to start from scratch.',
    },
    {
        icon: <FaMagic size={24} />,
        title: 'Resumes with AI',
        description: 'AI provides ideas and suggests perfect wording to highlight your skills.',
    },
    {
        icon: <FaMountain size={24} />,
        title: 'Dominate the Competition',
        description: 'Highlight your strengths with a resume that stands out.',
    },
    {
        icon: <FaHandHoldingUsd size={24} />,
        title: 'Secure Better Offers',
        description: 'Build a resume that leads to better offers and brighter career opportunities with Resume Builder.',
    },
];

export default function BetterCV() {
       const nagivate = useNavigate();

    const clickchoosetemplate = () => {
        nagivate('/choose-template')

          window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
    return (
        <section className="py-16 pt-10">
            <div className="px-6 mt-10">
                <h2 className="font-roboto font-semibold text-[40px] text-[#2e404a] text-center">Why use Aryu Resume Builder?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {features.map((feature, idx) => (
                        <div key={idx} className=" flex gap-3  ">
                            <div className=" ">
                                <div className='w-12 h-12 flex items-center justify-center bg-[#ddf2ff] rounded-full '>
                                    <div className='relative bottom-2 left-3 text-gray-500 scale-150'>{feature.icon}</div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-[22px] font-roboto font-semibold mb-2 text-[#0a3371] mt-2">{feature.title}</h3>
                                <p className="text-[16px] font-roboto font-normal mb-2 text-[#747c83]">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
               <div className='flex justify-center'>
                 <button className="mt-5 px-6 py-3 bg-[#05a2ff] hover:bg-[#0589d5] text-white font-semibold rounded-lg  transition "
                 onClick={clickchoosetemplate}>
                    Create My Resume
                </button>
               </div>
            </div>
        </section>
    );
}
