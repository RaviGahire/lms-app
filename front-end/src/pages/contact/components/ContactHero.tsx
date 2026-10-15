import { Badge } from '../../../shared/components/Badges';

export const ContactHero = () => {
  return (
    <div
      aria-label="contact-hero"
      className="relative overflow-hidden py-8 lg:pt-16 px-6"
    >
      <div className="relative max-w-7xl mx-auto w-full">
        {/* Pill Badge */}
        <Badge
          text="DIRECT ACCESS & SUPPORT"
          badgeStyle="w-fit text-sm text-white mb-2"
        />

        {/* Main Headline */}
        <h1 className="text-4xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl lg:text-6xl leading-tight text-balance">
          We&apos;re here to accelerate
          <span className="text-neutral-500 dark:text-neutral-400 inline sm:block">
            your learning journey
          </span>
        </h1>

        {/* Subtitle / Paragraph */}
        <p className="text-base sm:text-lg text-muted leading-relaxed max-w-3xl my-8">
          Whether you&apos;re inquiring about team training, custom sandbox
          infrastructure, mentor cohort applications, or mission-critical
          technical support, our distributed engineering desk responds in under
          4 hours.
        </p>
      </div>
    </div>
  );
};
