import React from 'react';
import {
  IconBolt,
  IconStarFilled,
  IconArrowUpRight,
  IconTerminal2,
  IconCloud,
} from '@tabler/icons-react';

interface LabCardData {
  id: string;
  badge: {
    label: string;
    hasBolt?: boolean;
  };
  feature: {
    label: string;
    icon: React.ElementType;
  };
  title: string;
  description: string;
  tags: string[];
  rating: string;
  reviews: string;
}

const LAB_CARDS: LabCardData[] = [
  {
    id: 'html5-semantic',
    badge: {
      label: 'Beginner • 4 Weeks',
    },
    feature: {
      label: '18 In-Browser Labs',
      icon: IconBolt,
    },
    title: 'HTML5 & Semantic Web Architecture',
    description:
      'Build rock-solid document foundations. Learn semantic tags, accessibility standards (WCAG AAA), SEO microdata schemas, native forms, audio/video pipelines, and canvas graphics.',
    tags: [
      '<section> & <article>',
      'A11y ARIA Roles',
      'Schema.org JSON-LD',
      'Native Form Validation',
    ],
    rating: '4.96',
    reviews: '4,120',
  },
  {
    id: 'css3-mastery',
    badge: {
      label: 'Beginner / Intermediate • 6 Weeks',
    },
    feature: {
      label: '24 Sandboxes',
      icon: IconTerminal2,
    },
    title: 'Modern CSS3 Mastery: Flexbox, Grid, Animations & Tailwind',
    description:
      'Master complex responsive layouts without frameworks. Build intricate CSS Grid templates, fluid flexbox components, CSS custom properties, container queries, and GPU-accelerated keyframe motion.',
    tags: [
      'Grid Template Areas',
      'CSS Variables & Theming',
      'Container Queries',
      'Glassmorphism',
    ],
    rating: '4.92',
    reviews: '5,890',
  },
  {
    id: 'js-core-esnext',
    badge: {
      label: 'Popular • 8 Weeks',
      hasBolt: true,
    },
    feature: {
      label: '32 Live Challenges',
      icon: IconTerminal2,
    },
    title: 'JavaScript Core & Modern ESNext Development',
    description:
      'Master the engine of the web. Deep dive into the JS Event Loop, closures, prototypes, asynchronous Promises, async/await, DOM optimization, custom events, and ES modules.',
    tags: [
      'Event Loop & Microtasks',
      'Async/Await & Fetch',
      'Closures & Scope',
      'Web APIs & Storage',
    ],
    rating: '4.98',
    reviews: '8,340',
  },
  {
    id: 'ts-react19',
    badge: {
      label: 'Advanced • 10 Weeks',
    },
    feature: {
      label: 'Cloud VM Sandbox',
      icon: IconCloud,
    },
    title: 'Full-Stack TypeScript & React 19 Architecture',
    description:
      'Build enterprise frontend applications using React Server Components, Suspense architecture, advanced TypeScript generics, Zustand global state, and Next.js App Router.',
    tags: [
      'Server Components',
      'Strict Generics',
      'Zustand & TanStack Query',
    ],
    rating: '4.95',
    reviews: '6,210',
  },
];

export const CurriculumLabCards = () => {
  return (
    <section className="w-full p-6 md:p-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">
        {LAB_CARDS.map((card) => {
          const FeatureIcon = card.feature.icon;

          return (
            <div
              key={card.id}
              className="group flex flex-col justify-between rounded-2xl border border-subtle bg-card p-6 sm:p-8"
            >
              <div>
                {/* Duration Badge & Lab Feature Pill */}
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-subtle bg-surface/40 px-3.5 py-1 text-xs font-medium text-secondary">
                    {card.badge.hasBolt && (
                      <IconBolt size={13} className="text-amber-400" />
                    )}
                    {card.badge.label}
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-success">
                    <FeatureIcon size={14} stroke={2} />
                    {card.feature.label}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight text-primary sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {card.description}
                </p>

                {/* Code / Topic Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-subtle bg-surface/50 px-2.5 py-1 font-mono text-[11px] font-medium text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer: Rating & "View Labs" Button */}
              <div className="mt-8 flex items-center justify-between border-t border-subtle/40 pt-5">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                  <IconStarFilled size={14} className="text-amber-400" />
                  <span>{card.rating}</span>
                  <span className="font-normal text-muted">
                    ({card.reviews})
                  </span>
                </div>

                <a
                  href={`#${card.id}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-subtle bg-surface/30 px-4 py-2 text-xs font-semibold text-secondary transition-all duration-150 hover:border-muted hover:bg-surface hover:text-primary"
                >
                  <span>View Labs</span>
                  <IconArrowUpRight size={14} stroke={2} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
