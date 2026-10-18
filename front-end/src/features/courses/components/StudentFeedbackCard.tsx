import { IconStarFilled } from '@tabler/icons-react';

interface RatingBreakdown {
  stars: string;
  percentage: number;
  label: string;
}

const RATING_DATA: RatingBreakdown[] = [
  { stars: '5 stars', percentage: 92, label: '92%' },
  { stars: '4 stars', percentage: 6, label: '6%' },
  { stars: '3 stars', percentage: 1.5, label: '1.5%' },
  { stars: '2 stars', percentage: 0.3, label: '0.3%' },
  { stars: '1 star', percentage: 0.2, label: '0.2%' },
];

export const StudentFeedbackCard = () => {
  return (
    <section className="w-full bg-app p-4 font-inter text-primary">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Top Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1.5">
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Student Feedback &amp; Ratings
            </h2>
            <p className="max-w-2xl text-xs text-muted sm:text-sm">
              Verified evaluations from real practitioners who built the capstone projects.
            </p>
          </div>

          {/* Aggregate Rating Score */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <span className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
              4.96
            </span>
            <div className="space-y-1">
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <IconStarFilled key={i} size={16} />
                ))}
              </div>
              <p className="text-[11px] leading-tight text-muted">
                4,120 verified
                <br />
                ratings
              </p>
            </div>
          </div>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 gap-8 rounded-2xl border border-subtle bg-card p-6 sm:p-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Side: Rating Bars */}
          <div className="space-y-3.5 lg:col-span-6">
            {RATING_DATA.map((row) => (
              <div key={row.stars} className="flex items-center gap-4 text-xs">
                {/* Star Label */}
                <span className="w-12 shrink-0 text-muted">{row.stars}</span>

                {/* Progress Bar Track */}
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-surface/70">
                  <div
                    className="h-full rounded-full bg-blue"
                    style={{ width: `${row.percentage}%` }}
                  />
                </div>

                {/* Percentage Text */}
                <span className="w-8 shrink-0 text-right font-medium text-muted">
                  {row.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right Side: Outcome Highlights */}
          <div className="space-y-5 lg:col-span-6 lg:border-l lg:border-subtle/50 lg:pl-10">
            <h3 className="text-xs font-bold uppercase tracking-wider text-success">
              Outcome Highlights
            </h3>

            <div className="space-y-4 text-xs leading-relaxed text-secondary sm:text-sm">
              <p>
                <strong className="font-semibold text-primary">94%</strong> of surveyed graduates reported solving real browser memory leaks within 30 days of completing Module 3.
              </p>

              <p>
                <strong className="font-semibold text-primary">1,240+</strong> students shared their verified SkillForge micro-degree directly onto LinkedIn and GitHub profiles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
