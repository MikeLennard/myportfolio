import { useState } from 'react';
import Badge from '../common/Badge';

/**
 * QuickSkills Component
 * Demonstrates:
 * - Functional Component
 * - Props (`skills` object)
 * - State (`selectedCategory`)
 * - Event Handling (`onClick`)
 */
export default function QuickSkills({ skills }) {
  const [activeTab, setActiveTab] = useState('frontend');

  const tabs = [
    { key: 'frontend', label: 'Frontend Stack' },
    { key: 'backend', label: 'Backend & DB' },
    { key: 'tools', label: 'Tools & DevOps' }
  ];

  const currentSkills = skills[activeTab] || [];

  return (
    <section className="py-12 border-t border-slate-800/80">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <Badge text="Technologies" variant="accent" size="sm" />
        <h2 className="text-3xl font-extrabold text-white mt-2">Technical Proficiency</h2>
        <p className="text-sm text-slate-400 mt-1">
          Languages, frameworks, and developer toolkits I work with daily
        </p>
      </div>

      {/* Category selector tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex bg-slate-900 p-1.5 rounded-2xl border border-slate-800 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                  : 'text-slate-400 hover:text-white'
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
            className="glass-panel p-4 rounded-xl flex items-center justify-between group hover:border-indigo-500/40 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl p-2 rounded-lg bg-slate-800 group-hover:scale-110 transition-transform">
                {skill.icon}
              </span>
              <span className="font-semibold text-slate-200 text-sm">{skill.name}</span>
            </div>
            <div className="text-xs font-mono font-bold text-indigo-400">
              {skill.level}%
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
