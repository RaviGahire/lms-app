import { useContext, useState } from "react";
import { StudentSidebar } from "./StudentSidebar";
import { StudentCurriculumCards } from "./StudentCurriculumCards";
import { ActiveCurriculum } from "./ActiveCurriculum";
import { StudentsBlogs } from "./StudentsBlogs";
import { Recommended } from "./Recommended";
import ContextData from "../../Contexts/Context";

export const Student = () => {
const {loggedInUserProfile,student}=useContext(ContextData)

    const [error, setError] = useState('')

    return (
        <div className="main-container bg-cyan-700">
            <div className="flex flex-col md:flex-row">
                {/* <!-- Sidebar --> */}
                <StudentSidebar />
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
                    <StudentCurriculumCards
                
                    
                    />

                    {/* main container*/}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-10">
                        {/* Active Curriculum*/}
                        <ActiveCurriculum />

                        {/*Blogs*/}
                        <StudentsBlogs />

                        {/* Recommended */}
                        <Recommended />

                    </div>
                </div>
            </div>
        </div>
    );
};
