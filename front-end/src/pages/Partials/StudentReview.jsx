import { motion } from "framer-motion"
import { useState } from "react"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"

const reviews = [
  {
    id: 1,
    name: "Bulkin Simons",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
  {
    id: 2,
    name: "Bulkin Simons",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
  {
    id: 3,
    name: "Bulkin Simons",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
  {
    id: 4,
    name: "Bulkin Simons",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
  },
]

export const StudentReview = () => {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % reviews.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">

      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-semibold mb-10 text-gray-800">
        What our students have to say
      </h2>

      <div className="relative max-w-6xl mx-auto flex items-center">

        {/* Left Button */}
        <button
          onClick={prev}
          className="absolute left-0 z-10 bg-teal-400 p-2 rounded-full text-white"
        >
          <IconChevronLeft />
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 mx-auto rounded-md object-cover mb-3"
              />

              <h3 className="font-semibold text-gray-800 mb-2">
                {review.name}
              </h3>

              <p className="text-sm text-gray-500">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={next}
          className="absolute right-0 z-10 bg-teal-400 p-2 rounded-full text-white"
        >
          <IconChevronRight />
        </button>

      </div>
    </div>
  )
}

