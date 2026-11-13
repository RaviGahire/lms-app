import {
  IconArrowLeft,
  IconBook,
  IconClock,
  IconLayersDifference,
} from '@tabler/icons-react';

export const HeroCard = () => {
  return (
    <div className="w-full relative flex flex-col-reverse lg:flex-row rounded-md overflow-hidden border border-muted/20">
      
      {/* Left Content */}
      <div className="w-full p-6 md:p-10 lg:p-12 flex flex-col justify-center relative z-10">
        {/* Back Button */}
        <button className="flex items-center gap-2 text-xs md:text-sm text-purple-200/70 bg-white/5 hover:bg-white/10 transition-colors w-fit px-4 py-2 rounded-full border border-white/5">
          <IconArrowLeft stroke={1.5} className="w-4 h-4" />
          All courses
        </button>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mt-6 lg:mt-8 leading-tight tracking-tight">
          The Complete JavaScript Course
        </h1>

        {/* Description */}
        <p className="text-gray-300 mt-4 lg:mt-5 text-sm md:text-base leading-relaxed max-w-2xl">
          Welcome to our comprehensive JavaScript course, now available on our
          dedicated learning platform! Originally offered on YouTube with over
          60 hours of in-depth content, this course has been enhanced to provide
          a...
        </p>

        {/* Meta Info Row */}
        <div className="flex flex-wrap items-center gap-5 md:gap-8 mt-8 lg:mt-10 text-xs md:text-sm text-gray-400 font-medium">
          <div className="flex items-center gap-2">
            <IconLayersDifference
              stroke={1.5}
              className="w-4 h-4 text-blue-400"
            />
            <span>7 Sections</span>
          </div>
          {/* Dot separator */}
          <div className="w-1 h-1 rounded-full bg-gray-600 hidden md:block"></div>
          <div className="flex items-center gap-2">
            <IconBook stroke={1.5} className="w-4 h-4 text-purple-400" />
            <span>121 Lessons</span>
          </div>
          {/* Dot separator */}
          <div className="w-1 h-1 rounded-full bg-gray-600 hidden md:block"></div>
          <div className="flex items-center gap-2">
            <IconClock stroke={1.5} className="w-4 h-4 text-yellow-500" />
            <span>77h 21m</span>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-[40%] relative min-h-70 lg:min-h-full">
        {/* thumbnail */}
        <div className="w-full h-full bg-lineae-to-br from-[#ffdd00] to-[#f59e0b] relative overflow-hidden flex items-center justify-center">
          {/* Simulated Image Placeholder Text*/}
          <div className="text-center text-white p-6">
            <h2 className="text-3xl md:text-4xl leading-none">
              JavaScript
              <br />
              Course
            </h2>
            <p className="text-sm  mt-2 opacity-80 uppercase tracking-widest">
              Zero to Advanced
            </p>
          </div>
            </div>
      </div>
    </div>
  );
};
