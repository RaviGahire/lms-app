import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export const Banner = ({
    heading = ' Online coaching lessons for remote learning.',
    sub_heading = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.`,
    link_href = '/'
}) => {
    return (
        <div className="w-full flex justify-center items-center py-16 px-4">

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-5xl bg-[#2C2F4A] text-center rounded-3xl px-8 py-14 shadow-lg"
            >

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-3xl font-semibold text-white mb-4"
                >
                    {heading}
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-8"
                >
                    {sub_heading}
                </motion.p>

                {/* Button */}
                <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded-lg font-medium transition"
                >
                    <Link to={link_href}>Start learning now</Link>
                </motion.button>

            </motion.div>
        </div>
    )
}

