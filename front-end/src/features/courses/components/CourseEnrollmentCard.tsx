import {
  IconPlayerPlayFilled,
  IconArrowRight,
  IconShieldCheck,
  IconVideo,
  IconTerminal2,
  IconFolderCode,
  IconAward,
  IconDevices,
  IconMessages,
  IconShare,
  IconGift,
  IconUsersGroup,
} from '@tabler/icons-react';
import { Button } from '../../../shared/components/Buttons/Buttons';

const INCLUDES = [
  {
    icon: IconVideo,
    label: (
      <>
        <strong className="text-primary font-semibold">22.5 hours</strong>{' '}
        on-demand HD video content
      </>
    ),
  },
  {
    icon: IconTerminal2,
    label: (
      <>
        <strong className="text-primary font-semibold">18 zero-setup</strong>{' '}
        in-browser cloud sandboxes
      </>
    ),
  },
  {
    icon: IconFolderCode,
    label: (
      <>
        <strong className="text-primary font-semibold">12 production</strong>{' '}
        downloadable project repos
      </>
    ),
  },
  { icon: IconAward, label: 'Proctored Capstone Assessment & Micro-Degree' },
  {
    icon: IconDevices,
    label: 'Full lifetime access on desktop, tablet, and mobile',
  },
  {
    icon: IconMessages,
    label: 'Private SkillForge Discord & mentor office hours',
  },
];

export const CourseEnrollmentCard = () => {
  return (
 <div className=''>
    <div className="w-full shrink-0 space-y-6 rounded-2xl border border-subtle bg-card p-4 md:p-6  font-inter antialiased lg:w-95 xl:w-105">
      {/* Video Preview Card */}
      <div className="group relative aspect-video w-full overflow-hidden rounded-xl border border-subtle bg-surface">
        {/* Placeholder Simulated Code Background */}
        <div className="h-full w-full bg-linear-to-br from-app via-card to-surface/80 p-4 font-mono text-[10px] text-muted opacity-60">
          <p className="text-highlight/70">
            // Initializing Async Web API Pipeline
          </p>
          <p className="mt-1 text-success">
            async function fetchDistributedNodes() {'{'}
          </p>
          <p className="ml-2">const res = await fetch('/api/v1/cluster');</p>
          <p className="ml-2">return await res.json();</p>
          <p className="text-success">{'}'}</p>
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-app/30 backdrop-blur-[2px]">
          <button
            type="button"
            aria-label="Play Course Trailer"
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-highlight/90 text-card shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
          >
            <IconPlayerPlayFilled size={22} />
          </button>
        </div>

        {/* Video Bottom Label */}
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] text-primary">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="h-2 w-2 rounded-full bg-blue" />
            Course Trailer &amp; Lab Demo (3:14)
          </span>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="space-y-2">
        <div className="flex items-baseline gap-2.5">
          <span className="text-3xl font-extrabold text-primary">$89</span>
          <span className="text-sm font-medium text-muted line-through">
            $199
          </span>
          <span className="rounded bg-success/15 px-2 py-0.5 text-xs font-bold text-success">
            55% OFF
          </span>
        </div>
        <p className="text-xs text-muted">
          Or included with{' '}
          <a
            href="#pro-pass"
            className="font-semibold text-highlight hover:underline"
          >
            Master-Track Pro Pass
          </a>{' '}
          at $19/mo.
        </p>
      </div>

      {/* Main CTA Button */}
      <Button label="Enroll Now" size="lg" className='w-full' icon={<IconArrowRight size={18}/>} iconPosition='right' />

      {/* Guarantee Notice */}
      <div className="flex items-center justify-center gap-2 text-xs font-medium text-muted">
        <IconShieldCheck size={16} className="text-success" />
        <span>30-Day Unconditional Money-Back Guarantee</span>
      </div>

      {/* Features Included List */}
      <div className="space-y-3.5 border-t border-subtle pt-6">
        <h4 className="text-xs font-bold tracking-wider uppercase text-muted">
          This Course Includes:
        </h4>
        <ul className="space-y-3">
          {INCLUDES.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={index}
                className="flex items-center gap-3 text-xs text-muted"
              >
                <Icon size={16} className="shrink-0 text-success" stroke={2} />
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer Share & Actions */}
      <div className="flex items-center justify-between border-t border-subtle pt-4 text-xs font-semibold text-secondary">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
        >
          <IconShare size={15} />
          <span>Share Track</span>
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
        >
          <IconGift size={15} />
          <span>Gift Course</span>
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
        >
          <IconUsersGroup size={15} />
          <span>For Teams</span>
        </button>
      </div>
    </div>
 </div> 
  );
};
