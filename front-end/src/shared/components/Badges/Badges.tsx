
// Home Page Badges
type VersionBadgeProps = {
    version?: string;
}
export const VersionBadge = ({version}:VersionBadgeProps) => {
  return (
    <div className="border border-border px-7.5 py-1 rounded-full cursor-pointer hover:bg-bg-surface transition-colors duration-150 ease-linear">
      <p className="text-[10px] font-normal tracking-[0.98px] uppercase text-shadow-white">Master track {version}</p>
    </div>
  );
};
