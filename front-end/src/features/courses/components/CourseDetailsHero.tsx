import {
  IconChevronRight,
  IconFlame,
  IconBolt,
  IconCircleCheck,
  IconStarFilled,
  IconUsers,
  IconClock,
  IconLanguage,
} from '@tabler/icons-react';

export const CourseDetailsHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-app py-10 font-inter text-primary antialiased md:py-16">
      {/* radial-glow*/}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-blue/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-10 h-80 w-80 rounded-full bg-blue/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Status Badges */}
        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          {/* Most Popular */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-400">
            <IconFlame size={13} stroke={2.2} />
            <span>Most Popular</span>
          </div>

          {/* Flagship Career Track */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-dark/40 bg-card px-3 py-1 text-xs font-semibold text-highlight">
            <IconBolt size={13} className="text-blue-light" stroke={2.2} />
            <span>Flagship Career Track</span>
          </div>

          {/* Verified Micro-Degree */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-success-dark/30 bg-card px-3 py-1 text-xs font-semibold text-success">
            <IconCircleCheck size={13} stroke={2.2} />
            <span>Verified Micro-Degree</span>
          </div>
        </div>

        {/* Course Title & Description */}
        <div className="mt-6 max-w-6xl space-y-4">
          <h1 className="text-4xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl lg:text-6xl leading-tight text-balance">
            Modern JavaScript to Full-Stack Web Apps
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-secondary sm:text-base">
            Master semantic web architecture, modern responsive CSS layouts,
            modern ESNext asynchronous runtime, and deploy production full-stack
            web applications with cloud sandboxes.
          </p>
        </div>

        {/* Proof Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted sm:text-sm">
          {/* Star Rating */}
          <div className="flex items-center gap-1.5">
            <IconStarFilled size={14} className="text-amber-400" />
            <span className="font-semibold text-primary">4.96</span>
            <span>(4,120 reviews)</span>
          </div>

          <span className="hidden sm:inline text-subtle">•</span>

          {/* Enrolled Developers */}
          <div className="flex items-center gap-1.5">
            <IconUsers size={15} className="text-secondary" />
            <span className="font-medium text-primary">28,450</span>
            <span>enrolled developers</span>
          </div>
          <span className="hidden sm:inline text-subtle">•</span>

          {/* Last Updated */}
          <div className="flex items-center gap-1.5">
            <IconClock size={15} className="text-success" />
            <span>
              Last updated{' '}
              <strong className="font-medium text-primary">October 2024</strong>
            </span>
          </div>
          <span className="hidden sm:inline text-subtle">•</span>

          {/* Language & Captions */}
          <div className="flex items-center gap-1.5">
            <IconLanguage size={15} className="text-secondary" />
            <span className="font-medium text-primary">English</span>
            <span>(Captions: ES, DE, FR)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
