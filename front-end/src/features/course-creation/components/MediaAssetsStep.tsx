import React from 'react';
import { IconPhotoUp, IconMovie } from '@tabler/icons-react';

export const MediaAssetsStep = () => {
  return (
    <div className="bg-[#131825] border border-gray-800 rounded-xl p-6 shadow-sm mb-6">
      <h2 className="text-white text-lg font-semibold mb-6">3. Course Media & Assets</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Cover Image */}
        <div>
          <label className="block text-gray-400 text-xs font-medium mb-3 uppercase tracking-wide">Course Cover Image</label>
          <div className="flex gap-4">
            <div className="w-48 h-32 bg-[#0B0F19] rounded-lg border border-gray-700 overflow-hidden relative group">
              {/* Placeholder matching the image thumbnail context */}
              <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay z-10"></div>
              <img src="/api/placeholder/400/250" alt="Thumbnail" className="w-full h-full object-cover" />
              <div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-4 text-center">
                 <span className="text-white font-bold text-xs uppercase tracking-widest leading-tight">Advanced<br/>Network Topology</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-gray-400 text-xs leading-relaxed mb-3">
                Upload a high-quality image to represent your course. Minimum 1280x720 (16:9 ratio).
              </p>
              <button className="bg-[#1A2133] hover:bg-gray-700 text-gray-300 border border-gray-700 text-sm px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors w-fit">
                <IconPhotoUp size={16} /> Upload Image
              </button>
            </div>
          </div>
        </div>

        {/* Promo Video */}
        <div>
           <label className="block text-gray-400 text-xs font-medium mb-3 uppercase tracking-wide">Promotional Video (Optional)</label>
           <div className="border-2 border-dashed border-gray-700 bg-[#0B0F19] rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-gray-600 transition-colors cursor-pointer h-32">
             <IconMovie size={24} className="text-gray-500 mb-2" />
             <p className="text-gray-300 text-sm font-medium">Upload Promo Video</p>
           </div>
        </div>
      </div>
    </div>
  );
};