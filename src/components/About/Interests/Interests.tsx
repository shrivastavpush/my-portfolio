import React, { ReactElement } from "react";
import { FiMonitor, FiGithub, FiLayout, FiMusic, FiCamera, FiMapPin } from "react-icons/fi";
import { IconType } from "react-icons";

interface Interest {
    title: string;
    description: string;
    icon: ReactElement<IconType>;
}

const Interests: React.FC = () => {
    const interests: Interest[] = [
        {
            title: "Web Development",
            description: "Building modern web applications with React and TypeScript",
            icon: <FiMonitor />
        },
        {
            title: "Open Source",
            description: "Contributing to and maintaining open source projects",
            icon: <FiGithub />
        },
        {
            title: "UI/UX Design",
            description: "Creating intuitive and beautiful user interfaces",
            icon: <FiLayout />
        },
        {
            title: "Travelling",
            description: "Exploring new places and experiencing different cultures",
            icon: <FiMapPin />
        },
        {
            title: "Singing",
            description: "Singing and playing guitar in my free time",
            icon: <FiMusic />
        },
        {
            title: "Photography",
            description: "Capturing moments and exploring visual storytelling",
            icon: <FiCamera />
        }
    ];

    return (
        <section className="flex flex-col w-full h-[83vh] bg-[#011627] p-8 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-emerald-500 opacity-10 blur-xl"></div>
            <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-purple-500 opacity-10 blur-xl"></div>

            {/* Decorative Text */}
            <div className="absolute -top-5 left-0 text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold text-emerald-900/20 select-none">
                Beyond
            </div>
            <div className="absolute bottom-0 right-0 text-[3rem] md:text-[4rem] lg:text-[6rem] font-bold text-emerald-900/20 select-none hidden md:block">
                Code
            </div>

            <div className="max-w-6xl mx-auto w-full h-full flex flex-col">
                {/* Header */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-emerald-400 font-['Fira_Code'] mb-3">Personal Interests</h2>
                    <p className="text-emerald-300 opacity-80 font-['Fira_Code']">What drives and excites me beyond code</p>
                </div>

                {/* Interests Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 overflow-y-auto px-2 pt-2">
                    {interests.map((interest, index) => (
                        <div
                            key={index}
                            className="group"
                        >
                            <div className="bg-[#01111d] rounded-xl p-6 border border-emerald-900 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(49,196,141,0.15)] group-hover:border-emerald-700">
                                <div className="flex items-center mb-4">
                                    <span className="text-emerald-400 text-xl mr-3">{interest.icon}</span>
                                    <h3 className="text-lg font-['Fira_Code'] text-emerald-400">{interest.title}</h3>
                                </div>
                                <p className="text-emerald-200 font-['Fira_Code'] text-sm leading-relaxed">
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