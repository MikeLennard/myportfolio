import { useState } from 'react';

/**
 * SkillsMatrix Component
 * Demonstrates:
 * - Functional Component
 * - Props (`skills`)
 * - State (`activeCategory`)
 * - Event Handling (`onClick`)
 * - Custom animated progress bars
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
    <div className="glass-panel p-6 rounded-2xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <h3 className="text-lg font-bold text-white">Skill Proficiency Matrix</h3>

        {/* Tab Buttons */}
        <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 gap-1">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-white'
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
              <span className="flex items-center gap-2 text-slate-200">
                <span>{skill.icon}</span>
                <span>{skill.name}</span>
              </span>
              <span className="font-mono text-indigo-400">{skill.level}%</span>
            </div>

            {/* Progress track */}
            <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <div
                className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 rounded-full progress-bar-animated transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
