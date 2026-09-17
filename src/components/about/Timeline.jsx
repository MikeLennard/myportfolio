import { useState } from 'react';
import Badge from '../common/Badge';

/**
 * Timeline Component
 * Demonstrates:
 * - Functional Component
 * - Props (`items`)
 * - State (`filter`)
 * - Event Handling (`onClick`)
 * - Custom CSS timeline line styling
 */
export default function Timeline({ items = [] }) {
  const [filter, setFilter] = useState('all');

  const filteredItems = items.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <div className="space-y-6">
      {/* Filter Buttons */}
      <div className="flex items-center gap-2">
        {['all', 'education', 'experience'].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setFilter(type)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
              filter === type
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Timeline items list */}
      <div className="relative pl-6 border-l-2 border-indigo-600/40 space-y-8 my-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline node dot */}
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-slate-950 group-hover:scale-125 transition-transform"></div>

            <div className="glass-panel p-5 rounded-2xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-950/80 px-2.5 py-0.5 rounded-md border border-indigo-800/40">
                  {item.year}
                </span>
                <Badge
                  text={item.type.toUpperCase()}
                  variant={item.type === 'education' ? 'primary' : 'success'}
                  size="sm"
                />
              </div>

              <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                {item.role}
              </h4>
              <p className="text-xs font-medium text-slate-400 mb-2">{item.institution}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
