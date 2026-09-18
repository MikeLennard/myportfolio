/**
 * DashboardStats Component
 * Demonstrates:
 * - Functional Component
 * - Props (`stats` array)
 * - Custom CSS Glassmorphism with user palette (#9CB080, #618764, #2B5748, #273338)
 */
const renderStatIcon = (stat) => {
  const label = stat.label.toLowerCase();
  if (stat.id === 1 || label.includes('project')) {
    return (
      <svg className="w-6 h-6 text-[#9CB080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    );
  }
  if (stat.id === 2 || label.includes('scholar') || label.includes('academic')) {
    return (
      <svg className="w-6 h-6 text-[#F7DF1E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    );
  }
  if (stat.id === 3 || label.includes('media') || label.includes('video') || label.includes('editor')) {
    return (
      <svg className="w-6 h-6 text-[#9CB080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2.5" stroke="#9CB080" strokeWidth="1.8" />
        <polygon points="10,8 16,12 10,16" fill="#9CB080" />
      </svg>
    );
  }
  return (
    <svg className="w-6 h-6 text-[#61DAFB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
};

export default function DashboardStats({ stats = [] }) {
  return (
    <section className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white tracking-tight">Dashboard Overview</h2>
        <p className="text-sm text-[#CBD5C0]">Key metrics and development statistics</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="glass-panel p-6 rounded-2xl flex flex-col justify-between group cursor-default transition-all duration-300 hover:border-[#9CB080]/50"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="p-3 bg-[#2B5748]/70 rounded-xl border border-[#618764]/40 group-hover:scale-110 group-hover:border-[#9CB080]/50 transition-all flex items-center justify-center">
                {renderStatIcon(stat)}
              </span>
              <span className="text-xs font-semibold text-[#9CB080] uppercase tracking-wider">
                Live Stat
              </span>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-[#9CB080] transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-[#f1f5f0] mt-1">{stat.label}</div>
              <div className="text-xs text-[#CBD5C0] mt-0.5">{stat.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
