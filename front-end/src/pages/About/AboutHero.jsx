


export const AboutHero = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* Left Content */}
        <div className="text-center lg:text-left">
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            We're building the world's most human-centered learning platform
          </h1>

          <p className="mt-5 text-gray-600 text-sm sm:text-base max-w-lg mx-auto lg:mx-0">
            We are a passionate team of developers and designers focused on 
            creating high-quality, scalable, and user-friendly web applications. 
            Our mission is to turn ideas into impactful digital solutions.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center lg:items-start gap-4">
            <button className="px-6 py-3 cursor-pointer bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-200 shadow-md">
              Learn More
            </button>

            <button className="px-6 py-3 cursor-pointer border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200">
              Contact Us
            </button>
          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
            alt="Team working"
            className="w-full max-w-md lg:max-w-lg rounded-xl shadow-lg"
          />
        </div>

      </div>

    </section>
  );
};
