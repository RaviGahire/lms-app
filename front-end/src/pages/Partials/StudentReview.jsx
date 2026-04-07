import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"

const reviews = [
  { id: 1, name: "Bulkin Simons", image: "https://randomuser.me/api/portraits/women/1.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
  { id: 2, name: "Sarah Johnson", image: "https://randomuser.me/api/portraits/women/2.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
  { id: 3, name: "Maria Garcia", image: "https://randomuser.me/api/portraits/women/3.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
  { id: 4, name: "Emily Davis", image: "https://randomuser.me/api/portraits/women/4.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
  { id: 5, name: "Olivia Brown", image: "https://randomuser.me/api/portraits/women/5.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
  { id: 6, name: "Jessica Wilson", image: "https://randomuser.me/api/portraits/women/6.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
  { id: 7, name: "Amanda Taylor", image: "https://randomuser.me/api/portraits/women/7.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." },
]

const CARDS_PER_PAGE = 4

export const StudentReview = () => {
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState(1)

  const totalPages = Math.ceil(reviews.length / CARDS_PER_PAGE)

  const next = () => {
    if (page < totalPages - 1) {
      setDirection(1)
      setPage((p) => p + 1)
    }
  }

  const prev = () => {
    if (page > 0) {
      setDirection(-1)
      setPage((p) => p - 1)
    }
  }

  const visible = reviews.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE)

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">

      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-semibold mb-10 text-gray-800">
        What our students have to say
      </h2>

      <div className="relative flex items-center gap-3">

        {/* Left Button */}
        <button
          onClick={prev}
          disabled={page === 0}
          className="shrink-0 z-10 bg-teal-400 disabled:bg-gray-200 disabled:text-gray-400 p-2 rounded-full text-white cursor-pointer transition-colors"
        >
          <IconChevronLeft size={20} />
        </button>

        {/* Cards */}
        <div className="overflow-hidden w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            >
              {visible.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
                >
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 mx-auto rounded-xl object-cover mb-3"
                  />
                  <h3 className="font-semibold text-gray-800 mb-2">{review.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{review.text}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Button */}
        <button
          onClick={next}
          disabled={page === totalPages - 1}
          className="shrink-0 z-10 bg-teal-400 disabled:bg-gray-200 disabled:text-gray-400 p-2 rounded-full text-white cursor-pointer transition-colors"
        >
          <IconChevronRight size={20} />
        </button>

      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > page ? 1 : -1); setPage(i) }}
            className={`h-2 rounded-full transition-all duration-300 ${i === page ? "bg-teal-400 w-6" : "bg-gray-200 w-2"}`}
          />
        ))}
      </div>

    </div>
  )
}