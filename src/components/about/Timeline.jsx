import { useState } from 'react';

/**
 * Timeline Component
 * Styled with user palette (#9CB080, #618764, #2B5748, #273338)
 * Sorted chronologically by year with toggle support
 */
export default function Timeline({ items = [] }) {
  const [filter, setFilter] = useState('all');
  const [sortAscending, setSortAscending] = useState(false); // default: Newest first

  const filterTabs = [
    { key: 'all', label: 'All' },
    { key: 'education', label: 'Education' },
    { key: 'development', label: 'Development' },
    { key: 'video-editing', label: 'Video Editing' }
  ];

  const filteredItems = items.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  const typePriority = {
    'education': 1,
    'development': 2,
    'experience': 2,
    'video-editing': 3
  };

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (filter === 'all') {
      const priorityA = typePriority[a.type] || 99;
      const priorityB = typePriority[b.type] || 99;
      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }
    }
    const orderA = a.sortOrder || 0;
    const orderB = b.sortOrder || 0;
    return sortAscending ? orderA - orderB : orderB - orderA;
  });


  const getDotStyle = (type) => {
    if (type === 'video-editing') {
      return 'bg-[#9CB080] ring-2 ring-[#9CB080]/60';
    }
    if (type === 'education') {
      return 'bg-[#618764]';
    }
    return 'bg-[#9CB080]';
  };

  return (
    <div className="space-y-6">
      {/* Filter and Sort Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {filterTabs.map((tab) => {
            const count = tab.key === 'all' 
              ? items.length 
              : items.filter((i) => i.type === tab.key).length;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setFilter(tab.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 ${
                  filter === tab.key
                    ? 'bg-[#2B5748] text-[#9CB080] border border-[#9CB080]/40 shadow-md'
                    : 'bg-[#273338] text-[#CBD5C0] hover:text-white border border-[#2B5748]'
                }`}
              >
                <span>{tab.label}</span>
                <span className="text-[10px] opacity-75 font-mono">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Sort Order Toggle */}
        <button
          type="button"
          onClick={() => setSortAscending(!sortAscending)}
          className="px-3 py-1.5 rounded-xl text-xs font-medium text-[#CBD5C0] hover:text-white bg-[#273338] hover:bg-[#2B5748] border border-[#2B5748] transition-colors cursor-pointer flex items-center gap-1.5"
          title={sortAscending ? "Switch to Newest First" : "Switch to Oldest First"}
        >
          <svg className="w-3.5 h-3.5 text-[#9CB080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          <span>{sortAscending ? "Oldest → Newest" : "Newest → Oldest"}</span>
        </button>
      </div>

      {/* Timeline items list */}
      <div className="relative pl-6 border-l-2 border-[#618764]/40 space-y-8 my-4">
        {sortedItems.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline node dot */}
            <div
              className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-4 border-[#273338] group-hover:scale-125 transition-transform ${getDotStyle(
                item.type
              )}`}
            ></div>

            <div className="glass-panel p-5 rounded-2xl hover:border-[#9CB080]/50 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#9CB080] bg-[#2B5748] px-2.5 py-0.5 rounded-md border border-[#618764]/40">
                  {item.year}
                </span>
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
