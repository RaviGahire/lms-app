import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      {/* Card Image */}
      <div className="overflow-hidden rounded-2xl pb-2 aspect-video">
        <img 
          className="w-full h-full object-cover" 
          src={course.image || "/api/placeholder/400/250"} 
          alt="course-img" 
        />
      </div>

      {/* Card Body */}
      <div>
        <div className="flex justify-between px-2">
          <div className="inline-flex gap-1 items-center">
            <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="9" height="9" rx="1.5" stroke="#D9D9D9" />
              <rect x="0.5" y="11.5" width="9" height="9" rx="1.5" stroke="#D9D9D9" />
              <rect x="11.5" y="11.5" width="9" height="9" rx="1.5" stroke="#D9D9D9" />
              <rect x="11.5" y="0.5" width="9" height="9" rx="1.5" stroke="#D9D9D9" />
            </svg>
            <p className="font-semibold tracking-tight text-gray-500 text-sm">{course.category}</p>
          </div>
          <div className="inline-flex items-center gap-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.625 0C18.0469 0 23.25 5.20312 23.25 11.625C23.25 18.0469 18.0469 23.25 11.625 23.25C5.20312 23.25 0 18.0469 0 11.625C0 5.20312 5.20312 0 11.625 0ZM11.625 21C16.7812 21 21 16.8281 21 11.625C21 6.46875 16.7812 2.25 11.625 2.25C6.42188 2.25 2.25 6.46875 2.25 11.625C2.25 16.8281 6.42188 21 11.625 21ZM14.4844 16.125L10.5 13.2188C10.3594 13.125 10.3125 12.9375 10.3125 12.7969V5.0625C10.3125 4.78125 10.5469 4.5 10.875 4.5H12.375C12.6562 4.5 12.9375 4.78125 12.9375 5.0625V11.7188L16.0312 14.0156C16.3125 14.2031 16.3594 14.5312 16.1719 14.8125L15.2812 15.9844C15.0938 16.2656 14.7656 16.3125 14.4844 16.125Z" fill="#D9D9D9" />
            </svg>
            <p className="font-semibold tracking-tight text-gray-500 text-sm">{course.duration}</p>
          </div>
        </div>
        <h3 className="text-md sm:text-xl md:text-2xl font-semibold text-gray-700 pt-2 tracking-tight">
          {course.title}
        </h3>
        <p className="text-sm sm:text-md md:text-lg font-normal text-gray-500 py-2 tracking-tight line-clamp-3">
          {course.description}
        </p>
      </div>

      {/* Card Footer */}
      <div className="flex justify-between pt-2 items-center">
        <div className="flex items-center gap-2">
          <div className="size-8 overflow-hidden rounded-full">
            <img className="w-full h-full object-cover" src={course.instructorImage} alt="user-img" />
          </div>
          <p className="text-sm tracking-tight font-semibold">{course.instructorName}</p>
        </div>
        <div className="inline-flex gap-2 items-center">
          <span className="text-sm line-through font-bold text-gray-400">${course.oldPrice}</span>
          <span className="text-xl text-[#49BBBD] font-extrabold">${course.newPrice}</span>
        </div>
      </div>
    </div>
  );
};

const FavoriteCourse = () => {
  const courses = [
    {
      id: 1,
      category: "Design",
      duration: "3 Month",
      title: "AWS Certified solutions Architect",
      description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      instructorName: "Ravi Gahire",
      instructorImage: "stud-1.jpg",
      oldPrice: 100,
      newPrice: 80,
      image: "stud-1.jpg"
    },
    // Add more course objects here to repeat the cards
  ];

  // Repeat the same data 4 times for the layout demo
  const displayCourses = Array(4).fill(courses[0]);

  return (
    <section className="bg-[#9dccffa9]">
      <div className="px-4" aria-label="The course in personal development" role="region">
        <div className="max-w-7xl mx-auto py-12">
          {/* Section Heading */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Students are viewing</h2>
            <a role="button" className="text-[#49BBBD] text-[20px] font-semibold hover:underline" href="#">
              See All
            </a>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {displayCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoriteCourse;