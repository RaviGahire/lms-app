import React from 'react';

// Sub-component for Tags
const BlogTag = ({ label }) => (
  <a 
    href="#" 
    className="px-4 py-2 bg-cyan-100 text-gray-600 border border-gray-200 font-medium tracking-tight rounded-2xl hover:bg-cyan-200 transition-colors"
  >
    {label}
  </a>
);

const BlogPage = () => {
  const tags = ["affordable", "making", "design", "affordable"];

  return (
    <main className="font-sans">
      {/* SECTION 1: HERO / FEATURED BLOG */}
      <section aria-label="blog page container" className="bg-[#9dccff67]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center py-12 gap-8">
            {/* Content side */}
            <div className="md:w-1/2">
              <p className="text-md text-gray-500">
                By the mad-brains in <span className="text-cyan-800 font-medium cursor-pointer">inspiration</span>
              </p>
              <h1 className="text-3xl md:text-4xl py-5 font-semibold text-gray-800 leading-tight">
                Why Swift UI Should Be on the <br className="hidden md:block" /> Radar of Every Mobile <br className="hidden md:block" /> Developer
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
              <div className="py-8">
                <a href="#" className="px-8 py-3 bg-[#49BBBD] rounded-md text-white font-bold hover:bg-[#3ca3a5] transition-all">
                  Start learning now
                </a>
              </div>
            </div>

            {/* Image side */}
            <div className="w-full md:w-1/2 h-80 md:h-96 overflow-hidden rounded-2xl hidden md:block">
              <img 
                className="w-full h-full object-cover rounded-2xl transform transition duration-500 ease-in-out hover:scale-110" 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000" 
                alt="Featured blog visual"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BLOG DETAILS & CONTENT */}
      <section aria-label="blog-details" className="pb-20">
        {/* Top Full-Width Image */}
        <div className="w-full h-[400px] md:h-[600px] overflow-hidden">
          <img 
            className="w-full h-full object-cover"
            src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop"
            alt="Article header"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-12">
          {/* Blog Heading */}
          <div className="mb-8">
            <h2 className="font-semibold text-4xl text-blue-900 leading-tight">
              Why Swift UI Should Be on the Radar of Every Mobile Developer
            </h2>
          </div>

          {/* Blog Body Text */}
          <div className="text-gray-600 text-xl leading-relaxed space-y-6">
            <p>
              TOTC is a platform that allows educators to create online classes whereby they can store the
              course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and
              provide students with feedback all in one place.
            </p>
            <p>
              TOTC is a platform that allows educators to create online classes whereby they can store the
              course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and
              provide students with feedback all in one place. TOTC is a platform that allows educators to create 
              online classes whereby they can store the course materials online.
            </p>
            <p>
              TOTC is a platform that allows educators to create online classes whereby they can
              store the course materials online; manage assignments, quizzes and exams; monitor due dates; 
              grade results and provide students with feedback all in one place.
            </p>
          </div>

          {/* Blog Tags */}
          <div className="flex flex-wrap gap-4 my-10">
            {tags.map((tag, index) => (
              <BlogTag key={index} label={tag} />
            ))}
          </div>

          <hr className="border-gray-200" />

          {/* Blog Writer / Bio Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between py-8 gap-4">
            <div className="flex items-center gap-4">
              {/* Writer Image */}
              <div className="size-14 rounded-md overflow-hidden shadow-sm">
                <img 
                  className="w-full h-full object-cover"
                  src="https://tse1.mm.bing.net/th/id/OET.7252da000e8341b2ba1fb61c275c1f30?w=594&h=594&c=7&rs=1&o=5&pid=1.9" 
                  alt="Author: Ravi Gahire"
                />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Written by</p>
                <p className="text-gray-800 font-bold text-lg leading-tight">Ravi Gahire</p>
              </div>
            </div>

            {/* Follow Button */}
            <div className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-10 py-2 border-2 border-cyan-500 text-cyan-600 rounded-md font-bold hover:bg-cyan-50 transition-colors">
                Follow
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;