import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IconChevronDown } from "@tabler/icons-react"

const faqData = [
    {
        question: "Lorem ipsum dolor sit amet",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        question: "Consectetur adipiscing elit, sed do",
        answer: "Short answer content goes here."
    },
    {
        question: "Eiusmod tempos Lorem ipsum",
        answer: "Short answer content goes here."
    },
    {
        question: "Lorem ipsum dolor sit amet",
        answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        question: "Lorem ipsum dolor sit amet",
        answer: "Short answer content goes here."
    }
]

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(3)

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="w-full bg-white py-16 px-4">

            {/* Heading */}
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-10 text-gray-800">
                Online coaching lessons for remote learning
            </h2>

            <div className="max-w-5xl mx-auto space-y-4">

                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border-b border-gray-300 pb-3"
                    >
                        {/* Question */}
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex items-center justify-between py-3"
                        >
                            <div className="flex items-center gap-3">
                                <span className="w-3 h-3 bg-teal-400 rounded-full"></span>
                                <span className="text-gray-700 text-sm md:text-base">
                                    {item.question}
                                </span>
                            </div>

                            <IconChevronDown
                                className={`transition-transform ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {/* Answer */}
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden pl-6 pr-2"
                                >
                                    <p className="text-sm text-gray-500 py-2 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}

            </div>
        </div>
    )
}

