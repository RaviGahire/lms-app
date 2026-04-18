import React, { useState, useContext, useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ContextData from '../Contexts/Context'; // Adjust path
import { IconBellRinging, IconMessageDots, IconChevronRight } from '@tabler/icons-react'; // Adjust if using different library

const NAV_ITEMS = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'About Us', path: '/aboutus' },
];

const ROLE_PATHS = {
    student: "/student",
    admin: "/admin",
    instructor: "/instructor"

};

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { loggedInUserProfile } = useContext(ContextData);

    const { userName, role, email } = loggedInUserProfile || {};

    // Calculate path safely
   const dashboardPath = ROLE_PATHS[role?.toLowerCase()] || "/login"

    // Helper to get initials for the avatar
    const getInitials = (name) => {
        if (!name) return "??";
        return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    };

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <nav className='flex items-center justify-between md:justify-around p-4 relative z-50 bg-gray-100 shadow-md'>
                {/* App Logo */}
                <div>
                    <Link to={'/'} className='text-2xl font-bold cursor-pointer'>MasterTrack</Link>
                </div>

                {/* Hamburger menu */}
                <button
                    onClick={toggleMenu}
                    className="flex md:hidden flex-col gap-1.5 cursor-pointer z-50 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 lg:gap-10 items-center">
                    <div className="flex gap-6 lg:gap-8 text-gray-700 font-medium">
                        {NAV_ITEMS.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `transition-all duration-300 hover:text-cyan-600 ${isActive ? 'text-cyan-600 font-bold' : ''}`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    {loggedInUserProfile ? (
                        <div className="flex items-center gap-4 lg:gap-6">
                            <div className="flex items-center gap-3 text-gray-400">
                                <Link
                                    to={dashboardPath}
                                    className="flex items-center gap-2 p-1 pr-3 rounded-full border border-gray-200 hover:border-cyan-500 hover:bg-gray-50 transition-all"
                                >
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${userName || 'User'}&background=06b6d4&color=fff`}
                                        alt="User profile"
                                        className="w-7 h-7 rounded-full object-cover"
                                    />
                                    <span className="text-sm font-medium text-gray-700">{userName}</span>
                                </Link>
                                <IconBellRinging size={20} stroke={1.5} className="cursor-pointer hover:text-cyan-500 transition-colors" />
                                <IconMessageDots size={20} stroke={1.5} className="cursor-pointer hover:text-cyan-500 transition-colors" />
                            </div>
                        </div>
                    ) : (
                        <div className="flex gap-2 lg:gap-4">
                            <Link to='/login' className="px-4 py-1.5 text-sm bg-cyan-600 text-white rounded-full font-semibold border border-cyan-500 hover:bg-white hover:text-black transition duration-300">Login</Link>
                            <Link to='/signup' className="px-4 py-1.5 text-sm bg-white text-black rounded-full font-semibold border border-cyan-500 hover:shadow-md transition duration-300">SignUp</Link>
                        </div>
                    )}
                </div>
            </nav>

            {/* Mobile menu backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 md:hidden z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={closeMenu}
            />

            {/* Mobile Menu Drawer */}
            <div className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg md:hidden z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    <div className="border-b border-gray-200 bg-gray-50/50">
                        {loggedInUserProfile ? (
                            <Link to={dashboardPath} onClick={closeMenu} className="flex items-center justify-between px-6 py-5 active:bg-gray-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-linear-to-tr from-cyan-600 to-cyan-500 text-white flex items-center justify-center font-bold shadow-md">
                                        {getInitials(userName)}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-gray-900 leading-tight">{userName}</span>
                                        <span className="text-xs text-gray-500">{email}</span>
                                    </div>
                                </div>
                                <IconChevronRight stroke={2} />
                            </Link>
                        ) : (
                            <div className="px-6 py-6">
                                <p className="text-sm font-medium text-gray-700 mb-1">Welcome Guest</p>
                                <div className="flex items-center gap-3 mt-4">
                                    <Link to="/login" onClick={closeMenu} className="flex-1 text-center px-4 py-2 text-sm font-semibold border border-gray-300 rounded-xl bg-white">Login</Link>
                                    <Link to="/signup" onClick={closeMenu} className="flex-1 text-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-xl">Sign Up</Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <ul className="flex flex-col text-gray-700 font-medium grow">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.name} className="border-b border-gray-100">
                                <NavLink
                                    to={item.path}
                                    onClick={closeMenu}
                                    className="block px-6 py-4 hover:bg-cyan-50"
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="text-center text-xs text-gray-500 py-6">
                        <p>&copy; {new Date().getFullYear()} MasterTrack</p>
                    </div>
                </div>
            </div>
        </>
    );
};