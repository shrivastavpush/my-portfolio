import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import projectsData from '../../data/projects.json';
import { ProjectsData } from '../../types/Types';
import ProjectNav from './ProjectNav';

const typedProjectsData = projectsData as ProjectsData;

const Project: React.FC = () => {
    const location = useLocation();
    const showProjectGrid = location.pathname === '/projects/all';

    return (
        <div className="flex flex-col w-full min-h-[calc(100vh-90px)] bg-[#011627] relative">
            {/* Background elements moved here and given negative z-index */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#011627] to-[#011627] opacity-50"></div>
            <div className="absolute top-20 left-10 -z-10 w-64 h-64 rounded-full bg-[#0f3460] opacity-20 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 -z-10 w-80 h-80 rounded-full bg-[#e94560] opacity-10 blur-3xl"></div>

            <ProjectNav />

            <div className="flex-1">
                {showProjectGrid && (
                    <div className="py-20">
                        <div className="max-w-6xl mx-auto w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {typedProjectsData.projects.map((project) => (
                                    <Link
                                        key={project.id}
                                        to={`/projects/${project.id}`}
                                        className="bg-[#1a1a2e] rounded-xl p-6 border border-[#0f3460] transition-all duration-300 hover:shadow-[0_0_15px_rgba(233,69,96,0.2)] hover:border-[#e94560]/50"
                                    >
                                        <div className="aspect-video mb-4 bg-[#0f3460] rounded-lg overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-[#e94560] font-fira-code mb-2">{project.title}</h3>
                                        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack[0].items.slice(0, 3).map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="text-xs bg-[#0f3460] text-gray-300 px-2 py-1 rounded-md"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                {!showProjectGrid && <Outlet />}
            </div>
        </div>
    );
};

export default Project;