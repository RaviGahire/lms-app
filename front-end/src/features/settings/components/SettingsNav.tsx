import {
  IconUser,
  IconShieldLock,
  IconAdjustments,
  IconCreditCard,
  IconBell,
} from '@tabler/icons-react';

export const SettingsNav = () => {
  return (
    <div className="flex items-center gap-8 border-b border-gray-800 mb-6 px-2 overflow-x-auto">
      <button className="flex items-center gap-2 text-blue-400 border-b-2 border-blue-500 pb-3 px-1 text-sm font-medium whitespace-nowrap">
        <IconUser size={18} /> Public Profile
      </button>
      <button className="flex items-center gap-2 text-gray-500 hover:text-gray-300 pb-3 px-1 text-sm font-medium transition-colors whitespace-nowrap">
        <IconShieldLock size={18} /> Account Security
      </button>
      <button className="flex items-center gap-2 text-gray-500 hover:text-gray-300 pb-3 px-1 text-sm font-medium transition-colors whitespace-nowrap">
        <IconAdjustments size={18} /> Learning Preferences
      </button>
      <button className="flex items-center gap-2 text-gray-500 hover:text-gray-300 pb-3 px-1 text-sm font-medium transition-colors whitespace-nowrap">
        <IconCreditCard size={18} /> Billing & Membership
      </button>
      <button className="flex items-center gap-2 text-gray-500 hover:text-gray-300 pb-3 px-1 text-sm font-medium transition-colors whitespace-nowrap">
        <IconBell size={18} /> Notifications
      </button>
    </div>
  );
};
