import React from "react";

interface DeskCard {
  id: string;
  badge: {
    text: string;
    dotColor?: string;
    variant?: "default" | "active";
  };
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
  slaLabel: string;
  slaValue: string;
  email: string;
  emailHighlight?: boolean;
  linkText: string;
  linkHref: string;
  statusText: string;
  statusDotColor?: string;
}

const deskCards: DeskCard[] = [
  {
    id: "enterprise",
    badge: {
      text: "SOC 2 Type II",
      dotColor: "bg-slate-400",
      variant: "default",
    },
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    iconBg: "bg-[#182338]",
    iconColor: "text-slate-300",
    title: "Enterprise & Teams",
    description:
      "Tailored high-density curriculum, cohort analytics, SSO integration, dedicated sandbox VPCs, and custom billing for 10 to 10,000+ engineers.",
    slaLabel: "PRIORITY SLA",
    slaValue: "< 15 min response",
    email: "enterprise@mastertrack.io",
    linkText: "Explore Enterprise Tier",
    linkHref: "#enterprise",
    statusText: "99.9% Uptime",
    statusDotColor: "bg-[#10b981]",
  },
  {
    id: "technical",
    badge: {
      text: "LIVE DESK",
      dotColor: "bg-[#10b981]",
      variant: "active",
    },
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m6 10 3 3-3 3M12 16h4" />
      </svg>
    ),
    iconBg: "bg-[#132d29]",
    iconColor: "text-[#10b981]",
    title: "Technical & Student Desk",
    description:
      "Lab runner debugging, billing adjustments, sandbox container spin-up latencies, terminal resets, or verified certificates of completion.",
    slaLabel: "LIVE RESPONSE",
    slaValue: "~45 min median",
    email: "support@mastertrack.io",
    emailHighlight: true,
    linkText: "Open Live Help Desk",
    linkHref: "#support",
    statusText: "Active 24/7/365",
    statusDotColor: "bg-[#10b981]",
  },
  {
    id: "mentors",
    badge: {
      text: "REV SHARE 70%",
      dotColor: "bg-slate-400",
      variant: "default",
    },
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
    iconBg: "bg-[#1c223a]",
    iconColor: "text-[#818cf8]",
    title: "Mentors & Curriculum",
    description:
      "Lead high-impact cohorts, author production-grade systems tracks, or integrate higher education curricula via university LTI 1.3 sync.",
    slaLabel: "COHORT REVIEW",
    slaValue: "< 48h turnaround",
    email: "partners@mastertrack.io",
    linkText: "Apply as Mentor",
    linkHref: "#mentors",
    statusText: "Rolling Review",
    statusDotColor: "bg-slate-300",
  },
];

export const ContactDeskCard =() =>{
  return (
    <section className="bg-[#070b14]  px-6  flex flex-col justify-center font-sans antialiased text-white selection:bg-emerald-500 selection:text-white">
      <div className="max-w-7xl mx-auto w-full">
        {/* 3 Cards Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {deskCards.map((card) => (
            <div
              key={card.id}
              className="bg-[#101726] border border-slate-800/80 rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:border-slate-700 shadow-xl shadow-black/30"
            >
              <div>
                {/* Header: Icon & Top-Right Pill Badge */}
                <div className="flex items-center justify-between mb-8">
                  <div
                    className={`w-11 h-11 rounded-xl ${card.iconBg} ${card.iconColor} border border-slate-700/50 flex items-center justify-center`}
                  >
                    {card.icon}
                  </div>

                  {/* Top-Right Badge */}
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase border ${
                      card.badge.variant === "active"
                        ? "bg-[#112d26] border-[#10b981]/30 text-[#10b981]"
                        : "bg-[#151d2e] border-slate-700/60 text-slate-300"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        card.badge.dotColor || "bg-slate-400"
                      }`}
                    />
                    <span>{card.badge.text}</span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] sm:text-sm leading-relaxed text-[#8f9eb3] mb-8 min-h-18">
                  {card.description}
                </p>

                {/* Middle SLA & Direct Mailbox Box */}
                <div className="rounded-xl bg-[#0b1324] border border-slate-800/90 p-4 mb-8">
                  {/* SLA Header Row */}
                  <div className="flex items-center justify-between text-[11px] font-bold tracking-wider uppercase mb-2">
                    <span className="text-slate-500">{card.slaLabel}</span>
                    <span className="text-slate-300 font-mono font-medium lowercase">
                      {card.slaValue}
                    </span>
                  </div>

                  {/* Mailbox Label */}
                  <div className="text-[10px] font-bold tracking-wider uppercase text-slate-500 mb-1">
                    DIRECT MAILBOX
                  </div>

                  {/* Mailbox Link */}
                  <a
                    href={`mailto:${card.email}`}
                    className={`inline-flex items-center gap-1.5 text-sm font-mono font-medium transition-opacity hover:opacity-80 ${
                      card.emailHighlight ? "text-[#10b981]" : "text-slate-100"
                    }`}
                  >
                    <span>{card.email}</span>
                    <span className="text-xs">↗</span>
                  </a>
                </div>
              </div>

              {/* Bottom Footer Actions */}
              <div className="pt-2 flex items-center justify-between text-xs font-semibold">
                {/* Action Link */}
                <a
                  href={card.linkHref}
                  className="inline-flex items-center gap-1 text-slate-200 hover:text-white transition-colors group"
                >
                  <span>{card.linkText}</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </a>

                {/* Right Status */}
                <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      card.statusDotColor || "bg-slate-400"
                    }`}
                  />
                  <span>{card.statusText}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}