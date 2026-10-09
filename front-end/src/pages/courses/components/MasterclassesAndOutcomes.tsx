import React from 'react';
import {
  IconClock,
  IconCalendarEvent,
  IconChartBar,
} from '@tabler/icons-react';

interface MasterclassCard {
  id: string;
  dateTime: string;
  badgeStyle: {
    bg: string;
    text: string;
    border: string;
  };
  duration: string;
  title: string;
  description: string;
  percentageFilled: number;
  seatsRemaining: number;
  progressBarColor: string;
}

const MASTERCLASSES: MasterclassCard[] = [
  {
    id: 'websockets-rust',
    dateTime: 'OCT 29 • 5:00 PM UTC',
    badgeStyle: {
      bg: 'bg-blue-950/50',
      text: 'text-blue-400',
      border: 'border-blue-800/40',
    },
    duration: '60 Min',
    title: 'Live Architecture Teardown: Handling 1M WebSockets with Rust',
    description:
      'Watch Alexei Volkov refactor an async epoll loop live and debug socket buffer starvation in real time.',
    percentageFilled: 88,
    seatsRemaining: 12,
    progressBarColor: 'bg-emerald-400',
  },
  {
    id: 'figma-to-code',
    dateTime: 'NOV 02 • 7:00 PM UTC',
    badgeStyle: {
      bg: 'bg-indigo-950/50',
      text: 'text-indigo-400',
      border: 'border-indigo-800/40',
    },
    duration: '90 Min',
    title: 'Production Figma-to-Code: Automated Zero-Drift Pipelines',
    description:
      'Camilla Sorensen demonstrates syncing Figma variables directly to Tailwind v4 configurations via GitHub Actions.',
    percentageFilled: 72,
    seatsRemaining: 28,
    progressBarColor: 'bg-indigo-400',
  },
  {
    id: 'vector-benchmarks',
    dateTime: 'NOV 05 • 4:00 PM UTC',
    badgeStyle: {
      bg: 'bg-emerald-950/50',
      text: 'text-emerald-400',
      border: 'border-emerald-800/40',
    },
    duration: '75 Min',
    title: 'LLM Memory Benchmarking: pgvector vs Milvus vs Qdrant',
    description:
      'Live stress test indexing 5,000,000 vector embeddings under simultaneous concurrent query loads.',
    percentageFilled: 95,
    seatsRemaining: 5,
    progressBarColor: 'bg-rose-400',
  },
];

const OUTCOMES_METRICS = [
  {
    stat: '+$42,000',
    label: 'Avg. Compensation Uplift',
    subtext: 'Verified across 2,400+ graduates',
    color: 'text-white',
  },
  {
    stat: '480+',
    label: 'Direct Tech Hiring Partners',
    subtext: 'Including OpenAI, Stripe & AWS',
    color: 'text-white',
  },
  {
    stat: '100%',
    label: 'Reproducible Code Proof',
    subtext: 'Linked to your GitHub profile',
    color: 'text-emerald-400',
  },
];

export const MasterclassesAndOutcomes: React.FC = () => {
  return (
    <section className="w-full bg-[#060D18] py-16 px-4 sm:px-8 lg:px-12 text-slate-100 font-sans">
      <div className="mx-auto max-w-7xl space-y-12">
        {/* ================= SECTION 1: MASTERCLASSES ================= */}
        <div>
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400">
                <IconClock size={15} stroke={2.2} />
                <span>Live Interactive Cohorts</span>
              </div>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] leading-tight">
                Upcoming Masterclasses &amp; Mentor Sprints
              </h2>
              <p className="mt-2.5 max-w-2xl text-xs sm:text-sm text-slate-400 leading-relaxed">
                Live architectural teardowns, pair programming, and synchronous code reviews with senior principal engineers.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-medium text-slate-300 self-start md:self-auto">
              <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
              <span>3 Cohorts Launching This Week</span>
            </div>
          </div>

          {/* Masterclasses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MASTERCLASSES.map((cohort) => (
              <div
                key={cohort.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-[#0B1220]/80 p-6 backdrop-blur-sm transition-all duration-200 hover:border-slate-700 hover:bg-[#0E1728] hover:shadow-xl"
              >
                <div>
                  {/* Card Header Pills */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-lg border px-2.5 py-1 text-xs font-semibold tracking-tight ${cohort.badgeStyle.bg} ${cohort.badgeStyle.text} ${cohort.badgeStyle.border}`}
                    >
                      {cohort.dateTime}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {cohort.duration}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-5 text-lg font-bold leading-snug text-white">
                    {cohort.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-400 line-clamp-3">
                    {cohort.description}
                  </p>
                </div>

                {/* Progress & RSVP Action */}
                <div className="mt-6 pt-4 border-t border-slate-800/50">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-medium">
                    <span>Seats Filled: {cohort.percentageFilled}%</span>
                    <span className={cohort.seatsRemaining <= 5 ? 'text-rose-400 font-semibold' : 'text-emerald-400'}>
                      {cohort.seatsRemaining} Remaining
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-1.5 w-full rounded-full bg-slate-800/90 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${cohort.progressBarColor}`}
                      style={{ width: `${cohort.percentageFilled}%` }}
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="button"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-800 bg-[#141F32]/70 py-2.5 text-xs font-semibold text-slate-200 transition-all duration-150 hover:bg-[#1A2840] hover:text-white hover:border-slate-700 active:scale-[0.98]"
                  >
                    <IconCalendarEvent size={15} stroke={2} />
                    <span>RSVP &amp; Add to Calendar</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 2: ALUMNI OUTCOMES ================= */}
        <div className="rounded-2xl border border-slate-800/80 bg-[#0B1220]/70 p-6 sm:p-10 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            {/* Outcomes Copy */}
            <div className="max-w-xl">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <IconChartBar size={14} stroke={2.2} />
                <span>Measurable Career Impact</span>
              </div>
              <h3 className="mt-2.5 text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                Alumni Outcomes &amp; Technical Proof
              </h3>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-400">
                SkillForge micro-degrees verify hands-on commits, not multiple-choice tests. Employers verify your sandbox commits directly via cryptographically signed hashes.
              </p>

              {/* Placement Rate Badge */}
              <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold">
                <span className="text-slate-300">Audited Placement Rate:</span>
                <span className="rounded-md bg-emerald-950/70 border border-emerald-800/40 px-2.5 py-1 text-emerald-400">
                  92.4% within 120 Days
                </span>
              </div>
            </div>

            {/* Metrics Triple Box */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full lg:w-auto">
              {OUTCOMES_METRICS.map((metric, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-center rounded-xl border border-slate-800/80 bg-[#070D18]/90 px-6 py-6 min-w-[170px] text-center"
                >
                  <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${metric.color}`}>
                    {metric.stat}
                  </div>
                  <div className="mt-2 text-xs font-semibold text-slate-200 leading-tight">
                    {metric.label}
                  </div>
                  <div className="mt-1 text-[11px] text-slate-400 leading-tight">
                    {metric.subtext}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
