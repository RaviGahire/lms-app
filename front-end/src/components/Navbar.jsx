import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react';
import ContextData from '../Contexts/Context';
import { IconBellRinging, IconMessageDots } from '@tabler/icons-react';

export const Navbar = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isloggedIn, setIsLoggedIn] = useState(false);

    const { IS_VERIFIED, USER_EMAIL, USER_ID, USER_NAME, USER_ROLE } = data

    //dynamic route function
    const routeUserRole = (userRole) => {
        if (userRole === "student") return "/student";
        if (userRole === "admin") return "/admin";
        if (userRole === "super-admin") return "/super-admin";
        return "/login";
    };
    const link = routeUserRole(USER_ROLE); //Role Base route

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }


    // Navitems to navigate to different routes
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Courses', path: '/courses' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'About Us', path: '/aboutus' },
    ]

    useEffect(() => {
        if (IS_VERIFIED === true) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [IS_VERIFIED]);



    return (
        <>
            <nav className='flex items-center justify-between md:justify-around p-4 relative z-50 bg-gray-100 shadow-md'>
                {/* App Logo */}
                <div aria-label='App-Logo'>
                    <Link to={'/'} className='text-2xl font-bold cursor-pointer'>MasterTrack</Link>
                </div>
                {/* Hamburger menu for mobile */}
                <div
                    onClick={toggleMenu}
                    className="flex md:hidden flex-col gap-1.5 cursor-pointer group z-50" aria-label="Hamburger Menu">
                    <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>

                {/* Navbar for desktop */}
                <div className="hidden md:flex gap-8 lg:gap-10 items-center">
                    <div className="flex gap-6 lg:gap-8 text-gray-700 font-medium">
                        {/* Main routing routes  */}
                        {navItems.map((item) => (
                            <div aria-label='Navbar-Links' key={item.name}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `transition-all duration-300 hover:text-cyan-600 ${isActive ? 'text-cyan-600 font-bold' : ''
                                        }`
                                    }>
                                    {item.name}
                                </NavLink>
                            </div>
                        ))}
                    </div>

                    {/* Login and signin btns with condition */}
                    {isloggedIn ? (
                        <div className="flex items-center gap-4 lg:gap-6">
                            {/* Notification Icons */}
                            <div className="flex items-center gap-3 text-gray-400">
                                {/* Profile Link */}
                                <Link
                                    to={`${link}`}
                                    className="flex items-center gap-2 p-1 pr-3 rounded-full border border-gray-200 hover:border-cyan-500 hover:bg-gray-50 transition-all"
                                >
                                    {/* User Image */}
                                    <img
                                        src="https://ui-avatars.com/api/?name=User+Name&background=06b6d4&color=fff"
                                        alt="User profile"
                                        className="w-7 h-7 rounded-full object-cover"
                                    />
                                    {/* User Name */}
                                    <span className="text-sm font-medium text-gray-700">{USER_NAME}</span>
                                </Link>
                                <IconBellRinging size={20} stroke={1.5} className="cursor-pointer hover:text-cyan-500 transition-colors" />
                                <IconMessageDots size={20} stroke={1.5} className="cursor-pointer hover:text-cyan-500 transition-colors" />
                            </div>
                        </div>
                    ) : (
                        <div className="flex gap-2 lg:gap-4">
                            <div>
                                <Link to={'/login'}
                                    className="px-4 py-1.5 text-sm bg-cyan-600 text-white rounded-full font-semibold border border-cyan-500 hover:bg-white hover:text-black transition duration-300"
                                >Login</Link>

                            </div>
                            <div>
                                <Link to={'/signup'}
                                    className="px-4 py-1.5 text-sm bg-white text-black rounded-full font-semibold border border-cyan-500 hover:shadow-md transition duration-300"
                                >SignUp</Link>
                            </div>
                        </div>)
                    }
                </div>
            </nav>
            {/* Mobile menu backdrop */}
            <div className={`fixed inset-0 bg-black/50 md:hidden z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={closeMenu}>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg md:hidden z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}      >
                <div className="flex flex-col ">
                    {/* User Profile Mobile Section */}
                    <div className="border-b border-gray-200 bg-gray-50/50">
                        {isloggedIn ? (
                            /* Logged In State */
                            <Link to={`${link}`} className="flex items-center justify-between px-6 py-5 active:bg-gray-100 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-linear-to-tr from-cyan-600 to-cyan-500 text-white flex items-center justify-center font-bold shadow-md">
                                        RG
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-gray-900 leading-tight">Ravi Gahire</span>
                                        <span className="text-xs text-gray-500">ravi@example.com</span>
                                    </div>
                                </div>
                                {/* Small chevron  */}
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        ) : (
                            /* signUp btn */
                            <div className="px-6 py-6">
                                <p className="text-sm font-medium text-gray-700 mb-1">Welcome Guest</p>
                                <p className="text-xs text-gray-500 mb-4">
                                    Create account to access more features
                                </p>
                                <div className="flex items-center gap-3">
                                    <Link
                                        to="/login"
                                        className="flex-1 text-center px-4 py-2.5 text-sm font-semibold text-gray-700 border border-gray-300 rounded-xl active:scale-95 transition-all bg-white"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        to="/signup"
                                        className="flex-1 text-center px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-xl shadow-sm active:scale-95 transition-all"
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Navbar navigation */}
                    <div>
                        <ul className="flex flex-col text-gray-700 font-medium">
                            {navItems.map((item) => (
                                <li key={item.name} className="border-b border-gray-100">
                                    <NavLink
                                        to={item.path}
                                        onClick={closeMenu}
                                        className="block px-6 py-4 transition-all duration-300 hover:text-cyan-600 hover:bg-cyan-50"
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        {/* Mobile Footer */}
                        <div className="text-center text-xs text-gray-500 py-6 bg-white">
                            <p>&copy; {new Date().getFullYear()} MasterTrack. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
