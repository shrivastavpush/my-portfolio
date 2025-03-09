import React, { ReactElement, useState } from "react";
import { FiMonitor, FiGithub, FiLayout, FiMusic, FiCamera, FiMapPin, FiChevronRight } from "react-icons/fi";
import { IconType } from "react-icons";

interface Interest {
    title: string;
    description: string;
    icon: ReactElement<IconType>;
    details: string[];
}

const interests: Interest[] = [
    {
        title: "Web Development",
        description: "Building modern web applications with React and TypeScript. I'm passionate about creating responsive, accessible, and performant web experiences that solve real-world problems.",
        icon: <FiMonitor />,
        details: [
            "Frontend Development",
            "Responsive Design",
            "Performance Optimization",
            "Modern Frameworks"
        ]
    },

    {
        title: "UI/UX Design",
        description: "Creating intuitive and beautiful user interfaces. I focus on user-centered design principles to craft experiences that are not only visually appealing but also functional and accessible to all users.",
        icon: <FiLayout />,
        details: [
            "User Research",
            "Prototyping",
            "Accessibility",
            "Design Systems"
        ]
    },
    {
        title: "Travelling",
        description: "Exploring new places and experiencing different cultures. Travel broadens my perspective and inspires my creativity. I enjoy documenting my journeys and incorporating cultural influences into my work.",
        icon: <FiMapPin />,
        details: [
            "Cultural Exploration",
            "Photography",
            "Travel Writing",
            "Local Experiences"
        ]
    },
    {
        title: "Singing",
        description: "Singing and playing guitar in my free time. Music helps me unwind and express myself creatively. I find many parallels between musical composition and coding - both require rhythm, pattern recognition, and creativity.",
        icon: <FiMusic />,
        details: [
            "Vocal Performance",
            "Guitar Playing",
            "Music Theory",
            // "Song Writing"
        ]
    },
    {
        title: "Photography",
        description: "Capturing moments and exploring visual storytelling. Photography teaches me to pay attention to details and composition, skills that translate well to designing user interfaces and creating visual hierarchies in my web projects.",
        icon: <FiCamera />,
        details: [
            "Digital Photography",
            "Composition",
            "Post-processing",
            // "Visual Storytelling"
        ]
    },
    {
        title: "Open Source",
        description: "Contributing to and maintaining open source projects. I believe in the power of community-driven development and enjoy collaborating with developers worldwide to create better software.",
        icon: <FiGithub />,
        details: [
            "Project Contributions",
            // "Community Engagement",
            "Code Reviews",
            "Documentation"
        ]
    },
];

const Interests: React.FC = () => {
    const [activeInterest, setActiveInterest] = useState<number>(0);

    return (
        <section className="h-[calc(100vh-8rem)] bg-[#011627] p-4 md:p-8 overflow-y-auto">
            <div className="max-w-6xl mx-auto flex flex-col">
                <div className="text-center mb-8 sticky top-0 bg-[#011627] pt-2 pb-4 z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 font-['Fira_Code'] mb-3 relative inline-block">
                        Personal Interests
                        <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0"></div>
                    </h2>
                    <p className="text-emerald-300/80 font-['Fira_Code'] text-sm md:text-base mt-4">What drives and excites me beyond code</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-4">
                    {/* Interest Cards */}
                    <div className="space-y-4">
                        {interests.map((interest, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer group transition-all duration-300 ${index === activeInterest ? 'bg-[#01111d] shadow-lg shadow-emerald-500/10' : ''
                                    }`}
                                onClick={() => setActiveInterest(index)}
                            >
                                <div className="rounded-xl p-4 border border-emerald-900/50 hover:border-emerald-500/50 transition-all duration-300">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded-lg ${index === activeInterest ? 'bg-emerald-500/10' : 'bg-emerald-900/10'
                                                }`}>
                                                <span className={`text-2xl transition-colors duration-300 ${index === activeInterest ? 'text-emerald-400' : 'text-emerald-500/50'
                                                    }`}>{interest.icon}</span>
                                            </div>
                                            <div>
                                                <h3 className={`font-['Fira_Code'] transition-colors duration-300 ${index === activeInterest ? 'text-emerald-400' : 'text-emerald-500/50'
                                                    }`}>{interest.title}</h3>
                                                <p className="text-sm text-emerald-300/60 line-clamp-1">{interest.description}</p>
                                            </div>
                                        </div>
                                        <FiChevronRight className={`transform transition-all duration-300 ${index === activeInterest ? 'rotate-90 text-emerald-400' : 'text-emerald-500/30 group-hover:text-emerald-500/50'
                                            }`} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Interest Details */}
                    <div className="bg-[#01111d] rounded-xl p-6 md:p-8 border border-emerald-900/50 h-fit sticky top-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-emerald-500/10 p-3 rounded-lg">
                                <span className="text-3xl text-emerald-400">{interests[activeInterest].icon}</span>
                            </div>
                            <h3 className="text-xl font-['Fira_Code'] text-emerald-400">{interests[activeInterest].title}</h3>
                        </div>

                        <p className="text-emerald-200/90 font-['Fira_Code'] text-sm md:text-base leading-relaxed mb-6">
                            {interests[activeInterest].description}
                        </p>

                        <div className="bg-emerald-900/10 rounded-lg p-4 border border-emerald-900/30">
                            <h4 className="text-sm font-['Fira_Code'] text-emerald-400 mb-3">Key Aspects</h4>
                            <div className="grid grid-cols-2 gap-2">
                                {interests[activeInterest].details.map((detail, i) => (
                                    <div
                                        key={i}
                                        className="bg-emerald-900/20 rounded-lg p-2 text-emerald-200/90 text-sm flex items-center"
                                    >
                                        <span className="text-emerald-500/80 mr-2">›</span>
                                        {detail}
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

export default Interests;