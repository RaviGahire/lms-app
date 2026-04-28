import {
    IconArrowBadgeDown,
    IconChevronDown,
    IconChevronRight,
    IconSchool,
    IconShieldCheck,
    IconUserScreen,
} from "@tabler/icons-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const LoginOptions = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            {/* Buttons */}
            <div className="flex gap-4">
                <div className="flex gap-4">
                    {/* Login Btn */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center text-sm cursor-pointer gap-2 bg-cyan-600 hover:bg-cyan-900 
          text-white font-semibold px-5 py-2 rounded-md transition-colors duration-200"
                    >
                        Login
                        <span
                            className={`inline-flex items-center transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                        >
                            <IconChevronDown size={18} stroke={2} />
                        </span>
                    </button>

                    {/* SignUp Btn */}
                    <Link
                        to="/signup"
                        className="group flex items-center text-sm cursor-pointer gap-2 border border-neutral-600/50
          hover:bg-cyan-900 hover:text-neutral-50 text-neutral-700 
            font-semibold px-5 py-2 rounded-md transition-colors duration-200"
                    >
                        SignUp
                        <IconChevronRight
                            size={18}
                            stroke={2}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 overflow-hidden">
                    <Link to="/login/student" onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-2 font-semibold text-[12px] px-4 py-3
                        text-gray-700 hover:bg-cyan-500 hover:text-neutral-50 hover:border-teal-500 
                        transition-all duration-150"
                    >
                        <IconSchool size={18} stroke={2} />
                        <span className="transition-transform duration-300 group-hover:translate-x-1 capitalize">
                            Login as Student
                        </span>
                    </Link>
                    <Link
                        to="/login/instructor"
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-2 font-semibold text-[12px] px-4 py-3
                        text-gray-700 hover:bg-cyan-500 hover:text-neutral-50 hover:border-teal-500 
                        transition-all duration-150"
                    >
                        <IconUserScreen size={18} stroke={2} />
                           <span className="transition-transform duration-300 group-hover:translate-x-1 capitalize">
                            Login as instructor
                        </span>
                    </Link>
                    <Link
                        to="/login/admin"
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-2 font-semibold text-[12px] px-4 py-3
                        text-gray-700 hover:bg-cyan-500 hover:text-neutral-50 hover:border-teal-500 
                        transition-all duration-150"
                    >
                        <IconShieldCheck size={18} stroke={2} /> 
                            <span className="transition-transform duration-300 group-hover:translate-x-1 capitalize">
                            Login as Admin
                        </span>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default LoginOptions;
