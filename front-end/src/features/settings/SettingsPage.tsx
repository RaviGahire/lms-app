import { SettingsNav } from './components/SettingsNav';
import { ProfileBannerCard } from './components/ProfileBannerCard';
import { PersonalInformationCard } from './components/PersonalInformationCard';

import { SaveActionFooter } from './components/SaveActionFooter';

export const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-300 font-sans p-4 md:p-8">
      <div className="max-w-300 mx-auto relative">
        {/* Navigation Tabs */}
        <SettingsNav />

        {/* Main Content Layout Grid */}
        <div className="grid  gap-6">
          {/* Left Column (Main Forms) */}
          <div className="lg:col-span-2">
            <ProfileBannerCard />
            <PersonalInformationCard />
          </div>

          {/* Right Column (Sidebar) */}
          <div className=" space-y-6"></div>
        </div>

        {/* Floating Save Action Footer */}
        <SaveActionFooter />
      </div>
    </div>
  );
};
