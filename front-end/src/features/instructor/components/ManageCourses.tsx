import { IconDotsVertical, IconSettings, IconPlus } from '@tabler/icons-react';
import { Button } from '../../../shared/components/Buttons/Buttons';

const courses = [
  {
    statusBadge: 'PUBLISHED',
    badgeColor: 'bg-emerald-500 text-white',
    title: 'Modern Web Engineering: HTML5, CSS3 & Architecture',
    desc: 'Full-stack architecture with reactive compilations, modern layout patterns, and service worker topology.',
    stats: [
      { label: 'STUDENTS', val: '7,840' },
      { label: 'RATING', val: '4.92 ★' },
      { label: 'MODULES', val: '8 Modules' },
    ],
    lastUpdated: 'Oct 12, 2024',
    footerStatus: 'Live & Enrolling',
    footerStatusColor: 'text-emerald-400',
    actionBtn: 'Edit Curriculum',
    btnColor: 'bg-[#1A2133] text-gray-300 hover:bg-gray-700',
  },
  {
    statusBadge: 'PUBLISHED',
    badgeColor: 'bg-emerald-500 text-white',
    title: 'Distributed Systems & Kubernetes Micro-Clusters',
    desc: 'Consensus algorithms (Raft, Paxos), dynamic cluster autoscaling, and zero-loss topologies.',
    stats: [
      { label: 'STUDENTS', val: '3,120' },
      { label: 'RATING', val: '4.96 ★' },
      { label: 'MODULES', val: '12 Modules' },
    ],
    lastUpdated: 'Nov 02, 2024',
    footerStatus: 'Live & Enrolling',
    footerStatusColor: 'text-emerald-400',
    actionBtn: 'Edit Curriculum',
    btnColor: 'bg-[#1A2133] text-gray-300 hover:bg-gray-700',
  },
  {
    statusBadge: 'IN REVIEW',
    badgeColor: 'bg-indigo-500 text-white',
    title: 'Advanced TypeScript & React 19 Architecture',
    desc: 'Compiler macros, type-level systems, Server Action lifecycles, and concurrent suspense streaming.',
    stats: [
      { label: 'STUDENTS', val: '1,490' },
      { label: 'RATING', val: '4.89 ★' },
      { label: 'MODULES', val: '6 Modules' },
    ],
    lastUpdated: 'Yesterday',
    footerStatus: 'Audit in progress',
    footerStatusColor: 'text-gray-400',
    actionBtn: 'Manage Modules',
    btnColor: 'bg-[#1A2133] text-gray-300 hover:bg-gray-700',
  },
  {
    statusBadge: 'DRAFT',
    badgeColor: 'bg-gray-700 text-gray-300',
    title: 'Advanced Rust & Distributed Concurrency',
    desc: 'Building lock-free primitives, Tokio actor pipelines, memory barriers, and eBPF kernel monitors.',
    stats: [
      { label: 'STATUS', val: '3/6 Done' },
      { label: 'FORMAT', val: 'Interactive' },
      { label: 'MODULES', val: '6 Modules' },
    ],
    lastUpdated: '2h ago',
    footerStatus: 'Unpublished Draft',
    footerStatusColor: 'text-gray-500',
    actionBtn: 'Continue Editing',
    btnColor: 'bg-blue-500 text-white hover:bg-blue-600',
  },
  {
    statusBadge: 'DRAFT',
    badgeColor: 'bg-gray-700 text-gray-300',
    title: 'Full-Cycle Systems Observability with OpenTelemetry',
    desc: 'Hands-on instrumentation, distributed tracing context propagation, and metric alerting rules.',
    stats: [
      { label: 'STATUS', val: '1/5 Done' },
      { label: 'FORMAT', val: 'Hands-on Lab' },
      { label: 'MODULES', val: '5 Modules' },
    ],
    lastUpdated: '3 days ago',
    footerStatus: 'Draft Syllabus',
    footerStatusColor: 'text-gray-500',
    actionBtn: 'Manage Modules',
    btnColor: 'bg-[#1A2133] text-gray-300 hover:bg-gray-700',
  },
];

export const ManageCourses = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-white text-xl font-bold">Manage Courses</h2>
          <p className="text-muted text-sm">
            View syllabus structure, update release statuses, edit modules, and
            inspect course configurations.
          </p>
        </div>
        <div className="flex gap-2 bg-[#131825] border border-gray-800 rounded-lg p-1">
          {[
            'All Courses (6)',
            'Published (4)',
            'Drafts (2)',
            'Archived (1)',
          ].map((items) => (
            <Button size="sm" label={items} variant="outline" />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="bg-[#131825] border border-gray-800 rounded-xl p-5 flex flex-col hover:border-gray-700 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <span
                className={`${course.badgeColor} text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider`}
              >
                {course.statusBadge}
              </span>
        
            </div>

            <h3 className="text-white font-semibold text-lg leading-snug mb-2">
              {course.title}
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-6 grow">
              {course.desc}
            </p>

            <div className="grid grid-cols-3 gap-2 mb-6 text-center">
              {course.stats.map((stat, sIdx) => (
                <div key={sIdx}>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                    {stat.label}
                  </p>
                  <p className="text-white text-sm font-medium">{stat.val}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mb-4 text-xs">
              <span className="text-gray-500">
                Last updated: {course.lastUpdated}
              </span>
              <span className={course.footerStatusColor}>
                {course.footerStatus}
              </span>
            </div>

            <div className="flex gap-2 items-center justify-center">
              <Button
              className='w-full'
              label={course.actionBtn}

              />

              <button className='border p-2.5 rounded-md text-highlight cursor-pointer'>
                <IconSettings size={18}/>
              </button>
             
            </div>
          </div>
        ))}

        {/* Create New Course */}
        <div className="bg-[#0B0F19] border-2 border-dashed border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-gray-600 hover:bg-[#131825] transition-all cursor-pointer min-h-[320px]">
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 mb-4">
            <IconPlus size={24} />
          </div>
          <h3 className="text-white font-semibold mb-2">
            Create a New Course Track
          </h3>
          <p className="text-gray-500 text-xs leading-relaxed mb-6 max-w-50">
            Assemble interactive video lessons, quizzes, hands-on terminal
            sandboxes, and rubric grading.
          </p>
          <button className="bg-[#1A2133] border border-gray-700 text-gray-300 text-sm font-medium px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            Launch Course Wizard
          </button>
        </div>
      </div>
    </div>
  );
};
