import { IconArrowRight } from '@tabler/icons-react';
import { Badge } from '../../../shared/components/Badges';
import { Button } from '../../../shared/components/Buttons/Buttons';

export const CTASection = () => {
  return (
    <section className="bg-[#070b14] py-16 px-6 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        {/* glow & border */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-[#101726] px-8 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20 shadow-2xl">
          {/* Subtle Ambient Radial Glows */}
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -top-24 right-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

          {/* Content Area */}
          <div className="relative z-10 max-w-2xl">
            {/* Cohort Status Pill */}
            <Badge
              text=" Enrollment Open For Next Cohort[cite: 5]"
              badgeStyle="w-fit text-white text-sm mb-2"
            />

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-5 leading-[1.15][cite: 5]">
              Ready to start your
              <br />
              learning journey?[cite: 5]
            </h2>

            {/* Description Subtext */}
            <p className="text-sm sm:text-base leading-relaxed text-[#8f9eb3] mb-8 max-w-xl[cite: 5]">
              Join over 850,000 learners mastering skills that shape modern
              industry. Experience zero-setup sandboxes, live code reviews, and
              industry-standard tracks.[cite: 5]
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary Blue Button */}
              <Button
                label="Explore All Courses"
                icon={<IconArrowRight size={18} />}
                iconPosition="right"
                variant="secondary"
              />

              {/* Secondary Dark Pill Button */}
              <Button label="Join as a Mentor" variant="outline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
