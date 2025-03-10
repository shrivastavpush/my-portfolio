import React, { useState } from "react";
import { FiBriefcase, FiMapPin, FiCalendar, FiAward, FiTarget } from "react-icons/fi";

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
    skills?: string[];
    highlights?: string[];
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
        skills: ["React", "TypeScript", "Node.js", "MongoDB", "AWS", "Git"],
        highlights: [
            "30% reduction in page load times",
            "Secure eKYC implementation",
            "85+ PageSpeed score",
            "25% team productivity increase"
        ]
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
        skills: ["Content Management", "Data Analysis", "Quality Assurance", "Image Optimization"],
        highlights: [
            "15% increase in CTR",
            "20% reduction in errors",
            "Platform guideline expertise",
            "Content optimization"
        ]
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
        skills: ["Equipment Maintenance", "Team Collaboration", "Problem Solving", "Technical Documentation"],
        highlights: [
            "Critical equipment repair",
            "Preventative maintenance",
            "Team collaboration",
            "Technical documentation"
        ]
    },
];

const Experience: React.FC = () => {
    const [selectedExpIndex, setSelectedExpIndex] = useState<number>(0);

    return (
        <section className="h-[calc(100vh-8rem)] bg-[#011627] p-4 md:p-8 overflow-y-auto">
            <div className="max-w-6xl mx-auto flex flex-col">
                <div className="text-center mb-8 bg-[#011627] pt-2 pb-4 z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 font-fira-code mb-3 relative inline-block">
                        Professional Journey
                        <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0"></div>
                    </h2>
                    <p className="text-emerald-300/80 font-fira-code text-sm md:text-base mt-4">My professional experience and achievements</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-4">
                    {/* Timeline Navigation */}
                    <div className="lg:col-span-1 space-y-4">
                        {experienceDetails.map((exp, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedExpIndex(index)}
                                className={`relative cursor-pointer group transition-all duration-300`}
                            >
                                <div className={`absolute left-0 top-0 w-1 h-full rounded-full transition-all duration-300 ${index === selectedExpIndex ? 'bg-emerald-400' : 'bg-emerald-900/50 group-hover:bg-emerald-500/50'
                                    }`}></div>
                                <div className={`pl-6 py-4 transition-all duration-300 ${index === selectedExpIndex ? 'bg-[#01111d] shadow-lg shadow-emerald-500/10' : 'hover:bg-[#01111d]/50'
                                    } rounded-r-xl`}>
                                    <div className="flex items-center mb-2">
                                        <div className={`p-2 rounded-lg ${index === selectedExpIndex ? 'bg-emerald-500/10' : 'bg-emerald-900/10'
                                            }`}>
                                            <FiBriefcase className={`text-xl ${index === selectedExpIndex ? 'text-emerald-400' : 'text-emerald-500/50'
                                                }`} />
                                        </div>
                                        <div className="ml-3">
                                            <h3 className={`font-fira-code transition-colors duration-300 ${index === selectedExpIndex ? 'text-emerald-400' : 'text-emerald-500/50'
                                                }`}>{exp.role}</h3>
                                            <p className="text-sm text-emerald-300/60">{exp.company}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs text-emerald-500/60">
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

                    {/* Experience Details */}
                    <div className="lg:col-span-2">
                        <div className="bg-[#01111d] rounded-xl p-6 md:p-8 border border-emerald-900/50">
                            <div className="space-y-6">
                                {/* Key Highlights */}
                                {experienceDetails[selectedExpIndex].highlights && (
                                    <div className="bg-emerald-900/10 rounded-lg p-4 border border-emerald-900/30">
                                        <div className="flex items-center gap-2 mb-3">
                                            <FiTarget className="text-emerald-400" />
                                            <h4 className="text-sm font-fira-code text-emerald-400">Key Highlights</h4>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            {experienceDetails[selectedExpIndex].highlights?.map((highlight, i) => (
                                                <div key={i} className="bg-emerald-900/20 rounded-lg p-2 text-emerald-200/90 text-sm">
                                                    {highlight}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Skills Used */}
                                {experienceDetails[selectedExpIndex].skills && (
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <FiAward className="text-emerald-400" />
                                            <h4 className="text-sm font-fira-code text-emerald-400">Skills Utilized</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {experienceDetails[selectedExpIndex].skills?.map((skill, i) => (
                                                <span key={i} className="bg-emerald-900/20 px-3 py-1 rounded-full text-emerald-300/80 text-sm">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Responsibilities & Achievements */}
                                <div>
                                    <h3 className="text-xl font-fira-code text-emerald-400 mb-4">Responsibilities & Achievements</h3>
                                    <div className="space-y-4">
                                        {experienceDetails[selectedExpIndex].description.map((item) => (
                                            <p key={item.id} className="text-emerald-200/90 font-fira-code text-sm md:text-base leading-relaxed">
                                                {item.desc}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;