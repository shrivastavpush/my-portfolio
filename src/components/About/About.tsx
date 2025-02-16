import Sidebar from "./Sidebar"
import { Outlet } from "react-router"

const About = () => {

    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}

export default About