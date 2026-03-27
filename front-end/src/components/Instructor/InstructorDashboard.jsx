import React, { useState, useContext } from 'react'
import { IconCamera, IconLogout, IconUserEdit, IconPlus, IconSettings, IconUsers } from '@tabler/icons-react'
import ContextData  from '../../Contexts/Context'; 
import { CreateCourseView } from './CreateCourseView';
import { UpdateCourse } from './UpdateCourse';

export const InstructorDashboard = () => {

    const { loggedInUserProfile, logout } = useContext(ContextData)
    const [activeTab, setActiveTab] = useState('create')

    // Fallback data for UI
    const instructor = {
        name: loggedInUserProfile?.userName || "Instructor Name",
        email: loggedInUserProfile?.email || "instructor@mastertrack.com",
        bio: "Passionate educator with 10+ years in Web Development.",
        experience: "10 Years",
        expertise: "React, Node.js, Python",
        phone: "+1 234 567 890",
        rating: "4.9/5.0"
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            {/* Main Outer Container */}
            <div className=" flex flex-col md:flex-row gap-6">
                
                {/* --- ASIDE: PROFILE INFO --- */}
                <aside className="w-full md:w-80 bg-white rounded-3xl border border-gray-200 p-6 flex flex-col shadow-sm">
                    {/* Profile Image Section */}
                    <div className="flex flex-col items-center py-4 border-b border-gray-100">
                        <div className="relative group">
                            <div className="w-32 h-32 rounded-full border-4 border-cyan-500 overflow-hidden bg-gray-100">
                                <img 
                                    src={`https://ui-avatars.com/api/?name=${instructor.name}&background=06b6d4&color=fff`} 
                                    alt="Profile" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <button className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-md border border-gray-200 hover:text-cyan-600 transition">
                                <IconCamera size={18} />
                            </button>
                        </div>
                        <button className="mt-3 text-xs font-semibold text-gray-500 hover:text-cyan-600 transition uppercase tracking-wider">
                            Change Profile Image
                        </button>
                    </div>

                    {/* Basic Details Box */}
                    <div className="mt-6 bg-gray-50 rounded-2xl p-5 space-y-4">
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase">Bio</p>
                            <p className="text-sm text-gray-700 leading-relaxed">{instructor.bio}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase">Experience</p>
                                <p className="text-sm font-semibold">{instructor.experience}</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase">Rating</p>
                                <p className="text-sm font-semibold text-yellow-600">★ {instructor.rating}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase">Expertise</p>
                            <p className="text-sm font-semibold text-cyan-700">{instructor.expertise}</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase">Phone</p>
                            <p className="text-sm font-medium">{instructor.phone}</p>
                        </div>
                    </div>

                    {/* Sidebar Buttons */}
                    <div className="mt-auto pt-6 flex flex-col gap-3">
                        <button className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-200 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition active:scale-95">
                            <IconUserEdit size={20} /> Update Profile
                        </button>
                        <button 
                            onClick={logout}
                            className="flex items-center justify-center gap-2 w-full py-3 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100 transition active:scale-95"
                        >
                            <IconLogout size={20} /> Logout
                        </button>
                    </div>
                </aside>

                {/* --- MAIN CONTENT AREA --- */}
                <main className="flex-1 flex flex-col gap-6">
                    
                    {/* Top Tab Navigation */}
                    <nav className="bg-white border border-gray-200 rounded-2xl p-2 flex overflow-x-auto no-scrollbar gap-2">
                        {[
                            { id: 'create', name: 'Create Course', icon: <IconPlus size={18}/> },
                            { id: 'update', name: 'Update Course', icon: <IconSettings size={18}/> },
                            { id: 'students', name: 'Students Enrolled', icon: <IconUsers size={18}/> },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl whitespace-nowrap font-bold transition-all ${
                                    activeTab === tab.id 
                                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-100' 
                                    : 'text-gray-500 hover:bg-gray-50'
                                }`}
                            >
                                {tab.icon}
                                {tab.name}
                            </button>
                        ))}
                    </nav>

                    {/* Dynamic Rendering Area */}
                    <div className="bg-white border border-gray-200 rounded-4xl p-4 min-h-100 shadow-sm ">
                        {activeTab === 'create' && <CreateCourseView />}
                        {activeTab === 'update' && <UpdateCourse/>}
                        {activeTab === 'students' && <div className="text-center py-20 text-gray-400">Viewing enrolled students list...</div>}
                    </div>
                </main>
            </div>
        </div>
    );
};

// Internal sub-component for the "Create" form
