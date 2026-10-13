import { Badge } from "../../../shared/components/Badges";


export const ContactHero = ()=> {
  return (
    <div aria-label="contact-hero" className="relative overflow-hidden py-8 lg:pt-16 px-6">
      <div className="relative max-w-7xl mx-auto w-full">
        {/* Pill Badge */}
        <Badge
        text="DIRECT ACCESS & SUPPORT"
        badgeStyle="w-fit text-sm text-white mb-2"
        />

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold tracking-tight text-white mb-8 leading-[1.08] max-w-4xl">
          We&apos;re here to accelerate<br />
          <span className="text-slate-100">your learning journey</span><br />
          <span className="text-slate-100">or enterprise scale.</span>
        </h1>

        {/* Subtitle / Paragraph */}
        <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-3xl mb-8">
          Whether you&apos;re inquiring about team training, custom sandbox infrastructure, mentor cohort applications, or mission-critical technical support, our distributed engineering desk responds in under 4 hours.
        </p>     
      </div>
    </div>
  );
}