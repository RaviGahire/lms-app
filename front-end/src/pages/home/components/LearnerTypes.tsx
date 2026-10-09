
import {
  IconSchool,
  IconArrowsExchange,
  IconTrendingUp,
  IconCheck,
} from "@tabler/icons-react";

export interface LearnerCardItem {
  id: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  iconType: "school" | "arrows-exchange" | "trending-up";
  categoryColorClass?: string;
}

export const learnerCardsData: LearnerCardItem[] = [
  {
    id: "academic",
    category: "Academic Excellence",
    title: "High School & College Students",
    description:
      "Master tough AP, IB, and undergraduate STEM courses, writing, and economics with step-by-step interactive practice problem sets.",
    features: [
      "AP Calculus & Physics simulations",
      "Peer study lounges & exam prep drills",
    ],
    iconType: "school",
  },
  {
    id: "career",
    category: "Industry Transformation",
    title: "Career Switchers",
    description:
      "Pivot into UI/UX design, product management, data science, or engineering with zero prior experience through real portfolio projects.",
    features: [
      "1-on-1 portfolio review sessions",
      "Industry capstone project deliverables",
    ],
    iconType: "arrows-exchange",
    categoryColorClass: "text-success",
  },
  {
    id: "lifelong",
    category: "Continuous Upskilling",
    title: "Lifelong Learners & Pros",
    description:
      "Stay ahead of AI trends, master executive leadership, study world languages, or explore quantum physics at your own customized pace.",
    features: [
      "Executive micro-modules in 15 mins/day",
      "Offline audio & tablet synchronization",
    ],
    iconType: "trending-up",
  },
];

export const LearnerTypesSection = () => {
  const renderIcon = (type: string) => {
    switch (type) {
      case "school":
        return <IconSchool size={20} stroke={1.8} className="text-blue-light" />;
      case "arrows-exchange":
        return <IconArrowsExchange size={20} stroke={1.8} className="text-success" />;
      case "trending-up":
        return <IconTrendingUp size={20} stroke={1.8} className="text-blue-light" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full bg-bg-primary text-text-primary py-8 xl:py-16 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Tag Pill */}
        <div className="inline-flex items-center px-3.5 py-1 rounded-full border border-border-subtle bg-white-subtle text-[11px] font-mono tracking-widest text-text-muted uppercase mb-5">
          Diverse Learning Journeys
        </div>

        {/* Main Heading (Exact 40px scale) */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-balance text-center">
          Built for Every Type of Learner
        </h2>

        {/* Subtitle Description */}
        <p className="mt-4 text-center text-sm md:text-base text-text-secondary max-w-2xl leading-relaxed">
          Whether you're prepping for college exams, transforming your career, or
          pursuing an intellectual passion, SkillForge adapts to you.
        </p>

        {/* 3-Column Card Layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {learnerCardsData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col justify-between rounded-2xl border border-border-subtle bg-bg-secondary p-7 transition-all duration-300 hover:border-white/20"
            >
              <div>
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-lg bg-blue-dark border border-border-subtle flex items-center justify-center mb-6">
                  {renderIcon(card.iconType)}
                </div>

                {/* Category Label */}
                <span
                  className={`text-[11px] font-mono tracking-wider uppercase block mb-2 font-medium ${
                    card.categoryColorClass ? card.categoryColorClass : "text-text-muted"
                  }`}
                >
                  {card.category}
                </span>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-text-highlight tracking-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Feature Checklist Footer */}
              <div className="mt-8 pt-5 border-t border-border-subtle space-y-2.5">
                {card.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-text-secondary">
                    <IconCheck size={14} className="text-success shrink-0" stroke={2.5} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};