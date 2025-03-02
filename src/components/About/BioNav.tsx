import { NavLink } from "react-router";

interface LinkClassNameArgs {
    isActive: boolean;
    isPending: boolean;
}

interface NavLinkEntry {
    to: string;
    label: string;
}

const bioLinks: NavLinkEntry[] = [
    { to: "bio", label: "_bio" },
    { to: "education", label: "_education" },
    { to: "experience", label: "_experience" },
    { to: "interests", label: "_interests" },
];

const linkClass = ({ isActive }: LinkClassNameArgs) =>
    `${isActive ? "nested-nav-active" : "nested-nav"}`;

const BioNav = () => {

    return (
        <nav className="flex w-full items-center justify-around text-emerald-400 bg-[#011627] overflow-x-scroll lg:overflow-hidden border-b-zinc-700 border-b-2">
            {bioLinks.map((item, index) => (
                <NavLink key={index} to={item.to} className={linkClass}>
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );
};

export default BioNav;
