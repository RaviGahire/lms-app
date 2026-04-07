
import {IconCirclePlus,IconClockHour2} from "@tabler/icons-react";

export const Recommended = () => {
    return (
        <div>
            {/* Section Header */}
            <div className="flex items-center justify-between mb-5 ">
                <div>
                    <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                        <span className="w-1 h-6 bg-green-500 rounded-full"></span>
                        Recommended for you
                    </h3>
                    <p className="text-sm text-gray-100">Expand your skillset with these top-rated courses</p>
                </div>
                <button className="text-xs cursor-pointer font-medium text-purple-400 hover:text-purple-300 transition-colors">
                    View All
                </button>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 gap-4">
                {[
                    { name: "Next.js 14 Mastery", level: "Advanced", duration: "12h", color: "border-blue-500/50" },
                    { name: "TypeScript Fundamentals", level: "Intermediate", duration: "8h", color: "border-purple-500/50" },
                    { name: "Node.js Backend", level: "Beginner", duration: "15h", color: "border-emerald-500/50" },
                    { name: "UI/UX with Figma", level: "Intermediate", duration: "6h", color: "border-pink-500/50" },
                ].map((course, idx) => (
                    <div key={idx} className={`bg-white/5 border-l-4 ${course.color} rounded-r-xl p-4 hover:bg-white/10 transition-all group cursor-pointer`}>
                        <div className="flex justify-between items-start">
                            <div>
                                <span className="text-[10px] uppercase tracking-wider text-yellow-100 font-bold">{course.level}</span>
                                <h4 className="font-semibold text-gray-200 mt-1 group-hover:text-white transition-colors">{course.name}</h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <IconClockHour2 className={'size-4 text-white'} />
                                    <p className="text-xs text-gray-100">{course.duration}</p>
                                </div>
                            </div>

                            <button className="p-2 rounded-full bg-white/5 group-hover:bg-white cursor-pointer text-white group-hover:text-black transition-all duration-300 shadow-xl">
                                <IconCirclePlus className={'w-5 h-5'} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
