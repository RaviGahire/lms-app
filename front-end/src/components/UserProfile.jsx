import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const UserProfile = () => {

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
          <div className="max-w-7xl mx-auto bg-white   overflow-hidden">
        <div className="flex flex-col md:flex-row">
            {/* <!-- Sidebar --> */}
            <div className="w-full md:w-80 bg-linear-to-b from-purple-600 to-pink-600 p-8 text-white">
                <div className="text-center mb-6">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" 
                         alt="Student" 
                         className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"/>
                    <h2 className="text-2xl font-bold mb-1">Sarah Johnson</h2>
                    <p className="text-purple-100">STU-2023-4567</p>
                </div>

                <div className="space-y-4">
                    <div className="border-t border-purple-400 pt-4">
                        <div className="flex items-center gap-3 mb-3">
                            <i className="fas fa-envelope text-lg"></i>
                            <div>
                                <p className="text-xs text-purple-200">Email</p>
                                <p className="text-sm">sarah.johnson@university.edu</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                            <i className="fas fa-phone text-lg"></i>
                            <div>
                                <p className="text-xs text-purple-200">Phone</p>
                                <p className="text-sm">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                            <i className="fas fa-map-marker-alt text-lg"></i>
                            <div>
                                <p className="text-xs text-purple-200">Location</p>
                                <p className="text-sm">New York, USA</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <i className="fas fa-calendar text-lg"></i>
                            <div>
                                <p className="text-xs text-purple-200">Enrolled</p>
                                <p className="text-sm">Sept 2023</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-purple-400 pt-4">
                        <h3 className="font-semibold mb-3 flex items-center gap-2">
                            <i className="fas fa-graduation-cap"></i>
                            Program Details
                        </h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-purple-200">Program</span>
                                <span className="font-medium">Computer Science</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-purple-200">Year</span>
                                <span className="font-medium">2nd Year</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-purple-200">Credits</span>
                                <span className="font-medium">45/120</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Main Content --> */}
            <div className="flex-1 p-8">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Academic Overview</h2>
                    <p className="text-gray-600">Track your progress and achievements</p>
                </div>

                {/* <!-- Stats Cards --> */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">GPA</p>
                                <p className="text-3xl font-bold text-blue-600">3.85</p>
                            </div>
                            <i className="fas fa-star text-blue-600 text-3xl"></i>
                        </div>
                    </div>
                    <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Attendance</p>
                                <p className="text-3xl font-bold text-green-600">94%</p>
                            </div>
                            <i className="fas fa-clock text-green-600 text-3xl"></i>
                        </div>
                    </div>
                    <div className="bg-linear-to-br from-orange-50 to-orange-100 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Assignments</p>
                                <p className="text-3xl font-bold text-orange-600">28/31</p>
                            </div>
                            <i className="fas fa-file-alt text-orange-600 text-3xl"></i>
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
