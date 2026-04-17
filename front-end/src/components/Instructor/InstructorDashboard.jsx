import { useState, useContext } from 'react'
import ContextData from '../../Contexts/Context'
import { InstructorAside } from './InstructorAside'
import { InstructorNavbar } from './InstructorNavbar'

export const InstructorDashboard = () => {

    const { loggedInUserProfile } = useContext(ContextData)


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
        <div className="min-h-screen bg-gray-50 p-3 md:p-4">
            {/* Main Outer Container */}
            <div className=" flex flex-col md:flex-row gap-3">

                {/* --- ASIDE --- */}
                <InstructorAside />

                {/* --- MAIN CONTENT AREA --- */}
                <main className="flex-1 flex flex-col gap-3">
                    {/* Navigation */}
                    <InstructorNavbar />
                </main>
            </div>
        </div>
    );
};

// Internal sub-component for the "Create" form
