import React from 'react';

const Pricing = () => {
  const features = [
    "Components-driven system",
    "Sales-boosting landing pages",
    "Awesome Feather icons pack",
  ];

  const pricingPlans = [
    {
      title: "Free trails",
      price: "Free",
      duration: "forever",
      buttonText: "Try for free",
      isPopular: false,
    },
    {
      title: "Professional",
      price: "$29",
      duration: "per month",
      buttonText: "Get Started",
      isPopular: true,
    },
    {
      title: "Enterprise",
      price: "$99",
      duration: "per year",
      buttonText: "Contact Sales",
      isPopular: false,
    }
  ];

  return (
    <section aria-label="pricing-section" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Affordable <span className="text-cyan-600">pricing</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">Choose the plan that works best for your future.</p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 bg-white rounded-3xl transition-all duration-300 hover:scale-105 ${
                plan.isPopular 
                ? 'ring-4 ring-cyan-500 shadow-2xl z-10' 
                : 'border border-gray-200 shadow-lg'
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                  Most Popular
                </span>
              )}

              {/* Card Header */}
              <div className="mb-8">
                <p className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider mb-4">
                  {plan.title}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-slate-900">{plan.price}</span>
                  <span className="text-gray-500 font-medium">/{plan.duration}</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="flex-1 space-y-4 mb-8">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="shrink-0 size-6 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button 
                className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 ${
                  plan.isPopular 
                  ? 'bg-cyan-600 text-white hover:bg-cyan-700 shadow-lg shadow-cyan-200' 
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;