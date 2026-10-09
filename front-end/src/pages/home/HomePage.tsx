import { Carousels } from '../../shared/components/Carousel';
import { Hero } from './components/Hero';
import { LiveNumberStrip } from './components/LiveNumberStrip';
import { FeaturesSection } from './components/Features';
import { LearnerTypesSection } from './components/LearnerTypes';
import { PricingSection } from '../../shared/components/Price';

export const HomePage = () => {
  return (
    <div aria-label="homepage" className="py-0">
      {/* Hero section */}
      <Hero />

      {/* Instructer Carousel */}
      <Carousels />

      {/* Stats */}
      <div className="text-balance mx-auto flex flex-wrap justify-center items-center gap-3 md:gap-4 xl:gap-8 border-t border-b border-border-subtle py-2 xl:py-4 ">
        {/* Courses Count */}
        <LiveNumberStrip
          count={1200}
          title="MULTI-DISCIPLINE COURSES"
          subTitle="STEM, Creative Arts, Business, & Humanities"
        />
        {/* Active Students */}
        <LiveNumberStrip
          count={850000}
          title="ACTIVE STUDENTS"
          subTitle="Learners, career switchers, and researchers worldwide"
        />
        {/* Satisfation percentage */}
        <LiveNumberStrip
          percent={98}
          title="COURSE SATISFACTION"
          subTitle="Verified mastery evaluations & project outcomes"
        />
        {/* Rating */}
        <LiveNumberStrip
          rating={4.6}
          title="RATING FROM 120K+ REVIEWS"
          subTitle="Recognized by university and industry partners"
        />
      </div>

      {/* Features Section */}
      <FeaturesSection />

      {/* Learner Types Section */}
      <LearnerTypesSection />

      {/* Pricing cards */}
      <PricingSection />
    </div>
  );
};
