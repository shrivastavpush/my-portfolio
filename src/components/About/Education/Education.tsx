import React from "react";
import { FiCalendar, FiBookOpen, FiInfo } from "react-icons/fi";

interface Education {
    degree: string;
    school: string;
    year: string;
    description: string;
}

const educationDetails: Education[] = [
    {
        degree: "B.Tech in Mechanical Engineering",
        school: "Rajasthan Technical University",
        year: "2015 - 2019",
        description: "Focused on software engineering and web technologies. Completed coursework in programming fundamentals, data structures, and web development alongside mechanical engineering curriculum."
    },
    {
        degree: "Reactjs fundamentals",
        school: "Simplilearn",
        year: "2022",
        description: "Learned the basics of Reactjs. Learned component architecture, state management, hooks, and building responsive user interfaces with React."
    },
    {
        degree: "Responsive Web Design",
        school: "FreeCodeCamp",
        year: "2022",
        description: "Learned HTML, CSS, and JavaScript to create responsive and accessible web pages. Focused on building a strong foundation in web development fundamentals."
    }
];

const Education: React.FC = () => {
    return (
        <section className="h-[calc(100vh-8rem)] bg-[#011627] p-4 md:p-8 overflow-y-auto">
            <div className="max-w-6xl mx-auto flex flex-col">
                <div className="text-center mb-8 sticky top-0 bg-[#011627] pt-2 pb-4 z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 font-['Fira_Code'] mb-3">Educational Journey</h2>
                    <p className="text-emerald-300/80 font-['Fira_Code'] text-sm md:text-base">My academic background and certifications</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                    {educationDetails.map((edu, index) => (
                        <div
                            key={index}
                            className="group relative h-full"
                        >
                            <div className="bg-[#01111d] h-full rounded-xl p-6 border border-emerald-900/50 transition-all duration-300 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-900/20 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-lg md:text-xl font-['Fira_Code'] text-emerald-400 flex items-center">
                                        <FiBookOpen className="mr-2" />
                                        {edu.degree}
                                    </h3>
                                    <p className="text-sm md:text-base text-emerald-300/80 mt-2">{edu.school}</p>
                                    <div className="flex items-center mt-2 text-xs md:text-sm text-emerald-500/80 font-['Fira_Code']">
                                        <FiCalendar className="mr-1" />
                                        <span>{edu.year}</span>
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <div className="relative overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-40">
                                        <div className="pt-4 border-t border-emerald-900/30">
                                            <div className="flex items-start">
                                                <FiInfo className="text-emerald-400 mt-1 mr-2 flex-shrink-0" />
                                                <p className="text-emerald-200/90 font-['Fira_Code'] text-sm leading-relaxed">
                                                    {edu.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center text-xs text-emerald-500 mt-2 opacity-70 group-hover:opacity-0 transition-opacity duration-300">
                                        Hover for details
                                    </div>
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