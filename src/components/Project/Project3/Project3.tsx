import React from 'react';
import { FiGithub, FiExternalLink, FiCode, FiCloud, FiLayers } from 'react-icons/fi';

interface TechStack {
    category: string;
    items: string[];
    icon: React.ReactNode;
}

const Project3: React.FC = () => {
    const projectDetails = {
        title: "AI-Powered Task Manager",
        description: "An intelligent task management application that uses AI to prioritize and categorize tasks. Features include natural language processing for task creation, smart task suggestions, and automated scheduling.",
        image: "/taskmanager-preview.png", // Add your project image
        liveLink: "https://your-taskmanager-url.com",
        githubLink: "https://github.com/yourusername/taskmanager",
        techStack: [
            {
                category: "Frontend",
                items: ["React", "Next.js", "Chakra UI", "TypeScript"],
                icon: <FiCode />
            },
            {
                category: "Cloud Services",
                items: ["OpenAI API", "Firebase", "Google Cloud"],
                icon: <FiCloud />
            },
            {
                category: "Architecture",
                items: ["Microservices", "RESTful APIs", "WebSocket"],
                icon: <FiLayers />
            }
        ] as TechStack[]
    };

    return (
        <section className="flex flex-col w-full h-[83vh] bg-[#011627] p-8 relative overflow-hidden">
            {/* Main Content */}
            <div className="max-w-6xl mx-auto w-full h-full flex flex-col gap-6 z-10">
                {/* Project Header */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-emerald-400 font-['Fira_Code'] mb-3">{projectDetails.title}</h2>
                    <p className="text-emerald-200 font-['Fira_Code'] leading-relaxed max-w-3xl mx-auto">
                        {projectDetails.description}
                    </p>
                    {/* Links */}
                    <div className="flex justify-center gap-4 mt-4">
                        <a
                            href={projectDetails.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                        >
                            <FiGithub />
                            <span className="font-['Fira_Code'] text-sm">GitHub</span>
                        </a>
                        <a
                            href={projectDetails.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                        >
                            <FiExternalLink />
                            <span className="font-['Fira_Code'] text-sm">Live Demo</span>
                        </a>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-0">
                    {/* Project Preview */}
                    <div className="w-full lg:w-2/3 bg-[#01111d] rounded-xl border border-emerald-900 overflow-hidden">
                        <img
                            src={projectDetails.image}
                            alt={projectDetails.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Tech Stack */}
                    <div className="w-full lg:w-1/3 flex flex-col min-h-0">
                        <h3 className="text-lg font-['Fira_Code'] text-emerald-400 mb-4">Tech Stack</h3>
                        <div className="space-y-4 overflow-y-auto pr-2 flex-1">
                            {projectDetails.techStack.map((tech, index) => (
                                <div key={index} className="group">
                                    <div className="bg-[#01111d] rounded-xl p-6 border border-emerald-900 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(49,196,141,0.15)] group-hover:border-emerald-700">
                                        <div className="flex items-center mb-4">
                                            <span className="text-emerald-400 text-xl mr-3">{tech.icon}</span>
                                            <h4 className="text-lg font-['Fira_Code'] text-emerald-400">{tech.category}</h4>
                                        </div>
                                        <ul className="space-y-2">
                                            {tech.items.map((item, itemIndex) => (
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
                </div>
            </div>
        </section>
    );
};

export default Project3;