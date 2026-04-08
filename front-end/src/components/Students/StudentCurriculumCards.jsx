import { useContext} from "react"
import {
    IconAward,
    IconBooks,
    IconSettingsCode,
} from "@tabler/icons-react";
import ContextData from "../../Contexts/Context";
export const StudentCurriculumCards = () => {

    const {student}=useContext(ContextData)

    // console.log(student)
  
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Card-1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all hover:border-white/50 cursor-pointer group">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <p className="text-[11px] font-bold text-white uppercase tracking-widest">
                        Enrolled Courses
                    </p>
                    <div className="bg-purple-500/20 text-white text-[10px] p-1 rounded-full border border-purple-500/30 font-bold">
                        <IconBooks className="w-4 h-4" stroke={2} />
                    </div>
                </div>

                {/* Main Metric */}
                <div className="flex items-baseline gap-2 mb-6">
                    <h2 className="text-5xl font-bold text-white tracking-tighter">{Array.isArray(student?.course)? ('0'+ student.course.length) : 0}</h2>
                    <div className="flex flex-col">
                        <span className="text-white/80 text-xs font-medium leading-none">Total</span>
                        <span className="text-emerald-400 text-xs font-bold uppercase tracking-tighter">Active</span>
                    </div>
                </div>

                {/* Detail Breakdown */}
                <div className="space-y-3 border-t border-white/50 pt-4">
                    <div className="flex justify-between items-center text-xs">
                        <span className="text-white">Completed</span>
                        <span className="text-white font-mono">08/12</span>
                    </div>

                    {/* Visual Progress Bar */}
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                        <div
                            className="bg-purple-500 h-full rounded-full group-hover:bg-purple-400 transition-all duration-700"
                            style={{ width: '66%' }}
                        ></div>
                    </div>

                    <div className="flex justify-between items-center text-[10px] pt-1">
                        <span className="text-white italic">4 remaining this term</span>
                        <span className="text-green-500 font-bold uppercase">66% Done</span>
                    </div>
                </div>
            </div>
            {/* Card-2  */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all hover:border-emerald-500/50 group cursor-pointer">
                {/* Header */}
                <div className="flex justify-between items-start mb-3">
                    <p className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">Skill XP</p>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 p-1 rounded-full border border-emerald-500/20 font-bold">
                        <IconSettingsCode className="w-4 h-4 text-amber-500" stroke={2} />
                    </span>
                </div>

                {/* Main Points */}
                <div className="flex items-baseline gap-2 mb-5">
                    <h2 className="text-4xl font-bold text-white tracking-tighter">1,250</h2>
                    <span className="text-emerald-400/60 text-xs font-bold">+12% inc.</span>
                </div>

                {/* Highest Point Skill */}
                <div className="mb-4 bg-white/5 rounded-xl p-3 border border-white/5">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] text-yellow-500 uppercase font-bold tracking-tight">Highest Mastery</span>
                        <span className="text-[10px] text-emerald-400 font-mono">450 XP</span>
                    </div>
                    <div className="text-sm font-semibold text-white">Javascript</div>
                </div>

                {/* Other Skills Mini-Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {['Javascript', 'CSS', 'HTML', 'Node'].map((skill) => (
                        <span
                            key={skill}
                            className="text-[9px] font-bold bg-white/5 text-white/70 px-2 py-0.5 rounded-md border border-white/10 group-hover:border-emerald-500/30 group-hover:text-white transition-all"
                        >
                            {skill}
                        </span>
                    ))}
                    <span className="text-[10px] font-bold text-green-500 px-1 py-0.5">+3 more</span>
                </div>
            </div>
            {/* Card-3 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all hover:border-amber-500/50 group cursor-pointer">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <p className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">Certifications</p>
                    <div className="bg-amber-500/20 p-1.5 rounded-lg">
                        <IconAward className="w-4 h-4 text-amber-500" />
                    </div>
                </div>

                {/* Main Counter */}
                <div className="flex items-baseline gap-2 mb-6">
                    <h2 className="text-4xl font-bold text-white tracking-tighter">04</h2>
                    <span className="text-white/40 text-sm italic">Verified Assets</span>
                </div>

                {/* Certification List */}
                <div className="space-y-2 border-t border-white/5 pt-4">
                    {[
                        { name: "AWS Cloud Practitioner", date: "Jan 2024" },
                        { name: "Meta Front-End Professional", date: "Dec 2023" },
                        { name: "Google Data Analytics", date: "Oct 2023" }
                    ].map((cert, idx) => (
                        <div key={idx} className="flex items-center justify-between group/item">
                            <div className="flex flex-col">
                                <span className="text-xs font-semibold text-gray-200 group-hover/item:text-amber-400 transition-colors">
                                    {cert.name}
                                </span>
                                <span className="text-[10px] text-white/30">{cert.date}</span>
                            </div>
                            <div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                                {/* <IconExternalLinkOff className="w-3 h-3 text-white/40" /> */}
                            </div>
                        </div>
                    ))}

                    {/* View All Toggle */}
                    <button className="w-full mt-2 py-2 text-[10px] font-bold text-white/40 hover:text-white uppercase tracking-tighter bg-white/5 rounded-lg border border-transparent hover:border-white/10 transition-all">
                        + View 1 More Achievement
                    </button>
                </div>
            </div>
        </div>
    )
}
