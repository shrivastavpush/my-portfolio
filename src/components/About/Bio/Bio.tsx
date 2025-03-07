import React, { ReactElement } from "react";
import { FiCode, FiDatabase, FiTool, FiGitBranch } from "react-icons/fi";
import { IconType } from "react-icons";

interface Skill {
    category: string;
    icon: ReactElement<IconType>;
    items: string[];
}

const Bio: React.FC = () => {
    const skills: Skill[] = [
        {
            category: "Frontend",
            icon: <FiCode />,
            items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5/CSS3"]
        },
        {
            category: "Backend",
            icon: <FiDatabase />,
            items: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"]
        },
        {
            category: "Tools",
            icon: <FiTool />,
            items: ["VS Code", "Git", "Webpack", "Docker", "Postman"]
        },
        {
            category: "Version Control",
            icon: <FiGitBranch />,
            items: ["Git", "GitHub", "GitLab", "Bitbucket"]
        }
    ];

    return (
        <section className="h-[calc(100vh-8rem)] bg-[#011627] p-4 md:p-8 overflow-y-auto">
            <div className="max-w-6xl mx-auto flex flex-col">
                <div className="text-center mb-8 bg-[#011627] pt-2 pb-4 z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 font-['Fira_Code'] mb-3">Technical Proficiency</h2>
                    <p className="text-emerald-300/80 font-['Fira_Code'] text-sm md:text-base">A showcase of my technical skills and expertise</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="h-full">
                            <div className="bg-[#01111d] h-full rounded-xl p-6 border border-emerald-900/50 transition-all duration-300 hover:border-emerald-500/50">
                                <div className="flex items-center mb-4">
                                    <span className="text-emerald-400 text-xl mr-3">{skill.icon}</span>
                                    <h3 className="text-lg font-['Fira_Code'] text-emerald-400">{skill.category}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {skill.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="text-emerald-200/90 font-['Fira_Code'] text-sm flex items-center">
                                            <span className="text-emerald-500/80 mr-2">›</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Bio;