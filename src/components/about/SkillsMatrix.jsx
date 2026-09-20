import { useState, useMemo } from 'react';
import TechIcon from '../common/TechIcon';

/**
 * SkillsMatrix Component
 * Styled with custom palette (#9CB080, #618764, #2B5748, #273338)
 * Clean tech chip layout with 'All' filter support
 */
export default function SkillsMatrix({ skills = {} }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { key: 'all', name: 'All' },
    { key: 'frontend', name: 'Frontend' },
    { key: 'backend', name: 'Backend & DB' }
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

  const currentSkills = activeCategory === 'all' 
    ? (skills.all || allSkills) 
    : (skills[activeCategory] || []);

  return (
    <div className="glass-panel p-6 rounded-2xl space-y-6 hover:border-[#9CB080]/50">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#2B5748]">
        <h3 className="text-lg font-bold text-white">Skill Matrix</h3>

        {/* Tab Buttons */}
        <div className="flex flex-wrap bg-[#273338] p-1 rounded-xl border border-[#2B5748] gap-1">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#2B5748] text-[#9CB080] border border-[#9CB080]/40 shadow-md'
                  : 'text-[#CBD5C0] hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        {currentSkills.map((skill, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-3 rounded-xl bg-[#273338]/80 border border-[#2B5748] hover:border-[#9CB080]/50 hover:bg-[#2B5748]/30 transition-all group"
          >
            <span className="w-8 h-8 rounded-lg bg-[#2B5748]/70 border border-[#618764]/40 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
              <TechIcon name={skill.name} className="w-4 h-4" />
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#f1f5f0] group-hover:text-[#9CB080] transition-colors leading-snug">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
