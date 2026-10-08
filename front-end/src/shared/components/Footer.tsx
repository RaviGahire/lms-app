import MasterTrackLogo from './icons/Logo';

export const Footer = () => {
  return (
    <footer className=" w-full bg-bg-primary text-text-secondary p-4 sm:p-6 md:p-8">
      {/* Border wrapper */}
      <div className="mx-auto max-w-7xl rounded-2xl border border-slate-800/60 bg-[#070d19]/40 p-6 md:p-10">
        {/* Top Brand & Status Section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-8 pb-8 border-b border-slate-800/40">
          {/* Brand Logo & Description */}
          <div className="flex gap-4 items-start max-w-xl">
            {/* Placeholder Logo Icon */}
            <div className="h-10 w-10 shrink-0 rounded-lg bg-slate-800/80 border border-slate-700/30 flex items-center justify-center">
              <MasterTrackLogo width={24} height={24}/>
            </div>
            <div>
              <h2 className="text-[20px] font-bold text-[#3b82f6] tracking-tight">
                Master-Track
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-[#94a3b8] font-normal">
                The high-performance interactive Leraning managment system.
              </p>
            </div>
          </div>

          {/* Operational Badge */}
          <div className="self-start md:self-auto shrink-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Operational soon
            </span>
          </div>
        </div>

        {/* Navigation Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10">
          {/* Col 1 */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Learning Tracks
            </h3>
            <ul className="space-y-3">
              {[
                'Full-Stack Architecture',
                'Systems & Rust',
                'Cloud Native & K8s',
                'Distributed Consensus',
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Platform Tools
            </h3>
            <ul className="space-y-3">
              {[
                'Interactive Sandboxes',
                'CLI Runner',
                'Assessment Benchmarks',
                'Team Workspaces',
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Developers
            </h3>
            <ul className="space-y-3">
              {[
                'API Reference',
                'Documentation',
                'Open Source',
                'Release Notes',
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Section */}
        <div className="pt-8 border-t border-slate-800/40 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500 font-medium">
          <p>© 2025 Mastertrack.com</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
