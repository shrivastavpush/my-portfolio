import React from "react"
import ProjectNav from "./ProjectNav"
import { Outlet } from "react-router"

const Project: React.FC = () => {
    return (
        <>
            <ProjectNav />
            <Outlet />
        </>
    )
}

export default Project