import { useContext, useEffect, useState } from "react"
import { getAllCourses } from "../../utils/GetCouresDetails"
import ContextData from "../../Contexts/Context"
import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

export const EnrolledStudents = () => {
  const { loggedInUserProfile } = useContext(ContextData)
  const [enrolledBy, setEnrolledBy] = useState([])

  const getEnrolledStudents = async () => {
    try {
      const courses = await getAllCourses()
      // console.log(courses)
      const mycourses = courses.filter((course) => course.createdBy[0]._id === loggedInUserProfile?.id)

      const studentId = courses.flatMap((course) => course?.enrolledBy || []).filter(Boolean)
      // console.log(studentId)

      const student = await Promise.all(studentId.map((id) => axios.get(`${API_URL}students/me/${id}`)))

      // console.log(student)

      const users = await Promise.all(student.map((stud) => axios.get(`${API_URL}auth/users/${stud?.data?.data?.user}`)))

      const enrolledStudents = users.map((data) => data?.data?.users)


      setEnrolledBy(enrolledStudents)

    } catch (error) {
      console.log(error)
    }
  };

  // console.log(enrolledBy)

  useEffect(() => {
    getEnrolledStudents()
  }, [loggedInUserProfile])

  return (
    <>
      <div className="bg-white shadow-md rounded-xl p-4">
        <h2 className="text-xl font-semibold mb-4">Enrolled Students</h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">

            {/* Table Head */}
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left">Sr.No</th>
                <th className="px-4 py-2 text-left">User Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Course Name</th>
                <th className="px-4 py-2 text-left">Enrollment Date</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {enrolledBy?.length > 0 ? (
                enrolledBy.map((student, index) => (
                  <tr
                    key={student._id || index}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{student.userName}</td>
                    <td className="px-4 py-2">{student.email}</td>
                    <td className="px-4 py-2">{student.email}</td>
                    <td className="px-4 py-2">

                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-4 text-gray-500"
                  >
                    No students enrolled yet
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>
    </>
  )
}
