import { StudioHeader } from './components/StudioHeader';
import { CreationTabs } from './components/CreationTabs';
import { BasicDetailsStep } from './components/BasicDetailsStep';
import { CurriculumStep } from './components/CurriculumStep';
import { MediaAssetsStep } from './components/MediaAssetsStep';
import { PricingStep } from './components/PricingStep';
import { TabType } from './Types';
import { useState } from 'react';

export const CourseCreationPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>('basic-details');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'basic-details':
        return <BasicDetailsStep />;
      case 'curriculum':
        return <CurriculumStep />;
      case 'media-assets':
        return <MediaAssetsStep />;
      case 'pricing':
        return <PricingStep />;
      default:
        return <BasicDetailsStep />;
    }
  };

  return (
    <div className="min-h-screen  p-4 md:p-8 pb-20">
      <StudioHeader />
      <CreationTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="space-y-6">{renderActiveComponent()}</div>
    </div>
  );
};
