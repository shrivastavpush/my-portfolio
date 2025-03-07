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
        <section className="h-[calc(100vh-8rem)] bg-[#011627] p-4 md:p-8 overflow-hidden">
            <div className="max-w-6xl mx-auto h-full flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2 flex flex-col">
                    <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 font-['Fira_Code'] mb-6 sticky top-0 bg-[#011627] pt-2 z-10">Professional Journey</h2>
                    <div className="space-y-6 overflow-y-auto pr-2 flex-1">
                        {experienceDetails.map((exp, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedExpIndex(index)}
                                className={`relative pl-6 border-l-2 cursor-pointer transition-all duration-300 ${index === selectedExpIndex
                                    ? "border-emerald-400"
                                    : "border-emerald-900/50 hover:border-emerald-500/50"
                                    }`}
                            >
                                <div
                                    className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${index === selectedExpIndex
                                        ? "bg-emerald-900 border-emerald-400"
                                        : "bg-[#011627] border-emerald-900/50"
                                        }`}
                                />
                                <div className="bg-[#01111d] rounded-xl p-6 border border-emerald-900/50 transition-all duration-300 hover:border-emerald-500/50">
                                    <h3 className="text-lg md:text-xl font-['Fira_Code'] text-emerald-400 flex items-center">
                                        <FiBriefcase className="mr-2" />
                                        {exp.role}
                                    </h3>
                                    <p className="text-sm md:text-base text-emerald-300/80 mt-2">{exp.company}</p>
                                    <div className="flex items-center gap-4 mt-2 text-xs md:text-sm text-emerald-500/80 font-['Fira_Code']">
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

                <div className="w-full lg:w-1/2 flex flex-col">
                    <div className="bg-[#01111d] rounded-xl p-6 md:p-8 border border-emerald-900/50 overflow-y-auto flex-1">
                        <h3 className="text-xl md:text-2xl font-['Fira_Code'] text-emerald-400 mb-6 bg-[#01111d] pt-2 z-10">Responsibilities & Achievements</h3>
                        {experienceDetails[selectedExpIndex] && (
                            <div className="space-y-4">
                                {experienceDetails[selectedExpIndex].description.map((item) => (
                                    <p key={item.id} className="text-emerald-200/90 font-['Fira_Code'] text-sm md:text-base leading-relaxed border-b border-emerald-900/30 pb-4 last:border-0">
                                        {item.desc}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;