import React from 'react';
import { motion } from 'framer-motion';

const DetailedFeatures = () => {
  const classroomFeatures = [
    {
      icon: "🟦",
      color: "bg-yellow-300",
      text: "Teachers don’t get lost in the grid view and have a dedicated Podium space."
    },
    {
      icon: "🟧",
      color: "bg-purple-400",
      text: "TA’s and presenters can be moved to the front of the class."
    },
    {
      icon: "👥",
      color: "bg-indigo-400",
      text: "Teachers can easily see all students and class data at one time."
    }
  ];

  const students = [
    { name: "Eveny Howard", role: "Instructor", img: "https://randomuser.me/api/portraits/women/44.jpg", instructor: true },
    { name: "Tamara Clarke", img: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Adam Levin", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Humbert Holland", img: "https://randomuser.me/api/portraits/men/50.jpg" },
    { name: "Patricia Mendoza", img: "https://randomuser.me/api/portraits/women/76.jpg", wide: true },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900">
          Our <span className="text-teal-500">Features</span>
        </h2>
        <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
          This very extraordinary feature can make learning activities more efficient and engaging.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT UI MOCKUP */}
        <div className="relative">
          {/* Animated Background Shapes */}
          <motion.div 
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-32 h-32 md:w-40 md:h-40 bg-green-400 rounded-full absolute -top-10 -left-10 z-0" 
          />
          <div className="w-6 h-6 bg-teal-400 rounded-full absolute -top-4 left-24 z-0" />

          {/* Main Card (Mockup Window) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative z-10 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-5 md:p-8"
          >
            {/* Mac Window Controls */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            {/* VIDEO GRID MOCKUP */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {students.map((user, idx) => (
                <div 
                  key={idx} 
                  className={`rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm transition-transform hover:scale-105 ${user.wide ? 'col-span-2' : ''}`}
                >
                  <img src={user.img} alt={user.name} className="w-full h-24 md:h-32 object-cover" />
                  <div className="p-2 text-[10px] md:text-xs">
                    {user.instructor && <span className="text-blue-600 font-bold block mb-0.5 uppercase tracking-tighter">Instructor</span>}
                    <span className="text-slate-700 font-medium truncate block">{user.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="flex-1 md:flex-none px-8 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition">
                Present
              </button>
              <button className="flex-1 md:flex-none px-8 py-3 bg-pink-500 text-white rounded-xl font-bold shadow-lg shadow-pink-200 hover:bg-pink-600 active:scale-95 transition">
                Call
              </button>
            </div>
          </motion.div>

          {/* Bottom-right accent shape */}
          <motion.div 
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-24 h-24 md:w-32 md:h-32 bg-purple-500 rounded-2xl absolute -bottom-8 -right-4 opacity-80 z-0" 
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-5xl font-black leading-tight text-gray-900">
            A <span className="text-teal-500 italic">user interface</span> designed for the classroom
          </h3>

          <div className="mt-12 space-y-10">
            {classroomFeatures.map((item, index) => (
              <div key={index} className="flex items-start gap-6 group">
                <div className={`shrink-0 w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-2xl shadow-lg group-hover:rotate-12 transition-transform`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DetailedFeatures;