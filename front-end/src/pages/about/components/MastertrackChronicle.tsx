import React from "react";

interface TimelineMilestone {
  period: string;
  tag: string;
  description: string;
  meta: string;
  isCurrent?: boolean;
  badge?: string;
}

const milestones: TimelineMilestone[] = [
  {
    period: "2021",
    tag: "GENESIS",
    description:
      "Founded with 12 foundational interactive engineering labs focused on microservices and distributed storage.",
    meta: "12 LABS · ALPHA",
  },
  {
    period: "2022",
    tag: "SCALE & PEER NETWORKS",
    description:
      "Scaled to 100k+ global students; introduced live peer review and dual-mentor tracks for advanced cohorts.",
    meta: "100K LEARNERS · PEER MESH",
  },
  {
    period: "2023",
    tag: "ENTERPRISE & CREDITS",
    description:
      "Launched enterprise team sandboxes and accredited university partnership transfer credits across 14 institutions.",
    meta: "ACCREDITATION · SOC2 TYPE II",
  },
  {
    period: "2024",
    tag: "AI DIAGNOSTICS",
    description:
      "Deployed real-time code diagnostics and expanded across 8 core multi-disciplinary domains including ML Ops.",
    meta: "8 DOMAINS · AI RUNTIME",
  },
  {
    period: "Present",
    tag: "CONTINUOUS MASTERY",
    badge: "NOW",
    description:
      "The premier learning operating system for continuous mastery, trusted by Fortune 500 engineering orgs.",
    meta: "850K+ STUDENTS",
    isCurrent: true,
  },
];

export const MastertrackChronicle = () => {
  return (
    <section className="min-h-screen bg-[#070b14] py-16 px-6 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <span className="text-xs font-bold tracking-widest text-success-dark uppercase block mb-3">
            The Mastertrack Chronicle
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-tight font-semibold text-text-secondary tracking-tight mb-4">
            The evolution of a new learning standard
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed">
            From a handful of custom containerized labs to a distributed global knowledge network.
          </p>
        </div>

        {/* Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 items-stretch text-balance">
          {milestones.map((item) => (
            <div
              key={item.period}
              className={`relative rounded-2xl p-6  flex flex-col justify-between transition-all duration-300 ${
                item.isCurrent
                  ? "bg-[#111a2e]/90 border border-slate-700/80 shadow-lg shadow-black/40 hover:border-emerald-500/40"
                  : "bg-[#0d1527]/90 border border-slate-800/70 hover:border-slate-700/80"
              }`}
            >
              <div>
                {/* Badge or Year Header */}
                {item.isCurrent ? (
                  <div className="space-y-4 mb-4">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wider bg-[#0d382c] text-success uppercase">
                      {item.badge}
                    </span>
                    <h3 className="text-2xl lg:text-[26px] font-extrabold text-white tracking-tight">
                      {item.period}
                    </h3>
                  </div>
                ) : (
                  <div className="mb-4">
                    <h3 className="text-2xl lg:text-[28px] font-extrabold text-white tracking-tight">
                      {item.period}
                    </h3>
                  </div>
                )}

                {/* Subtitle / Tag */}
                <span className="text-[11px] font-bold tracking-wider text-text-secondary uppercase block mb-4 leading-snug">
                  {item.tag}
                </span>

                {/* Description Body */}
                <p className="text-[13px] leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>

              {/* Bottom Metadata */}
              <div className="pt-8 mt-6">
                <span
                  className={`text-[10px] sm:text-[11px] font-bold tracking-wider uppercase block ${
                    item.isCurrent ? "text-success" : "text-slate-500"
                  }`}
                >
                  {item.meta}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}