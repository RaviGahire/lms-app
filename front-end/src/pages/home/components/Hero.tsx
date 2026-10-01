import { Icon12Hours } from '@tabler/icons-react';
import { HeroBadge } from '../../../shared/components/Badges';
import { HeroBottomBadges } from '../../../shared/components/Badges/Badges';
import { Button } from '../../../shared/components/Buttons/Buttons';

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
  return (
    <section
      aria-label="hero-section"
      className="relative w-full bg-bg-primary text-text-highlight"
    >
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        {/* Top Badge */}
        <div className="flex justify-center">
          <HeroBadge text="Universal Learning Platform" />
        </div>

        {/* Main Heading */}
        <div className="mt-6 flex justify-center">
          <h1 className="max-w-4xl text-center text-3xl font-extrabold uppercase tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-tight lg:leading-[1.15]">
            Master Any Subject. <br /> With <br /> Master Track.
          </h1>
        </div>

        {/* btns */}
        <div className="flex justify-between gap-4">
          {/* Explore Button */}
          <Button
          id='explore btn'
            label="Explore All Courses"
            size="md"
            variant="primary"
            icon={<Icon12Hours/>}
            iconPosition="right"
            iconSize={18}
            onClick={() => {
              alert('hello');
            }}
          />

          <Button label="Try Free" size="md" variant="outline" />
        </div>

        {/* Bottom Badges */}
        <div className="mt-8 sm:mt-10 flex w-full justify-center">
          <HeroBottomBadges badges={badgeItems} />
        </div>
      </div>
    </section>
  );
};
