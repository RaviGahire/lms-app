import React from 'react';
import {
  IconFlame,
  IconBolt,
  IconAward,
  IconRocket,
  IconStarFilled,
  IconArrowRight,
  IconCheck,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

interface CourseCardData {
  id: string;
  badge: {
    label: string;
    icon: React.ElementType;
    colorClasses: string;
  };
  score: string;
  title: string;
  description: string;
  tags: string[];
  rating: string;
  reviews: string;
}

const COURSES: CourseCardData[] = [
  {
    id: 'nextjs-react',
    badge: {
      label: '#1 Most Demanded',
      icon: IconFlame,
      colorClasses: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    },
    score: '99/100',
    title: 'Full-Stack Next.js 15 & React 19 Production Systems',
    description:
      'Master React Server Components, Actions, caching layers, and zero-defect...',
    tags: ['Next.js App Router', 'Server Actions', 'Turbopack'],
    rating: '4.96',
    reviews: '18.4k',
  },
  {
    id: 'distributed-go',
    badge: {
      label: 'High Velocity',
      icon: IconBolt,
      colorClasses: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
    score: '98/100',
    title: 'High-Scale Distributed Systems & Microservices in Go',
    description:
      'Architect resilient distributed message brokers, gRPC pipelines, and high-...',
    tags: ['Go 1.23', 'gRPC', 'Raft Consensus'],
    rating: '4.98',
    reviews: '14.2k',
  },
  {
    id: 'typescript-architecture',
    badge: {
      label: 'Top Industry Pick',
      icon: IconAward,
      colorClasses: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    },
    score: '96/100',
    title: 'Modern TypeScript & Enterprise Frontend Architecture',
    description:
      'Scale massive enterprise codebases with strict type engineering, state machines,...',
    tags: ['Strict Generics', 'Zustand', 'CI/CD Pipelines'],
    rating: '4.95',
    reviews: '21.8k',
  },
  {
    id: 'cloud-devops',
    badge: {
      label: 'Fastest Growing',
      icon: IconRocket,
      colorClasses: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
    score: '94/100',
    title: 'Cloud Native DevOps & Kubernetes Zero-to-Production',
    description:
      'Deploy auto-scaling clusters, manage GitOps continuous delivery, and automate',
    tags: ['K8s', 'Docker', 'Terraform'],
    rating: '4.93',
    reviews: '11.5k',
  },
];

export const MostDemandedCourses = () => {
  return (
    <section className="w-full md:p-10">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header Section */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            {/* Category Pill */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-subtle bg-card px-3 py-1 text-xs font-semibold text-secondary">
              <IconFlame size={14} className="text-amber-400" />
              <span>IT &amp; Software</span>
            </div>

            {/* Title & Description */}
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Most Demanded Courses
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
              Highest enrollment velocity, industry completion rates, and hiring
              partner endorsements this month.
            </p>
          </div>

          {/* Right Status Badges */}
          <div className="flex shrink-0 items-center gap-2.5 self-start lg:self-auto">
            <div className="flex items-center gap-1.5 rounded-lg border border-subtle bg-card px-3 py-1.5 text-xs text-muted">
              <IconBolt size={14} className="text-success" />
              <span>Updated 24h ago</span>
            </div>

            <div className="flex items-center gap-1.5 rounded-lg border border-subtle bg-card px-3 py-1.5 text-xs text-secondary">
              <IconCheck size={14} className="text-highlight" />
              <span>Top 4 In-Demand</span>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {COURSES.map((course) => {
            const BadgeIcon = course.badge.icon;

            return (
              <div
                key={course.id}
                className="group flex flex-col justify-between rounded-xl border border-subtle bg-card p-5 transition-all duration-200 hover:border-muted/40 hover:shadow-lg"
              >
                <div>
                  {/* Card Top Pill & Score */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${course.badge.colorClasses}`}
                    >
                      <BadgeIcon size={12} stroke={2.2} />
                      {course.badge.label}
                    </span>
                    <span className="text-xs font-semibold text-success">
                      {course.score}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-4 line-clamp-2 min-h-11 text-base font-bold leading-snug text-primary">
                    {course.title}
                  </h3>
                  <p className="mt-2.5 line-clamp-2 min-h-9.5 text-xs leading-relaxed text-muted">
                    {course.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-subtle bg-surface/40 px-2 py-0.5 text-[11px] text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer: Rating & CTA Link */}
                <div className="mt-6 flex items-center justify-between border-t border-subtle/40 pt-4">
                  <div className="flex items-center gap-1 text-xs">
                    <IconStarFilled size={13} className="text-amber-400" />
                    <span className="font-semibold text-primary">
                      {course.rating}
                    </span>
                    <span className="text-muted">{course.reviews}</span>
                  </div>

                  <Link
                    to={`/course-details/${course.id}`}
                    state={{
                      course: {
                        id: course?.id,
                        title: course?.title,
                        description: course?.description,
                       
                      },
                    }}

                    className="inline-flex items-center gap-1 text-xs font-semibold text-secondary transition-colors group-hover:text-primary"
                  >
                    <span>View Track</span>
                    <IconArrowRight
                      size={13}
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
