import React from "react";

interface TrustCardItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
}

const trustCards: TrustCardItem[] = [
  {
    id: "curricular",
    title: "Curricular Equivalency",
    description:
      "Accredited by Global Tech Higher-Ed Consortium for transferable degree units.",
    badge: "ECTS & US CREDITS COMPLIANT",
    iconBg: "bg-[#17253a]",
    iconColor: "text-[#38bdf8]",
    icon: (
      // Graduation cap icon
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
  },
  {
    id: "soc2",
    title: "Enterprise SOC 2 Type II",
    description:
      "Full compliance, isolated multi-tenant VPC sandboxes, and zero data leakage.",
    badge: "ISO 27001 · SOC 2 TYPE II",
    iconBg: "bg-[#122e2c]",
    iconColor: "text-[#10b981]",
    icon: (
      // Shield check icon
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    id: "hiring",
    title: "Hiring Network Direct Pipeline",
    description:
      "Direct interview pathways for top 5% capstone finishers with partner tech brands.",
    badge: "DIRECT TALENT ACCESS",
    iconBg: "bg-[#221f3a]",
    iconColor: "text-[#a78bfa]",
    icon: (
      // Connection / nodes icon
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
      </svg>
    ),
  },
  {
    id: "scholarship",
    title: "Open Scholarship Fund",
    description:
      "Supporting career-switchers from underrepresented backgrounds worldwide.",
    badge: "ANNUAL COMMITMENT",
    iconBg: "bg-[#182638]",
    iconColor: "text-[#38bdf8]",
    icon: (
      // Hand holding heart icon
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
];

export const InstitutionalTrust = ()=> {
  return (
    <section className="min-h-screen bg-[#070b14] py-16 px-6 sm:px-8 lg:px-12 flex flex-col justify-center text-white">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Heading, Context & Stats */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold tracking-widest text-success-dark uppercase block mb-4">
              Institutional Trust
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold tracking-tight leading-[1.15] mb-6">
              Endorsed by engineering leaders and accredited institutions worldwide
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-10 max-w-xl">
              MasterTrack certifications are recognized as gold-standard technical validations by top technology employers, university consortia, and open-source foundations. Our assessment frameworks pass rigorous third-party pedagogical audits.
            </p>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 gap-4 mb-8 max-w-lg">
              <div className="bg-[#0e1626] border border-slate-800/80 rounded-xl p-5">
                <span className="text-3xl font-extrabold text-white tracking-tight block mb-1">
                  480+
                </span>
                <span className="text-xs font-medium text-slate-400">
                  Enterprise Hiring Partners
                </span>
              </div>
              <div className="bg-[#0e1626] border border-slate-800/80 rounded-xl p-5">
                <span className="text-3xl font-extrabold text-white tracking-tight block mb-1">
                  $2.4M
                </span>
                <span className="text-xs font-medium text-slate-400">
                  Subsidized Tuition Granted
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Checked Notice */}
          <div className="flex items-center gap-2.5 text-xs text-[#8f9eb3]">
            <svg className="w-4 h-4 text-[#10b981] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.5 12 2.5 2.5 5-5" />
            </svg>
            <span>Open Access & Diversity in Tech Scholarship active in 42 countries</span>
          </div>
        </div>

        {/* Right Column: 2x2 Feature Cards Grid */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {trustCards.map((card) => (
            <div
              key={card.id}
              className="bg-[#101726] border border-slate-800/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all duration-200"
            >
              <div>
                {/* Icon Box */}
                <div className={`w-10 h-10 rounded-lg ${card.iconBg} ${card.iconColor} flex items-center justify-center mb-6`}>
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white tracking-tight mb-2">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#8f9eb3]">
                  {card.description}
                </p>
              </div>

              {/* Bottom Tag / Badge */}
              <div className="pt-8">
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  {card.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}