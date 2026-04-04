import { useRef } from "react"
import { motion } from "framer-motion"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"

const courses = [
    {
        id: 1,
        title: "React for Beginners",
        image: "https://source.unsplash.com/400x300/?coding",
        price: 499
    },
    {
        id: 2,
        title: "Full Stack Development",
        image: "https://source.unsplash.com/400x300/?developer",
        price: 999
    },
    {
        id: 3,
        title: "UI/UX Design Mastery",
        image: "https://source.unsplash.com/400x300/?design",
        price: 699
    },
    {
        id: 4,
        title: "JavaScript Advanced",
        image: "https://source.unsplash.com/400x300/?javascript",
        price: 599
    },
    {
        id: 5,
        title: "Node.js Backend",
        image: "https://source.unsplash.com/400x300/?backend",
        price: 799
    },
]

const RecommendedCarousel = () => {
    const scrollRef = useRef()

    const scroll = (direction) => {
        const { current } = scrollRef
        if (direction === "left") {
            current.scrollBy({ left: -300, behavior: "smooth" })
        } else {
            current.scrollBy({ left: 300, behavior: "smooth" })
        }
    }

    return (
        <div className="max-w-7xl py-10 mx-auto  px-4 bg-gray-100">

            {/* Heading */}
            <h2 className="text-xl md:text-2xl font-semibold mb-6">
                Recommended for you
            </h2>

            <div className="relative">

                {/* Left Button */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
                >
                    <IconChevronLeft />
                </button>

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
                >
                    {courses.map((course, i) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="min-w-62.5 bg-white rounded-xl shadow hover:shadow-lg transition"
                        >
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-36 object-cover rounded-t-xl"
                            />

                            <div className="p-4">
                                <h3 className="font-semibold text-sm mb-2">
                                    {course.title}
                                </h3>

                                <p className="text-blue-600 font-bold">
                                    ₹{course.price}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Button */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
                >
                    <IconChevronRight />
                </button>

            </div>
        </div>
    )
}

export default RecommendedCarousel