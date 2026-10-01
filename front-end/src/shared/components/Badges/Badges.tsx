import { Link } from 'react-router-dom';

// Navar Version Badges
type VersionBadgeProps = {
  version?: string;
};
export const VersionBadge = ({ version }: VersionBadgeProps) => {
  return (
    <div className="border border-border px-7.5 py-1 rounded-full cursor-pointer hover:bg-bg-surface transition-colors duration-150 ease-linear">
      <p className="text-[10px] font-normal tracking-[0.98px] uppercase text-shadow-white">
        Master track V{version || '1.0.0'}
      </p>
    </div>
  );
};

// Hero section Badge
type HeroBadgeProps = {
  text: string;
};
export const HeroBadge = ({ text }: HeroBadgeProps) => {
  return (
    <div className="border border-border-subtle px-4 py-1 rounded-full">
      <p>{text}</p>
    </div>
  );
};

// Hero Bottom Badges
type BottomBadgeItem = {
  title: string;
  path: string;
};

type HeroBottomBadgesProps = {
  badges: BottomBadgeItem[];
};

export const HeroBottomBadges = ({ badges }: HeroBottomBadgesProps) => {

  return (
<div className="flex flex-row flex-wrap items-center gap-2.5">
      {badges.map((badge, index) => (
        <Link
          key={`${badge.path}-${index}`}
          to={badge.path}
          className="inline-flex items-center justify-center border border-border-subtle px-4 py-1 rounded-full text-sm hover:bg-muted/50 transition-colors"
        >
          <span>{badge.title}</span>
        </Link>
      ))}
    </div>
  );
};
