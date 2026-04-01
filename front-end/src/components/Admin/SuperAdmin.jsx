export const SuperAdmin = () => {
    return (
        <>
          
            <nav className="bg-white ">
                <div className="max-w-7xl mx-auto ">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-0 flex items-center">
                                <i className="fas fa-graduation-cap text-indigo-600 text-3xl mr-3"></i>
                                <span className="text-2xl font-bold text-gray-800">We Admin</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="p-2 rounded-full hover:bg-gray-100 relative">
                                <i className="fas fa-bell text-gray-600 text-xl"></i>
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            <div className="flex items-center gap-3">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
                                    alt="Admin"
                                    className="w-10 h-10 rounded-full border-2 border-indigo-600" />
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">John Anderson</p>
                                    <p className="text-xs text-gray-500">System Administrator</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex">
                {/* <!-- Sidebar --> */}
                <div className="w-64 bg-linear-to-b from-gray-800 to-gray-900 min-h-screen p-6 text-white">
                    <div className="mb-8">
                        <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-4">Navigation</h3>
                        <nav className="space-y-2">
                            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition">
                                <i className="fas fa-home"></i>
                                <span>Dashboard</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700 rounded-lg transition">
                                <i className="fas fa-users"></i>
                                <span>Users</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700 rounded-lg transition">
                                <i className="fas fa-book"></i>
                                <span>Courses</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700 rounded-lg transition">
                                <i className="fas fa-chart-bar"></i>
                                <span>Analytics</span>
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700 rounded-lg transition">
                                <i className="fas fa-cog"></i>
                                <span>Settings</span>
                            </a>
                        </nav>
                    </div>

                    <div className="border-t border-gray-700 pt-6">
                        <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-4">Quick Stats</h3>
                        <div className="space-y-4">
                            <div className="bg-gray-700 bg-opacity-50 rounded-lg p-3">
                                <p className="text-xs text-gray-400">Server Status</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-sm font-semibold">Online</span>
                                </div>
                            </div>
                            <div className="bg-gray-700 bg-opacity-50 rounded-lg p-3">
                                <p className="text-xs text-gray-400">Storage Used</p>
                                <p className="text-sm font-semibold mt-1">234 GB / 500 GB</p>
                                <div className="w-full bg-gray-600 rounded-full h-1.5 mt-2">
                                    <div className="bg-blue-500 h-1.5 rounded-full" ></div>
                                </div>
                            </div>
                            <div className="bg-gray-700 bg-opacity-50 rounded-lg p-3">
                                <p className="text-xs text-gray-400">Active Users</p>
                                <p className="text-sm font-semibold mt-1">1,247 online</p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-6 mt-6">
                        <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-4">System Info</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Version</span>
                                <span className="font-medium">v2.4.1</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Last Backup</span>
                                <span className="font-medium">2 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Main Content --> */}
                <div className="flex-1 p-8">
                    {/* <!-- Header --> */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Overview</h1>
                        <p className="text-gray-600">Welcome back, John! Here's what's happening with your LMS today.</p>
                    </div>

                    {/* <!-- Stats Grid --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {/* <!-- Stat Card 1 --> */}
                        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <i className="fas fa-user-graduate text-blue-600 text-xl"></i>
                                </div>
                                <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                                    <i className="fas fa-arrow-up"></i>12%
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-1">Total Students</p>
                            <p className="text-3xl font-bold text-gray-800">2,847</p>
                            <p className="text-xs text-gray-500 mt-2">+342 this month</p>
                        </div>

                        {/* <!-- Stat Card 2 --> */}
                        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-600">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                    <i className="fas fa-chalkboard-teacher text-green-600 text-xl"></i>
                                </div>
                                <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                                    <i className="fas fa-arrow-up"></i>8%
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-1">Total Teachers</p>
                            <p className="text-3xl font-bold text-gray-800">156</p>
                            <p className="text-xs text-gray-500 mt-2">+12 this month</p>
                        </div>

                        {/* <!-- Stat Card 3 --> */}
                        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-600">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <i className="fas fa-book-open text-purple-600 text-xl"></i>
                                </div>
                                <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                                    <i className="fas fa-arrow-up"></i>15%
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-1">Active Courses</p>
                            <p className="text-3xl font-bold text-gray-800">89</p>
                            <p className="text-xs text-gray-500 mt-2">+8 this month</p>
                        </div>

                        {/* <!-- Stat Card 4 --> */}
                        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-600">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                    <i className="fas fa-dollar-sign text-orange-600 text-xl"></i>
                                </div>
                                <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
                                    <i className="fas fa-arrow-up"></i>23%
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-1">Revenue</p>
                            <p className="text-3xl font-bold text-gray-800">$48.5K</p>
                            <p className="text-xs text-gray-500 mt-2">+$8.2K this month</p>
                        </div>
                    </div>

                    {/* <!-- Charts and Tables Section --> */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        {/* <!-- Recent Activity --> */}
                        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <i className="fas fa-history text-indigo-600"></i>
                                Recent Activity
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-0">
                                        <i className="fas fa-user-plus text-blue-600"></i>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-800">New student registered</p>
                                        <p className="text-xs text-gray-600">Emma Wilson joined Computer Science program</p>
                                        <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-0">
                                        <i className="fas fa-book text-green-600"></i>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-800">Course published</p>
                                        <p className="text-xs text-gray-600">Dr. Smith published "Advanced Machine Learning"</p>
                                        <p className="text-xs text-gray-500 mt-1">15 minutes ago</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-0">
                                        <i className="fas fa-file-alt text-purple-600"></i>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-800">Assignment submitted</p>
                                        <p className="text-xs text-gray-600">124 students submitted Project 3</p>
                                        <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-0">
                                        <i className="fas fa-exclamation-triangle text-yellow-600"></i>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-800">System alert</p>
                                        <p className="text-xs text-gray-600">Storage usage reached 80%</p>
                                        <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-0">
                                        <i className="fas fa-credit-card text-red-600"></i>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-800">Payment received</p>
                                        <p className="text-xs text-gray-600">$1,250 tuition fee from John Doe</p>
                                        <p className="text-xs text-gray-500 mt-1">3 hours ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Quick Actions --> */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <i className="fas fa-bolt text-yellow-500"></i>
                                Quick Actions
                            </h3>
                            <div className="space-y-3">
                                <button className="w-full flex items-center gap-3 p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                                    <i className="fas fa-user-plus"></i>
                                    <span className="text-sm font-medium">Add New User</span>
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 bg-white border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                                    <i className="fas fa-book"></i>
                                    <span className="text-sm font-medium">Create Course</span>
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 bg-white border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                                    <i className="fas fa-file-export"></i>
                                    <span className="text-sm font-medium">Generate Report</span>
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 bg-white border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                                    <i className="fas fa-envelope"></i>
                                    <span className="text-sm font-medium">Send Announcement</span>
                                </button>
                                <button className="w-full flex items-center gap-3 p-3 bg-white border-2 border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                                    <i className="fas fa-database"></i>
                                    <span className="text-sm font-medium">Backup System</span>
                                </button>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <h4 className="text-sm font-semibold text-gray-700 mb-3">System Health</h4>
                                <div className="space-y-3">
                                    <div>
                                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                                            <span>CPU Usage</span>
                                            <span>45%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-blue-600 h-2 rounded-full" ></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                                            <span>Memory</span>
                                            <span>67%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-green-600 h-2 rounded-full" ></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                                            <span>Database</span>
                                            <span>32%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div className="bg-purple-600 h-2 rounded-full" ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Top Courses and Pending Tasks --> */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* <!-- Top Performing Courses --> */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <i className="fas fa-trophy text-yellow-500"></i>
                                Top Performing Courses
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-linear-to-r from-blue-50 to-indigo-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
                                            1
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Web Development</p>
                                            <p className="text-xs text-gray-600">234 students • 4.9★</p>
                                        </div>
                                    </div>
                                    <span className="text-green-600 font-semibold text-sm">+18%</span>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-linear-to-r from-green-50 to-emerald-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold">
                                            2
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Machine Learning</p>
                                            <p className="text-xs text-gray-600">189 students • 4.8★</p>
                                        </div>
                                    </div>
                                    <span className="text-green-600 font-semibold text-sm">+15%</span>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-linear-to-r from-purple-50 to-pink-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold">
                                            3
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Data Science</p>
                                            <p className="text-xs text-gray-600">167 students • 4.7★</p>
                                        </div>
                                    </div>
                                    <span className="text-green-600 font-semibold text-sm">+12%</span>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-linear-to-r from-orange-50 to-red-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-orange-600 text-white rounded-lg flex items-center justify-center font-bold">
                                            4
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-800">Python Programming</p>
                                            <p className="text-xs text-gray-600">156 students • 4.6★</p>
                                        </div>
                                    </div>
                                    <span className="text-green-600 font-semibold text-sm">+10%</span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Pending Tasks --> */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                <i className="fas fa-tasks text-indigo-600"></i>
                                Pending Admin Tasks
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 p-3 border-l-4 border-red-500 bg-red-50 rounded">
                                    <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-800">Review pending course approvals</p>
                                        <p className="text-xs text-gray-600">5 courses waiting for approval</p>
                                        <span className="text-xs text-red-600 font-semibold">High Priority</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-3 border-l-4 border-yellow-500 bg-yellow-50 rounded">
                                    <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-800">Update system security patches</p>
                                        <p className="text-xs text-gray-600">2 updates available</p>
                                        <span className="text-xs text-yellow-600 font-semibold">Medium Priority</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-3 border-l-4 border-blue-500 bg-blue-50 rounded">
                                    <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-800">Generate monthly reports</p>
                                        <p className="text-xs text-gray-600">Due by end of week</p>
                                        <span className="text-xs text-blue-600 font-semibold">Normal Priority</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-3 border-l-4 border-green-500 bg-green-50 rounded">
                                    <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-800">Review teacher feedback</p>
                                        <p className="text-xs text-gray-600">8 new feedback submissions</p>
                                        <span className="text-xs text-green-600 font-semibold">Low Priority</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 p-3 border-l-4 border-purple-500 bg-purple-50 rounded">
                                    <input type="checkbox" className="mt-1 w-4 h-4 text-indigo-600 rounded" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-800">Schedule maintenance window</p>
                                        <p className="text-xs text-gray-600">Plan for next month</p>
                                        <span className="text-xs text-purple-600 font-semibold">Low Priority</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
