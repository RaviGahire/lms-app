import { IconBuilding, IconCalendar, IconClock, IconDeviceMobile, IconFile, IconInfoCircle, IconMail, IconMapPin, IconSchool, IconStar, IconUser, IconWorld } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LogoutButton, UpdateButton } from "./ActionButtons";

export const Student = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('User not fetched may be ur account deleted')

    const location = useLocation();
    const userId = location.state?.userId; // for user detials

    const fetcUserDetails = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/api/users/${userId}`,) // fetching user detials using id 
            //checking API is response 
            if (res.data.success) {
                alert(res.data.message)
            } else {
                setError(res.data.message)
            }

            const userDetails = { //store user detials in object
                email: res.data.data.email,
                role: res.data.data.role,
                userName: res.data.data.userName,
                email: res.data.data.email,
                joined: res.data.data.createdAt,

            }

            setUser(userDetails)

        } catch (error) {
            console.log(error)
        }

    }



    // useEffect for data
    useEffect(() => {
        fetcUserDetails()
    }, [])

    return (
        <div className="main-container">
            <div className="flex flex-col md:flex-row">
                {/* <!-- Sidebar --> */}
                <div className="w-full md:w-80 bg-cyan-800 p-8 text-white">
                    <div className="text-center mb-6">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                            alt="Student"
                            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg" />
                        <h2 className="text-2xl font-bold mb-1">Sarah Johnson</h2>
                        <p className="text-purple-100">STU-2023-4567</p>
                    </div>

                    {/* registred information */}
                    <div className="space-y-4">
                        <div className="border-t border-white pt-4">
                            <div className="flex items-center gap-3 mb-3">
                                <IconMail size={24} stroke={2} />
                                <div>
                                    <p className="text-xs text-purple-200 font-bold tracking-wide">Email</p>
                                    <p className="text-sm">sarah.johnson@university.edu</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <IconDeviceMobile size={24} stroke={2} />
                                <div>
                                    <p className="text-xs text-purple-200 font-bold tracking-wide">Phone</p>
                                    <p className="text-sm">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <IconMapPin size={24} stroke={2} />
                                <div>
                                    <p className="text-xs text-purple-200 font-bold tracking-wide">Location</p>
                                    <p className="text-sm">New York, USA</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <IconCalendar size={24} stroke={2} />
                                <div>
                                    <p className="text-xs text-purple-200 font-bold tracking-wide">Enrolled</p>
                                    <p className="text-sm">Sept 2023</p>
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
                                    <p className="text-sm">Female</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <IconBuilding stroke={2} />
                                <div>
                                    <p className="text-xs text-purple-200 font-bold tracking-wide">College</p>
                                    <p className="text-sm">XYZ college</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <IconSchool size={24} stroke={2} />
                                <div>
                                    <p className="text-xs text-purple-200 font-bold tracking-wide">Qualification</p>
                                    <p className="text-sm">New York, USA</p>
                                </div>
                            </div>
                               <div className="flex items-center gap-3 mb-3">
                                <IconWorld stroke={2} />
                                <div>
                                    <p className="text-xs text-purple-200 font-bold tracking-wide">Nationality</p>
                                    <p className="text-sm">New York, USA</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <IconCalendar size={24} stroke={2} />
                                <div>
                                    <p className="text-xs text-purple-200  font-bold tracking-wide">Date of Birth</p>
                                    <p className="text-sm">Sept 2023</p>
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
                            <Link to={'/update_user/:id'} class="px-4 py-2 rounded-md cursor-pointer bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
                                Update
                            </Link>
                            <LogoutButton />
                        </div>
                    </div>
                </div>

                {/* <!-- Main Content --> */}
                <div className="flex-1 p-8">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Profile Overview</h2>
                        <p className="text-gray-600">Track your progress and achievements</p>
                    </div>

                    {/* <!-- Stats Cards --> */}
                    <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 mb-8">
                        <div className="bg-zinc-900 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-white/80 mb-1 tracking-wide font-bold">CGPA</p>
                                    <p className="text-md sm:text-3xl font-bold text-white/80">3.85</p>
                                </div>
                                <IconStar className="text-blue-600" stroke={2} />
                            </div>
                        </div>
                        <div className="bg-zinc-900 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-white/80 mb-1 tracking-wide font-bold">Attendance</p>
                                    <p className="text-3xl font-bold text-white/80">94%</p>
                                </div>
                                <IconClock className="text-green-600" stroke={2} />
                            </div>
                        </div>
                        <div className="bg-zinc-900 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-white/80 mb-1 tracking-wide font-bold">Assignments</p>
                                    <p className="text-3xl font-bold text-white/80">28/31</p>
                                </div>
                                <IconFile className="text-orange-600" stroke={2} />
                            </div>
                        </div>
                                  <div className="bg-zinc-900 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-white/80 mb-1 tracking-wide font-bold">Assignments</p>
                                    <p className="text-3xl font-bold text-white/80">28/31</p>
                                </div>
                                <IconFile className="text-orange-600" stroke={2} />
                            </div>
                        </div>
                                  <div className="bg-zinc-900 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-white/80 mb-1 tracking-wide font-bold">Assignments</p>
                                    <p className="text-3xl font-bold text-white/80">28/31</p>
                                </div>
                                <IconFile className="text-orange-600" stroke={2} />
                            </div>
                        </div>
                                  <div className="bg-zinc-900 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-white/80 mb-1 tracking-wide font-bold">Assignments</p>
                                    <p className="text-3xl font-bold text-white/80">28/31</p>
                                </div>
                                <IconFile className="text-orange-600" stroke={2} />
                            </div>
                        </div>
                    </div>

                    {/* <!-- Enrolled Courses --> */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">Enrolled Courses</h3>
                        <div className="space-y-3">
                            {/* <!-- Course 1 --> */}
                            <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-medium text-gray-800">Data Structures</h4>
                                    <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full font-semibold">A-</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                                        <div className="bg-purple-600 h-2 rounded-full transition-all" ></div>
                                    </div>
                                    <span className="text-sm text-gray-600">75%</span>
                                </div>
                            </div>

                            {/* <!-- Course 2 --> */}
                            <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-medium text-gray-800">Web Development</h4>
                                    <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full font-semibold">A</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                                        <div className="bg-purple-600 h-2 rounded-full transition-all" ></div>
                                    </div>
                                    <span className="text-sm text-gray-600">90%</span>
                                </div>
                            </div>

                            {/* <!-- Course 3 --> */}
                            <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-medium text-gray-800">Database Systems</h4>
                                    <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full font-semibold">B+</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                                        <div className="bg-purple-600 h-2 rounded-full transition-all" ></div>
                                    </div>
                                    <span className="text-sm text-gray-600">60%</span>
                                </div>
                            </div>

                            {/* <!-- Course 4 --> */}
                            <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-medium text-gray-800">Algorithm Design</h4>
                                    <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full font-semibold">A</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                                        <div className="bg-purple-600 h-2 rounded-full transition-all" ></div>
                                    </div>
                                    <span className="text-sm text-gray-600">85%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Achievements --> */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                            <i className="fas fa-award text-yellow-500"></i>
                            Achievements
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-linear-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full font-medium shadow-md">
                                Dean's List 2023
                            </span>
                            <span className="bg-linear-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full font-medium shadow-md">
                                Hackathon Winner
                            </span>
                            <span className="bg-linear-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full font-medium shadow-md">
                                Research Assistant
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
