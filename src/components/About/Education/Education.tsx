import React, { useState } from "react";

interface Education {
    degree: string;
    school: string;
    year: string;
    description: string;
}

const educationDetails: Education[] = [
    {
        degree: "B.Tech in Mechanical Engineering",
        school: "Rajasthan Techanical University",
        year: "2015 - 2019",
        description: "Focused on software engineering and web technologies"
    },
    {
        degree: "Full Stack Web Development",
        school: "Tech Bootcamp",
        year: "2023",
        description: "Intensive program covering modern web development stack"
    }
];

const Education: React.FC = () => {
    const [selectedEduIndex, setSelectedEduIndex] = useState<number>(0);

    return (
        <section className="flex flex-col lg:flex-row w-full h-[83vh] bg-[#011627] p-8 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-emerald-500 opacity-10 blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-purple-500 opacity-10 blur-xl"></div>

            {/* Decorative Text */}
            <div className="absolute -top-5 left-0 text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold text-emerald-900/20 select-none">
                Learn
            </div>
            <div className="absolute bottom-0 right-0 text-[3rem] md:text-[4rem] lg:text-[6rem] font-bold text-emerald-900/20 select-none hidden md:block">
                Growth
            </div>

            {/* Left Section */}
            <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 flex flex-col h-full">
                <h2 className="text-2xl font-bold text-emerald-400 font-['Fira_Code'] mb-4">Educational Journey</h2>
                <div className="space-y-4 flex-1 overflow-y-auto px-2 pt-2">
                    {educationDetails.map((edu, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedEduIndex(index)}
                            className={`group relative pl-6 border-l-2 cursor-pointer transition-all duration-300 ${index === selectedEduIndex
                                ? "border-emerald-400"
                                : "border-emerald-800 hover:border-emerald-600"
                                }`}
                        >
                            <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 transition-colors duration-300 ${index === selectedEduIndex
                                ? "bg-emerald-900 border-emerald-400"
                                : "bg-[#011627] border-emerald-800"
                                }`}></div>
                            <div className="bg-[#01111d] rounded-lg p-4 border border-emerald-900 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(49,196,141,0.15)] group-hover:border-emerald-700 relative z-10">
                                <h3 className="text-lg font-['Fira_Code'] text-emerald-400">{edu.degree}</h3>
                                <p className="text-sm text-emerald-300 mt-1">{edu.school}</p>
                                <span className="text-xs text-emerald-600 font-['Fira_Code']">{edu.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 lg:pl-8">
                <div className="bg-[#01111d] rounded-xl p-6 border border-emerald-900 shadow-[0_0_15px_rgba(49,196,141,0.15)]">
                    <h3 className="text-xl font-['Fira_Code'] text-emerald-400 mb-4">Details</h3>
                    {educationDetails[selectedEduIndex] && (
                        <p className="text-emerald-200 font-['Fira_Code'] leading-relaxed">
                            {educationDetails[selectedEduIndex].description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Education;