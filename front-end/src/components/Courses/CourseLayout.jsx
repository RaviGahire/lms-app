import { useEffect, useState } from "react"
import { getAllCourses } from "../../utils/GetCouresDetails"
import { CourseTable } from "./CourseTable"
import { useContext } from "react"
import ContextData from "../../Contexts/Context" 

export const CourseLayout = ({onEditCourse , childern }) => {
    const { loggedInUserProfile } = useContext(ContextData)
    const [courses, setCourses] = useState([])


     useEffect(() => {
        const getCourseData = async () => {
            const data = await getAllCourses()

            //filter only courses belonging to this teacher
            const myCourses = data.filter(
                (course) => course.createdBy[0]._id === loggedInUserProfile?.id
            )
            setCourses(myCourses || [])
        }
        getCourseData()
    }, [loggedInUserProfile])

    return (
        <>
            <CourseTable courses={courses} onEditCourse={onEditCourse}/>
            <div className="bg-gray-400">{childern}</div>
        </>
    )
}
