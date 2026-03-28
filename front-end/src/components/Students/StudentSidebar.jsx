import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { LogoutButton } from "../../utils/LogoutUser";
import { VerificationStatus } from "../../utils/VerificationStatus"

import ContextData from "../../Contexts/Context"
import {
    IconBuilding,
    IconCalendar,
    IconDeviceMobile,
    IconInfoCircle,
    IconMail,
    IconSchool,
    IconUser,
    IconUserEdit,
    IconWorld
} from "@tabler/icons-react";

export const StudentSidebar = () => {
 const [error, setError] = useState('')
    const { loggedInUserProfile, student } = useContext(ContextData)

    return (
        <div className="w-full md:w-80 bg-cyan-800 p-8 text-white">
            <div className="text-center mb-6 ">
                <div>
                    <img src={loggedInUserProfile.avatar}
                        alt={loggedInUserProfile.role}
                        className="w-25 h-25 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow-lg" />
                </div>
                {/* change profile */}
                <Link to={`/change-profile/${loggedInUserProfile?.id}`} className="text-sm">Change profile</Link>

                <h2 className="text-2xl font-bold mb-1">{loggedInUserProfile?.userName}</h2>
                <p className="text-purple-100 mb-1 uppercase">{loggedInUserProfile?.role} </p>

                {/* to access course and blogs need to verify */}
                <VerificationStatus
                    labelOne='Verify your profile'
                    labelTwo='Profile Verified'
                    isUserVerified={loggedInUserProfile.isVerified}
                    userEmail={loggedInUserProfile.email}
                    Error={setError}
                />
            </div>

            {/* registred information */}
            <div className="space-y-4">
                <div className="border-t border-white pt-4">
                    <div className="flex items-center gap-3 mb-3">
                        <IconMail size={24} stroke={2} />
                        <div>
                            <p className="text-xs text-purple-200 font-bold tracking-wide">Email</p>
                            <p className="text-sm">{loggedInUserProfile?.email} </p>

                        </div>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <IconDeviceMobile size={24} stroke={2} />
                        <div>
                            <p className="text-xs text-purple-200 font-bold tracking-wide">Phone</p>
                            <p className="text-sm">{student?.phone || 'Update phone'}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <IconCalendar size={24} stroke={2} />
                        <div>
                            <p className="text-xs text-purple-200 font-bold tracking-wide">Enrolled</p>
                            <p className="text-sm">{new Date(student?.joined).toLocaleDateString()}</p>
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
                            <p className="text-sm">{student?.gender || "Update Gender"}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <IconBuilding stroke={2} />
                        <div>
                            <p className="text-xs text-purple-200 font-bold tracking-wide">School / College</p>
                            <p className="text-sm">{student?.college || "Update college"}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <IconSchool size={24} stroke={2} />
                        <div>
                            <p className="text-xs text-purple-200 font-bold tracking-wide">Qualification</p>
                            <p className="text-sm">{student?.qualification || "Update qualification"}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <IconWorld stroke={2} />
                        <div>
                            <p className="text-xs text-purple-200 font-bold tracking-wide">Nationality</p>
                            <p className="text-sm">{student?.nationality || "Update Nationality "}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <IconCalendar size={24} stroke={2} />
                        <div>
                            <p className="text-xs text-purple-200  font-bold tracking-wide">Date of Birth</p>
                            <p className="text-sm">{student?.dob || "Update Date of Birth"}</p>
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
                            <span className="font-medium">{new Date(student?.joined).toLocaleDateString('en-IN', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                            })}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-purple-200 font-bold tracking-wide">Account based</span>
                            <span className="font-medium">{student?.nationality}</span>
                        </div>

                    </div>
                </div>

                {/* upadte btn and logout btn */}
                <div className="flex flex-col justify-between gap-1.5 mt-8">
                    <Link
                        to={`/update_student`}
                        className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-gray-200 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition active:scale-95">
                        <IconUserEdit size={20} /> Update Profile
                    </Link>
                    <LogoutButton />
                </div>
            </div>
        </div>
    )
}
