import { useRef } from "react"
import { motion } from "framer-motion"
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"
import { Link } from "react-router-dom"

const courses = [
    {
        id: 1,
        title: "React for Beginners",
        image: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 499
    },
    {
        id: 2,
        title: "Full Stack Development",
        image: "https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 999
    },
    {
        id: 3,
        title: "UI/UX Design Mastery",
        image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 699
    },
    {
        id: 4,
        title: "JavaScript Advanced",
        image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 599
    },
    {
        id: 5,
        title: "Node.js Backend",
              image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        price: 799
    },
]

const RecommendedCarousel = ({course , heading}) => {
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
        <div className="max-w-7xl py-10 mx-auto  px-3 ">

            {/* Heading */}
            <h2 className="text-xl md:text-2xl font-semibold mb-6">
                Recommended for you
            </h2>

            <div className="relative">

                {/* Left Button */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 cursor-pointer -translate-y-1/2 z-10 bg-cyan-500 shadow p-2 rounded-full"
                >
                    <IconChevronLeft className="text-white" />
                </button>

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto py-8 scroll-smooth scrollbar-hide"
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

                             <div className="flex items-center justify-between">
                                   <p className="text-blue-600 font-bold">
                                    ₹{course.price}
                                </p>
                                <Link to={'/'} className=" bg-green-600 px-3 py-1 rounded-2xl text-white font-bold">
                                Buy Now
                                </Link>
                             </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Right Button */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 cursor-pointer -translate-y-1/2 z-10 bg-cyan-500 shadow p-2 rounded-full"
                >
                    <IconChevronRight className="text-white" />
                </button>

            </div>
        </div>
    )
}

export default RecommendedCarousel