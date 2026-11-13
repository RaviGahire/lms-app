import { CataLogHero } from './components/CataLogHero';
import { CategoryGrid } from './components/CategoryGrid';
import { CuratedPathways } from './components/CuratedPathways';
import { MasterclassesAndOutcomes } from './components/MasterclassesAndOutcomes';

export const CoursesPage = () => {
  return (
    <section aria-label="courses-page">
      <CataLogHero />
      <CategoryGrid />
      <CuratedPathways />
      <MasterclassesAndOutcomes />
    </section>
  );
};
