/**
 * DashboardStats Component
 * Demonstrates:
 * - Functional Component
 * - Props (`stats` array)
 * - Custom CSS Glassmorphism
 */
export default function DashboardStats({ stats = [] }) {
  return (
    <section className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white tracking-tight">Dashboard Overview</h2>
        <p className="text-sm text-slate-400">Key metrics and development statistics</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="glass-panel p-6 rounded-2xl flex flex-col justify-between group cursor-default transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl p-3 bg-indigo-950/60 rounded-xl border border-indigo-800/40 group-hover:scale-110 transition-transform">
                {stat.icon}
              </span>
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                Live Stat
              </span>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">{stat.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{stat.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
