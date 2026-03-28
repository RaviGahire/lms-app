import { useEffect, useState } from "react"
import { getAllCourses } from "../../utils/GetCouresDetails"
import { CourseTable } from "./CourseTable"

export const CourseLayout = ({ childern }) => {
    const [courses, setCourses] = useState([])


    useEffect(() => {
        const getCourseData = async () => {
            const data = await getAllCourses()
            setCourses(data || [])
        }
        getCourseData()

    }, [])

    return (
        <>
            <CourseTable courses={courses} />
            <div className="bg-gray-400">{childern}</div>
        </>
    )
}
