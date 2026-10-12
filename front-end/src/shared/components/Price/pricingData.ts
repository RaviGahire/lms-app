export interface FeatureItem {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface PricingPlan {
  id: string;
  category: string;
  name: string;
  price: string;
  period: string;
  priceNote?: string;
  priceNoteColorClass?: string;
  description: string;
  features: FeatureItem[];
  ctaLabel: string;
  ctaVariant: "outline" | "primary" | "secondary";
  isPopular?: boolean;
  popularLabel?: string;
  cardHighlightBorder?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    category: "Community Access",
    name: "Student Starter",
    price: "$0",
    period: "/month",
    priceNote: "• Free Forever",
    description:
      "Perfect for curious minds exploring foundational topics across coding, design, humanities, and sciences.",
    features: [
      { text: "Access to 150+ foundational open courses", included: true },
      { text: "Interactive simulations & sandbox environments", included: true },
      { text: "Global student community & study channels", included: true },
      { text: "Accredited university-aligned certificates", included: false },
      { text: "1-on-1 mentor guidance & office hours", included: false },
    ],
    ctaLabel: "Create Free Account",
    ctaVariant: "outline",
  },
  {
    id: "unlimited",
    category: "All-Inclusive Pass",
    name: "Master-track Unlimited",
    price: "$14",
    period: "/month",
    priceNote: "(50% off for verified .edu)",
    priceNoteColorClass: "text-success",
    description:
      "Unrestricted access to all disciplines, masterclasses, accredited diplomas, and expert mentors.",
    features: [
      { text: "Unlimited access to all 1,200+ courses & labs", included: true, highlight: true },
      { text: "Accredited certificates recognized by universities & employers", included: true },
      { text: "Live mentor office hours & homework help", included: true },
      { text: "Offline mode on iOS, iPad, and Android apps", included: true },
      { text: "Personalized AI tutor with 24/7 instant problem hints", included: true },
    ],
    ctaLabel: "Start 14-Day Free Trial",
    ctaVariant: "primary",
    isPopular: true,
    popularLabel: "Most Popular",
    cardHighlightBorder: true,
  },
  {
    id: "teams",
    category: "Campus & Teams",
    name: "Academic Institution",
    price: "$29",
    period: "/seat/mo",
    priceNote: "• Billed annually",
    description:
      "Full cohort tracking, custom learning paths, and LMS integrations designed for universities and schools.",
    features: [
      { text: "Everything in Unlimited plan included", included: true, highlight: true },
      { text: "LMS Canvas, Blackboard & Moodle sync", included: true },
      { text: "Centralized cohort analytics & gradebook export", included: true },
      { text: "Dedicated educational success manager", included: true },
      { text: "Custom API & single sign-on (SSO)", included: true },
    ],
    ctaLabel: "Contact Academic Sales",
    ctaVariant: "outline",
  },
];