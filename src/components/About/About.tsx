import BioNav from "./BioNav"
import { Outlet } from "react-router"

const About = () => {

    return (
        <>
            <BioNav />
            <Outlet />
        </>
    )
}

export default About