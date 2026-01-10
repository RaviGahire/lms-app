import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when clicking outside or on a link
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Courses', href: '/courses' },
        { name: 'Blog', href: '/blog' },
        { name: 'About Us', href: '/about' },
    ];

    return (
        <>
            <nav className="flex items-center justify-between md:justify-around p-4 relative z-50 bg-white shadow-sm">
                {/* Logo */}
                <div className="text-2xl font-bold cursor-pointer transition duration-300">
                    MasterTrack
                </div>

                {/* Hamburger Menu (Mobile) */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col gap-1.5 cursor-pointer group z-50"
                    aria-label="Toggle Menu"
                >
                    <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {/* Nav Items - Desktop */}
                <div className="hidden md:flex gap-8 lg:gap-10 items-center">
                    <ul className="flex gap-6 lg:gap-8 text-gray-700 font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="transition-all duration-300 hover:text-cyan-600 hover:underline">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex gap-2 lg:gap-4">
                        <a href="/login" className="px-4 py-1.5 text-sm bg-cyan-600 text-white rounded-full font-semibold border border-cyan-500 hover:bg-white hover:text-black transition duration-300">
                            Login
                        </a>
                        <a href="/register" className="px-4 py-1.5 text-sm bg-white text-black rounded-full font-semibold border border-cyan-500 hover:shadow-md transition duration-300">
                            Register
                        </a>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 md:hidden z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={closeMenu}
            ></div>

            {/* Mobile Menu Drawer */}
            <div className={`fixed top-0 left-0 right-0 bg-white md:hidden z-40 shadow-xl transition-all duration-300 origin-top transform ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
                <div className="flex flex-col pt-20"> {/* Padding top to clear the nav height */}

                    {/* User Profile Mobile */}
                    <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200 bg-gray-50">
                        <div className="w-12 h-12 rounded-full bg-cyan-600 text-white flex items-center justify-center font-semibold shadow-inner">
                            RG
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold text-gray-800">Ravi Gahire</p>
                            <p className="text-xs text-gray-500">ravi@example.com</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex flex-col text-gray-700 font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name} className="border-b border-gray-100">
                                <a
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="block px-6 py-4 transition-all duration-300 hover:text-cyan-600 hover:bg-cyan-50"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Footer */}
                    <div className="text-center text-xs text-gray-500 py-6 bg-white">
                        <p>&copy; {new Date().getFullYear()} MasterTrack. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;