import { useEffect, useState } from "react"
import { getAllCourses } from "../../utils/GetCouresDetails"

export const ActiveCurriculum = ({ enrolled_courses }) => {
    const [ActiveCurriculum, setActiveCurriculum] = useState([])
    const courses = enrolled_courses?.course || [];
    // console.log(courses)
    // console.log(ActiveCurriculum)

    const filterCourses = ActiveCurriculum.filter((data) => courses.includes(data?._id))

    console.log(filterCourses)

    useEffect(() => {
        async function AllCourses() {
            const data = await getAllCourses()
            setActiveCurriculum(data)

        }
        AllCourses()
    }, [])


    return (
        <div>
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-purple-500 rounded-full"></div>
                Active Curriculum
            </h3>
            <div className="space-y-4">
                {filterCourses.map((course, idx) => (
                    <div key={course?._id} className="bg-white/5 border border-white/5 rounded-xl p-5 hover:bg-white/10 transition-colors group">
                        <div className="flex justify-between items-end mb-4">
                            {/* Course Info */}
                            <div className="space-y-1">
                                <h4 className="font-medium text-gray-100 group-hover:text-white transition-colors">
                                    {course.title}
                                </h4>
                                <p className="text-xs font-mono text-gray-300">
                                    {course.progress}% Complete
                                </p>
                            </div>

                            {/* Resume Button */}
                            <button className="px-4 cursor-pointer py-1.5 text-xs font-medium bg-white/10 hover:bg-white text-white hover:text-black rounded-lg transition-all duration-300">
                                Resume
                            </button>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                            <div
                                className={`${course.color} h-full rounded-full transition-all duration-1000 ease-out`}
                                style={{ width: `${course.progress}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
