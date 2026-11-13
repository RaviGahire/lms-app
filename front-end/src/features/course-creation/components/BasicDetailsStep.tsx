
import { IconChevronDown } from '@tabler/icons-react';

export const BasicDetailsStep = () => {
  return (
    <div className="bg-[#131825] border border-gray-800 rounded-xl p-6 shadow-sm mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-lg font-semibold">1. Basic Course Information</h2>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide">Course Title *</label>
          <input type="text" placeholder="e.g. Advanced Network Topology & Architecture" className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg py-2.5 px-4 text-white text-sm focus:border-blue-500 outline-none" />
        </div>

        <div>
          <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide">Course Subtitle / Tagline *</label>
          <input type="text" placeholder="A brief summary of what students will learn..." className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg py-2.5 px-4 text-white text-sm focus:border-blue-500 outline-none" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide">Category</label>
            <div className="relative">
              <select className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg py-2.5 px-4 pr-10 text-white text-sm appearance-none focus:border-blue-500 outline-none">
                <option>Systems Engineering</option>
              </select>
              <IconChevronDown size={16} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide">Difficulty Level</label>
            <div className="relative">
              <select className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg py-2.5 px-4 pr-10 text-white text-sm appearance-none focus:border-blue-500 outline-none">
                <option>Advanced</option>
              </select>
              <IconChevronDown size={16} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide">Primary Language</label>
            <div className="relative">
              <select className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg py-2.5 px-4 pr-10 text-white text-sm appearance-none focus:border-blue-500 outline-none">
                <option>English</option>
              </select>
              <IconChevronDown size={16} className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide">Search Tags</label>
          <div className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg p-2 flex gap-2">
            <span className="bg-[#1A2133] text-gray-300 text-xs px-2 py-1 rounded flex items-center gap-1">Networking <button className="text-gray-500 hover:text-white">×</button></span>
            <span className="bg-[#1A2133] text-gray-300 text-xs px-2 py-1 rounded flex items-center gap-1">Infrastructure <button className="text-gray-500 hover:text-white">×</button></span>
            <input type="text" placeholder="Add tags..." className="bg-transparent border-none text-white text-sm focus:outline-none flex-1 min-w-25" />
          </div>
        </div>

        <div>
          <label className="block text-gray-400 text-xs font-medium mb-1.5 uppercase tracking-wide">Detailed Description</label>
          <div className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg overflow-hidden">
            {/* Mock Rich Text Toolbar */}
            <div className="bg-[#131825] border-b border-gray-700 p-2 flex gap-2">
              <div className="flex gap-1 border-r border-gray-700 pr-2">
                <button className="p-1 hover:bg-gray-800 rounded text-gray-400 font-bold">B</button>
                <button className="p-1 hover:bg-gray-800 rounded text-gray-400 italic">I</button>
                <button className="p-1 hover:bg-gray-800 rounded text-gray-400 underline">U</button>
              </div>
              <div className="flex gap-1">
                <button className="p-1 hover:bg-gray-800 rounded text-gray-400">H1</button>
                <button className="p-1 hover:bg-gray-800 rounded text-gray-400">H2</button>
              </div>
            </div>
            <textarea rows={6} className="w-full bg-transparent p-4 text-white text-sm focus:outline-none resize-y" placeholder="Enter full course description..."></textarea>
          </div>
        </div>

        {/* 2x2 Grid for Requirements/Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-800">
          <div>
            <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wide">What you will learn</label>
            <div className="space-y-2">
              <input type="text" placeholder="Objective 1" className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg py-2 px-3 text-white text-sm focus:border-blue-500 outline-none" />
              <input type="text" placeholder="Objective 2" className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg py-2 px-3 text-white text-sm focus:border-blue-500 outline-none" />
              <button className="text-blue-400 text-xs font-medium hover:text-blue-300 mt-1">+ Add objective</button>
            </div>
          </div>
          <div>
            <label className="block text-gray-400 text-xs font-medium mb-2 uppercase tracking-wide">Prerequisites</label>
            <div className="space-y-2">
              <input type="text" placeholder="Prerequisite 1" className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg py-2 px-3 text-white text-sm focus:border-blue-500 outline-none" />
              <input type="text" placeholder="Prerequisite 2" className="w-full bg-[#0B0F19] border border-gray-700 rounded-lg py-2 px-3 text-white text-sm focus:border-blue-500 outline-none" />
              <button className="text-blue-400 text-xs font-medium hover:text-blue-300 mt-1">+ Add prerequisite</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};