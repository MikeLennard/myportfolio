import { useState } from 'react';

/**
 * SkillsMatrix Component
 * Styled with custom palette (#9CB080, #618764, #2B5748, #273338)
 */
export default function SkillsMatrix({ skills }) {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = [
    { key: 'frontend', name: 'Frontend Tech' },
    { key: 'backend', name: 'Backend & APIs' },
    { key: 'tools', name: 'Dev Tools & Cloud' }
  ];

  const currentSkills = skills[activeCategory] || [];

  return (
    <div className="glass-panel p-6 rounded-2xl space-y-6 hover:border-[#9CB080]/50">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#2B5748]">
        <h3 className="text-lg font-bold text-white">Skill Proficiency Matrix</h3>

        {/* Tab Buttons */}
        <div className="flex bg-[#273338] p-1 rounded-xl border border-[#2B5748] gap-1">
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

      {/* Progress Bars */}
      <div className="space-y-4">
        {currentSkills.map((skill, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="flex items-center gap-2 text-[#f1f5f0]">
                <span>{skill.icon}</span>
                <span>{skill.name}</span>
              </span>
              <span className="font-mono text-[#9CB080]">{skill.level}%</span>
            </div>

            {/* Progress track */}
            <div className="w-full h-2.5 bg-[#273338] rounded-full overflow-hidden border border-[#2B5748]">
              <div
                className="h-full bg-gradient-to-r from-[#2B5748] via-[#618764] to-[#9CB080] rounded-full progress-bar-animated transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
