import {
  IconCheck,
  IconChecklist,
  IconEqual,
  IconCompass,
} from '@tabler/icons-react';

interface OutcomeItem {
  title: string;
  description: string;
}

const OUTCOMES: OutcomeItem[] = [
  {
    title: 'Semantic HTML5 & WCAG AAA:',
    description: 'Build fully accessible, crawlable document hierarchies from scratch.',
  },
  {
    title: 'CSS Grid & Container Queries:',
    description: 'Construct responsive, complex, production layouts without fragile CSS hacks.',
  },
  {
    title: 'Async/Await & Event Loop:',
    description: 'Deeply internalize call stacks, microtask queues, and promises in modern V8.',
  },
  {
    title: 'Reactive SPAs with TypeScript:',
    description: 'Design resilient state management and component rendering paradigms.',
  },
  {
    title: 'REST & WebSocket Endpoints:',
    description: 'Integrate secure HTTP clients, JWT token rotation, and bidirectional sync.',
  },
  {
    title: 'Production CI/CD & Containers:',
    description: 'Package Node.js microservices into lightweight Docker containers for cloud deployment.',
  },
];

const PREREQUISITES = [
  {
    title: 'No Prior Coding Needed',
    description: 'Begins with absolute foundations and climbs directly to professional architecture.',
  },
  {
    title: 'Standard Web Browser',
    description: 'Chrome, Firefox, Safari, or Edge. All developer tools are virtualized in-cloud.',
  },
  {
    title: 'Curiosity & Drive',
    description: 'Willingness to solve real, un-canned coding errors and complete capstone code reviews.',
  },
];

export const CourseBlueprint = () => {
  return (
    <div className="flex-1 space-y-8 rounded-2xl border border-subtle bg-card p-6 md:p-8 font-inter antialiased">
      {/* Header */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-subtle bg-surface/50 text-highlight">
              <IconCompass size={20} stroke={1.8} />
            </div>
            <span className="text-xs font-semibold tracking-wider uppercase text-muted">
              Course Blueprint
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-success-dark/30 bg-surface/40 px-3 py-1 text-xs font-semibold text-success">
            <IconCheck size={14} stroke={2.5} />
            Verified Pathway
          </span>
        </div>

        <h2 className="mt-4 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
          What You Will Master &amp; Course Readiness
        </h2>
      </div>

      {/* Core Competencies & Outcomes Section */}
      <div>
        <div className="flex items-center justify-between border-b border-subtle pb-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-muted">
            <IconChecklist size={16} className="text-highlight" />
            <span>Core Competencies &amp; Outcomes</span>
          </div>
          <span className="text-xs font-medium text-muted">6 Key Milestones</span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {OUTCOMES.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/20 text-success">
                <IconCheck size={13} stroke={3} />
              </div>
              <p className="text-xs leading-relaxed text-muted sm:text-sm">
                <strong className="font-semibold text-primary">{item.title} </strong>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Prerequisites & Entry Requirements Section */}
      <div className="rounded-xl border border-subtle bg-app/50 p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-subtle/50 pb-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-muted">
            <IconEqual size={16} className="text-highlight" />
            <span>Prerequisites &amp; Entry Requirements</span>
          </div>
          <span className="text-xs font-medium text-success">
            Beginner to Advanced Accessible
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PREREQUISITES.map((prereq, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-2">
                <IconCheck size={16} stroke={2.5} className="text-highlight" />
                <h4 className="text-xs font-bold text-primary sm:text-sm">{prereq.title}</h4>
              </div>
              <p className="text-xs leading-relaxed text-muted">{prereq.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
