import { useState } from 'react'
import { IconBookDownload, IconEdit, IconPlus, IconSettings, IconUsers } from '@tabler/icons-react'
import { CreateCourseView } from '../Courses/CreateCourseView'
import { CourseLayout } from '../Courses/CourseLayout'
import { UpdateCourse } from '../Courses/UpdateCourse'
import { EnrolledStudents } from '../Courses/EnrolledStudents'

export const InstructorNavbar = () => {
    const [activeTab, setActiveTab] = useState('create')
    const [selectedCourseId, setSelectedCourseId] = useState(null)


    const handleEditCourse = (course) => {
            setSelectedCourseId(course)  
            setActiveTab('update') 
                  
        }


    return (
        <>
            <nav className="bg-white border border-gray-200 rounded-md p-2 flex overflow-x-auto no-scrollbar gap-2">
                {[
                    { id: 'create', name: 'Create Course', icon: <IconPlus size={18} /> },
                    { id: 'update', name: 'Update Course', icon: <IconEdit size={18} /> },
                    { id: 'courses', name: 'Your Courses', icon: <IconBookDownload size={18} /> },
                    { id: 'students', name: 'Enrolled Students', icon: <IconUsers size={18} /> },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center cursor-pointer gap-2 px-6 py-3 rounded-md whitespace-nowrap font-bold transition-all ${activeTab === tab.id
                            ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-100'
                            : 'text-gray-500 hover:bg-gray-50'
                            }`}
                    >
                        {tab.icon}
                        {tab.name}
                    </button>
                ))}
            </nav>
            <div className="bg-white border border-gray-200 p-3 min-h-[80vh] rounded-sm shadow-sm ">
                {activeTab === 'create' && <CreateCourseView />}
                {activeTab === 'update' && <UpdateCourse course={selectedCourseId} />}
                {activeTab === 'courses' && <CourseLayout onEditCourse={handleEditCourse} />}
                {activeTab === 'students' && <EnrolledStudents   />}
            </div>
        </>

    )
}
