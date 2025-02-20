import { NavLink } from "react-router";

interface LinkClassNameArgs {
    isActive: boolean;
    isPending: boolean;
}

interface NavLinkEntry {
    to: string;
    label: string;
}

const projectLinks: NavLinkEntry[] = [
    { to: "project_1", label: "_project1" },
    { to: "project_2", label: "_project2" },
    { to: "project_3", label: "_project3" },
];

const defaultClass: string = "block py-2.5 px-5 m-0 text-center"
const activeClass: string = "border-b-1 border-b-[#fea55f] font-bold text-white" + " " + defaultClass

const linkClass = ({ isActive }: LinkClassNameArgs) =>
    `${isActive ? activeClass : defaultClass}`;

const ProjectNav = () => {

    return (
        <nav className="flex w-full items-center justify-around text-emerald-400 bg-[#011627] overflow-x-scroll lg:overflow-hidden ">
            {projectLinks.map((item, index) => (
                <NavLink key={index} to={item.to} className={linkClass}>
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );
};

export default ProjectNav;
