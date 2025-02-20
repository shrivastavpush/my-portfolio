import Sidebar from "./Sidebar"
import { Outlet } from "react-router"

const About = () => {

    return (
        <>
            {/* <div className="flex"> */}
            <Sidebar />
            <Outlet />
            {/* </div> */}
        </>
    )
}

export default About