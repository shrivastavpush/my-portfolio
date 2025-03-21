import React from "react"
import ProjectNav from "./ProjectNav"
import { Outlet } from "react-router"

const Project: React.FC = () => {
    return (
        <>
            <div className="h-[calc(100vh-90px)] flex flex-col bg-[#011627]">
                <ProjectNav />
                <div className="flex-1 overflow-hidden">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Project