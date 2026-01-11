import React from 'react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  return (
    <section 
      aria-label="lms-features" 
      className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden"
    >
      {/* LEFT CONTENT */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative order-2 lg:order-1"
      >
        {/* Large Decorative Green Background Circle */}
        <div className="absolute -left-12 -top-6 w-16 h-16 rounded-full bg-green-400/20 blur-xl md:blur-none md:bg-green-400" />

        <h2 className="text-3xl md:text-5xl font-black text-slate-800 leading-tight">
          Everything you can do in a physical <br />
          <span className="text-blue-600 italic">classroom</span>,{' '}
          <span className="text-teal-500">you can do with MasterTrack</span>
        </h2>

        <p className="mt-8 text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl">
          Our school management software helps traditional and online schools 
          manage <span className="font-semibold text-slate-800">scheduling, attendance, payments</span> and virtual classrooms all in one secure cloud-based system.
        </p>

        {/* Small decorative dot */}
        <div className="w-4 h-4 bg-green-400 rounded-full mt-8 animate-pulse" />

        <a 
          href="#learn-more" 
          className="inline-block mt-4 text-blue-600 font-bold text-lg underline decoration-2 underline-offset-4 hover:text-blue-700 transition-colors"
        >
          Learn more
        </a>
      </motion.div>

      {/* RIGHT IMAGE AREA */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative order-1 lg:order-2 px-4 md:px-0"
      >
        {/* Colored rounded border behind (Offset) */}
        <div className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 w-full h-full rounded-3xl bg-green-400 z-0" />

        {/* Main Image Container */}
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80"
            alt="Students in a digital classroom environment"
            className="w-full aspect-video md:aspect-square lg:aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Glassmorphic Overlay on Hover */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center group-hover:bg-white transition-all"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5"
                viewBox="0 0 24 24" 
                className="w-10 h-10 text-blue-500 ml-1"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  d="M14.752 11.168l-5.197-3.028A1 1 0 008 9.028v5.944a1 1 0 001.555.86l5.197-3.028a1 1 0 000-1.736z" 
                />
              </svg>
            </motion.div>
          </div>

          {/* Optional: Floating Badge */}
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Video Demo</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;