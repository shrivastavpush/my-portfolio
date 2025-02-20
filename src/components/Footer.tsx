import React from "react";
import { Link } from "react-router";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";

interface SocialLink {
    name: string;
    url: string;
    icon: React.ComponentType<{ className?: string }>;
    borderClass: string;
}

const socialLinks: SocialLink[] = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pushpendra-shrivastav/",
        icon: FaLinkedin,
        borderClass: "border-r-2 border-r-zinc-600",
    },
    {
        name: "Portfolio",
        url: "https://pushpendra-portfolio.netlify.app/",
        icon: GrPersonalComputer,
        borderClass: "border-r-2 border-r-zinc-600",
    },
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#111827] text-emerald-400 px-4 lg:px-5 flex justify-between items-center border-t-zinc-700 border-t-2">
            <div className="flex items-center space-x-4 justify-between">
                <span className="border-r-2 border-r-zinc-600 py-2 pr-2 m-0">_find_me_on:</span>
                {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                        <Link key={link.name} to={link.url} target="_blank" className={`${link.borderClass} py-2 px-3 m-0`} >
                            <Icon className="text-xl hover:text-[#fea55f]" />
                        </Link>
                    );
                })}
            </div>
            <Link to="https://github.com/shrivastavpush" target="_blank" className="flex items-center border-l-0 lg:border-l-2 lg:border-l-zinc-800 gap-1.5 hover:text-[#fea55f] py-2 pl-0 lg:pl-4" > @shrivastavpush <FaGithub /> </Link>
        </footer>
    );
};

export default Footer;