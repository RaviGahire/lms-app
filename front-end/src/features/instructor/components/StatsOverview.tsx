import { IconBook, IconFileDescription, IconUsers, IconStarFilled } from '@tabler/icons-react';

export const StatsOverview = () => {
  const stats = [
    { label: 'Active Courses', value: '4', subText: 'Published & Live', subSub: 'Across 2 skill tracks', icon: <IconBook size={16} />, iconBg: 'bg-blue-900/30 text-blue-400', valueSubColor: 'text-emerald-400' },
    { label: 'Drafts in Progress', value: '2', subText: 'WIP Curricula', subSub: 'Last edited today', icon: <IconFileDescription size={16} />, iconBg: 'bg-gray-800 text-gray-400', valueSubColor: 'text-gray-400' },
    { label: 'Total Enrolled Students', value: '12,450', subText: 'Active students', subSub: '+840 new this month', icon: <IconUsers size={16} />, iconBg: 'bg-emerald-900/30 text-emerald-400', valueSubColor: 'text-emerald-400' },
    { label: 'Avg Course Rating', value: '4.9', subText: '/ 5.0', subSub: '98.6% positive feedback', icon: <IconStarFilled size={16} />, iconBg: 'bg-indigo-900/30 text-indigo-400', valueSubColor: 'text-gray-400', subSubColor: 'text-emerald-400' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-card border border-muted/50 rounded-xl p-5 flex flex-col shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <span className="text-highlight text-xs font-semibold tracking-wider uppercase">{stat.label}</span>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.iconBg}`}>
              {stat.icon}
            </div>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-white text-3xl font-bold">{stat.value}</span>
            <span className={`text-sm font-medium ${stat.valueSubColor}`}>{stat.subText}</span>
          </div>
          <span className={`text-xs mt-auto ${stat.subSubColor || 'text-muted'}`}>{stat.subSub}</span>
        </div>
      ))}
    </div>
  );
};