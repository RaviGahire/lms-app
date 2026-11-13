
const stats = [
  { label: 'Active Courses', value: '4', sub: '2 tracks completed' },
  { label: 'Learning Hours', value: '68.4', sub: '+14% this month', subColor: 'text-emerald-400' },
  { label: 'Study Streak', value: '14', unit: 'days', sub: 'Best: 21 days' },
  { label: 'Certificates', value: '3', sub: '1 pending review' },
];

const chartData = [
  { day: 'Mon', hours: '2.4h', height: '40%', active: false },
  { day: 'Tue', hours: '3.8h', height: '60%', active: false },
  { day: 'Wed', hours: '1.5h', height: '25%', active: false },
  { day: 'Thu', hours: '4.2h', height: '70%', active: false },
  { day: 'Fri', hours: '5.1h', height: '85%', active: true },
  { day: 'Sat', hours: '1.2h', height: '20%', active: false },
  { day: 'Sun', hours: 'Today', height: '45%', active: false, isToday: true },
];

export const MetricsGrid = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Top 4 Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#131825] border border-gray-800 rounded-xl p-4 shadow-sm">
            <p className="text-gray-500 text-xs mb-2">{stat.label}</p>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-white text-2xl font-bold">{stat.value}</span>
              {stat.unit && <span className="text-gray-400 text-sm">{stat.unit}</span>}
            </div>
            <p className={`text-[11px] ${stat.subColor || 'text-gray-500'}`}>{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Weekly Activity Chart */}
      <div className="bg-[#131825] border border-gray-800 rounded-xl p-5 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-white text-sm font-medium">Weekly Activity</h3>
          <span className="text-gray-400 text-xs">18.2 hours logged</span>
        </div>
        
        <div className="flex justify-between items-end h-32 px-2">
          {chartData.map((bar, i) => (
            <div key={i} className="flex flex-col items-center gap-2 w-full">
              <span className={`text-[10px] ${bar.active ? 'text-emerald-400' : 'text-gray-500'}`}>
                {bar.hours}
              </span>
              <div className="w-full max-w-6 h-24 bg-[#0B0F19] rounded-sm flex items-end overflow-hidden">
                <div 
                  className={`w-full rounded-sm ${bar.active ? 'bg-emerald-500' : bar.isToday ? 'bg-blue-300' : 'bg-gray-600'}`} 
                  style={{ height: bar.height }}
                ></div>
              </div>
              <span className={`text-[11px] ${bar.active ? 'text-emerald-400 font-medium' : bar.isToday ? 'text-white' : 'text-gray-500'}`}>
                {bar.day}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};