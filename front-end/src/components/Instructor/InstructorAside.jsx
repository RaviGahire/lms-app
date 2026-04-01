import { IconCamera, IconUserEdit } from '@tabler/icons-react'
import { LogoutButton } from '../../utils/LogoutUser'
import ContextData from '../../Contexts/Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export const InstructorAside = () => {

const {loggedInUserProfile} =  useContext(ContextData)

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
        <aside className="w-full md:w-80 bg-white rounded-3xl border border-gray-200 p-2 flex flex-col shadow-sm">
            {/* Profile Image Section */}
            <div className="flex flex-col items-center py-4 border-b border-gray-100">
                <div className="relative group">
                    <div className="w-32 h-32 rounded-full border-4 border-cyan-500 overflow-hidden bg-gray-100">
                        <img
                            src={loggedInUserProfile?.avatar}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    </div>
                <Link to={`/change-profile/${loggedInUserProfile?.id}`} className="mt-3 cursor-pointer text-xs font-semibold text-gray-500 hover:text-cyan-600 transition uppercase tracking-wider">
                    Change Profile Image
                </Link>
                
            </div>

            {/* Basic Details Box */}
            <div className="mt-6 bg-gray-50 rounded-2xl p-2 space-y-4">
                <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Email</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{loggedInUserProfile?.email}</p>
                </div>
                 <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Role</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{loggedInUserProfile?.role}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase">Experience</p>
                        <p className="text-sm font-semibold">{instructor.experience}</p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase">Total Rating</p>
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
                   <Link
                        to={`/update-instructor`}
                        className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-200 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition active:scale-95">
                        <IconUserEdit size={20} /> Update Profile
                    </Link>
                <LogoutButton />
            </div>
        </aside>
    )
}
