import React from "react";
import { NavLink } from "react-router";

interface LinkClassNameArgs {
    isActive: boolean;
    isPending: boolean;
}

interface NavLinkEntry {
    to: string;
    label: string;
}

const projectLinks: NavLinkEntry[] = [
    { to: "project_1", label: "_project1" },
    { to: "project_2", label: "_project2" },
    { to: "project_3", label: "_project3" },
];

const linkClass = ({ isActive }: LinkClassNameArgs) =>
    `${isActive ? "nested-nav-active" : "nested-nav"}`;

const ProjectNav: React.FC = () => {
    return (
        <nav className="flex w-full items-center justify-around text-emerald-400 bg-[#011627] overflow-x-scroll lg:overflow-hidden ">
            {projectLinks.map((item, index) => (
                <NavLink key={index} to={item.to} className={linkClass}>
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );
};

export default ProjectNav;
