import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-[#111827] text-emerald-400 px-4 lg:px-5 flex justify-between items-center border-t-zinc-700 border-t-2">
            <div className="flex items-center space-x-4 justify-between">
                <span className="border-r-2 border-r-zinc-600 py-2 pr-2 m-0">find_me_on:</span>
                <Link to="https://www.linkedin.com/in/pushpendra-shrivastav/" target="_blank" className="border-r-2 border-r-zinc-600 py-2 px-3 m-0">
                    <FaLinkedin className="text-xl hover:text-[#fea55f]" />
                </Link>
                <Link to="https://pushpendra-portfolio.netlify.app/" target="_blank" className="border-r-2 border-r-zinc-600 py-2 px-3 m-0">
                    <GrPersonalComputer className="text-xl hover:text-[#fea55f]" />
                </Link>
            </div>
            <Link to="https://github.com/shrivastavsumit" target="_blank" className="flex items-center border-l-0 lg:border-l-2 lg:border-l-zinc-800 gap-1.5 hover:text-[#fea55f] py-2 pl-0 lg:pl-4">@shrivastavsumit <FaGithub /></Link>
        </footer >
    )
}

export default Footer