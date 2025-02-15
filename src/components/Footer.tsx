import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-[#111827] text-emerald-400 px-5 flex justify-between items-center">
            <div className="flex items-center space-x-4 justify-between">
                <span className="border-r-2 border-r-zinc-600 py-2 pr-2 m-0">find me on:</span>
                <Link to="https://www.linkedin.com/in/pushpendra-shrivastav/" target="_blank" className="border-r-2 border-r-zinc-600 py-2 px-3 m-0">
                    <FaLinkedin className="text-xl hover:text-[#fea55f]" />
                </Link>
                <Link to="https://pushpendra-portfolio.netlify.app/" target="_blank" className="border-r-2 border-r-zinc-600 py-2 px-3 m-0">
                    <GrPersonalComputer className="text-xl hover:text-[#fea55f]" />
                </Link>
            </div>
            <Link to="https://github.com/shrivastavsumit" target="_blank" className="flex items-center gap-1.5 hover:text-[#fea55f] p-2">@shrivastavsumit <FaGithub /></Link>
        </footer >
    )
}

export default Footer