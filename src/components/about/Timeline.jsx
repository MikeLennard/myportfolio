import { useState } from 'react';
import Badge from '../common/Badge';

/**
 * Timeline Component
 * Styled with user palette (#9CB080, #618764, #2B5748, #273338)
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
                ? 'bg-[#2B5748] text-[#9CB080] border border-[#9CB080]/40 shadow-md'
                : 'bg-[#273338] text-[#CBD5C0] hover:text-white border border-[#2B5748]'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Timeline items list */}
      <div className="relative pl-6 border-l-2 border-[#618764]/40 space-y-8 my-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline node dot */}
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#9CB080] border-4 border-[#273338] group-hover:scale-125 transition-transform"></div>

            <div className="glass-panel p-5 rounded-2xl hover:border-[#9CB080]/50">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#9CB080] bg-[#2B5748] px-2.5 py-0.5 rounded-md border border-[#618764]/40">
                  {item.year}
                </span>
                <Badge
                  text={item.type.toUpperCase()}
                  variant={item.type === 'education' ? 'primary' : 'success'}
                  size="sm"
                />
              </div>

              <h4 className="text-lg font-bold text-white group-hover:text-[#9CB080] transition-colors">
                {item.role}
              </h4>
              <p className="text-xs font-medium text-[#CBD5C0] mb-2">{item.institution}</p>
              <p className="text-sm text-[#f1f5f0] leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
