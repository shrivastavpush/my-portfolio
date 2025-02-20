import ProjectNav from "./ProjectNav"
import { Outlet } from "react-router"

const Project = () => {
    return (
        <>
            <ProjectNav />
            <Outlet />
        </>
    )
}

export default Project