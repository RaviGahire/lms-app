import React from 'react';
import { IconPlus, IconGripVertical, IconVideo, IconEdit, IconTrash, IconFileDescription, IconUpload } from '@tabler/icons-react';

export const CurriculumStep = () => {
  return (
    <div className="bg-[#131825] border border-gray-800 rounded-xl p-6 shadow-sm mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-white text-lg font-semibold">2. Curriculum & Modules</h2>
        <button className="bg-[#1A2133] hover:bg-gray-700 text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <IconPlus size={16} /> Add Module
        </button>
      </div>

      <div className="space-y-4">
        {/* Module Header */}
        <div className="bg-[#1A2133]/50 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <IconGripVertical size={16} className="text-gray-500 cursor-grab" />
              <h3 className="text-white font-medium">Module 1: Introduction to Topologies</h3>
            </div>
            <div className="flex items-center gap-2">
               <button className="text-gray-400 hover:text-white p-1"><IconEdit size={16} /></button>
               <button className="text-gray-400 hover:text-red-400 p-1"><IconTrash size={16} /></button>
            </div>
          </div>

          {/* Lesson List */}
          <div className="space-y-2 pl-7">
            {/* Collapsed Lesson */}
            <div className="bg-[#0B0F19] border border-gray-800 rounded-lg p-3 flex items-center justify-between group hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-3">
                <IconGripVertical size={14} className="text-gray-600 cursor-grab" />
                <IconVideo size={16} className="text-blue-400" />
                <span className="text-gray-300 text-sm">1.1 Network Fundamentals</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-500 text-xs">12:45</span>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-gray-400 hover:text-white p-1"><IconEdit size={14} /></button>
                  <button className="text-gray-400 hover:text-red-400 p-1"><IconTrash size={14} /></button>
                </div>
              </div>
            </div>

            {/* Active/Expanded Lesson Editor */}
            <div className="bg-[#0B0F19] border border-blue-500/30 rounded-lg p-4 relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-blue-500 rounded-l-lg"></div>
              <div className="flex items-center justify-between mb-4 pl-2">
                <div className="flex items-center gap-2 text-white font-medium text-sm">
                  <IconFileDescription size={16} className="text-emerald-400" />
                  1.2 OSI Model Deep Dive
                </div>
                <button className="text-gray-400 hover:text-white text-xs">Close</button>
              </div>

              <div className="pl-2 space-y-4">
                <div>
                  <label className="block text-gray-400 text-xs font-medium mb-1">Lesson Title</label>
                  <input type="text" defaultValue="OSI Model Deep Dive" className="w-full bg-[#131825] border border-gray-700 rounded-lg py-2 px-3 text-white text-sm focus:border-blue-500 outline-none" />
                </div>
                
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-[#131825] transition-colors cursor-pointer">
                  <IconUpload size={24} className="text-gray-400 mb-2" />
                  <p className="text-white text-sm font-medium mb-1">Upload Video Content</p>
                  <p className="text-gray-500 text-xs">Drag and drop MP4, or click to browse. Max 2GB.</p>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button className="text-gray-400 text-sm px-4 py-2 hover:text-white transition-colors">Cancel</button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">Save Lesson</button>
                </div>
              </div>
            </div>
          </div>
          
          <button className="text-blue-400 text-sm font-medium hover:text-blue-300 mt-4 ml-7 flex items-center gap-1">
            <IconPlus size={14} /> Add Content
          </button>
        </div>
      </div>
    </div>
  );
};