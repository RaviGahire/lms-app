import { StudioHeader } from './components/StudioHeader';
import { StatsOverview } from './components/StatsOverview';
import { ManageCourses } from './components/ManageCourses';

export const CourseManagementPage = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19]  p-4 md:p-8 pb-16">
      <div className="max-w-350 mx-auto">
        <StudioHeader />
        <StatsOverview />
        <ManageCourses />
      </div>
    </div>
  );
};
