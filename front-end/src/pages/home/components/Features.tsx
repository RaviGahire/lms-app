import { ReactNode } from "react";
import {
  IconFlask,
  IconBrain,
  IconChartLine,
  IconCheck,
  IconCertificate,
  IconBriefcase,
} from "@tabler/icons-react";
import { Badge } from "../../../shared/components/Badges";

export interface FeatureCardItem {
  id: string;
  icon: ReactNode;
  iconContainerClass: string;
  title: string;
  subTitle: string;
  footerLeft: string;
  footerRightText: string;
  isInteractiveBadge?: boolean;
  isHighlightText?: boolean;
}

export const cardData: FeatureCardItem[] = [
  {
    id: "card-1",
    icon: <IconFlask size={20} stroke={1.8} />,
    iconContainerClass: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    title: "Active Hands-On Learning",
    subTitle:
      "Interactive virtual labs, Figma design sandboxes, financial modeling spreadsheets, and live coding playgrounds. Build real work instead of taking notes.",
    footerLeft: "Simulations & Playgrounds",
    footerRightText: "Fully Interactive",
    isInteractiveBadge: true,
  },
  {
    id: "card-2",
    icon: <IconBrain size={20} stroke={1.8} />,
    iconContainerClass: "bg-white/5 border-white/10 text-slate-300",
    title: "Personalized Adaptive Paths",
    subTitle:
      "AI-guided curricula intelligently adjust pacing, prerequisites, and practice drills to your individual strengths, goals, and academic background.",
    footerLeft: "Dynamic Pacing Engine",
    footerRightText: "Custom Tailored",
  },
  {
    id: "card-3",
    icon: <IconChartLine size={20} stroke={1.8} />,
    iconContainerClass: "bg-white/5 border-white/10 text-slate-300",
    title: "Real-Time Mastery & Analytics",
    subTitle:
      "Cognitive growth indexes, retention heatmaps, and micro-credential checkpoints prove conceptual fluency to top universities, instructors, and employers.",
    footerLeft: "Retention Index: 96.8%",
    footerRightText: "+22% Faster Recall",
    isHighlightText: true,
  },
];

export const FeaturesSection = () => {

  return (
    <section className="relative w-full text-white py-8  xl:py-16 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Badge */}
        <Badge
          text="Complete Learning Operating System"
          badgeStyle="uppercase text-[12px]"
        />

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-pretty text-center">
          Active Hands-On Learning <br />
          Across Every Subject
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-center text-sm md:text-[18px] text-slate-400 max-w-2xl xl:leading-7 tracking-[0.09px] text-pretty">
          Passive lectures lead to 80% knowledge drop-off. SkillForge replaces
          sterile video watching with interactive simulations, live problem
          sets, and studio labs.
        </p>

        {/* Card Grid  */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col justify-between rounded-2xl border-2 border-border-subtle bg-bg-surface/50 p-4 transition-colors hover:border-white/15"
            >
              <div className="bg-bg-primary p-3 rounded-md">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 ${card.iconContainerClass}`}
                >
                  {card.icon}
                </div>
                <h3 className="text-[20px] font-bold text-text-highlight tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 sm:text-[16px] text-text-muted">
                  {card.subTitle}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
                <span className="text-text-muted">{card.footerLeft}</span>

                {card.isInteractiveBadge ? (
                  <span className="inline-flex items-center gap-1.5 text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {card.footerRightText}
                  </span>
                ) : card.isHighlightText ? (
                  <span className="text-emerald-400 font-semibold">
                    {card.footerRightText}
                  </span>
                ) : (
                  <span className="text-slate-400">{card.footerRightText}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Wide Card: Accreditation & Certificate */}
        <div className="mt-6 w-full rounded-2xl border border-white/[0.08] bg-[#0d111a] p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Text Info */}
          <div className="w-full lg:max-w-md">
            <span className="text-[11px] font-mono tracking-widest text-slate-500 uppercase block mb-3">
              Universal Accreditation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              Accredited Diplomas & <br />
              Industry Endorsements
            </h3>
            <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every completed track earns a cryptographically verified,
              university-aligned credential. Share directly with admissions
              boards, LinkedIn, and hiring teams.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <IconCheck
                  size={16}
                  className="text-emerald-400 shrink-0"
                  stroke={2.5}
                />
                <span>Accredited Micro-Degrees</span>
              </div>
              <div className="flex items-center gap-1.5">
                <IconBriefcase
                  size={16}
                  className="text-emerald-400 shrink-0"
                  stroke={2}
                />
                <span>Portfolio-Ready Projects</span>
              </div>
            </div>
          </div>

          {/* Right Certificate Terminal / Mockup */}
          <div className="w-full lg:max-w-xl rounded-xl border border-white/[0.08] bg-[#090c13] p-5 font-mono text-xs">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] text-[11px] text-slate-400">
              <span>credential-verification: #SKF-89241-GLOBAL</span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                OFFICIALLY VERIFIED
              </span>
            </div>

            <div className="mt-4 rounded-lg bg-[#0e1422] border border-white/[0.05] p-5">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
                    Global Mastery Certificate
                  </span>
                  <h4 className="text-base font-semibold text-white font-sans tracking-tight">
                    Applied Data Science & Economic Modeling
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Conferred upon:{" "}
                    <span className="text-slate-200">Alex Morgan</span> • Grade:
                    Distinction (97%)
                  </p>
                </div>
                <div className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                  <IconCertificate size={20} stroke={1.5} />
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.05] flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
                <div>
                  Curriculum:{" "}
                  <span className="text-slate-200 font-semibold">
                    12 Modules
                  </span>
                </div>
                <div>
                  Lab Score:{" "}
                  <span className="text-emerald-400 font-semibold">
                    100% Practical
                  </span>
                </div>
                <div>
                  Issued By:{" "}
                  <span className="text-slate-200 font-semibold">
                    SkillForge Board
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};