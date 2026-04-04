import { getAllCourses } from "../../utils/GetCouresDetails"
import { useContext, useEffect, useState } from "react"
import ContextData from "../../Contexts/Context"
import axios from "axios"
import { getStoredToken } from "../../utils/getStoredToken"

const API_URL = import.meta.env.VITE_API_URL

export const CourseCard = () => {
  const [courses, setCourses] = useState([])
  const { loggedInUserProfile } = useContext(ContextData)

  // console.log(courses)

  const handleEnrolled = async (courseId) => {

    const token = getStoredToken()
    if (!token) {
      console.error("No token found")
      return
    }

    try {

      const response = await axios.post(
        `${API_URL}courses/${courseId}/enroll`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      alert(response?.data?.message)


    } catch (error) {
      console.error(
        "Enroll failed:",
        error.response?.data?.message || error.message
      )

      alert(error.response?.data?.message)
    }
  }

  useEffect(() => {
    ; (async () => {
      const courses = await getAllCourses()
      setCourses(courses)
      // console.log(courses)
    })()



  }, [loggedInUserProfile])



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {courses?.map((course) => (
        <div
          key={course._id}
          className="bg-white shadow-md cursor-pointer rounded-2xl overflow-hidden hover:shadow-xl transition"
        >
          <img
            src={course?.coverImage}
            alt={course?.title}
            className="w-full h-40 object-cover"
          />

          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">
              {course?.title}
            </h2>

            <p className="text-sm text-gray-600 mb-3">
              {course?.description?.slice(0, 80)}...
            </p>

            <div className="flex justify-between items-center">
              <span className="text-blue-600 font-bold">
                ₹{course?.price}
              </span>

              <div>

                <button onClick={() => handleEnrolled(course?._id)} className="bg-blue-500 text-white cursor-pointer px-3 py-1 rounded-lg hover:bg-blue-600">
                  Enrolle
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
