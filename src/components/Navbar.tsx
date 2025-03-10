import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { MdOutlineMenu, MdClose } from "react-icons/md";

const Navbar: React.FC = () => {

    // Types
    interface NavLinkEntry {
        to: string;
        label: string;
        onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    }

    type ToggleMobileMenuFunction = () => void;
    type HandleAboutClickFunction = (event: React.MouseEvent<HTMLElement>) => void;
    type HandleProjectClickFunction = (event: React.MouseEvent<HTMLElement>) => void;

    // State for mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const toggleMobileMenu: ToggleMobileMenuFunction = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const linkClassDesk = ({ isActive }: { isActive: boolean }): string =>
        isActive
            ? "relative px-4 py-2.5 text-[#fea55f] border-b-2 border-[#fea55f] transition-all duration-300 hover:bg-white/5"
            : "relative px-4 py-2.5 text-gray-300 border-b-2 border-transparent transition-all duration-300 hover:text-white hover:bg-white/5 hover:border-white/20";

    const linkClassMob = ({ isActive }: { isActive: boolean }): string =>
        isActive
            ? "block w-full py-3 px-4 text-[#fea55f] border-l-4 border-[#fea55f] bg-white/10 backdrop-blur-sm rounded-md transition-all duration-300 font-medium"
            : "block w-full py-3 px-4 text-gray-300 border-l-2 border-transparent hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300 rounded-md";

    // navigate for /about & /project nested navigation
    const navigate = useNavigate();

    const handleAboutClick: HandleAboutClickFunction = (event) => {
        event.preventDefault();
        navigate('/about/bio');
    };

    const handleProjectClick: HandleProjectClickFunction = (event) => {
        event.preventDefault();
        navigate('/projects/project_1');
    };

    const navLinks: NavLinkEntry[] = [
        { to: "/", label: "_home", onClick: toggleMobileMenu },
        { to: "/about", label: "_about", onClick: (event) => { handleAboutClick(event); toggleMobileMenu(); }, },
        { to: "/projects", label: "_projects", onClick: (event) => { handleProjectClick(event); toggleMobileMenu(); } },
        { to: "/contact", label: "_contact_me", onClick: toggleMobileMenu },
    ];

    const handleNavLinkClick = (item: NavLinkEntry) => (event: React.MouseEvent<HTMLElement>) => {
        if (item.onClick) { item.onClick(event) }
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            {/* Add a smaller spacer div to prevent content from being hidden behind the navbar */}
            <div className="h-13 lg:h-12"></div>

            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#011627]/90 backdrop-blur-md shadow-lg' : 'bg-[#011627]'}`}>
                <div className="container mx-auto px-3">
                    <div className="flex items-center justify-between h-14">
                        <div className="flex items-center">
                            <NavLink
                                to="/"
                                className="pr-8 py-2 border-r-zinc-700 border-r-2 text-gray-200 hover:text-[#fea55f] transition-colors duration-300 font-fira-code"
                                onClick={handleNavLinkClick(navLinks[0])}
                            >
                                <span className="text-[#fea55f]">&gt;</span> pushpendra_shrivastav
                            </NavLink>
                        </div>

                        <div className="hidden lg:flex items-center">
                            {navLinks.map((item, index) => (
                                <NavLink
                                    key={index}
                                    to={item.to}
                                    className={linkClassDesk}
                                    onClick={handleNavLinkClick(item)}
                                >
                                    <span className="font-fira-code">{item.label}</span>
                                </NavLink>
                            ))}
                        </div>

                        <button
                            className="lg:hidden text-white hover:text-[#fea55f] focus:outline-none transition-transform duration-300 transform hover:scale-110"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ?
                                <MdClose className="text-[#fea55f] text-2xl" /> :
                                <MdOutlineMenu className="text-white text-2xl" />
                            }
                        </button>
                    </div>
                </div>

                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="bg-[#011627]/95 backdrop-blur-md border-t border-white/10 px-3 py-2 space-y-1 shadow-lg">
                        {navLinks.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.to}
                                className={linkClassMob}
                                onClick={handleNavLinkClick(item)}
                            >
                                <span className="font-fira-code">{item.label}</span>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;