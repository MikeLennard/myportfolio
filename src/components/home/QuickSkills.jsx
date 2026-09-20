import { useState, useMemo } from 'react';
import Badge from '../common/Badge';
import TechIcon from '../common/TechIcon';

/**
 * QuickSkills Component
 * Styled with custom palette (#9CB080, #618764, #2B5748, #273338)
 */
export default function QuickSkills({ skills = {} }) {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { key: 'all', label: 'All' },
    { key: 'frontend', label: 'Frontend & Web' },
    { key: 'backend', label: 'Backend & Core' }
  ];

  const allSkills = useMemo(() => {
    const list = Object.values(skills).flat();
    const seen = new Set();
    return list.filter((item) => {
      if (!item?.name) return false;
      const lower = item.name.toLowerCase();
      if (seen.has(lower)) return false;
      seen.add(lower);
      return true;
    });
  }, [skills]);

  const currentSkills = activeTab === 'all' 
    ? (skills.all || allSkills) 
    : (skills[activeTab] || []);

  return (
    <section className="py-12 border-t border-[#2B5748]">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-3xl font-extrabold text-white mt-2">TechStack & Tools</h2>
        <p className="text-sm text-[#CBD5C0] mt-1">
          Languages, frameworks, and developer toolkits I work with daily
        </p>
      </div>

      {/* Category selector tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex bg-[#273338] p-1.5 rounded-2xl border border-[#2B5748] gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${activeTab === tab.key
                ? 'bg-[#2B5748] text-[#9CB080] border border-[#9CB080]/40 shadow-md'
                : 'text-[#CBD5C0] hover:text-white'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {currentSkills.map((skill, index) => (
          <div
            key={index}
            className="glass-panel p-4 rounded-xl flex items-center gap-3.5 group hover:border-[#9CB080]/50 transition-all"
          >
            <span className="p-2.5 rounded-xl bg-[#2B5748]/60 border border-[#618764]/30 group-hover:scale-110 group-hover:border-[#9CB080]/50 transition-all flex items-center justify-center shrink-0">
              <TechIcon name={skill.name} className="w-5 h-5" />
            </span>
            <span className="font-semibold text-slate-200 text-sm group-hover:text-[#9CB080] transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
