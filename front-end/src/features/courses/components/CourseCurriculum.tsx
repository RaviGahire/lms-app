import React, { useState } from 'react';
import {
  IconChevronDown,
  IconChevronUp,
  IconPlayerPlay,
  IconLayoutSidebar,
  IconCode,
} from '@tabler/icons-react';

interface Lesson {
  id: string;
  number: string;
  title: string;
  duration: string;
  icon: React.ElementType;
  badge?: {
    text: string;
    variant: 'preview' | 'lab';
  };
}

interface Module {
  id: string;
  order: string;
  title: string;
  lessonsCount: number;
  duration: string;
  sandboxesCount: number;
  lessons?: Lesson[];
}

const MODULES_DATA: Module[] = [
  {
    id: 'module-01',
    order: '01',
    title: 'HTML5 Architecture, Semantic Tagging & Accessibility',
    lessonsCount: 4,
    duration: '2h 45m',
    sandboxesCount: 2,
    lessons: [
      {
        id: '1.1',
        number: '1.1',
        title: 'Semantic Document Outlining & Landmark Elements',
        duration: '32:15',
        icon: IconPlayerPlay,
        badge: { text: 'Free Preview', variant: 'preview' },
      },
      {
        id: '1.2',
        number: '1.2',
        title: 'Accessible Forms, Validation Patterns & ARIA Roles',
        duration: '44:10',
        icon: IconLayoutSidebar,
        badge: { text: 'Cloud Lab', variant: 'lab' },
      },
      {
        id: '1.3',
        number: '1.3',
        title: 'SEO Microdata, JSON-LD & OpenGraph Social Cards',
        duration: '28:40',
        icon: IconPlayerPlay,
      },
      {
        id: '1.4',
        number: '1.4',
        title: 'Capstone Project: Accessible Enterprise Customer Portal',
        duration: '59:55',
        icon: IconCode,
        badge: { text: 'Cloud Lab', variant: 'lab' },
      },
    ],
  },
  {
    id: 'module-02',
    order: '02',
    title: 'CSS3 Fluid Layouts, Modern Flexbox & Deep Grid Systems',
    lessonsCount: 6,
    duration: '4h 10m',
    sandboxesCount: 4,
     lessons: [
      {
        id: '1.1',
        number: '1.1',
        title: 'Semantic Document Outlining & Landmark Elements',
        duration: '32:15',
        icon: IconPlayerPlay,
        badge: { text: 'Free Preview', variant: 'preview' },
      },
      {
        id: '1.2',
        number: '1.2',
        title: 'Accessible Forms, Validation Patterns & ARIA Roles',
        duration: '44:10',
        icon: IconLayoutSidebar,
        badge: { text: 'Cloud Lab', variant: 'lab' },
      },
      {
        id: '1.3',
        number: '1.3',
        title: 'SEO Microdata, JSON-LD & OpenGraph Social Cards',
        duration: '28:40',
        icon: IconPlayerPlay,
      },
      {
        id: '1.4',
        number: '1.4',
        title: 'Capstone Project: Accessible Enterprise Customer Portal',
        duration: '59:55',
        icon: IconCode,
        badge: { text: 'Cloud Lab', variant: 'lab' },
      },
    ],
  },
  {
    id: 'module-03',
    order: '03',
    title: 'Modern JavaScript ESNext, Memory Model & Async Runtime',
    lessonsCount: 8,
    duration: '6h 30m',
    sandboxesCount: 5,
  },
  {
    id: 'module-04',
    order: '04',
    title: 'DOM Architecture, Web APIs & State Management',
    lessonsCount: 5,
    duration: '3h 50m',
    sandboxesCount: 3,
  },
  {
    id: 'module-05',
    order: '05',
    title: 'Full-Stack Integration, Node Microservices & CI/CD Deployment',
    lessonsCount: 6,
    duration: '5h 15m',
    sandboxesCount: 4,
  },
];

export const CourseCurriculum = () => {
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    'module-01': true,
  });

  const toggleModule = (id: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="w-full bg-app p-6 font-inter text-primary antialiased md:p-10">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-highlight">
              Structured Pathway
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Course Curriculum
            </h2>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted">
            <span className="font-semibold text-primary">5</span> Modules
            <span className="mx-1 text-subtle">•</span>
            <span className="font-semibold text-primary">29</span> Lessons
            <span className="mx-1 text-subtle">•</span>
            <span className="font-semibold text-primary">22h 30m</span> Total Duration
          </div>
        </div>

        {/* Modules Accordion List */}
        <div className="space-y-3.5">
          {MODULES_DATA.map((module) => {
            const isExpanded = !!expandedModules[module.id];

            return (
              <div
                key={module.id}
                className="overflow-hidden rounded-xl border border-subtle bg-card transition-all"
              >
                {/* Module Header Bar */}
                <button
                  type="button"
                  onClick={() => toggleModule(module.id)}
                  aria-expanded={isExpanded}
                  className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-surface/30 sm:p-5"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    {/* Index Box */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-subtle bg-surface/50 font-mono text-xs font-bold text-secondary">
                      {module.order}
                    </div>

                    {/* Module Title & Sub-metadata */}
                    <div>
                      <h3 className="text-sm font-bold text-primary sm:text-base">
                        {module.title}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted">
                        <span>{module.lessonsCount} Lessons</span>
                        <span className="text-subtle">•</span>
                        <span>{module.duration}</span>
                        <span className="text-subtle">•</span>
                        <span className="text-success">{module.sandboxesCount} Sandboxes</span>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Arrow Icon */}
                  <div className="ml-3 shrink-0 text-muted">
                    {isExpanded ? (
                      <IconChevronUp size={18} stroke={2} />
                    ) : (
                      <IconChevronDown size={18} stroke={2} />
                    )}
                  </div>
                </button>

                {/* Sub-lessons Expansion */}
                {isExpanded && module.lessons && (
                  <div className="border-t border-subtle/40 bg-app/40 px-4 py-2 sm:px-6">
                    {module.lessons.map((lesson) => {
                      const LessonIcon = lesson.icon;

                      return (
                        <div
                          key={lesson.id}
                          className="flex items-center justify-between gap-3 border-b border-subtle/20 py-3.5 last:border-none"
                        >
                          {/* Lesson Icon, Number & Title */}
                          <div className="flex items-center gap-3">
                            <LessonIcon size={16} className="shrink-0 text-muted" stroke={1.8} />
                            <span className="text-xs font-medium text-secondary hover:text-primary sm:text-sm">
                              {lesson.number} {lesson.title}
                            </span>
                          </div>

                          {/* Lesson Badges & Time */}
                          <div className="flex shrink-0 items-center gap-3 text-xs">
                            {lesson.badge && (
                              <span
                                className={`rounded px-2 py-0.5 font-medium ${
                                  lesson.badge.variant === 'preview'
                                    ? 'border border-subtle bg-surface/60 text-secondary'
                                    : 'border border-success/30 bg-success/10 text-success'
                                }`}
                              >
                                {lesson.badge.text}
                              </span>
                            )}
                            <span className="font-mono text-muted">{lesson.duration}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
