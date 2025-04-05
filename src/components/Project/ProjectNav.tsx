import React from "react";
import { NavLink } from "react-router-dom";
import { projectsData } from '../../data/projects';
import { ProjectsData, LinkClassNameArgs } from '../../types/Types';

const typedProjectsData = projectsData as unknown as ProjectsData;

const ProjectNav: React.FC = () => {
    const linkClass = ({ isActive }: LinkClassNameArgs): string =>
        isActive
            ? "relative px-3 sm:px-4 py-2 sm:py-2.5 text-[#fea55f] border-b-2 border-[#fea55f] transition-all duration-300 font-medium whitespace-nowrap"
            : "relative px-3 sm:px-4 py-2 sm:py-2.5 text-gray-300 border-b-2 border-transparent transition-all duration-300 hover:text-white hover:border-white/20 whitespace-nowrap";

    return (
        <nav className="flex w-full items-center justify-start text-gray-300 bg-[#011627] overflow-x-auto scrollbar-hide border-b border-white/10 shadow-sm fixed">
            <div className="flex items-center w-full px-2 sm:px-4">
                <NavLink
                    to="all"
                    className={linkClass}
                >
                    <span className="font-fira-code text-sm sm:text-base">_all</span>
                </NavLink>
                {typedProjectsData.map((project) => (
                    <NavLink
                        key={project.id}
                        to={project.id}
                        className={linkClass}
                    >
                        <span className="font-fira-code text-sm sm:text-base">_{project.id}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default ProjectNav;
