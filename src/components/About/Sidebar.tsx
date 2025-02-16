import { NavLink } from "react-router";

interface LinkClassNameArgs {
    isActive: boolean;
    isPending: boolean;
}

interface NavLinkEntry {
    to: string;
    label: string;
}

const navLinks: NavLinkEntry[] = [
    { to: "/about/bio", label: "_bio" },
    { to: "/about/education", label: "_education" },
    { to: "/about/experience", label: "_experience" },
    { to: "/about/interests", label: "_interests" },
];

const Sidebar = () => {
    const linkClass = ({ isActive }: LinkClassNameArgs) =>
        `${isActive ? "nav-active block py-2.5 px-5 m-0" : "block py-2.5 px-5 m-0"}`;

    return (
        <aside className="w-full">
            <nav className="flex items-center justify-between text-emerald-400 bg-[#111827] overflow-x-scroll lg:overflow-hidden">
                {navLinks.map((item, index) => (
                    <NavLink key={index} to={item.to} className={linkClass}>
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
