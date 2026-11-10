import { IconInfoCircle, IconDeviceFloppy } from '@tabler/icons-react';
import { Button } from '../../../shared/components/Buttons/Buttons';

export const SaveActionFooter = () => {
  return (
    <div className="bg-[#131825] border border-gray-700 rounded-xl p-4 mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-lg sticky bottom-6 z-50">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center">
          <IconInfoCircle size={18} className="text-blue-400" />
        </div>
        <div>
          <p className="text-white text-sm font-medium">Unsaved Changes in Profile</p>
          <p className="text-gray-500 text-xs">Last saved sync 2 minutes ago</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
       <Button
       size='sm'
       label='Discard'
       variant='outline'
       />
        <Button
       size='sm'
       label='Save Changes'
       variant='secondary'
       />

               <Button
       size='sm'
       label='Delete account'
       variant='danger'
       />
      </div>
    </div>
  );
};