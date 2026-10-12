import React from "react";

interface PillarItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  footerText: string;
  highlighted?: boolean;
  icon: React.ReactNode;
}

const pillars: PillarItem[] = [
  {
    id: "01",
    tag: "PILLAR 01",
    title: "Active Frictionless Execution",
    description:
      "Direct in-browser virtual sandboxes and interactive tools, eliminating dependency bottlenecks and configuration fatigue. Write, test, and deploy production configurations within seconds.",
    footerText: "Zero local install required",
    highlighted: false,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m6 10 3 3-3 3M12 16h4" />
      </svg>
    ),
  },
  {
    id: "02",
    tag: "PILLAR 02",
    title: "Real-World Cohort Mentorship",
    description:
      "Guided directly by vetted industry leads from top technology and design organizations, giving learners real-time feedback on capstone work and direct review of architecture proposals.",
    footerText: "1:8 Mentor-to-learner ratio",
    highlighted: true,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    id: "03",
    tag: "PILLAR 03",
    title: "Verifiable Proof of Work",
    description:
      "Micro-credentials that carry cryptographically signed institutional validity, backed by verifiable capstone projects and live test suites rather than multiple-choice quizzes.",
    footerText: "Cryptographically verifiable badge",
    highlighted: false,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

export const LearningPhilosophy = () => {
  return (
    <section className="min-h-screen  py-16 px-6 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-success-dark uppercase block mb-3">
            Pedagogical Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-secondary tracking-tight">
            Built for how engineers actually learn
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 items-stretch">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-bg-secondary border border-border-subtle rounded-2xl p-4 xl:p-8 flex flex-col justify-between transition-all duration-200 hover:border-border"
            >
              <div>
                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center mb-8 border ${
                    pillar.highlighted
                      ? "bg-[#132832] border-teal-500/20 text-[#10b981]"
                      : "bg-[#172136] border-slate-700/50 text-slate-300"
                  }`}
                >
                  {pillar.icon}
                </div>

                {/* Pillar Tag */}
                <span
                  className={`text-xs font-bold uppercase tracking-wider block mb-2 ${
                    pillar.highlighted ? "text-[#10b981]" : "text-slate-400"
                  }`}
                >
                  {pillar.tag}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight leading-snug">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-text-muted">
                  {pillar.description}
                </p>
              </div>

              {/* Card Footer Check */}
              <div
                className={`pt-8 mt-6 flex items-center gap-2.5 text-xs font-medium ${
                  pillar.highlighted ? "text-[#10b981]" : "text-slate-400"
                }`}
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.5 12 2.5 2.5 5-5" />
                </svg>
                <span>{pillar.footerText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}