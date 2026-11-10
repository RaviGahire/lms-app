import type { ReactNode } from "react";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconCalendar,
  IconBriefcase,
  IconArrowRight,
} from "@tabler/icons-react";
import type { Icon } from "@tabler/icons-react";

export interface User {
  name: string;
  username: string;
  initials: string;
  online: boolean;
  role: string;
  email: string;
  phone: string;
  location: string;
  joined: string;
  courseProgress: number;
  weeklyGoalDays: number;
  weeklyGoalTotal: number;
  synced: string;
}

export interface ProfileCardProps {
  user?: Partial<User>;
}

const defaultUser: User = {
  name: "Ravi Gahire",
  username: "ravi_07",
  initials: "RG",
  online: true,
  role: "Student",
  email: "ravi.gahire@example.com",
  phone: "+91 98765 43210",
  location: "Nanded, Maharashtra",
  joined: "Joined March 2025",
  courseProgress: 62,
  weeklyGoalDays: 4,
  weeklyGoalTotal: 5,
  synced: "Synced 2m ago",
};

interface DetailProps {
  icon: Icon;
  children: ReactNode;
}

function Detail({ icon: IconComponent, children }: DetailProps) {
  return (
    <li className="flex items-center gap-3 text-sm text-gray-300">
      <IconComponent
        size={18}
        stroke={1.5}
        className="shrink-0 text-gray-500"
        aria-hidden="true"
      />
      <span className="truncate">{children}</span>
    </li>
  );
}

interface ProgressProps {
  label: string;
  value: string;
  percent: number;
}

function Progress({ label, value, percent }: ProgressProps) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between text-xs text-gray-400">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-gray-800"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
      >
        <div
          className="h-full rounded-full bg-emerald-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export const UserProfileCard = ({ user }: ProfileCardProps) => {
  const u: User = { ...defaultUser, ...user };
  const weeklyPercent = Math.round((u.weeklyGoalDays / u.weeklyGoalTotal) * 100);

  return (
    <article
      className="flex flex-col h-full w-full rounded-xl border border-gray-800 bg-[#131825] p-5 shadow-lg text-gray-200"
      aria-label={`Profile card for ${u.name}`}
    >
      <div className="flex items-center gap-4">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gray-700 text-xl font-bold text-gray-200">
          {u.initials}
          {u.online && (
            <span
              className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#131825] bg-emerald-500"
              aria-label="Online"
            />
          )}
        </div>
        <div className="min-w-0">
          <h2 className="truncate text-lg font-semibold text-white">{u.name}</h2>
          <p className="truncate text-sm text-gray-500">{u.username}</p>
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        <Detail icon={IconBriefcase}>{u.role}</Detail>
        <Detail icon={IconMail}>{u.email}</Detail>
        <Detail icon={IconPhone}>{u.phone}</Detail>
        <Detail icon={IconMapPin}>{u.location}</Detail>
        <Detail icon={IconCalendar}>{u.joined}</Detail>
      </ul>

      <div className="mt-6 space-y-4">
        <Progress
          label="Course progress"
          value={`${u.courseProgress}%`}
          percent={u.courseProgress}
        />
        <Progress
          label="Weekly goal"
          value={`${u.weeklyGoalDays} of ${u.weeklyGoalTotal} days`}
          percent={weeklyPercent}
        />
      </div>

      {/* mt-auto pushes the footer to the bottom, making the card stretch naturally */}
      <div className="mt-auto pt-6">
        <div className="flex items-center justify-between border-t border-gray-800 pt-4 text-xs text-gray-400">
          <a
            href="#settings"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            Account settings
            <IconArrowRight size={14} stroke={1.5} aria-hidden="true" />
          </a>
          <span className="text-gray-500">{u.synced}</span>
        </div>
      </div>
    </article>
  );
}