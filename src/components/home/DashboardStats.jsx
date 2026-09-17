/**
 * DashboardStats Component
 * Demonstrates:
 * - Functional Component
 * - Props (`stats` array)
 * - Custom CSS Glassmorphism with user palette (#9CB080, #618764, #2B5748, #273338)
 */
const renderStatIcon = (stat) => {
  if (stat.id === 1 || stat.label.toLowerCase().includes('project')) {
    return (
      <svg className="w-6 h-6 text-[#9CB080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    );
  }
  if (stat.id === 2 || stat.label.toLowerCase().includes('technolog')) {
    return (
      <svg className="w-6 h-6 text-[#F7DF1E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    );
  }
  if (stat.id === 3 || stat.label.toLowerCase().includes('github') || stat.label.toLowerCase().includes('commit')) {
    return (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }
  return (
    <svg className="w-6 h-6 text-[#FFD62E]" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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
