import React from "react";
import { Link } from "react-router-dom";
import { SocialLink } from "../types/Types";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdLaptopMac } from "react-icons/md";
// import { TbBrandLeetcode } from "react-icons/tb";

const socialLinks: SocialLink[] = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pushpendra-shrivastav/",
        icon: FaLinkedin,
    },
    {
        name: "Portfolio",
        url: "https://pushpendra-portfolio.netlify.app/",
        icon: MdLaptopMac,
    },
    // {
    //     name: "LeetCode",
    //     url: "https://leetcode.com/u/shrivastavpush/",
    //     icon: TbBrandLeetcode,
    // }
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#011627] border-t border-white/10 py-2 lg:py-1 px-4 text-gray-300 font-fira-code shadow-lg fixed bottom-0 w-full">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-4 sm:mb-0">
                    <span className="text-sm sm:text-base text-[#fea55f] border-r border-zinc-700 pr-3">_find_me_on:</span>
                    <div className="flex items-center space-x-3">
                        {socialLinks.map((link) => {
                            const Icon = link.icon;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.url}
                                    target="_blank"
                                    className="px-2 py-1 hover:bg-white/5 rounded-md transition-all duration-300 flex items-center"
                                    aria-label={link.name}
                                >
                                    <Icon className="text-xl hover:text-[#fea55f] transition-colors duration-200" />
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <Link
                    to="https://github.com/shrivastavpush"
                    target="_blank"
                    className="flex items-center gap-2 hover:text-[#fea55f] transition-colors duration-200 border-l border-zinc-700 pl-3 sm:pl-4 py-1"
                    aria-label="GitHub Profile"
                >
                    <span className="text-sm sm:text-base">@shrivastavpush</span>
                    <FaGithub className="text-lg" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;