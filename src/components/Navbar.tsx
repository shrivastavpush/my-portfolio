import { useState } from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {

    // State for mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const deskNavActive: string = "nav-active block py-2.5 px-5 m-0 border-l-2 border-l-zinc-800";
    const deskNav: string = "block py-2.5 px-5 m-0 border-l-2 border-l-zinc-800";
    const mobNavActive: string = "nav-active block w-max py-1.5 lg:py-2"
    const mobNav: string = "block w-max py-1.5 lg:py-2"

    return (
        <>
            <nav className="bg-[#111827] text-emerald-400 px-4 lg:pl-5 lg:pr-0 lg:py-0 flex items-center justify-between sticky top-0 z-50 border-b-zinc-700 border-b-2">
                <div className="flex items-center justify-between w-full lg:w-auto">
                    <NavLink to="/" className="pr-10 py-3 lg:py-2.5 border-r-zinc-700 border-r-2" onClick={toggleMobileMenu}>pushpendra_shrivastav</NavLink>
                    <button className="lg:hidden ml-4 text-white hover:text-gray-300 focus:outline-none" onClick={toggleMobileMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                <div className='lg:flex hidden'>
                    <div className=" lg:flex space-x-4">
                        <NavLink to="/" className={(e) => { return e.isActive ? deskNavActive : deskNav }}>_hello</NavLink>
                        <NavLink to="/about" className={(e) => { return e.isActive ? deskNavActive : deskNav }}>_about_me</NavLink>
                        <NavLink to="/projects" className={(e) => { return e.isActive ? deskNavActive : deskNav }}>_projects</NavLink>
                    </div>

                    <div className="lg:flex">
                        <NavLink to="/contact" className={(e) => { return e.isActive ? deskNavActive : deskNav }}>_contact_me</NavLink>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-12.5 left-0 w-full bg-[#111827] px-4 py-2.5 space-y-2">
                        <NavLink to="/" className={(e) => { return e.isActive ? mobNavActive : mobNav }}
                            onClick={toggleMobileMenu}>_hello</NavLink>
                        <NavLink to="/about" className={(e) => { return e.isActive ? mobNavActive : mobNav }}
                            onClick={toggleMobileMenu}>_about_me</NavLink>
                        <NavLink to="/projects" className={(e) => { return e.isActive ? mobNavActive : mobNav }}
                            onClick={toggleMobileMenu}>_projects</NavLink>
                        <NavLink to="/contact" className={(e) => { return e.isActive ? mobNavActive : mobNav }}
                            onClick={toggleMobileMenu}>_contact_me</NavLink>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar