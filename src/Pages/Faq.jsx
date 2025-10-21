import { Disclosure } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";


const faqs = [
    {
        question: "What does ATS-friendly mean?",
        answer:"ATS-friendly refers to a resume that is designed to be easily read and understood by an Applicant Tracking System (ATS) — the software many employers use to scan and filter resumes before a human even sees them."    },
    {
        question: "Can I customize the resume templates?",
        answer:
            "Yes! All our resume templates are fully customizable. You can easily change text, layout, colors, and sections to create a resume that perfectly fits your style and experience.",
    },
    {
        question: "Can I create a cover letter too?",
        answer:
            "Yes! You can create a professional cover letter along with your resume. Our platform makes it easy to customize it to match your resume and highlight your strengths.",
    },
    {
        question: "What makes Resume Builder the best resume tool?",
        answer:
            "Resume Builder stands out because it’s fast, easy to use, and packed with professional, customizable templates. It helps you create a polished, ATS-friendly resume that gets noticed by employers — all in just a few minutes.",
    },
    {
        question: "Is my data safe with Aryu resume builder?",
        answer:
            "Yes! Your data is completely safe with Aryu Resume Builder. We use secure systems to protect your personal information and never share it with third parties without your consent.",
    },
    // 33

    {
        question: "What is the cost of the Resume Builder tool?",
        answer:
            "Resume Builder offers a 14-day trial for just $50. After that, you get full access to AI-powered tools and expert-backed templates to create and customize your resume and cover letter easily.",
    },
    {
        question: "Can I build my resume from my phone?",
        answer:
            "Absolutely! Our mobile-friendly resume builder works on any modern device, letting you create, edit, and download your resume anytime, anywhere.",
    },
    {
        question: "How can I download my resume in PDF or Word?",
        answer:
            "You can easily download your resume in PDF or Word format. Once you’ve finished creating and customizing your resume, just click the ‘Download’ button and choose your preferred format.",
    },
];

export default function Faq() {
    return (
        <div className="w-full p-6 bg-white flex justify-center">
            <div className="w-[95%] md:w-[70%]">
                <h2 className="font-roboto font-semibold text-[25px] md:text-[40px] text-[#2e404a] text-center pt-20">
                    FAQs 
                </h2>

                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <Disclosure key={index}>
                            {({ open }) => (
                                <div className="border-b border-[#b2d9f1] pb-2">
                                    <Disclosure.Button
                                        className={`flex w-full justify-between items-center py-6 text-left text-[18px] md:text-[22px] font-roboto text-[#2e404a] font-semibold focus:outline-none transition-colors`}
                                    >
                                        {faq.question}

                                        <div
                                            className="bg-[#05a2ff] rounded-md w-10 h-10 flex items-center justify-center transform transition-transform duration-300"
                                        >
                                            <IoIosArrowDown
                                                className={`text-white w-6 h-6 transition-transform duration-300 ${open ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </div>

                                    </Disclosure.Button>

                                    {/* Animated expand/collapse */}
                                    <div
                                        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <Disclosure.Panel
                                            static
                                            className="text-[#0a3370] font-nunito font-normal text-[14px] md:text-[18px] pb-4 pl-1 pr-2"
                                        >
                                            {faq.answer}
                                        </Disclosure.Panel>
                                    </div>
                                </div>
                            )}
                        </Disclosure>
                    ))}
                </div>
            </div>
        </div>
    );
}
