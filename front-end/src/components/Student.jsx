import { IconAward, IconBooks, IconBuilding, IconCalendar, IconCirclePlus, IconClockHour2, IconDeviceMobile, IconInfoCircle, IconMail, IconMapPin, IconSchool, IconSettingsCode, IconStar, IconUser, IconWorld } from "@tabler/icons-react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LogoutButton } from "../utils/LogoutUser";
import ContextData from "../Contexts/Context";


export const Student = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState('')
    const { loggedInUser } = useContext(ContextData);

    const { USER_ID } = loggedInUser || {}
    const API_URL = import.meta.env.VITE_API_URL

    const fetchUserDetails = async () => {
        try {
            const res = await axios.get(`${API_URL}/users/${USER_ID}`,) // fetching user detials 

            //  console.log(res.data.data)
            const userData = res.data.data

            setData(userData)

        } catch (error) {

            console.log(error)

        }

    }

    useEffect(() => {
        fetchUserDetails()
    }, [])




    return (
        <div className="main-container bg-cyan-700">
            <div className="flex flex-col md:flex-row">
                {/* <!-- Sidebar --> */}
                <div className="w-full md:w-80 bg-cyan-800 p-8 text-white">
                    <div className="text-center mb-6">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                            alt="Student"
                            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg" />
                        <h2 className="text-2xl font-bold mb-1">{data?.userName}</h2>
                        <p className="text-purple-100">STU-2023-4567</p>
                    </div>

                    {/* registred information */}
                    <div className="space-y-4">
                        <div className="border-t border-white pt-4">
                            <div className="flex items-center gap-3 mb-3">
                                <IconMail size={24} stroke={2} />
                                <div>
                                    <p className="text-xs text-purple-200 font-bold tracking-wide">Email</p>
                                    <p className="text-sm">{data?.email}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <IconDeviceMobile size={24} stroke={2} />
                                <div>
                                    <p className="text-xs text-purple-200 font-bold tracking-wide">Phone</p>
                                    <p className="text-sm">{data?.phone || 'Update phone'}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <IconMapPin size={24} stroke={2} />
                                <div>
                                    <p className="text-xs text-purple-200 font-bold tracking-wide">Location</p>
                                    <p className="text-sm">{data?.location || 'Update location'}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <IconCalendar size={24} stroke={2} />
                                <div>
                                    <p className="text-xs text-purple-200 font-bold tracking-wide">Enrolled</p>
                                    <p className="text-sm">{data?.createdAt || "NA"}</p>
                                </div>
                            </div>
                        </div>
                        {/* Personal information */}
                        <div className="border-t border-white pt-4">
                            <div className="flex items-center gap-3 mb-3">
                                <IconUser
                                    stroke={2} />
                                <div>
                                    <p className="text-xs text-purple-200 font-bold tracking-wide">Gender</p>
                                    <p className="text-sm">{data?.gender || "Update Gender"}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <IconBuilding stroke={2} />
                                <div>
                                    <p className="text-xs text-purple-200 font-bold tracking-wide">School / College</p>
                                    <p className="text-sm">{data?.college || "Update college"}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <IconSchool size={24} stroke={2} />
                                <div>
                                    <p className="text-xs text-purple-200 font-bold tracking-wide">Qualification</p>
                                    <p className="text-sm">{data?.qualification || "Update qualification"}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <IconWorld stroke={2} />
                                <div>
                                    <p className="text-xs text-purple-200 font-bold tracking-wide">Nationality</p>
                                    <p className="text-sm">{data?.nationality || "Update Nationality "}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <IconCalendar size={24} stroke={2} />
                                <div>
                                    <p className="text-xs text-purple-200  font-bold tracking-wide">Date of Birth</p>
                                    <p className="text-sm">{data?.dob || "Update Date of Birth"}</p>
                                </div>
                            </div>

                        </div>

                        {/* Program details */}
                        <div className="border-t border-purple-400 pt-4">
                            <h3 className="font-semibold mb-3 flex items-center gap-2">
                                <IconInfoCircle stroke={2} />
                                About this account
                            </h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-purple-200 font-bold tracking-wide">Joined</span>
                                    <span className="font-medium">Jan 2026</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-purple-200 font-bold tracking-wide">Account based</span>
                                    <span className="font-medium">India</span>
                                </div>

                            </div>
                        </div>

                        {/* upadte btn and logout btn */}
                        <div className="flex justify-between mt-8">
                            <Link to={`/update_student/${USER_ID}`} state={{ currentUser: data }} className="px-4 py-2 rounded-md cursor-pointer bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
                                Update / Edit
                            </Link>
                            <LogoutButton />
                        </div>
                    </div>
                </div>

                {/* <!-- Main Content --> */}
                {/*Headings */}
                <div className="flex-1 p-8">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2">Learning Journey</h2>
                        <p className="text-white/80">Manage your active modules and recognized milestones</p>
                        {/* Error text */}
                        <div className="absolute top-20 bg-red-500 text-white">{error}</div>
                    </div>

                    {/* Cards*/}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {/* Card-1 */}
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all hover:border-white/50 cursor-pointer group">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-4">
                                <p className="text-[11px] font-bold text-white uppercase tracking-widest">
                                    Enrolled Courses
                                </p>
                                <div className="bg-purple-500/20 text-white text-[10px] p-1 rounded-full border border-purple-500/30 font-bold">
                                    <IconBooks className="w-4 h-4" stroke={2} />
                                </div>
                            </div>

                            {/* Main Metric */}
                            <div className="flex items-baseline gap-2 mb-6">
                                <h2 className="text-5xl font-bold text-white tracking-tighter">12</h2>
                                <div className="flex flex-col">
                                    <span className="text-white/80 text-xs font-medium leading-none">Total</span>
                                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-tighter">Active</span>
                                </div>
                            </div>

                            {/* Detail Breakdown */}
                            <div className="space-y-3 border-t border-white/50 pt-4">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="text-white">Completed</span>
                                    <span className="text-white font-mono">08/12</span>
                                </div>

                                {/* Visual Progress Bar */}
                                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                    <div
                                        className="bg-purple-500 h-full rounded-full group-hover:bg-purple-400 transition-all duration-700"
                                        style={{ width: '66%' }}
                                    ></div>
                                </div>

                                <div className="flex justify-between items-center text-[10px] pt-1">
                                    <span className="text-white italic">4 remaining this term</span>
                                    <span className="text-green-500 font-bold uppercase">66% Done</span>
                                </div>
                            </div>
                        </div>
                        {/* Card-2  */}
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all hover:border-emerald-500/50 group cursor-pointer">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-3">
                                <p className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">Skill XP</p>
                                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 p-1 rounded-full border border-emerald-500/20 font-bold">
                                    <IconSettingsCode className="w-4 h-4 text-amber-500" stroke={2} />
                                </span>
                            </div>

                            {/* Main Points */}
                            <div className="flex items-baseline gap-2 mb-5">
                                <h2 className="text-4xl font-bold text-white tracking-tighter">1,250</h2>
                                <span className="text-emerald-400/60 text-xs font-bold">+12% inc.</span>
                            </div>

                            {/* Highest Point Skill */}
                            <div className="mb-4 bg-white/5 rounded-xl p-3 border border-white/5">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-[10px] text-yellow-500 uppercase font-bold tracking-tight">Highest Mastery</span>
                                    <span className="text-[10px] text-emerald-400 font-mono">450 XP</span>
                                </div>
                                <div className="text-sm font-semibold text-white">Javascript</div>
                            </div>

                            {/* Other Skills Mini-Tags */}
                            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                                {['Javascript', 'CSS', 'HTML', 'Node'].map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-[9px] font-bold bg-white/5 text-white/70 px-2 py-0.5 rounded-md border border-white/10 group-hover:border-emerald-500/30 group-hover:text-white transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                                <span className="text-[10px] font-bold text-green-500 px-1 py-0.5">+3 more</span>
                            </div>
                        </div>
                        {/* Card-3 */}
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all hover:border-amber-500/50 group cursor-pointer">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-4">
                                <p className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">Certifications</p>
                                <div className="bg-amber-500/20 p-1.5 rounded-lg">
                                    <IconAward className="w-4 h-4 text-amber-500" />
                                </div>
                            </div>

                            {/* Main Counter */}
                            <div className="flex items-baseline gap-2 mb-6">
                                <h2 className="text-4xl font-bold text-white tracking-tighter">04</h2>
                                <span className="text-white/40 text-sm italic">Verified Assets</span>
                            </div>

                            {/* Certification List */}
                            <div className="space-y-2 border-t border-white/5 pt-4">
                                {[
                                    { name: "AWS Cloud Practitioner", date: "Jan 2024" },
                                    { name: "Meta Front-End Professional", date: "Dec 2023" },
                                    { name: "Google Data Analytics", date: "Oct 2023" }
                                ].map((cert, idx) => (
                                    <div key={idx} className="flex items-center justify-between group/item">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-semibold text-gray-200 group-hover/item:text-amber-400 transition-colors">
                                                {cert.name}
                                            </span>
                                            <span className="text-[10px] text-white/30">{cert.date}</span>
                                        </div>
                                        <div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                                            {/* <IconExternalLinkOff className="w-3 h-3 text-white/40" /> */}
                                        </div>
                                    </div>
                                ))}

                                {/* View All Toggle */}
                                <button className="w-full mt-2 py-2 text-[10px] font-bold text-white/40 hover:text-white uppercase tracking-tighter bg-white/5 rounded-lg border border-transparent hover:border-white/10 transition-all">
                                    + View 1 More Achievement
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* main container*/}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-10">
                        {/* Active Curriculum*/}
                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                                <div className="w-1 h-6 bg-purple-500 rounded-full"></div>
                                Active Curriculum
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { name: "HTML5", progress: 75, color: "bg-purple-500" },
                                    { name: "CSS", progress: 90, color: "bg-blue-500" },
                                    { name: "JavaScript", progress: 85, color: "bg-amber-500" },
                                    { name: "Tailwind", progress: 60, color: "bg-emerald-500" },
                                    { name: "React.js", progress: 85, color: "bg-amber-500" },
                                ].map((course, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/5 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                                        <div className="flex justify-between items-end mb-4">
                                            {/* Course Info */}
                                            <div className="space-y-1">
                                                <h4 className="font-medium text-gray-100 group-hover:text-white transition-colors">
                                                    {course.name}
                                                </h4>
                                                <p className="text-xs font-mono text-gray-300">
                                                    {course.progress}% Complete
                                                </p>
                                            </div>

                                            {/* Resume Button */}
                                            <button className="px-4 cursor-pointer py-1.5 text-xs font-medium bg-white/10 hover:bg-white text-white hover:text-black rounded-lg transition-all duration-300">
                                                Resume
                                            </button>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                                            <div
                                                className={`${course.color} h-full rounded-full transition-all duration-1000 ease-out`}
                                                style={{ width: `${course.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/*Milestones*/}
                        <div >
                            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                                <span className="w-1 h-6 bg-amber-500 rounded-full"></span>
                                Milestones
                            </h3>
                            <div className="grid grid-cols-1 gap-3">
                                {[
                                    "Dean's List 2023",
                                    "Hackathon Winner",
                                    "Research Assistant",
                                    "Open Source Contributor"
                                ].map((award, idx) => (
                                    <div key={idx} className="flex items-center gap-4 bg-linear-to-r from-amber-500/10 to-transparent border border-amber-500/20 p-4 rounded-xl">
                                        <div className="bg-amber-500/20 p-2 rounded-lg">
                                            <IconStar className="w-5 h-5 text-amber-500" />
                                        </div>
                                        <span className="text-gray-200 font-medium">{award}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recommended */}
                        <div>
                            {/* Section Header */}
                            <div className="flex items-center justify-between mb-5 ">
                                <div>
                                    <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                                        <span className="w-1 h-6 bg-green-500 rounded-full"></span>
                                        Recommended for you
                                    </h3>
                                    <p className="text-sm text-gray-100">Expand your skillset with these top-rated courses</p>
                                </div>
                                <button className="text-xs cursor-pointer font-medium text-purple-400 hover:text-purple-300 transition-colors">
                                    View All
                                </button>
                            </div>

                            {/* Course Grid */}
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { name: "Next.js 14 Mastery", level: "Advanced", duration: "12h", color: "border-blue-500/50" },
                                    { name: "TypeScript Fundamentals", level: "Intermediate", duration: "8h", color: "border-purple-500/50" },
                                    { name: "Node.js Backend", level: "Beginner", duration: "15h", color: "border-emerald-500/50" },
                                    { name: "UI/UX with Figma", level: "Intermediate", duration: "6h", color: "border-pink-500/50" },
                                ].map((course, idx) => (
                                    <div key={idx} className={`bg-white/5 border-l-4 ${course.color} rounded-r-xl p-4 hover:bg-white/10 transition-all group cursor-pointer`}>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className="text-[10px] uppercase tracking-wider text-yellow-100 font-bold">{course.level}</span>
                                                <h4 className="font-semibold text-gray-200 mt-1 group-hover:text-white transition-colors">{course.name}</h4>
                                                <div className="flex items-center gap-2 mt-1">
                                                  <IconClockHour2 className={'size-4 text-white'} />
                                                    <p className="text-xs text-gray-100">{course.duration}</p>
                                                </div>
                                            </div>

                                            <button className="p-2 rounded-full bg-white/5 group-hover:bg-white cursor-pointer text-white group-hover:text-black transition-all duration-300 shadow-xl">
                                             <IconCirclePlus className={'w-5 h-5'} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
