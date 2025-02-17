import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router'

const Navbar: React.FC = () => {

    // CSS classes for desktop and mobile nav links
    const deskNavActive: string = "nav-active block py-2.5 px-5 m-0 border-l-2 border-l-zinc-800"
    const deskNav: string = "block py-2.5 px-5 m-0 border-l-2 border-l-zinc-800"
    const mobNavActive: string = "nav-active block w-max py-1.5 lg:py-2"
    const mobNav: string = "block w-max py-1.5 lg:py-2"

    const linkClassDesk = ({ isActive }: { isActive: boolean }): string =>
        isActive ? deskNavActive : deskNav

    const linkClassMob = ({ isActive }: { isActive: boolean }): string =>
        isActive ? mobNavActive : mobNav

    // type definations

    interface NavLinkEntry {
        to: string;
        label: string;
        onClick?: (event: React.MouseEvent<HTMLElement>) => void; // onClick is optional
    }

    type ToggleMobileMenuFunction = () => void;
    type HandleAboutClickFunction = (event: React.MouseEvent<HTMLElement>) => void;

    // State for mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    const toggleMobileMenu: ToggleMobileMenuFunction = (): void => {
        setIsMobileMenuOpen((prev) => !prev)
    }

    // to naviogate under /about
    const navigate = useNavigate();

    const handleAboutClick: HandleAboutClickFunction = (event: React.MouseEvent) => {
        event.preventDefault();
        navigate('/about/bio');
    };


    const navLinks: NavLinkEntry[] = [
        { to: "/", label: "_home", onClick: toggleMobileMenu }, // toggleMobileMenu for other links
        {
            to: "/about", label: "_about", onClick: (event: React.MouseEvent) => {
                handleAboutClick(event);
                toggleMobileMenu();
            }
        },
        { to: "/projects", label: "_projects", onClick: toggleMobileMenu },
        { to: "/contact", label: "_contact_me", onClick: toggleMobileMenu },
    ];

    return (
        <>
            <nav className="bg-[#111827] text-emerald-400 px-4 lg:pl-5 lg:pr-0 lg:py-0 flex items-center justify-between sticky top-0 z-50 border-b-zinc-700 border-b-2">
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <NavLink to="/" className="pr-10 py-3 lg:py-2.5 border-r-zinc-700 border-r-2" onClick={() => setIsMobileMenuOpen(false)} > pushpendra_shrivastav </NavLink>
                    <button className="lg:hidden ml-4 text-white hover:text-gray-300 focus:outline-none" onClick={toggleMobileMenu} > <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" ></path> </svg>
                    </button>
                </div>

                {/*section to be hidden in mobile view */}
                <div className="lg:flex hidden">
                    <div className="lg:flex space-x-4">
                        <NavLink to="/" className={linkClassDesk}> _hello </NavLink>
                        <NavLink to="/about" className={linkClassDesk} onClick={handleAboutClick}> _about_me </NavLink>
                        <NavLink to="/projects" className={linkClassDesk}> _projects </NavLink>
                    </div>
                    <div className="lg:flex">
                        <NavLink to="/contact" className={linkClassDesk}> _contact_me </NavLink>
                    </div>
                </div>

                {/* mobile menu button */}
                {isMobileMenuOpen && (<div className="lg:hidden absolute top-12.5 left-0 w-full bg-[#111827] px-4 py-2.5 space-y-2">
                    {navLinks.map((item, index) => (
                        <NavLink key={index} to={item.to} className={linkClassMob} onClick={item.onClick}>
                            {item.label}
                        </NavLink>
                    ))}
                </div>)}
            </nav>
        </>
    )
}

export default Navbar