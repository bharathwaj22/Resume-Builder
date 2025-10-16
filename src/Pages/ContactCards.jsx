// import React from "react";
// import { FiPhone, FiMail } from "react-icons/fi";

// const ContactCards = () => {


//   return (
//     <div className="w-full bg-white py-12 flex p-10 mt-5 gap-6 justify-center items-stretch">

//       <div

//         className="flex flex-col justify-between border border-dashed border-[#5bbcff] bg-[#f3faff] rounded-2xl p-6 w-full md:w-1/3 shadow-sm"
//       >
//         <div className="font-roboto font-semibold text-[22px] text-black">Billing support</div>
//         <div className="font-nunito font-normal text-[16px] text-[#0A3370] mt-3">If you have any questions regarding payment, feel free to contact us:</div>

//         <div className="flex justify-between items-center mt-5">
//           <div className="font-nunito font-bold text-[18px] text-[#2E404A] mt-3">
//             <div>Via phone:</div>
//             <div>+44 808 502 0312</div>
//           </div>

//           <button className='border-2 border-[#05a2ff] hover:bg-[#0589d5] text-[16px] bg-[#05a2ff] p-2 px-8 rounded-lg text-white font-nunito font-bold cursor-pointer mt-5' >call us</button>


//         </div>

//         <div className="flex justify-between items-center mt-5">
//           <div className="font-nunito font-bold text-[18px] text-[#2E404A] mt-3">
//             <div>Via email:</div>
//             <div>Aryu@gmail.com</div>
//           </div>

//           <button className='border-2 border-[#05a2ff] hover:bg-[#0589d5] text-[16px] bg-[#05a2ff] p-2 px-8 rounded-lg text-white font-nunito font-bold cursor-pointer mt-5' >cEmail us</button>


//         </div>



//       </div>

//       <div

//         className="flex flex-col justify-between border border-dashed border-[#5bbcff] bg-[#f3faff] rounded-2xl p-6 w-full md:w-1/3 shadow-sm"
//       >
//         <div className="font-roboto font-semibold text-[22px] text-black">Customer Help</div>
//         <div className="font-nunito font-normal text-[16px] text-[#0A3370] mt-3">If you have any questions regarding payment, feel free to contact us:</div>

//         <div className="flex justify-between items-center mt-5">
//           <div className="font-nunito font-bold text-[18px] text-[#2E404A] mt-3">
//             <div>Via phone:</div>
//             <div>+44 808 502 0312</div>
//           </div>

//           <button className='border-2 border-[#05a2ff] hover:bg-[#0589d5] text-[16px] bg-[#05a2ff] p-2 px-8 rounded-lg text-white font-nunito font-bold cursor-pointer mt-5' >call us</button>


//         </div>

//         <div className="flex justify-between items-center mt-5">
//           <div className="font-nunito font-bold text-[18px] text-[#2E404A] mt-3">
//             <div>Via email:</div>
//             <div>Aryu@gmail.com</div>
//           </div>

//           <button className='border-2 border-[#05a2ff] hover:bg-[#0589d5] text-[16px] bg-[#05a2ff] p-2 px-8 rounded-lg text-white font-nunito font-bold cursor-pointer mt-5' >cEmail us</button>


//         </div>



//       </div>

//       <div

//         className="flex flex-col justify-between border border-dashed border-[#5bbcff] bg-[#f3faff] rounded-2xl p-6 w-full md:w-1/3 shadow-sm"
//       >
//         <div className="font-roboto font-semibold text-[22px] text-black">Our postal address</div>
//         <div className="font-nunito font-normal text-[16px] text-[#0A3370] mt-3">If you have any questions regarding payment, feel free to contact us:</div>

//         <div className="flex justify-between items-center mt-5">
//           <div className="font-nunito font-bold text-[18px] text-[#2E404A] mt-3">
//             <div>Via phone:</div>
//             <div>+44 808 502 0312</div>
//           </div>

//           <button className='border-2 border-[#05a2ff] hover:bg-[#0589d5] text-[16px] bg-[#05a2ff] p-2 px-8 rounded-lg text-white font-nunito font-bold cursor-pointer mt-5' >call us</button>


//         </div>

//         <div className="flex justify-between items-center mt-5">
//           <div className="font-nunito font-bold text-[18px] text-[#2E404A] mt-3">
//             <div>Via email:</div>
//             <div>Aryu@gmail.com</div>
//           </div>

//           <button className='border-2 border-[#05a2ff] hover:bg-[#0589d5] text-[16px] bg-[#05a2ff] p-2 px-8 rounded-lg text-white font-nunito font-bold cursor-pointer mt-5' >cEmail us</button>


//         </div>



//       </div>

//     </div>
//   );
// };

// export default ContactCards;


import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactCards = () => {
  const cards = [
    {
      title: "Billing support",
      desc: "If you have any questions regarding payment, feel free to contact us:",
      phone: "+44 808 502 0312",
      email: "Aryu@gmail.com",
    },
    {
      title: "Customer Help",
      desc: "If you have any questions regarding payment, feel free to contact us:",
      phone: "+44 808 502 0312",
      email: "Aryu@gmail.com",
    },
    {
      title: "Our postal address",
      desc: "If you have any questions regarding payment, feel free to contact us:",
      phone: "+44 808 502 0312",
      email: "Aryu@gmail.com",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // 👈 triggers when 20% of section is visible
      className="w-full bg-white py-12 flex flex-col md:flex-row p-10 mt-5 gap-6 justify-center items-stretch"
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          className="flex flex-col justify-between border border-dashed border-[#5bbcff] bg-[#f3faff] rounded-2xl p-6 w-full md:w-1/3 shadow-sm"
        >
          <div className="font-roboto font-semibold text-[22px] text-black">
            {card.title}
          </div>

          <div className="font-nunito font-normal text-[16px] text-[#0A3370] mt-3">
            {card.desc}
          </div>

          <div className="flex justify-between items-center mt-5">
            <div className="font-nunito font-bold text-[18px] text-[#2E404A] mt-3">
              <div className="flex items-center gap-2">
                <FiPhone className="text-[#05a2ff]" /> Via phone:
              </div>
              <div>{card.phone}</div>
            </div>

            <button className="border-2 border-[#05a2ff] hover:bg-[#0589d5] text-[16px] bg-[#05a2ff] p-2 px-8 rounded-lg text-white font-nunito font-bold cursor-pointer mt-5">
              Call us
            </button>
          </div>

          <div className="flex justify-between items-center mt-5">
            <div className="font-nunito font-bold text-[18px] text-[#2E404A] mt-3">
              <div className="flex items-center gap-2">
                <FiMail className="text-[#05a2ff]" /> Via email:
              </div>
              <div>{card.email}</div>
            </div>

            <button className="border-2 border-[#05a2ff] hover:bg-[#0589d5] text-[16px] bg-[#05a2ff] p-2 px-7 rounded-lg text-white font-nunito font-bold cursor-pointer mt-5">
              Email us
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ContactCards;

