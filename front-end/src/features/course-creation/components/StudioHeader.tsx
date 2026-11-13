import { IconEye, IconDeviceFloppy, IconRocket } from '@tabler/icons-react';
import { Button } from '../../../shared/components/Buttons/Buttons';

export const StudioHeader = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-white">
          Course Creation Studio
        </h1>
      </div>
      <div className="flex items-center gap-3">
        {/* Preview Course Btn */}
        <Button
          label="Preview"
          size="sm"
          icon={<IconEye size={16} />}
          variant="outline"
          disabled
          className="cursor-not-allowed"
        />

        {/* Save Draft Btn */}
        <Button
          label="Save Draft"
          size="sm"
          icon={<IconDeviceFloppy size={16} />}
          variant="outline"
          disabled
          className="cursor-not-allowed"
        />

        {/* Publish Course Btn */}
        <Button
          label="Publish Course"
          size="sm"
          icon={<IconRocket size={16} />}
          iconPosition='right'
          className="cursor-not-allowed"
        />
      </div>
    </div>
  );
};
