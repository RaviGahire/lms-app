import { IconAward, IconStarFilled, IconArrowUpRight } from '@tabler/icons-react';

export const CategoryHeroBanner = ()=> {

  return (
    <div className="w-full p-6">
            <div className="mx-auto flex max-w-7xl flex-col gap-10 rounded-2xl border border-subtle bg-card p-8 lg:flex-row lg:items-center lg:justify-between lg:p-12">
        {/* Information & Tags */}
        <div className="flex-1 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-subtle  bg-surface/40 px-3.5 py-1 text-xs font-medium text-muted">
            <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_8px_var(--color-success)]" />
            Curated Career Track • 2025 Standard
          </div>

          {/* Title & Description */}
          <div className="space-y-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              IT &amp; Software Architecture
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Master industrial-grade engineering from semantic HTML5 and modern CSS
              foundations to asynchronous JavaScript, TypeScript enterprise stacks, and high-scale
              microservices.
            </p>
          </div>
       
        </div>

        {/*  Metric Cards */}
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:min-w-85">
          {/* Top Metric Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Courses Available */}
            <div className="rounded-xl border border-subtle bg-app/50 p-5 backdrop-blur-sm">
              <span className="text-xs font-medium text-muted">Courses Available</span>
              <div className="mt-2 text-2xl font-bold text-primary sm:text-3xl">
                340+
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs font-medium text-success">
                <IconArrowUpRight size={14} stroke={2.5} />
                <span>18 added this month</span>
              </div>
            </div>

            {/* Active Students */}
            <div className="rounded-xl border border-subtle bg-app/50 p-5 backdrop-blur-sm">
              <span className="text-xs font-medium text-muted">Active Students</span>
              <div className="mt-2 text-2xl font-bold text-primary sm:text-3xl">
                48,210
              </div>
              <span className="mt-2 block text-xs font-medium text-muted">
                In sandbox labs
              </span>
            </div>
          </div>

          {/* Track Rating Card */}
          <div className="flex items-center justify-between rounded-xl border border-subtle bg-app/50 p-5 backdrop-blur-sm">
            <div>
              <span className="text-xs font-medium text-muted">Track Rating</span>
              <div className="mt-2 flex items-center gap-1.5 text-lg font-bold text-primary">
                <IconStarFilled size={16} className="text-amber-400" />
                <span>4.94</span>
                <span className="text-xs font-normal text-muted">(12.4k reviews)</span>
              </div>
            </div>
            {/* Award Icon */}
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-subtle bg-surface/60 text-highlight">
              <IconAward size={22} stroke={1.75} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}