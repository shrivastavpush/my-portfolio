import React from 'react';
import { FiGithub, FiExternalLink, FiCode, FiLayout, FiTool } from 'react-icons/fi';
import CaseConverter from '../../../assets/images/Case-Converter.webp';

interface TechStack {
    category: string;
    items: string[];
    icon: React.ReactNode;
}

const Project2: React.FC = () => {
    const projectDetails = {
        title: "Case Converter",
        description: "A user-friendly text case conversion tool that helps users transform text between different cases. Features include converting to uppercase, lowercase, sentence case, and alternating case, with additional utilities like removing extra spaces and text copying functionality.",
        image: CaseConverter,
        liveLink: "https://push-case-converter.netlify.app/",
        githubLink: "https://github.com/404",
        techStack: [
            {
                category: "Frontend",
                items: ["React", "Bootstrap", "HTML5"],
                icon: <FiCode />
            },
            {
                category: "UI/UX",
                items: ["Responsive Design", "Dark Theme", "User-friendly Interface"],
                icon: <FiLayout />
            },
            {
                category: "Features",
                items: ["Text Case Conversion", "Copy to Clipboard", "Word Counter"],
                icon: <FiTool />
            }
        ] as TechStack[]
    };

    return (
        <section className="flex flex-col w-full h-[83vh] bg-[#1a1a2e] p-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] z-0"></div>
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#0f3460] opacity-20 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#e94560] opacity-10 blur-3xl"></div>

            <div className="max-w-6xl mx-auto w-full h-full flex flex-col gap-6 z-10">
                {/* Project Header */}
                <div className="text-center backdrop-blur-sm bg-[#16213e]/50 p-4 sm:p-6 rounded-2xl border border-[#e94560]/20">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#e94560] font-['Fira_Code'] mb-2 sm:mb-3">{projectDetails.title}</h2>
                    <p className="text-sm sm:text-base text-gray-300 font-['Fira_Code'] leading-relaxed max-w-5xl mx-auto">
                        {projectDetails.description}
                    </p>
                    {/* Links */}
                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-3 sm:mt-4">
                        <a
                            href={projectDetails.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-[#0f3460] hover:bg-[#0f3460]/80 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-300 w-full sm:w-auto"
                        >
                            <FiGithub />
                            <span className="font-['Fira_Code'] text-xs sm:text-sm">GitHub</span>
                        </a>
                        <a
                            href={projectDetails.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-[#e94560] hover:bg-[#e94560]/80 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-300 w-full sm:w-auto"
                        >
                            <FiExternalLink />
                            <span className="font-['Fira_Code'] text-xs sm:text-sm">Live Demo</span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-0">
                    {/* Project Preview */}
                    <div className="w-full lg:w-2/3 bg-[#16213e] rounded-2xl border border-[#0f3460] overflow-hidden shadow-lg shadow-[#0f3460]/20">
                        <div className="h-8 bg-[#0f3460] flex items-center px-4">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-[#e94560]"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                        </div>
                        <img
                            src={projectDetails.image}
                            alt={projectDetails.title}
                            className="w-full h-[calc(100%-2rem)] object-cover"
                        />
                    </div>

                    {/* Tech Stack */}
                    <div className="w-full lg:w-1/3 flex flex-col min-h-0">
                        <div className="space-y-4 overflow-y-auto pr-2 flex-1">
                            {projectDetails.techStack.map((tech, index) => (
                                <div key={index} className="group">
                                    <div className="bg-[#16213e] rounded-xl p-6 border border-[#0f3460] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(233,69,96,0.2)] group-hover:border-[#e94560]/50">
                                        <div className="flex items-center mb-4">
                                            <span className="text-[#e94560] text-xl mr-3 bg-[#0f3460]/50 p-2 rounded-lg">{tech.icon}</span>
                                            <h4 className="text-lg font-['Fira_Code'] text-white">{tech.category}</h4>
                                        </div>
                                        <ul className="space-y-2">
                                            {tech.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="text-gray-300 font-['Fira_Code'] text-sm flex items-center">
                                                    <span className="text-[#e94560] mr-2">›</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project2;