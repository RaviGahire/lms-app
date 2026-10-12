import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconTerminal2,
  IconPalette,
  IconBrain,
  IconTrendingUp,
  IconVideo,
  IconChartCandle,
  IconSpeakerphone,
  IconFlask,
  IconArrowRight,
  IconChevronDown,
  IconLayoutGrid,
} from '@tabler/icons-react';

interface CategoryItem {
  id: string;
  icon: React.ComponentType<{
    size?: number | string;
    className?: string;
    stroke?: number;
  }>;
  iconBg: string;
  iconColor: string;
  coursesCount: string;
  title: string;
  description: string;
  tag: string;
  tagColor: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'it-software',
    icon: IconTerminal2,
    iconBg: 'bg-blue-600/15 border-blue-500/20',
    iconColor: 'text-blue-400',
    coursesCount: '340+ Courses',
    title: 'IT & Software',
    description:
      'Cloud architecture, DevOps, cyber defense, kernel hacking, and distributed...',
    tag: 'Cloud Sandboxes',
    tagColor: 'text-emerald-400',
  },
  {
    id: 'design-creative',
    icon: IconPalette,
    iconBg: 'bg-indigo-600/15 border-indigo-500/20',
    iconColor: 'text-indigo-400',
    coursesCount: '215+ Courses',
    title: 'Design & Creative',
    description:
      'Design systems, WebGL shaders, UI/UX architecture, motion graphics, and...',
    tag: 'Figma Sync',
    tagColor: 'text-slate-400',
  },
  {
    id: 'ai-data-science',
    icon: IconBrain,
    iconBg: 'bg-emerald-600/15 border-emerald-500/20',
    iconColor: 'text-emerald-400',
    coursesCount: '280+ Courses',
    title: 'AI & Data Science',
    description:
      'Large Language Models, agent swarms, vector databases, neural weights, and ML...',
    tag: 'GPU Pods',
    tagColor: 'text-emerald-400',
  },
  {
    id: 'personal-development',
    icon: IconTrendingUp,
    iconBg: 'bg-blue-600/15 border-blue-500/20',
    iconColor: 'text-blue-400',
    coursesCount: '160+ Courses',
    title: 'Personal Development',
    description:
      'Engineering leadership, executive presence, deep focus protocols, and...',
    tag: '1:1 Mentorship',
    tagColor: 'text-slate-300',
  },
  {
    id: 'photography-video',
    icon: IconVideo,
    iconBg: 'bg-indigo-600/15 border-indigo-500/20',
    iconColor: 'text-indigo-400',
    coursesCount: '125+ Courses',
    title: 'Photography & Video',
    description:
      'Cinematography, HDR color grading in DaVinci, virtual production, and spatial...',
    tag: 'Studio Color LUTs',
    tagColor: 'text-slate-400',
  },
  {
    id: 'business-management',
    icon: IconChartCandle,
    iconBg: 'bg-blue-600/15 border-blue-500/20',
    iconColor: 'text-blue-400',
    coursesCount: '195+ Courses',
    title: 'Business & Management',
    description:
      'Quantitative trading, algorithmic risk parity, high-growth SaaS unit economics,...',
    tag: 'Level-2 Book Sim',
    tagColor: 'text-emerald-400',
  },
  {
    id: 'marketing-growth',
    icon: IconSpeakerphone,
    iconBg: 'bg-emerald-600/15 border-emerald-500/20',
    iconColor: 'text-emerald-400',
    coursesCount: '140+ Courses',
    title: 'Marketing & Growth',
    description:
      'High-velocity conversion rate optimization, technical SEO, attribution modeling, and...',
    tag: 'A/B Lab Harness',
    tagColor: 'text-emerald-400',
  },
  {
    id: 'science-engineering',
    icon: IconFlask,
    iconBg: 'bg-indigo-600/15 border-indigo-500/20',
    iconColor: 'text-indigo-400',
    coursesCount: '110+ Courses',
    title: 'Science & Engineering',
    description:
      'Quantum computational mechanics, 3D molecular kinetics, robotics simulation,...',
    tag: 'Qiskit & Jupyter',
    tagColor: 'text-slate-400',
  },
];

export const CategoryGrid = () => {
  // Keeps track of the expanded card on small screens
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section aria-label='category-section' className="w-full pt-6 xl:pt-14 px-4 sm:px-8 lg:px-12 text-slate-100">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10">
          <div className="text-balance xl:text-pretty">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-light">
              <IconLayoutGrid size={15} stroke={2} />
              <span>Comprehensive Disciplines</span>
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-text-highlight sm:text-4xl lg:text-[2.65rem] leading-tight">
              Explore by category domain
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-text-muted leading-relaxed">
              Dive into 8 comprehensive disciplines with interactive sandboxes,
              verified micro-degrees, and expert-led curricula tailored for
              career acceleration.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto text-xs sm:text-sm font-medium text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Interactive Tracks Active</span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isExpanded = expandedId === cat.id;

            return (
              <div
                key={cat.id}
                className="group relative flex flex-col justify-between rounded-xl border border-slate-800/80 bg-[#0B1220]/75 p-5 transition-all duration-200 hover:border-slate-700 hover:bg-[#0E1728] hover:shadow-lg"
              >
                {/* Header within card */}
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-lg border ${cat.iconBg} ${cat.iconColor}`}
                    >
                      <Icon size={22} stroke={1.8} />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded-md border border-slate-800 bg-[#121A2A] px-2.5 py-1 text-[11px] font-medium text-slate-300">
                        {cat.coursesCount}
                      </span>

                      {/* Expand/Collapse Toggle on mobile (< sm) */}
                      <button
                        type="button"
                        onClick={() => toggleExpand(cat.id)}
                        aria-label={`Expand details for ${cat.title}`}
                        className="flex sm:hidden h-7 w-7 items-center justify-center rounded-md border border-slate-800 bg-[#121A2A] text-slate-400 hover:text-white transition-transform"
                      >
                        <IconChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-blue-400' : ''
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  <h3 className="mt-4 text-base font-semibold text-white tracking-wide">
                    {cat.title}
                  </h3>

                  {/* Expandable accordion on mobile */}
                  <div
                    className={`${
                      isExpanded ? 'block mt-2' : 'hidden'
                    } sm:block sm:mt-2 transition-all duration-200`}
                  >
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Tag and action link */}
                <div
                  className={`${
                    isExpanded ? 'flex' : 'hidden'
                  } sm:flex items-center justify-between pt-5 mt-4 border-t border-slate-800/60 text-xs`}
                >
                  <span className={`font-medium ${cat.tagColor}`}>
                    {cat.tag}
                  </span>

                  <Link
                    to={cat.id}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-slate-400 transition-colors group-hover:text-blue-300 hover:underline cursor-pointer"
                  >
                    <span>Explore Track</span>
                    <IconArrowRight
                      size={14}
                      stroke={2}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
