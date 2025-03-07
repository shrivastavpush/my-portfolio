import React, { ReactElement } from "react";
import { FiMonitor, FiGithub, FiLayout, FiMusic, FiCamera, FiMapPin } from "react-icons/fi";
import { IconType } from "react-icons";

interface Interest {
    title: string;
    description: string;
    icon: ReactElement<IconType>;
}

const interests: Interest[] = [
    {
        title: "Web Development",
        description: "Building modern web applications with React and TypeScript. I'm passionate about creating responsive, accessible, and performant web experiences that solve real-world problems.",
        icon: <FiMonitor />
    },
    {
        title: "Open Source",
        description: "Contributing to and maintaining open source projects. I believe in the power of community-driven development and enjoy collaborating with developers worldwide to create better software.",
        icon: <FiGithub />
    },
    {
        title: "UI/UX Design",
        description: "Creating intuitive and beautiful user interfaces. I focus on user-centered design principles to craft experiences that are not only visually appealing but also functional and accessible to all users.",
        icon: <FiLayout />
    },
    {
        title: "Travelling",
        description: "Exploring new places and experiencing different cultures. Travel broadens my perspective and inspires my creativity. I enjoy documenting my journeys and incorporating cultural influences into my work.",
        icon: <FiMapPin />
    },
    {
        title: "Singing",
        description: "Singing and playing guitar in my free time. Music helps me unwind and express myself creatively. I find many parallels between musical composition and coding - both require rhythm, pattern recognition, and creativity.",
        icon: <FiMusic />
    },
    {
        title: "Photography",
        description: "Capturing moments and exploring visual storytelling. Photography teaches me to pay attention to details and composition, skills that translate well to designing user interfaces and creating visual hierarchies in my web projects.",
        icon: <FiCamera />
    }
];

const Interests: React.FC = () => {
    return (
        <section className="h-[calc(100vh-8rem)] bg-[#011627] p-4 md:p-8 overflow-auto">
            <div className="max-w-6xl mx-auto flex flex-col">
                <div className="text-center mb-6 bg-[#011627] pt-2 pb-2 z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 font-['Fira_Code'] mb-2">Personal Interests</h2>
                    <p className="text-emerald-300/80 font-['Fira_Code'] text-sm md:text-base">What drives and excites me beyond code</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
                    {interests.map((interest, index) => (
                        <div key={index} className="h-full" >
                            <div className="bg-[#01111d] h-full rounded-xl p-5 border border-emerald-900/50 transition-all duration-300 hover:border-emerald-500/50">
                                <div className="flex items-center mb-3">
                                    <span className="text-emerald-400 text-xl mr-3">{interest.icon}</span>
                                    <h3 className="text-lg font-['Fira_Code'] text-emerald-400">{interest.title}</h3>
                                </div>
                                <p className="text-emerald-200/90 font-['Fira_Code'] text-sm leading-relaxed line-clamp-4">
                                    {interest.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Interests;