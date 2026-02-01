

export const Admin = () => {
    return (
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
                {/* <!-- Sidebar --> */}
                <div className="w-full md:w-80 bg-linear-to-b from-indigo-600 to-blue-600 p-8 text-white">
                    <div className="text-center mb-6">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=DrSmith"
                            alt="Teacher"
                            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg" />
                        <h2 className="text-2xl font-bold mb-1">Dr. Michael Smith</h2>
                        <p className="text-indigo-100">TCH-2020-1234</p>
                        <p className="text-sm text-indigo-200 mt-2">Associate Professor</p>
                    </div>

                    <div className="space-y-4">
                        <div className="border-t border-indigo-400 pt-4">
                            <div className="flex items-center gap-3 mb-3">
                                <i className="fas fa-envelope text-lg"></i>
                                <div>
                                    <p className="text-xs text-indigo-200">Email</p>
                                    <p className="text-sm">michael.smith@university.edu</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <i className="fas fa-phone text-lg"></i>
                                <div>
                                    <p className="text-xs text-indigo-200">Phone</p>
                                    <p className="text-sm">+1 (555) 987-6543</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <i className="fas fa-building text-lg"></i>
                                <div>
                                    <p className="text-xs text-indigo-200">Office</p>
                                    <p className="text-sm">Engineering Bldg, Room 304</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <i className="fas fa-calendar text-lg"></i>
                                <div>
                                    <p className="text-xs text-indigo-200">Joined</p>
                                    <p className="text-sm">January 2020</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-indigo-400 pt-4">
                            <h3 className="font-semibold mb-3 flex items-center gap-2">
                                <i className="fas fa-briefcase"></i>
                                Department Info
                            </h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-indigo-200">Department</span>
                                    <span className="font-medium">Computer Science</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-indigo-200">Experience</span>
                                    <span className="font-medium">12 Years</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-indigo-200">Specialization</span>
                                    <span className="font-medium">AI & ML</span>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-indigo-400 pt-4">
                            <h3 className="font-semibold mb-3 flex items-center gap-2">
                                <i className="fas fa-clock"></i>
                                Office Hours
                            </h3>
                            <div className="space-y-2 text-sm">
                                <div className="bg-indigo-700 bg-opacity-50 rounded p-2">
                                    <p className="font-medium">Monday & Wednesday</p>
                                    <p className="text-indigo-200">2:00 PM - 4:00 PM</p>
                                </div>
                                <div className="bg-indigo-700 bg-opacity-50 rounded p-2">
                                    <p className="font-medium">Friday</p>
                                    <p className="text-indigo-200">10:00 AM - 12:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Main Content --> */}
                <div className="flex-1 p-8">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Teaching Overview</h2>
                        <p className="text-gray-600">Course management and performance metrics</p>
                    </div>

                    {/* <!-- Stats Cards --> */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Active Courses</p>
                                    <p className="text-3xl font-bold text-blue-600">5</p>
                                </div>
                                <i className="fas fa-book text-blue-600 text-3xl"></i>
                            </div>
                        </div>
                        <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Total Students</p>
                                    <p className="text-3xl font-bold text-green-600">156</p>
                                </div>
                                <i className="fas fa-users text-green-600 text-3xl"></i>
                            </div>
                        </div>
                        <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-lg p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">Avg. Rating</p>
                                    <p className="text-3xl font-bold text-purple-600">4.7</p>
                                </div>
                                <i className="fas fa-star text-purple-600 text-3xl"></i>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Current Courses --> */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">Current Courses</h3>
                        <div className="space-y-3">
                            {/* <!-- Course 1 --> */}
                            <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="font-medium text-gray-800">Introduction to Machine Learning</h4>
                                        <p className="text-sm text-gray-600">CS-401 • 42 Students</p>
                                    </div>
                                    <span className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-full font-semibold">Active</span>
                                </div>
                                <div className="flex items-center gap-2 mt-3">
                                    <div className="flex-1">
                                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                                            <span>Course Progress</span>
                                            <span>65%</span>
                                        </div>
                                        <div className="bg-gray-200 rounded-full h-2">
                                            <div className="bg-indigo-600 h-2 rounded-full transition-all" ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-3 text-sm text-gray-600">
                                    <span><i className="fas fa-calendar-alt mr-1"></i>Mon, Wed, Fri</span>
                                    <span><i className="fas fa-clock mr-1"></i>10:00 AM - 11:30 AM</span>
                                </div>
                            </div>

                            {/* <!-- Course 2 --> */}
                            <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="font-medium text-gray-800">Deep Learning Fundamentals</h4>
                                        <p className="text-sm text-gray-600">CS-501 • 28 Students</p>
                                    </div>
                                    <span className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-full font-semibold">Active</span>
                                </div>
                                <div className="flex items-center gap-2 mt-3">
                                    <div className="flex-1">
                                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                                            <span>Course Progress</span>
                                            <span>48%</span>
                                        </div>
                                        <div className="bg-gray-200 rounded-full h-2">
                                            <div className="bg-indigo-600 h-2 rounded-full transition-all" ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-3 text-sm text-gray-600">
                                    <span><i className="fas fa-calendar-alt mr-1"></i>Tue, Thu</span>
                                    <span><i className="fas fa-clock mr-1"></i>2:00 PM - 3:30 PM</span>
                                </div>
                            </div>

                            {/* <!-- Course 3 --> */}
                            <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="font-medium text-gray-800">Data Science Workshop</h4>
                                        <p className="text-sm text-gray-600">CS-301 • 35 Students</p>
                                    </div>
                                    <span className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-full font-semibold">Active</span>
                                </div>
                                <div className="flex items-center gap-2 mt-3">
                                    <div className="flex-1">
                                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                                            <span>Course Progress</span>
                                            <span>82%</span>
                                        </div>
                                        <div className="bg-gray-200 rounded-full h-2">
                                            <div className="bg-indigo-600 h-2 rounded-full transition-all" ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-3 text-sm text-gray-600">
                                    <span><i className="fas fa-calendar-alt mr-1"></i>Wednesday</span>
                                    <span><i className="fas fa-clock mr-1"></i>4:00 PM - 6:00 PM</span>
                                </div>
                            </div>

                            {/* <!-- Course 4 --> */}
                            <div className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="font-medium text-gray-800">Python Programming</h4>
                                        <p className="text-sm text-gray-600">CS-101 • 51 Students</p>
                                    </div>
                                    <span className="bg-indigo-600 text-white text-sm px-3 py-1 rounded-full font-semibold">Active</span>
                                </div>
                                <div className="flex items-center gap-2 mt-3">
                                    <div className="flex-1">
                                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                                            <span>Course Progress</span>
                                            <span>90%</span>
                                        </div>
                                        <div className="bg-gray-200 rounded-full h-2">
                                            <div className="bg-indigo-600 h-2 rounded-full transition-all" ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-3 text-sm text-gray-600">
                                    <span><i className="fas fa-calendar-alt mr-1"></i>Mon, Wed</span>
                                    <span><i className="fas fa-clock mr-1"></i>1:00 PM - 2:30 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Achievements & Qualifications --> */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                                <i className="fas fa-award text-yellow-500"></i>
                                Achievements
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-linear-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full font-medium shadow-md text-sm">
                                    Best Teacher Award 2023
                                </span>
                                <span className="bg-linear-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full font-medium shadow-md text-sm">
                                    Published 15 Papers
                                </span>
                                <span className="bg-linear-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full font-medium shadow-md text-sm">
                                    Research Grant Recipient
                                </span>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                                <i className="fas fa-graduation-cap text-indigo-600"></i>
                                Qualifications
                            </h3>
                            <div className="space-y-2">
                                <div className="bg-indigo-50 rounded-lg p-3 text-sm">
                                    <p className="font-semibold text-gray-800">Ph.D. in Computer Science</p>
                                    <p className="text-gray-600">MIT, 2015</p>
                                </div>
                                <div className="bg-indigo-50 rounded-lg p-3 text-sm">
                                    <p className="font-semibold text-gray-800">M.S. in Artificial Intelligence</p>
                                    <p className="text-gray-600">Stanford University, 2012</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Recent Activity --> */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">
                            <i className="fas fa-chart-line text-green-600"></i>
                            Recent Activity
                        </h3>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 pb-3 border-b border-gray-200">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-0">
                                        <i className="fas fa-file-alt text-blue-600"></i>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-800">Posted new assignment</p>
                                        <p className="text-xs text-gray-600">Machine Learning - Project 3 • 2 hours ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 pb-3 border-b border-gray-200">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-0">
                                        <i className="fas fa-check text-green-600"></i>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-800">Graded submissions</p>
                                        <p className="text-xs text-gray-600">Deep Learning - 28 assignments • 5 hours ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-0">
                                        <i className="fas fa-comments text-purple-600"></i>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-800">Replied to discussion</p>
                                        <p className="text-xs text-gray-600">Python Programming - Module 5 • Yesterday</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
