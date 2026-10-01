import { IconArrowRight, IconFlask } from '@tabler/icons-react';
import { HeroBadge } from '../../../shared/components/Badges';
import { HeroBottomBadges } from '../../../shared/components/Badges/Badges';
import { Button } from '../../../shared/components/Buttons/Buttons';
import { useNavigate } from 'react-router-dom';

export type BottomBadgeItem = {
  title: string;
  path: string;
};

export const Hero = () => {
  const badgeItems: BottomBadgeItem[] = [
    { title: 'Technology & AI', path: '/' },
    { title: 'Design & Creative', path: '/' },
    { title: 'Business & Finance', path: '/' },
    { title: 'Science & Engineering', path: '' },
    { title: 'Writing & Languages', path: '/' },
  ];

  let navigate = useNavigate();

  return (
    <section
      aria-label="hero-section"
      className="relative w-full text-text-highlight"
    >
      <div className="mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-7xl flex-col items-center justify-between px-4 pt-10 pb-8 sm:px-6 lg:px-8">
        <div className="flex flex-1 flex-col items-center justify-center text-center max-w-4xl w-full">
          {/* Top Badge */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <HeroBadge text="Universal Learning Platform" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl leading-[1.1] text-text-highlight">
            Master Any Subject. <br />
            Accelerate Your Potential.
          </h1>

          {/* Subtitle Description */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-text-subtle/80 leading-relaxed font-normal">
            From computer science and digital design to business strategy, data
            analytics, and sciences — experience friction-free, hands-on
            learning built for every curious mind.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* Explore Button */}
            <Button
              id="explore-btn"
              label="Explore All Courses"
              size="md"
              variant="primary"
              icon={<IconArrowRight size={20} />}
              iconPosition="right"
              onClick={() => {
                navigate('/courses');
              }}
              className="group:hover:transition-transform duration-150 ease-in-out group-hover:translate-x-1"
            />

            {/* Start Free Button */}
            <Button
              id="start-free-btn"
              label="Try Free demo"
              icon={<IconFlask size={20} />}
              size="md"
              variant="secondary"
            />
          </div>
        </div>

        {/* Bottom Badges */}
        <div className="mt-12 w-full hidden md:flex justify-center pb-2 sm:pb-4">
          <HeroBottomBadges badges={badgeItems} />
        </div>
      </div>
    </section>
  );
};
