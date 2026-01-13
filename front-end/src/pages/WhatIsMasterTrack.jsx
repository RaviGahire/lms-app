import React from 'react';
import { motion } from 'framer-motion';

const WhatIsMasterTrack = () => {
  const cards = [
    {
      title: "FOR INSTRUCTORS",
      buttonText: "Start a class today",
      image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=900&q=80",
      buttonStyles: "border-2 border-white hover:bg-white hover:text-slate-900",
      overlay: "bg-slate-900/40"
    },
    {
      title: "FOR STUDENTS",
      buttonText: "Enter access code",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
      buttonStyles: "bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30",
      overlay: "bg-blue-900/30"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Heading Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
          What is <span className="text-blue-600">MasterTrack?</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-slate-500">
          MasterTrack is a comprehensive platform that allows educators to create online classes, 
          store course materials, manage assignments, and provide real-time feedback—all 
          within a <span className="text-slate-800 font-semibold text-nowrap underline decoration-blue-500/30">single secure workspace.</span>
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            {/* Background Image with Zoom Effect */}
            <img 
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Dark Overlay for Readability */}
            <div className={`absolute inset-0 ${card.overlay} transition-opacity duration-300 group-hover:opacity-60`} />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
              <h2 className="text-3xl font-black tracking-widest mb-8 drop-shadow-md">
                {card.title}
              </h2>

              <button className={`px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform active:scale-95 ${card.buttonStyles}`}>
                {card.buttonText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatIsMasterTrack;