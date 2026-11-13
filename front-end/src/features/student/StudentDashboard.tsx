import { DashboardHeader } from './components/DashboardHeader';
import { UserProfileCard } from './components/UserProfileCard';
import { MetricsGrid } from './components/MetricsGrid';
import { ContinueLearning } from './components/ContinueLearning';

export const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] font-sans p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader />

        {/* Profile & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <div className="col-span-1 lg:col-span-3">
            <UserProfileCard />
          </div>
          <div className="col-span-1 lg:col-span-9">
            <MetricsGrid />
          </div>
        </div>

        {/*Bottom section */}
        <div>
          <ContinueLearning />
        </div>
      </div>
    </div>
  );
};
