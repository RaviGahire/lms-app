import {
  IconStarFilled,
  IconArrowRight,
  IconChevronRight,
} from '@tabler/icons-react';

interface RecommendedTrack {
  id: string;
  badge: {
    label: string;
    variant: 'blue' | 'green';
  };
  image: string;
  rating: string;
  duration: string;
  title: string;
  description: string;
  price: string;
}

const RECOMMENDED_TRACKS: RecommendedTrack[] = [
  {
    id: 'ts-react19-arch',
    badge: {
      label: 'STEP 2 IN TRACK',
      variant: 'blue',
    },
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    rating: '4.98',
    duration: '18.5 hours',
    title: 'Full-Stack TypeScript & React 19 Architecture',
    description:
      'Server Components, Suspense streams, optimistic mutations, and enterprise-grade TypeScript generics.',
    price: '$79',
  },
  {
    id: 'node-microservices',
    badge: {
      label: 'BACKEND SPECIALIZATION',
      variant: 'green',
    },
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    rating: '4.94',
    duration: '26 hours',
    title: 'Node.js Microservices & Distributed Caching',
    description:
      'Event-driven systems using Redis, BullMQ, Kafka, resilient circuit breakers, and gRPC inter-service RPC.',
    price: '$99',
  },
  {
    id: 'design-systems-figma',
    badge: {
      label: 'FRONTEND SPECIALIZATION',
      variant: 'blue',
    },
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    rating: '4.97',
    duration: '16 hours',
    title: 'Design Systems at Scale: Figma to Production Code',
    description:
      'Token pipelines, Storybook visual regression, automated npm packaging, and WCAG accessibility CI checks.',
    price: '$89',
  },
];

export const RecommendedTracks = () => {
  return (
    <section className="w-full bg-app p-6 font-inter text-primary antialiased md:p-10">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Section Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-highlight">
              Curated Career Roadmap[cite: 8]
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              Recommended Follow-Up Tracks[cite: 8]
            </h2>
          </div>

          <a
            href="#all-sequences"
            className="group inline-flex items-center gap-1.5 text-xs font-semibold text-highlight transition-colors hover:text-primary sm:text-sm"
          >
            <span>View All Full-Stack Sequences</span>[cite: 8]
            <IconArrowRight
              size={15}
              stroke={2}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RECOMMENDED_TRACKS.map((track) => (
            <div
              key={track.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-subtle bg-card transition-all duration-200 hover:border-muted/40 hover:shadow-xl"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden bg-surface">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-black/40" />

                  {/* Badge */}
                  <span
                    className={`absolute left-3.5 top-3.5 rounded px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider ${
                      track.badge.variant === 'blue'
                        ? 'border border-blue-dark/50 bg-card/90 text-highlight'
                        : 'border border-success-dark/40 bg-card/90 text-success'
                    }`}
                  >
                    {track.badge.label}[cite: 8]
                  </span>
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-6">
                  {/* Rating & Duration */}
                  <div className="flex items-center gap-2 text-xs">
                    <div className="flex items-center gap-1 font-semibold text-primary">
                      <IconStarFilled size={13} className="text-amber-400" />
                      <span>{track.rating}</span>[cite: 8]
                    </div>
                    <span className="text-subtle">•</span>
                    <span className="text-muted">{track.duration}</span>[cite:
                    8]
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-3 text-base font-bold leading-snug text-primary sm:text-lg">
                    {track.title}[cite: 8]
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-3">
                    {track.description}[cite: 8]
                  </p>
                </div>
              </div>

              {/* Card Footer: Price & CTA Link */}
              <div className="flex items-center justify-between border-t border-subtle/50 px-5 py-4 sm:px-6">
                <span className="text-lg font-bold text-primary sm:text-xl">
                  {track.price}[cite: 8]
                </span>

                <a
                  href={`#${track.id}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-secondary transition-colors group-hover:text-highlight"
                >
                  <span>Explore Syllabus</span>[cite: 8]
                  <IconChevronRight
                    size={14}
                    stroke={2.5}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
