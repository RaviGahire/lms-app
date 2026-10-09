import {
  IconCheck,
  IconMinus,
  IconCircleCheck,
  IconArrowRight,
} from '@tabler/icons-react';
import { pricingPlans } from './pricingData';
import { Button } from '../Buttons/Buttons';

export const PricingSection = () => {
  return (
    <section className="relative w-full bg-bg-primary text-text-primary py-8 xl:py-16 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Tag Pill */}
        <div className="inline-flex items-center px-3.5 py-1 rounded-full border border-border-subtle bg-white-subtle text-[11px] font-mono tracking-widest text-text-muted uppercase mb-5">
          Accessible Education Plans
        </div>

        {/* Main Heading (Exact 40px scale) */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-balance text-center">
          Affordable, Transparent <br />
          Student Pricing
        </h2>

        {/* Subtitle Description */}
        <p className="mt-4 text-center text-sm md:text-base text-text-secondary max-w-2xl leading-relaxed">
          Education should be universal. Start completely free or unlock
          unlimited access with generous student & academic discounts.
        </p>

        {/* 3-Column Pricing Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-stretch">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-2xl bg-bg-secondary p-7 sm:p-8 transition-all duration-300 ${
                plan.cardHighlightBorder
                  ? 'border border-blue-light/30 shadow-[0_0_40px_rgba(0,46,106,0.25)] ring-1 ring-blue-light/20'
                  : 'border border-border-subtle hover:border-white/20'
              }`}
            >
              {/* Popular Floating Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3 right-6 inline-flex items-center px-3 py-0.5 rounded-full bg-blue text-blue-light border border-blue-light/40 text-[11px] font-medium tracking-wide">
                  {plan.popularLabel}
                </div>
              )}

              {/* Card Header & Pricing */}
              <div>
                <span className="text-[11px] font-mono tracking-wider uppercase block text-text-muted font-medium mb-2">
                  {plan.category}
                </span>

                <h3 className="text-xl font-bold text-text-highlight tracking-tight">
                  {plan.name}
                </h3>

                {/* Price Line */}
                <div className="mt-5 flex items-baseline gap-1.5 flex-wrap">
                  <span className="text-4xl font-extrabold text-text-highlight tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs text-text-muted">{plan.period}</span>
                  {plan.priceNote && (
                    <span
                      className={`text-xs ml-1 ${
                        plan.priceNoteColorClass
                          ? plan.priceNoteColorClass
                          : 'text-text-muted'
                      }`}
                    >
                      {plan.priceNote}
                    </span>
                  )}
                </div>

                {/* Plan Description */}
                <p className="mt-4 text-xs sm:text-sm text-text-secondary leading-relaxed min-h-12">
                  {plan.description}
                </p>

                {/* Features Divider */}
                <div className="mt-6 pt-6 border-t border-border-subtle space-y-3.5">
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm"
                    >
                      {feature.included ? (
                        plan.cardHighlightBorder ? (
                          <IconCircleCheck
                            size={16}
                            className="text-success shrink-0 mt-0.5"
                            stroke={2}
                          />
                        ) : (
                          <IconCheck
                            size={16}
                            className="text-success shrink-0 mt-0.5"
                            stroke={2.5}
                          />
                        )
                      ) : (
                        <IconMinus
                          size={16}
                          className="text-text-muted/60 shrink-0 mt-0.5"
                          stroke={2}
                        />
                      )}

                      <span
                        className={`leading-snug ${
                          !feature.included
                            ? 'text-text-muted/60'
                            : feature.highlight
                              ? 'text-text-highlight font-semibold'
                              : 'text-text-secondary'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="mt-8 pt-4">
                <Button
                  className={`w-full ${
                    plan.ctaVariant === 'primary'
                      ? 'border border-blue-light/30 shadow-md'
                      : 'bg-white-subtle hover:bg-white-muted text-text-highlight border border-border-subtle'
                  }`}

                  label={plan.ctaLabel}
                  onClick={() => {
                    alert('Done');
                  }}
                  icon={<IconArrowRight />}
                  iconPosition="right"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
