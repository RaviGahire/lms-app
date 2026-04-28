import { IconChevronRight, IconPlayerPlay } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const HomeHero = () => {

    return (
        <section aria-label="home-page-hero" className="relative min-h-screen w-full flex items-center justify-center bg-slate-900 overflow-hidden">
            {/* --- BACKGROUND LAYER --- */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/student-bg/bg-1.png"
                    alt="Student Background"
                    className="w-full h-full object-cover object-center scale-105 select-none"
                />
                {/* Dynamic Overlay */}
                <div className="absolute inset-0 bg-slate-950/50 lg:bg-slate-950/50 backdrop-blur-[5px]" />

                {/* Vignette effect*/}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.6)_100%)]" />
            </div>
            {/* --- CONTENT LAYER --- */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full text-center">
                    {/* Main Heading*/}
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold text-white leading-[1.1]  tracking-tight">
                        Studying online is <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-cyan-300 to-blue-400 drop-shadow-sm">
                            now much easier
                        </span>
                    </h1>
                    {/* Subtext */}
                    <p className="mt-6 md:mt-8 mx-auto font-light md:font-normal text-neutral-50/80 leading-relaxed text-md md:text-xl lg:text-2xl max-w-[90%] md:max-w-2xl lg:max-w-2xl">
                        MasterTrack is an interactive platform designed to make learning feel like an experience, not a chore.
                    </p>
                    <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8">
                        <Link
                            to={'/signup'}
                            className="group inline-flex items-center  justify-center gap-2 px-4 py-1.5 md:px-8 md:py-3 text-[10px] md:text-sm font-semibold tracking-wide text-white transition-all duration-300 rounded-md shadow-md bg-linear-to-l from-cyan-800 via-cyan-700 to-cyan-600 bg-size-[200%_auto] hover:bg-position-[right_center] focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 active:scale-[0.98]"                        >
                            <span>Join for free</span>
                            {/* Icon */}
                            <IconChevronRight
                                size={18}
                                stroke={2}
                                className="transition-transform duration-200 group-hover:translate-x-0.5"
                            />
                        </Link>
                        <Link
                            to={'/signup'}
                            className="group flex items-center gap-4 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:text-cyan-400"
                        >
                            <span className="relative flex size-6 md:size-10.5 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all duration-300 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                                {/* Play Icon */}
                                <IconPlayerPlay stroke={2}  className="w-4 h-4 sm:w-6 sm:h-6 md:w-6 md:h-6"  />
                            </span>
                            <span className="relative text-[10px] md:text-sm">
                                Watch Demo
                                {/* Underline effect */}
                                <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-500 transition-all duration-300 group-hover:w-full" />
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
