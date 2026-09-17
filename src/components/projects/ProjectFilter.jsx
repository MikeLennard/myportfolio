/**
 * ProjectFilter Component
 * Demonstrates:
 * - Functional Component
 * - Props (`categories`, `activeCategory`, `onSelectCategory`, `searchQuery`, `onSearchChange`, `resultCount`)
 * - Event Handling (`onChange`, `onClick`)
 */
export default function ProjectFilter({
  categories = [],
  activeCategory = 'All',
  onSelectCategory,
  searchQuery = '',
  onSearchChange,
  resultCount = 0
}) {
  return (
    <div className="glass-panel p-5 rounded-2xl mb-8 space-y-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 border border-indigo-400/40'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects or tags..."
            className="w-full pl-9 pr-8 py-2 bg-slate-900/90 border border-slate-700/70 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white cursor-pointer"
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/60">
        <span>
          Showing <span className="font-semibold text-indigo-400">{resultCount}</span> projects in{' '}
          <span className="text-slate-200 font-medium">"{activeCategory}"</span>
          {searchQuery && (
            <span> matching <span className="text-indigo-300 font-medium">"{searchQuery}"</span></span>
          )}
        </span>
        {(activeCategory !== 'All' || searchQuery) && (
          <button
            type="button"
            onClick={() => {
              onSelectCategory('All');
              onSearchChange('');
            }}
            className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        )}
      </div>
    </div>
  );
}
