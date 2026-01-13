import React from 'react';
import { motion } from 'framer-motion';

const SuccessAndFeatures = () => {
  const stats = [
    { value: "15K", label: "Students", color: "text-blue-500", suffix: "+" },
    { value: "75", label: "Total success", color: "text-blue-500", suffix: "%" },
    { value: "35", label: "Main questions", color: "text-blue-500" },
    { value: "26", label: "Chief experts", color: "text-blue-500" },
    { value: "16", label: "Years of experience", color: "text-blue-500" },
  ];

  const features = [
    {
      title: "Online Billing, Invoicing, & Contracts",
      desc: "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts.",
      icon: (
        <svg width="33" height="46" viewBox="0 0 33 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875Z" fill="white"/>
        </svg>
      ),
      bgColor: "bg-indigo-600",
    },
    {
      title: "Easy Scheduling & Attendance Tracking",
      desc: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.",
      icon: (
        <svg width="35" height="35" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M42.8571 5.14282H37.7143V12C37.7143 12.9468 36.9468 13.7143 36 13.7143C35.0532 13.7143 34.2857 12.9468 34.2857 12V5.14282H13.7142V12C13.7142 12.9468 12.9467 13.7143 11.9999 13.7143C11.0531 13.7143 10.2856 12.9468 10.2856 12V5.14282H5.14285C2.30253 5.14282 0 7.44535 0 10.2857V42.8571C0 45.6974 2.30253 48 5.14285 48H42.8571C45.6975 48 48 45.6974 48 42.8571V10.2857C48 7.44535 45.6975 5.14282 42.8571 5.14282Z" fill="white"/>
        </svg>
      ),
      bgColor: "bg-cyan-500",
    },
    {
      title: "Customer Tracking & CRM Tools",
      desc: "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization.",
      icon: (
        <svg width="45" height="34" viewBox="0 0 55 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.5 22C32.8195 22 37.125 17.6945 37.125 12.375C37.125 7.05547 32.8195 2.75 27.5 2.75C22.1805 2.75 17.875 7.05547 17.875 12.375C17.875 17.6945 22.1805 22 27.5 22ZM34.1 24.75H33.3867C31.5992 25.6094 29.6141 26.125 27.5 26.125C25.3859 26.125 23.4094 25.6094 21.6133 24.75H20.9C15.4344 24.75 11 29.1844 11 34.65V37.125C11 39.4023 12.8477 41.25 15.125 41.25H39.875C42.1523 41.25 44 39.4023 44 37.125V34.65C44 29.1844 39.5656 24.75 34.1 24.75Z" fill="white"/>
        </svg>
      ),
      bgColor: "bg-blue-500",
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* SUCCESS STATISTICS SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Our Success</h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We empower thousands of educators and students worldwide with tools designed for the modern age of digital learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className={`text-4xl md:text-6xl font-black ${stat.color} mb-2 tracking-tighter`}>
                  {stat.value}
                  <span className="opacity-70">{stat.suffix}</span>
                </p>
                <p className="text-slate-700 font-bold uppercase tracking-widest text-xs md:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOUD SOFTWARE FEATURES SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              <span className="text-indigo-900">All-In-One </span>
              <span className="text-cyan-500 italic">Cloud Software.</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto">
              MasterTrack is one powerful online software suite that combines all the tools 
              needed to run a successful school or office in one place.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="group text-center flex flex-col items-center bg-white p-8 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 border border-slate-50"
              >
                {/* Icon Circle */}
                <div className={`${feature.bgColor} rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-8 shadow-xl transform group-hover:rotate-12 transition-transform`}>
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-black text-indigo-900 mb-5 leading-snug">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Centered Divider Line */}
          <div className="flex justify-center mt-20">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              className="h-1.5 bg-cyan-500 rounded-full" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessAndFeatures;