import { useState, useMemo } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectFilter from '../components/projects/ProjectFilter';
import ProjectModal from '../components/projects/ProjectModal';
import Badge from '../components/common/Badge';

/**
 * Projects Page Component
 * Demonstrates:
 * - Functional Component
 * - State Management (`activeCategory`, `searchQuery`, `selectedProject`)
 * - Event Handling (filter tabs, real-time search, modal preview)
 * - Props Passing to Child Components
 */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  // Extract unique categories
  const categories = useMemo(() => {
    return ['All', ...new Set(projectsData.map((p) => p.category))];
  }, []);

  // Filter projects based on active category and search query
  const filteredProjects = useMemo(() => {
    return projectsData.filter((proj) => {
      const matchesCategory = activeCategory === 'All' || proj.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        proj.title.toLowerCase().includes(query) ||
        proj.shortDesc.toLowerCase().includes(query) ||
        proj.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Badge text="Portfolio Gallery" variant="primary" size="md" />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-4 tracking-tight">
          Featured <span className="gradient-text">Projects & Work</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          A showcase of full-stack web applications, interactive frontend interfaces, and software projects developed with modern frameworks and clean architecture.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <ProjectFilter
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        resultCount={filteredProjects.length}
      />

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={setSelectedProject}
            />
          ))}
        </div>
      ) : (
        <div className="glass-panel text-center py-16 px-4 rounded-2xl">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#2B5748]/60 border border-[#618764]/40 flex items-center justify-center text-[#9CB080]">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-white mb-1">No Projects Found</h3>
          <p className="text-slate-400 text-sm mb-4">
            No projects matched your search criteria "{searchQuery}" in category "{activeCategory}".
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#618764] to-[#2B5748] hover:from-[#9CB080] hover:to-[#618764] rounded-xl transition-colors cursor-pointer shadow-md"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
