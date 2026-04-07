import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Anjali Mehta",
    role: "Academic Head",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Lead Instructor",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Sneha Kapoor",
    role: "Curriculum Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    name: "Amit Patel",
    role: "Platform Engineer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export const TeamSection = () => {
  return (
    <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-16">
      
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Meet the Minds Behind the Learning
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Our team combines academic excellence and technical expertise to deliver 
          high-quality, engaging, and accessible learning experiences.
        </p>

        {/* Team Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover"
              />

              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {member.name}
              </h3>

              <p className="text-sm text-teal-500">{member.role}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

