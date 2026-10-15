interface Leader {
  name: string;
  role: string;
  roleAccent?: boolean;
  background: string;
  quote: string;
  image: string;
}

const leaders: Leader[] = [
  {
    name: 'Dr. Aris Vance',
    role: 'Founder & Chief Executive Officer',
    background: 'Ex-Staff Architect, Oxford Fellow in Distributed Systems.',
    quote:
      '“Software architecture is learned by building resilient systems under duress, not memorizing slides.”',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Elena Rostova',
    role: 'Co-Founder & Head of Curriculum Architecture',
    roleAccent: true,
    background: 'Ex-DeepMind Fellow, AI Research Lead.',
    quote:
      '“Every lesson must reflect production-grade challenges learners encounter in enterprise environments.”',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Sarah Lin',
    role: 'VP of Product & Learning Experience',
    background: 'Former Design Systems Lead, W3C Contributor.',
    quote:
      '“Cognitive friction should come from solving hard engineering puzzles, never navigating our UI.”',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Marcus Sterling',
    role: 'Head of Engineering & Cloud Infrastructure',
    background: 'Distributed Systems & Virtualization Specialist.',
    quote:
      '“We spin up isolated Linux environments in sub-300ms so zero seconds are lost to environment friction.”',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  },
];

export const LeadershipTeam = () => {
  return (
    <section
      aria-label="leadership-team"
      className="min-h-screen py-16 px-6 flex flex-col justify-center text-white"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12 ">
          <span className="text-xs font-bold tracking-widest text-success uppercase block mb-3">
            Visionary Stewards
          </span>
          <h2 className="mt-2 text-3xl font-medium tracking-tight text-text-highlight sm:text-4xl lg:text-[2.65rem] leading-tight">
            The leadership team behind MasterTrack.
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Engineers, researchers, and educators dedicated to modernizing tech
            education through verifiable rigor.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="bg-bg-secondary border border-subtle rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-slate-700 shadow-lg shadow-black/30"
            >
              {/* Card Image Area  */}
              <div>
                <div className="relative w-full h-72 overflow-hidden bg-slate-900">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Subtle fade gradient to blend seamlessly into card body */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#101726] via-[#101726]/40 to-transparent" />
                </div>

                {/* Content Info */}
                <div className="px-6 pt-2 pb-4">
                  <h3 className="text-lg font-bold text-highlight tracking-tight mb-1">
                    {leader.name}
                  </h3>
                  <p
                    className={`text-xs font-semibold leading-snug mb-3 ${
                      leader.roleAccent ? 'text-success' : 'text-blue-light'
                    }`}
                  >
                    {leader.role}
                  </p>
                  <p className="text-xs text-secondary leading-relaxed">
                    {leader.background}
                  </p>
                </div>
              </div>

              {/* Quote Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/30">
                <p className="text-xs text-muted italic leading-relaxed">
                  {leader.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
