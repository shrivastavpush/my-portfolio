import React from "react";
import { NavLink } from "react-router";
import { NavLinkEntry, LinkClassNameArgs } from "../../components/Types";

const projectLinks: NavLinkEntry[] = [
    { to: "project_1", label: "_project1" },
    { to: "project_2", label: "_project2" },
    { to: "project_3", label: "_project3" },
    { to: "project_4", label: "_project4" },
];

const ProjectNav: React.FC = () => {

    const linkClass = ({ isActive }: LinkClassNameArgs): string =>
        isActive
            ? "relative px-3 sm:px-4 py-2 sm:py-2.5 text-[#fea55f] border-b-2 border-[#fea55f] transition-all duration-300 font-medium whitespace-nowrap"
            : "relative px-3 sm:px-4 py-2 sm:py-2.5 text-gray-300 border-b-2 border-transparent transition-all duration-300 hover:text-white hover:border-white/20 whitespace-nowrap";

    return (
        <nav className="flex w-full items-center justify-start text-gray-300 bg-[#011627] overflow-x-auto scrollbar-hide border-b border-white/10 shadow-sm">
            <div className="flex items-center w-full px-2 sm:px-4">
                {projectLinks.map((item: NavLinkEntry, index: number) => (
                    <NavLink
                        key={index}
                        to={item.to}
                        className={linkClass}
                    >
                        <span className="font-fira-code text-sm sm:text-base">{item.label}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );

};

export default ProjectNav;
