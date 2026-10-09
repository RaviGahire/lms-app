import { CataLogHero } from './components/CataLogHero';
import { CategoryGrid } from './components/CategoryGrid';
import { CourseFilterBar } from './components/CourseFilterBar';
import { CuratedPathways } from './components/CuratedPathways';
import { MasterclassesAndOutcomes } from './components/MasterclassesAndOutcomes';

export const CoursesPage = () => {
  return (
    <section aria-label="course-page">
      <CataLogHero />
      <CourseFilterBar />
      <CategoryGrid />
      <CuratedPathways />
      <MasterclassesAndOutcomes />
    </section>
  );
};
