import React, { ReactElement, useState } from "react";
import { FiCode, FiDatabase, FiTool, FiGitBranch, FiChevronRight } from "react-icons/fi";
import { IconType } from "react-icons";

interface Skill {
    category: string;
    icon: ReactElement<IconType>;
    items: string[];
    description: string;
}

const Bio: React.FC = () => {
    const [activeSkill, setActiveSkill] = useState<number>(0);

    const skills: Skill[] = [
        {
            category: "Frontend",
            icon: <FiCode />,
            items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5/CSS3"],
            description: "Specializing in modern frontend development with a focus on responsive, performant user interfaces."
        },
        {
            category: "Backend",
            icon: <FiDatabase />,
            items: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
            description: "Building scalable server-side applications and APIs with modern technologies."
        },
        {
            category: "Tools",
            icon: <FiTool />,
            items: ["VS Code", "Git", "Webpack", "Docker", "Postman"],
            description: "Utilizing industry-standard development tools to ensure efficient workflow and quality code."
        },
        {
            category: "Version Control",
            icon: <FiGitBranch />,
            items: ["Git", "GitHub", "GitLab", "Bitbucket"],
            description: "Managing code versions and collaborating effectively with version control systems."
        }
    ];

    return (
        <section className="h-[calc(100vh-8rem)] bg-[#011627] p-4 md:p-8 overflow-y-auto">
            <div className="max-w-6xl mx-auto flex flex-col">
                <div className="text-center mb-8 bg-[#011627] pt-2 pb-4 z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 font-['Fira_Code'] mb-3 relative inline-block">
                        Technical Proficiency
                        <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0"></div>
                    </h2>
                    <p className="text-emerald-300/80 font-['Fira_Code'] text-sm md:text-base mt-4">A showcase of my technical skills and expertise</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-4">
                    {/* Skills Navigation */}
                    <div className="lg:col-span-1 space-y-4">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveSkill(index)}
                                className={`cursor-pointer group transition-all duration-300 ${index === activeSkill
                                    ? 'bg-[#01111d] shadow-lg shadow-emerald-500/10'
                                    : 'hover:bg-[#01111d]/50'
                                    } rounded-xl p-4 border border-emerald-900/50 hover:border-emerald-500/50`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <span className={`text-2xl mr-3 transition-colors duration-300 ${index === activeSkill ? 'text-emerald-400' : 'text-emerald-500/50'
                                            }`}>{skill.icon}</span>
                                        <h3 className={`font-['Fira_Code'] transition-colors duration-300 ${index === activeSkill ? 'text-emerald-400' : 'text-emerald-500/50'
                                            }`}>{skill.category}</h3>
                                    </div>
                                    <FiChevronRight className={`transform transition-all duration-300 ${index === activeSkill ? 'rotate-90 text-emerald-400' : 'text-emerald-500/30 group-hover:text-emerald-500/50'
                                        }`} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Skill Details */}
                    <div className="lg:col-span-2">
                        <div className="bg-[#01111d] rounded-xl p-6 border border-emerald-900/50 h-full">
                            <div className="flex items-center mb-6">
                                <span className="text-emerald-400 text-3xl mr-4">{skills[activeSkill].icon}</span>
                                <div>
                                    <h3 className="text-xl font-['Fira_Code'] text-emerald-400 mb-2">{skills[activeSkill].category}</h3>
                                    <p className="text-emerald-300/80 text-sm">{skills[activeSkill].description}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {skills[activeSkill].items.map((item, itemIndex) => (
                                    <div
                                        key={itemIndex}
                                        className="bg-emerald-900/10 rounded-lg p-3 border border-emerald-900/30 hover:border-emerald-500/50 transition-all duration-300"
                                    >
                                        <p className="text-emerald-200/90 font-['Fira_Code'] text-sm flex items-center">
                                            <span className="text-emerald-500/80 mr-2">›</span>
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bio;