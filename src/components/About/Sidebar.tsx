import { NavLink } from "react-router"

interface AsideLinkProps {
    isActive: boolean;
}

const Sidebar = () => {

    const linkClass = ({ isActive }: AsideLinkProps) =>
        `${isActive
            ? 'nav-active block py-2.5 px-5 m-0'
            : 'block py-2.5 px-5 m-0 '
        }`;

    return (
        <aside className="w-full">
            <nav className="flex items-center justify-between text-emerald-400 bg-[#111827] overflow-x-scroll lg:overflow-hidden">
                <NavLink to="/about/bio" className={linkClass}>
                    _bio
                </NavLink>
                <NavLink to="/about/education" className={linkClass}>
                    _education
                </NavLink>
                <NavLink to="/about/experience" className={linkClass}>
                    _experience
                </NavLink>
                <NavLink to="/about/interests" className={linkClass}>
                    _interest
                </NavLink>
            </nav>
        </aside>
    )
}

export default Sidebar