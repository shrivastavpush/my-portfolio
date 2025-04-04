import React from "react";
import { FiCalendar, FiBookOpen, FiInfo, FiAward } from "react-icons/fi";
import { EducationDetails } from "../../../types/Types";

const educationDetails: EducationDetails[] = [
    {
        degree: "Frontend Developer (React) Certificate",
        school: "HackerRank",
        year: "2024",
        description: "Learned the basics to advance level of Reactjs. Learned component architecture, state management, hooks, and building responsive user interfaces with React.",
        achievements: [
            "Completed 10+ problems in Reactjs",
            "Completed 10+ problems in JavaScript",
        ]
    },
    {
        degree: "Reactjs fundamentals",
        school: "Simplilearn",
        year: "2022",
        description: "Learned the basics of Reactjs. Learned component architecture, state management, hooks, and building responsive user interfaces with React.",
        achievements: [
            "Built several React applications",
            "Mastered React hooks and state management",
            "Completed all assignments with distinction"
        ]
    },
    {
        degree: "Responsive Web Design",
        school: "FreeCodeCamp",
        year: "2022",
        description: "Learned HTML, CSS, and JavaScript to create responsive and accessible web pages. Focused on building a strong foundation in web development fundamentals.",
        achievements: [
            "Created multiple responsive websites",
            "Mastered CSS Grid and Flexbox",
            "Implemented modern design principles"
        ]
    },
    {
        degree: "B.Tech in Mechanical Engineering",
        school: "Rajasthan Technical University",
        year: "2015 - 2019",
        description: "Studied core mechanical engineering principles including thermodynamics, fluid mechanics, and machine design. Gained hands-on experience with CAD software and manufacturing processes while developing analytical problem-solving skills.",
        achievements: [
            "Made a project on electricity generation from pizeoelectric cells ",
            "College representative for the technical fest",
            "Ranked in top 10% of mechanical engineering class"
        ]
    },
];

const Education: React.FC = () => {
    return (
        <section className="h-[calc(100vh-8rem)] bg-[#011627] p-4 md:p-8 overflow-y-auto">
            <div className="max-w-6xl mx-auto flex flex-col">
                <div className="text-center mb-8 bg-[#011627] pt-2 pb-4 z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 font-fira-code mb-3 relative inline-block">
                        Educational Journey
                        <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0"></div>
                    </h2>
                    <p className="text-emerald-300/80 font-fira-code text-sm md:text-base mt-4">My academic background and certifications</p>
                </div>

                <div className="grid grid-cols-1 gap-8 pb-4">
                    {educationDetails.map((edu, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            <div className="bg-[#01111d] rounded-xl p-6 md:p-8 border border-emerald-900/50 transition-all duration-300 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-900/20">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-emerald-500/10 rounded-lg p-2">
                                                <FiBookOpen className="text-2xl text-emerald-400" />
                                            </div>
                                            <h3 className="text-lg md:text-xl font-fira-code text-emerald-400">{edu.degree}</h3>
                                        </div>

                                        <div className="space-y-3">
                                            <p className="text-sm md:text-base text-emerald-300/80 flex items-center gap-2">
                                                <FiInfo className="text-emerald-500/80" />
                                                {edu.school}
                                            </p>
                                            <p className="text-xs md:text-sm text-emerald-500/80 font-fira-code flex items-center gap-2">
                                                <FiCalendar className="text-emerald-500/80" />
                                                {edu.year}
                                            </p>
                                        </div>

                                        <p className="mt-4 text-emerald-200/90 font-fira-code text-sm md:text-base leading-relaxed">
                                            {edu.description}
                                        </p>
                                    </div>

                                    {edu.achievements && (
                                        <div className="md:w-2/5 bg-emerald-900/10 rounded-lg p-4 border border-emerald-900/30">
                                            <div className="flex items-center gap-2 mb-3">
                                                <FiAward className="text-emerald-400" />
                                                <h4 className="text-sm font-fira-code text-emerald-400">Key Achievements</h4>
                                            </div>
                                            <ul className="space-y-2">
                                                {edu.achievements.map((achievement, i) => (
                                                    <li key={i} className="text-emerald-200/90 font-fira-code text-sm flex items-center">
                                                        <span className="text-emerald-500/80 mr-2">›</span>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;