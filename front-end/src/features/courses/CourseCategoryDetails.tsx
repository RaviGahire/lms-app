import { CourseFilterBar } from '../../pages/courses';
import { CategoryHeroBanner } from './components/CategoryHeroBanner';
import { CurriculumLabCards } from './components/CurriculumLabCards';
import { MostDemandedCourses } from './components/MostDemandedCourses';

interface CourseCategoryProps {
  categoryDetails: String;
}

export const CourseCategoryDetails = ({
  categoryDetails,
}: CourseCategoryProps) => {
  return (
    <section aria-label="courses-category-page">
      {/* Category Hero Banner */}
      <CategoryHeroBanner />

      {/* Course Filter Bar */}
      <CourseFilterBar />
      {/* Most Demanded Courses */}
      <MostDemandedCourses />

      {/* Curriculum Cards */}
      <CurriculumLabCards />
    </section>
  );
};
