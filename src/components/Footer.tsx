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
        borderClass: "bordered-tab",
    },
    {
        name: "Portfolio",
        url: "https://pushpendra-portfolio.netlify.app/",
        icon: GrPersonalComputer,
        borderClass: "bordered-tab",
    },
];

const Footer: React.FC = () => {
    return (
        <footer className="footer-style">
            <div className="flex items-center space-x-4 justify-between">
                <span className="bordered-tab pr-2">_find_me_on:</span>
                {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                        <Link key={link.name} to={link.url} target="_blank" className={`${link.borderClass} px-3 `} >
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