import React, { useState } from "react";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";

interface ExperienceDescription {
    id: number;
    desc: string;
}

interface Experience {
    role: string;
    company: string;
    period: string;
    location: string;
    description: ExperienceDescription[];
}

const experienceDetails: Experience[] = [
    {
        role: "Software Developer",
        company: "DePronto Infotech",
        period: "July 2022 - Present",
        location: "Remote",
        description: [
            {
                id: 1,
                desc: `• Drove optimization of India's leading life insurance website, achieving a 30% reduction in page load times and 10% server load reduction through performance tuning, limiting API calls, and implementation of scalable microservices to enhance system efficiency.`,
            },
            {
                id: 2,
                desc: `• Developed and integrated secure eKYC authentication, ensuring robust data protection and regulatory compliance. Utilized JWT for data encryption and implemented secure API endpoints to safeguard sensitive user information during onboarding and application form pre-filling. This resulted in a demonstrably secure and compliant eKYC process.`,
            },
            {
                id: 3,
                desc: `• Significantly improved website load times, boosting mobile Google PageSpeed Insights scores from 55 to 85 and desktop scores from 60 to 90, through optimized front-end development utilizing ReactJS, HTML5, CSS3, and JavaScript.`,
            },
            {
                id: 4,
                desc: `• Effectively managed version control and facilitated teamwork using Git, CodeCommit, and JIRA, while also mentoring junior developers on ReactJS and best coding practices, resulting in a 25% increase in team productivity and 15% reduction in code integration issues.`,
            },
        ],
    },
    {
        role: "Research Analyst",
        company: "Arcgate Technologies LLP",
        period: "Jan 2021 - Apr 2022",
        location: "Udaipur",
        description: [
            {
                id: 1,
                desc: `• Managed and curated content for a leading food delivery platform, ensuring accuracy and a user-friendly experience for customers. Edited and optimized food item images to enhance visual appeal and ensure consistency with platform guidelines, leading to a 15% increase in click-through rates on food items.`,
            },
            {
                id: 2,
                desc: `• Ensured all content met DoorDash's platform guidelines and delivered high-quality results, contributing to a 20% reduction in content-related errors.`,
            },
        ],
    },
    {
        role: "Maintenance Engineer",
        company: "Khaitan Chemicals & Fertilizers Limited",
        period: "Jul 2019 - Dec 2019",
        location: "Nimbahera",
        description: [
            {
                id: 1,
                desc: `• As a trainee engineer, I actively assisted skilled fitters and welders in repairing critical production equipment, contributing directly to the team's success.`,
            },
            {
                id: 2,
                desc: `• This hands-on experience provided valuable insights into breakdown resolution, preventative maintenance techniques, and the importance of teamwork in a production environment.`,
            },
        ],
    },
];

const Experience: React.FC = () => {
    const [selectedExpIndex, setSelectedExpIndex] = useState<number>(0);

    return (
        <section className="flex flex-col lg:flex-row w-full h-[83vh] bg-[#011627] p-8 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-emerald-500 opacity-10 blur-xl"></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-blue-500 opacity-10 blur-xl"></div>

            {/* Decorative Text */}
            <div className="absolute -top-5 left-0 text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold text-emerald-900/20 select-none">
                Work
            </div>
            <div className="absolute bottom-0 right-0 text-[3rem] md:text-[4rem] lg:text-[6rem] font-bold text-emerald-900/20 select-none hidden md:block">
                Journey
            </div>

            {/* Left Section */}
            <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 flex flex-col h-full">
                <h2 className="text-2xl font-bold text-emerald-400 font-['Fira_Code'] mb-4">Professional Journey</h2>
                <div className="space-y-4 flex-1 overflow-y-auto px-2 pt-2">
                    {experienceDetails.map((exp, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedExpIndex(index)}
                            className={`group relative pl-6 border-l-2 cursor-pointer transition-all duration-300 ${index === selectedExpIndex
                                ? "border-emerald-400"
                                : "border-emerald-800 hover:border-emerald-600"
                                }`}
                        >
                            <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${index === selectedExpIndex
                                ? "bg-emerald-900 border-emerald-400"
                                : "bg-[#011627] border-emerald-800"
                                }`}></div>
                            <div className="bg-[#01111d] rounded-lg p-4 border border-emerald-900 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(49,196,141,0.15)] group-hover:border-emerald-700">
                                <h3 className="text-lg font-['Fira_Code'] text-emerald-400 flex items-center">
                                    <FiBriefcase className="mr-2" />
                                    {exp.role}
                                </h3>
                                <p className="text-sm text-emerald-300 mt-1">{exp.company}</p>
                                <div className="flex items-center gap-4 mt-2 text-xs text-emerald-600 font-['Fira_Code']">
                                    <span className="flex items-center">
                                        <FiCalendar className="mr-1" />
                                        {exp.period}
                                    </span>
                                    <span className="flex items-center">
                                        <FiMapPin className="mr-1" />
                                        {exp.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 lg:pl-8">
                <div className="bg-[#01111d] rounded-xl p-6 border border-emerald-900 shadow-[0_0_15px_rgba(49,196,141,0.15)] max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-700 scrollbar-track-transparent hover:scrollbar-thumb-emerald-500 pr-2">
                    <h3 className="text-xl font-['Fira_Code'] text-emerald-400 mb-4">Responsibilities & Achievements</h3>
                    {experienceDetails[selectedExpIndex] && (
                        <div className="space-y-4">
                            {experienceDetails[selectedExpIndex].description.map((item) => (
                                <p key={item.id} className="text-emerald-200 font-['Fira_Code'] leading-relaxed border-b border-emerald-900/30 pb-4 last:border-0">
                                    {item.desc}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Experience;