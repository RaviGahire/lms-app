import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  IconArrowRight,
  IconUser,
  IconMenu2,
  IconX,
} from '@tabler/icons-react';
import { VersionBadge } from './Badges';
import MasterTrackLogo from './Icons/Logo';

interface NavItem {
  title: string;
  path: string;
}

const NAV_TABS: NavItem[] = [
  { title: 'Home', path: '/' },
  { title: 'Explore', path: '/explore' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserLogin, setIsUserLogin] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative w-full bg-bg-secondary text-text-highlight border-b border-border-subtle/40 z-50">
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/*Brand Logo & Version Badge */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2"
            aria-label="Home"
          >
            <MasterTrackLogo width={30} height={32} />
          </Link>
          <div className="hidden sm:inline-flex">
            <VersionBadge />
          </div>
        </div>

        {/* Desktop & Tablet Nav Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_TABS.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `text-sm lg:text-base leading-6 px-3 lg:px-4 py-0.5 rounded-md transition-colors ${
                  isActive
                    ? 'border border-border-subtle bg-bg-surface text-text-primary font-medium'
                    : 'text-text-primary hover:text-text-secondary hover:bg-bg-surface/50 font-normal'
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>

        {/* User Profile and Login btns */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          {isUserLogin ? (
            /* Logged In View */
            <Link
              to="/profile"
              aria-label="User Profile"
              className="flex items-center gap-2 p-1.5 rounded-full text-text-primary hover:text-text-secondary hover:bg-bg-surface/50 transition-colors"
            >
              <IconUser size={22} />
            </Link>
          ) : (
            /* Logged Out View */
            <>
              <Link
                to="/login"
                className="text-sm lg:text-base capitalize text-text-primary hover:text-text-secondary transition-colors"
              >
                Log in
              </Link>
              {/* Signin btn */}
              <Link
                to="/signin"
                className="group flex items-center gap-1.5 border border-border-subtle hover:border-white-muted px-3.5 py-1.5 rounded-md text-sm font-semibold capitalize transition-all hover:bg-bg-surface"
              >
                <span>Start free</span>
                <IconArrowRight
                  size={16}
                  className="transition-transform duration-150 ease-in-out group-hover:translate-x-1"
                />
              </Link>
            </>
          )}
        </div>

        {/* ==========Mobile============== */}
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="sm:hidden">
            <VersionBadge />
          </div>
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="p-2 rounded-md text-text-primary hover:text-text-secondary hover:bg-bg-surface focus:outline-none focus:ring-2 focus:ring-inset focus:ring-text-muted"
          >
            {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile & Tablet Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-border-subtle bg-bg-secondary px-4 pt-3 pb-6 space-y-4">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-1">
            {NAV_TABS.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                end={item.path === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'border border-border-subtle bg-bg-surface text-text-secondary'
                      : 'text-text-primary hover:text-text-secondary hover:bg-bg-surface/50'
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>

          <div className="pt-4 border-t border-border-subtle flex flex-col gap-3">
            {isUserLogin ? (
              /* Logged In View */
              <Link
                to="/profile"
                onClick={closeMenu}
                className="flex items-center gap-2.5 px-3 py-2 rounded-md text-sm font-medium text-text-primary hover:text-text-secondary hover:bg-bg-surface/50 transition-colors"
              >
                <IconUser size={20} />
                <span>My Profile</span>
              </Link>
            ) : (
              /* Logged Out View */
              <>
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="w-full flex items-center justify-center py-2 rounded-md text-sm font-medium capitalize text-text-primary hover:text-white transition-colors"
                >
                  Log in
                </Link>

                <Link
                  to="/signin"
                  onClick={closeMenu}
                  className="group w-full flex items-center justify-center gap-2 border border-border-subtle hover:border-white py-2.5 rounded-md text-sm font-bold capitalize transition-all hover:bg-bg-surface"
                >
                  <span>Start free</span>
                  <IconArrowRight
                    size={18}
                    className="transition-transform duration-200 ease-in-out group-hover:translate-x-1"
                  />
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
