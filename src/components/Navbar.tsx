import { useState } from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {

    // State for mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="bg-[#111827] text-emerald-400 px-4 py-4 lg:px-5 lg:py-0 flex justify-between items-center sticky top-0 z-50">
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <span className="">pushpendra-shrivastav</span>
                    <button className="lg:hidden ml-4 text-white hover:text-gray-300 focus:outline-none" onClick={toggleMobileMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                <div className="hidden lg:flex space-x-4">
                    <NavLink to="/" className={(e) => { return e.isActive ? "nav-active block py-2.5 px-2" : "block py-2.5 px-2" }}>_hello</NavLink>
                    <NavLink to="/about" className={(e) => { return e.isActive ? "nav-active block py-2.5 px-2" : "block py-2.5 px-2" }}>_about-me</NavLink>
                    <NavLink to="/projects" className={(e) => { return e.isActive ? "nav-active block py-2.5 px-2" : "block py-2.5 px-2" }}>_projects</NavLink>
                    <NavLink to="/contact" className={(e) => { return e.isActive ? "nav-active block py-2.5 px-2 lg:hidden" : "block py-2.5 px-2 lg:hidden" }}>_contact-me</NavLink>
                </div>

                <div className="hidden lg:flex">
                    <NavLink to="/contact" className={(e) => { return e.isActive ? "nav-active block py-2.5 px-2" : "block py-2.5 px-2" }}>_contact-me</NavLink>
                </div>

                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-14 left-0 w-full bg-[#111827] p-4 space-y-2">
                        <NavLink to="/" className={(e) => { return e.isActive ? "nav-active block w-max py-2" : "block w-max py-2" }} onClick={toggleMobileMenu}>_hello</NavLink>
                        <NavLink to="/about" className={(e) => { return e.isActive ? "nav-active block w-max py-2" : "block w-max py-2" }} onClick={toggleMobileMenu}>_about-me</NavLink>
                        <NavLink to="/projects" className={(e) => { return e.isActive ? "nav-active block w-max py-2" : "block w-max py-2" }} onClick={toggleMobileMenu}>_projects</NavLink>
                        <NavLink to="/contact" className={(e) => { return e.isActive ? "nav-active block w-max py-2" : "block w-max py-2" }} onClick={toggleMobileMenu}>_contact-me</NavLink>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar