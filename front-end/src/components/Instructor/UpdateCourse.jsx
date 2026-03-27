import { useEffect, useState } from "react"
import { getAllCourses } from "../../utils/GetCouresDetails"
import { CourseTable } from "./CourseTable"

export const UpdateCourse = () => {
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
         <CourseTable
         courses={courses}
         />


        </>
    )
}
