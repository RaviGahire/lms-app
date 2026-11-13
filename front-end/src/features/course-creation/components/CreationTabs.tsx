import {
  IconFileInfo,
  IconListDetails,
  IconPhoto,
  IconTags,
  ReactNode,
} from '@tabler/icons-react';
import { Button } from '../../../shared/components/Buttons/Buttons';
import { TabType } from '../Types';

interface CreationTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const CreationTabs = ({ activeTab, onTabChange }: CreationTabsProps) => {

  const tabs: { id: TabType; label: string; icon: ReactNode }[] = [
    {
      id: 'basic-details',
      label: 'Basic Details',
      icon: <IconFileInfo size={16} />,
    },
    {
      id: 'curriculum',
      label: 'Curriculum',
      icon: <IconListDetails size={16} />,
    },
    {
      id: 'media-assets',
      label: 'Media Assets',
      icon: <IconPhoto size={16} />,
    },
    { id: 'pricing', label: 'Pricing', icon: <IconTags size={16} /> },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 bg-[#131825] border border-gray-800 rounded-lg p-1 mb-6">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <Button
            id={tab?.id}
            label={tab?.label}
            icon={tab?.icon}
            variant="ghost"

            className={
              isActive
                ? 'flex-1 min-w-37 bg-app text-white hover:bg-blue-700'
                : 'flex-1 min-w-37  text-gray-700 hover:bg-gray-200'
            }
            onClick={() => onTabChange(tab.id)}
          />
        );
      })}
    </div>
  );
};
