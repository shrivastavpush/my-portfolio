import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { projectsData } from '../../data/projects';
import { IoCaretBackSharp } from 'react-icons/io5';

const Project: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const showProjectGrid = location.pathname === '/projects/all';

    return (
        <div className="flex flex-col w-full min-h-[calc(100vh-90px)] bg-[#011627] relative">

            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#011627] to-[#011627] opacity-50"></div>
            <div className="absolute top-20 left-10 -z-10 w-64 h-64 rounded-full bg-[#0f3460] opacity-20 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 -z-10 w-80 h-80 rounded-full bg-[#e94560] opacity-10 blur-3xl"></div>

            {!showProjectGrid && (
                <button
                    onClick={() => navigate('/projects/all')}
                    className="fixed top-16 md:top-20 left-2 md:left-10 p-1.5
                    flex items-center justify-center gap-2 transition-all duration-300
                    text-[#fea55f] border border-[#fea55f] rounded-lg  z-50 cursor-pointer hover:scale-105"
                >
                    <IoCaretBackSharp className="w-4 h-4" />
                    <span className="text-sm hidden md:block">Back to All</span>
                    <span className="text-sm block md:hidden">Back</span>
                </button>
            )}

            <div className="flex-1">
                {showProjectGrid && (
                    <div className="pt-5 pb-15 px-5 md:px-0 md:pt-10">
                        <div className="max-w-6xl mx-auto w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {projectsData.map((project) => (
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