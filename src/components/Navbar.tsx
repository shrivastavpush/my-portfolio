import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";

const Navbar: React.FC = () => {

    const deskNav: string = "block py-2.5 px-5 m-0 border-l-2 border-l-zinc-800";
    const deskNavActive: string = "border-b-1 border-b-[#fea55f] font-bold text-white" + " " + deskNav

    const mobNav: string = "block w-max py-1.5 lg:py-2";
    const mobNavActive: string = "border-b-1 border-b-[#fea55f] font-bold text-white" + " " + mobNav

    const linkClassDesk = ({ isActive }: { isActive: boolean }): string =>
        isActive ? deskNavActive : deskNav;

    const linkClassMob = ({ isActive }: { isActive: boolean }): string =>
        isActive ? mobNavActive : mobNav;

    // Types
    interface NavLinkEntry {
        to: string;
        label: string;
        onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    }

    type ToggleMobileMenuFunction = () => void;
    type HandleAboutClickFunction = (event: React.MouseEvent<HTMLElement>) => void;

    // State for mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu: ToggleMobileMenuFunction = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    // navigate for /about nested navigation
    const navigate = useNavigate();

    const handleAboutClick: HandleAboutClickFunction = (event) => {
        event.preventDefault();
        navigate('/about/bio');
    };

    const navLinks: NavLinkEntry[] = [
        { to: "/", label: "_home", onClick: toggleMobileMenu },
        { to: "/about", label: "_about", onClick: (event) => { handleAboutClick(event); toggleMobileMenu(); }, },
        { to: "/projects", label: "_projects", onClick: toggleMobileMenu },
        { to: "/contact", label: "_contact_me", onClick: toggleMobileMenu },
    ];

    const handleNavLinkClick = (item: NavLinkEntry) => (event: React.MouseEvent<HTMLElement>) => {
        if (item.onClick) { item.onClick(event) }
        setIsMobileMenuOpen(false)
    }

    return (
        <nav className="bg-[#111827] text-emerald-400 px-4 lg:pl-5 lg:pr-0 lg:py-0 flex items-center justify-between sticky top-0 z-50 border-b-zinc-700 border-b-2">
            <div className="flex items-center justify-between w-full lg:w-auto">
                <NavLink to="/" className="pr-10 py-3 lg:py-2.5 border-r-zinc-700 border-r-2"
                    onClick={handleNavLinkClick(navLinks[0])}> pushpendra_shrivastav </NavLink>
                <button className="lg:hidden ml-4 text-white hover:text-gray-300 focus:outline-none"
                    onClick={toggleMobileMenu} >
                    <MdOutlineMenu className={isMobileMenuOpen ? "text-[#fea55f] text-xl" : "text-white text-xl"} />
                </button>
            </div>

            <div className="lg:flex hidden">
                <div className="lg:flex space-x-4">
                    {navLinks.slice(0, 4).map((item, index) => (
                        <NavLink key={index} to={item.to}
                            className={linkClassDesk}
                            onClick={handleNavLinkClick(item)} >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-12.5 left-0 w-full bg-[#111827] px-4 py-2.5 space-y-2">
                    {navLinks.map((item, index) => (
                        <NavLink key={index} to={item.to}
                            className={linkClassMob}
                            onClick={handleNavLinkClick(item)} >
                            {item.label}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;