import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"

export const CourseHero = ({ course }) => {
  const navigate = useNavigate()
  return (
<>
    <div className="w-full bg-[#2C2F4A] text-white py-12 px-4">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {course?.title || "Master Web Development"}
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base mb-6">
            {course?.description ||
              "Learn HTML, CSS, JavaScript and build real-world projects step by step."}
          </p>

          {/* Info Row */}
          <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
            <span className="text-yellow-400 font-semibold">
              ⭐ {course?.rating || "4.5"}
            </span>

            <span className="text-gray-300">
              ({course?.students || "1,200"} students)
            </span>

            <span className="text-gray-300">
              By {course?.instructor || "John Doe"}
            </span>
          </div>

          {/* Button */}
          <motion.button 
          onClick={()=>{navigate('/')}}
                      whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-400 cursor-pointer hover:bg-teal-500 text-white px-6 py-3 rounded-lg font-medium"
          >
            Enroll Now
          </motion.button>
        </motion.div>

        {/* RIGHT CARD (Course Image) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-sm">
            <img
              src={
                course?.thumbnail ||
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              }
              alt="course"
              className="w-full h-48 object-cover"
            />

            <div className="p-4 text-gray-800">
              <h3 className="font-semibold mb-2">
                ₹{course?.price || "999"}
              </h3>

              <Link to={'/'} className="w-full cursor-pointer bg-teal-400 hover:bg-teal-500 text-white py-2 px-2 rounded-lg">
                Buy Now
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
 
</>
  )
}

 