

// Sub-component for Tags
const BlogTag = ({ label }) => (
  <a
    href="#"
    className="px-4 py-2 bg-cyan-100 text-gray-600 border border-gray-200 font-medium tracking-tight rounded-2xl hover:bg-cyan-200 transition-colors"
  >
    {label}
  </a>
);

export const BlogDetails = () => {
     const tags = ["affordable", "making", "design", "affordable"];
  return (
    <section aria-label="blog-details" className="pb-20">
        {/* Top Full-Width Image */}
        <div className="w-full h-100 md:h-150 overflow-hidden">
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
  )
}
