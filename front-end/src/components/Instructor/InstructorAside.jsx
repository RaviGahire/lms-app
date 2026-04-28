import { IconCamera, IconChalkboardTeacher, IconDeviceMobile, IconJewishStar, IconMail, IconUserCog, IconUserEdit, IconUserStar } from '@tabler/icons-react'
import { LogoutButton } from '../../utils/LogoutUser'
import ContextData from '../../contexts/Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export const InstructorAside = () => {
    const { loggedInUserProfile, instructor } = useContext(ContextData)

    // console.log(instructor)

    return (
        <aside className="w-full md:w-80 bg-white rounded-md border border-gray-200 p-2 flex flex-col shadow-sm">
            {/* Profile Image Section */}
            <div className="flex flex-col items-center py-4 bg-cyan-700 text-white rounded-md ">
                <div className="relative group">
                    <div className="w-24 h-24 rounded-full border-4 border-cyan-500 overflow-hidden">
                        <img
                            src={loggedInUserProfile?.avatar}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <p className='text-sm md:text-md font-medium uppercase my-2 '>{loggedInUserProfile?.userName}</p>
                <p className='text-sm md:text-md font-medium uppercase '>{loggedInUserProfile?.role}</p>
                <Link to={`/change-profile/${loggedInUserProfile?.id}`} className="mt-3 cursor-pointer text-xs font-semibold  hover:text-cyan-400 transition uppercase tracking-wider">
                    Change Profile Image
                </Link>
            </div>

            {/* Basic Details Box */}
            <div className="mt-2 bg-gray-50 rounded-2xl p-2 space-y-4">
                <div className='flex items-center gap-2 '>
                    <IconMail className='text-cyan-500' size={24} stroke={1.5} />
                    <p className="text-sm font-semibold text-gray-500">{loggedInUserProfile?.email}</p>
                </div>

                <div className='flex items-center gap-2'>
                    <IconUserStar className='text-cyan-500' size={24} stroke={1.5} />
                    <p className="text-sm font-semibold text-gray-500">{instructor.experience} Years of experience </p>
                </div>
                <div className='flex items-center gap-2'>
                    <IconJewishStar className='text-cyan-500'  size={24} stroke={1.5} />
                    <p className="text-sm font-semibold text-gray-500">{instructor?.rating || "0.0"}</p>
                </div>
                <div className='flex items-center gap-2' >
                    <IconUserCog className='text-cyan-500'  size={24} stroke={1.5} />
                    <p className="text-sm font-semibold text-gray-500">{instructor.expertise}</p>
                </div>
                <div className='flex items-center gap-2'>
                    <IconDeviceMobile className='text-cyan-500' size={24} stroke={1.5} />
                    <p className="text-sm font-semibold text-gray-500">{instructor.phone}</p>
                </div>
                <div className='flex items-center gap-2'>
                  
                    <p className="text-sm font-semibold text-gray-500">{instructor.bio}</p>
                </div>
            </div>

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
