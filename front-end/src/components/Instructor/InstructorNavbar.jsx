import { useState } from 'react'
import { IconPlus, IconSettings, IconUsers } from '@tabler/icons-react'
import { CreateCourseView } from '../Courses/CreateCourseView'
import { CourseLayout } from '../Courses/CourseLayout'
import { UpdateCourse } from '../Courses/UpdateCourse'


export const InstructorNavbar = () => {
    const [activeTab, setActiveTab] = useState('create')
    const [selectedCourseId, setSelectedCourseId] = useState(null)

  const handleEditCourse = (course) => {
        setSelectedCourseId(course)  
        setActiveTab('update')         
    }


    return (
        <>
            <nav className="bg-white border border-gray-200 rounded-2xl p-2 flex overflow-x-auto no-scrollbar gap-2">
                {[
                    { id: 'create', name: 'Create Course', icon: <IconPlus size={18} /> },
                    { id: 'update', name: 'Update Course', icon: <IconSettings size={18} /> },
                    { id: 'courses', name: 'All Courses', icon: <IconSettings size={18} /> },
                    { id: 'students', name: 'Students Enrolled', icon: <IconUsers size={18} /> },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center cursor-pointer gap-2 px-6 py-3 rounded-xl whitespace-nowrap font-bold transition-all ${activeTab === tab.id
                            ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-100'
                            : 'text-gray-500 hover:bg-gray-50'
                            }`}
                    >
                        {tab.icon}
                        {tab.name}
                    </button>
                ))}
            </nav>
            <div className="bg-white border border-gray-200 rounded-4xl p-4 min-h-100 shadow-sm ">
                {activeTab === 'create' && <CreateCourseView />}
                {activeTab === 'update' && <UpdateCourse course={selectedCourseId} />}
                {activeTab === 'courses' && <CourseLayout onEditCourse={handleEditCourse} />}
                {activeTab === 'students' && <div className="text-center py-20 text-gray-400">Viewing enrolled students list...</div>}
            </div>
        </>

    )
}
