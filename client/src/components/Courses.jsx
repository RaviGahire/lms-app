import React from 'react';

const CourseCard = ({ 
  image, 
  category, 
  duration, 
  title, 
  description, 
  instructor, 
  instructorImg, 
  oldPrice, 
  price 
}) => (
  <div className="bg-white p-4 rounded-2xl">
    {/* Card Image */}
    <div className="overflow-hidden rounded-2xl pb-2">
      <img className="w-full h-full object-cover" src={image} alt="course-img" />
    </div>
    
    {/* Card Body */}
    <div>
      <div className="flex justify-between px-2">
        <div className="inline-flex gap-1">
          <div>
            <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="9615b0c0">
                <rect x="0.5" y="0.5" width="9" height="9" rx="1.5" stroke="#D9D9D9" />
                <rect x="0.5" y="11.5" width="9" height="9" rx="1.5" stroke="#D9D9D9" />
                <rect x="11.5" y="11.5" width="9" height="9" rx="1.5" stroke="#D9D9D9" />
                <rect x="11.5" y="0.5" width="9" height="9" rx="1.5" stroke="#D9D9D9" />
              </g>
            </svg>
          </div>
          <p className="font-semibold tracking-tight text-gray-500 text-sm">{category}</p>
        </div>
        <div className="inline-flex items-center gap-1">
          <div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.625 0C18.0469 0 23.25 5.20312 23.25 11.625C23.25 18.0469 18.0469 23.25 11.625 23.25C5.20312 23.25 0 18.0469 0 11.625C0 5.20312 5.20312 0 11.625 0ZM11.625 21C16.7812 21 21 16.8281 21 11.625C21 6.46875 16.7812 2.25 11.625 2.25C6.42188 2.25 2.25 6.46875 2.25 11.625C2.25 16.8281 6.42188 21 11.625 21ZM14.4844 16.125L10.5 13.2188C10.3594 13.125 10.3125 12.9375 10.3125 12.7969V5.0625C10.3125 4.78125 10.5469 4.5 10.875 4.5H12.375C12.6562 4.5 12.9375 4.78125 12.9375 5.0625V11.7188L16.0312 14.0156C16.3125 14.2031 16.3594 14.5312 16.1719 14.8125L15.2812 15.9844C15.0938 16.2656 14.7656 16.3125 14.4844 16.125Z" fill="#D9D9D9" />
            </svg>
          </div>
          <p className="font-semibold tracking-tight text-gray-500 text-sm">{duration}</p>
        </div>
      </div>
      <p className="text-md sm:text-xl md:text-2xl font-semibold text-gray-700 pt-2 tracking-tight">
        {title}
      </p>
      <p className="text-sm sm:text-md md:text-xl font-normal text-gray-500 py-2 tracking-tight">
        {description}
      </p>
    </div>

    {/* Card Footer */}
    <div className="flex justify-between pt-2">
      <div className="flex items-center gap-2">
        <div className="size-5 overflow-hidden rounded-full">
          <img className="w-full h-full object-cover" src={instructorImg} alt="user-img" />
        </div>
        <p className="text-md tracking-tight font-semibold">{instructor}</p>
      </div>
      <div className="inline-flex gap-2 items-center">
        <span className="text-md line-through font-bold text-gray-400">${oldPrice}</span>
        <span className="text-xl text-[#49BBBD] font-extrabold">${price}</span>
      </div>
    </div>
  </div>
);

const CourseSection = () => {
  // Shared course data to avoid repeated JSX
  const courseData = {
    image: "stud-1.jpg",
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    instructor: "Ravi Gahire",
    instructorImg: "stud-1.jpg",
    oldPrice: 100,
    price: 80
  };

  return (
    <section className="bg-gray-100 px-2 pb-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto py-12">
        <div className="flex justify-between items-center">
          <p className="mb-6 text-3xl font-bold text-gray-800">Get choice of your course</p>
          <a role="button" className="text-[#49BBBD] text-[20px]" href="#">See All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {[1, 2, 3, 4].map((item) => (
            <CourseCard key={item} {...courseData} />
          ))}
        </div>
      </div>

      {/* Middle Banner Card */}
      <div className="bg-[#252641] mx-auto max-w-7xl text-white rounded-2xl p-6 md:p-10 mb-12">
        <div className="pt-4">
          <p className="text-[28px] md:text-[36px] text-center font-semibold tracking-tight">
            Online coaching lessons for remote learning.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-[18px] md:text-[24px] text-gray-300 text-center p-5 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
        <div className="pb-4 flex justify-center">
          <a href="#" className="bg-[#49BBBD] py-4 px-8 rounded-2xl font-bold hover:bg-[#3ca1a3] transition-colors">
            Start learning now
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto py-12">
        <div className="flex justify-between items-center">
          <p className="mb-6 text-3xl font-bold text-gray-800">The course in personal development</p>
          <a role="button" className="text-[#49BBBD] text-[20px]" href="#">See All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {[1, 2, 3, 4].map((item) => (
            <CourseCard key={item} {...courseData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;