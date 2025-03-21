import BioNav from "./BioNav"
import { Outlet } from "react-router"

const About = () => {
    return (
        <div className="h-[calc(100vh-90px)] flex flex-col bg-[#011627]">
            <BioNav />
            <div className="flex-1 overflow-hidden">
                <Outlet />
            </div>
        </div>
    )
}

export default About