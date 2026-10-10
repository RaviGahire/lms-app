import { IconGlobe, IconLabel, IconStar } from '@tabler/icons-react';
import { Badge } from '../../../shared/components/Badges';

export const CataLogHero = () => {
  return (
    <section
      aria-label="courses-hero"
      className="relative w-full overflow-hidden py-8 xl:py-16 px-6 sm:px-8 lg:px-10 text-text-highlight"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 ">
          {/* Left badge */}
          <Badge
            text="1,200+ Interactive Programs"
            badgeStyle="bg-bg-surface"
          />
        </div>

        {/* Content Layout */}
        <div className="mt-8 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          {/* Main Title & Subtitle */}
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl lg:text-6xl xl:leading-[1.1] text-balance xl:text-pretty">
              Explore high-impact skills <br />
              for{' '} modern learners.
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg xl:leading-relaxed text-text-muted font-normal">
              From neural engineering and distributed systems to brand design
              and quantitative finance. Learn with live sandboxes, interactive
              3D simulations, and industry mentors.
            </p>
          </div>

          {/* Right Stat Pills */}
          <div className="flex flex-col items-start lg:items-end gap-2.5 w-full lg:w-auto">
            {/* Pill 1 */}
            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-[#141C2E]/90 px-4 py-2.5 text-xs sm:text-sm shadow-md backdrop-blur-sm">
              <span className="text-base leading-none">
                <IconLabel size={14} />
              </span>
              <span className="font-semibold text-emerald-400">48</span>
              <span className="text-slate-300">New Labs Added This Week</span>
            </div>

            {/* Pill 2 */}
            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-[#141C2E]/90 px-4 py-2.5 text-xs sm:text-sm shadow-md backdrop-blur-sm">
              <span className="text-amber-400 text-sm">
                <IconStar size={14} />
              </span>
              <span className="font-semibold text-white">4.9 / 5</span>
              <span className="text-slate-400">Across 180k+ Ratings</span>
            </div>

            {/* Pill 3 */}
            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-[#141C2E]/90 px-4 py-2.5 text-xs sm:text-sm shadow-md backdrop-blur-sm">
              <span className="text-base leading-none">
                <IconGlobe size={14} />
              </span>
              <span className="font-semibold text-slate-200">Global</span>
              <span className="text-slate-400">
                University &amp; Industry Credit
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
