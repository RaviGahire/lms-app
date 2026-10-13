import { IconArrowRight, IconBuildingBridge2 } from '@tabler/icons-react';
import { Badge } from '../../../shared/components/Badges';
import { Button } from '../../../shared/components/Buttons/Buttons';

export const AboutHero = () => {
  return (
    <section
      aria-label="about-page-hero"
      className="relative w-full overflow-hidden text-left"
    >
      <div className="relative max-w-7xl mx-auto px-6 pt-16">
        {/* Pill Badge */}
        <Badge
          text="About Mastertrack. our mission & origin "
          badgeStyle="max-w-fit text-text-secondary text-sm sm:text-base"
        />

        {/* Heading */}
        <h1 className="mt-8 text-4xl sm:text-6xl md:text-[60px] font-semibold tracking-tight leading-[1.08] text-text-highlight text-balance">
          Accelerating human mastery
          <br />
          through frictionless,
          <br />
          hands-on learning.
        </h1>

        {/* Narrative */}
        <p className="mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-text-secondary">
          MasterTrack was founded on a singular conviction: passive video
          watching fails modern learners...
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            key={'Explore Curriculum'}
            label="Explore Curriculum"
            icon={<IconArrowRight size={18} />}
            iconPosition="right"
            variant="secondary"
          />

          <Button
            key={'Enterprise Solutions'}
            label="Enterprise Solutions"
            icon={<IconBuildingBridge2 size={18} />}
            variant="outline"
          />
        </div>
      </div>
    </section>
  );
};
