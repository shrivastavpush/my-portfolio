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
        <section className="flex flex-col w-full h-[83vh] bg-[#011627] p-8 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-emerald-500 opacity-10 blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-purple-500 opacity-10 blur-xl"></div>

            {/* Decorative Text */}
            <div className="absolute -top-5 left-0 text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold text-emerald-900/20 select-none">
                Skills
            </div>
            <div className="absolute bottom-0 right-0 text-[3rem] md:text-[4rem] lg:text-[6rem] font-bold text-emerald-900/20 select-none hidden md:block">
                Tech
            </div>

            <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-emerald-400 font-['Fira_Code'] mb-3">Technical Proficiency</h2>
                    <p className="text-emerald-300 opacity-80 font-['Fira_Code']">A showcase of my technical skills and expertise</p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-1 overflow-y-auto px-2 pt-2">
                    {skills.map((skill, index) => (
                        <div key={index} className="group">
                            <div className="bg-[#01111d] rounded-xl p-6 border border-emerald-900 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(49,196,141,0.15)] group-hover:border-emerald-700">
                                <div className="flex items-center mb-4">
                                    <span className="text-emerald-400 text-xl mr-3">{skill.icon}</span>
                                    <h3 className="text-lg font-['Fira_Code'] text-emerald-400">{skill.category}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {skill.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="text-emerald-200 font-['Fira_Code'] text-sm flex items-center">
                                            <span className="text-emerald-500 mr-2">›</span>
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