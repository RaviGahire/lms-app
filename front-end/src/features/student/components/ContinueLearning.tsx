import { Button } from '../../../shared/components/Buttons/Buttons';

export const ContinueLearning = () => {
  return (
    <div className="col-span-1 lg:col-span-8">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h2 className="text-white text-lg font-semibold">
            Continue Learning
          </h2>
          <p className="text-gray-500 text-sm">
            Resume active coursework and exercises
          </p>
        </div>
      </div>

      {/* Primary Active Course */}
      <div className="bg-[#131825] border border-gray-800 rounded-xl p-5 mb-4 flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-48 h-32 bg-gray-800 rounded-lg shrink-0 overflow-hidden relative">
          <img
            src="/api/placeholder/200/130"
            alt="Course Thumbnail"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-white font-semibold text-lg mb-1">
              Modern Web Engineering: HTML5, CSS3 & Modern JavaScript
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Next: Lesson 4.3 WebSocket Handshakes & Reconnection
            </p>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-gray-500">Progress</span>
              <span className="text-white font-medium">68%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-1.5 mb-4">
              <div
                className="bg-indigo-400 h-1.5 rounded-full"
                style={{ width: '68%' }}
              ></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-xs">Dr. Aris Vance</span>
              <Button label="resume" size="sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Courses List */}
      <div className="space-y-3">
        {[
          {
            title: 'Full-Stack TypeScript & React 19 Architecture',
            mod: 'Module 2 of 6 • Sarah Lin',
            prog: '42%',
          },
          {
            title: 'Node.js Microservices & Distributed Caching',
            mod: 'Module 1 of 5 • Marcus Sterling',
            prog: '18%',
          },
        ].map((course, i) => (
          <div
            key={i}
            className="bg-[#131825] border border-gray-800 rounded-xl p-4 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-[#1A2133] rounded overflow-hidden shrink-0">
              <img
                src="/api/placeholder/48/48"
                alt="Thumb"
                className="w-full h-full object-cover opacity-70"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-white text-sm font-medium">{course.title}</h4>
              <p className="text-gray-500 text-xs">{course.mod}</p>
            </div>
            <div className="w-24 hidden sm:block">
              <span className="text-white text-xs block text-right mb-1">
                {course.prog}
              </span>
              <div className="w-full bg-gray-800 rounded-full h-1">
                <div
                  className="bg-gray-400 h-1 rounded-full"
                  style={{ width: course.prog }}
                ></div>
              </div>
            </div>
        <Button label="resume" size="sm" variant='outline' />
          </div>
        ))}
      </div>
    </div>
  );
};
