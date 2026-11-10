import { IconUpload, IconTrash } from '@tabler/icons-react';
import { Button } from '../../../shared/components/Buttons/Buttons';

export const ProfileBannerCard = () => {
  return (
    <div className="bg-[#131825] border border-gray-800 rounded-xl overflow-hidden mb-6 shadow-sm">
      {/* Banner Area */}
      <div className="h-32 bg-gray-800 relative w-full overflow-hidden">
        {/* banner image */}
      </div>

      {/* Profile Details Area */}
      <div className="p-6 pt-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
        <div className="flex items-end gap-5 -mt-10">
          <div className="w-24 h-24 rounded-full border-4 border-[#131825] bg-gray-700 overflow-hidden relative z-10">
            <img
              src="/api/placeholder/96/96"
              alt="Alex Vance"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mb-2">
            <h2 className="text-white text-xl font-semibold flex items-center gap-2">
              Alex Vance
            </h2>
            <p className="text-gray-400 text-sm flex items-center gap-2 mt-0.5">
              username
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <Button
            label="Upload Avatar"
            icon={<IconUpload size={16} />}
            variant="ghost"
            size="sm"
          />
          <Button
            label="Change Banner"
            size="sm"
            variant="ghost"
            icon={<IconUpload size={14} />}
          />
        </div>
      </div>

      <div className="px-6 pb-6">
        <p className="text-gray-500 text-xs">
          Recommended: 400x400px JPG, WEBP, or PNG. Maximum file size 2MB.
          Visible on public reviews and lab collaboration workspaces.
        </p>
      </div>
    </div>
  );
};
