import { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectModal from '../components/projects/ProjectModal';
import Badge from '../components/common/Badge';

/**
 * Projects Page Component
 * Demonstrates:
 * - Functional Component
 * - State Management (`selectedProject`)
 * - Event Handling (modal preview)
 * - Props Passing to Child Components
 */
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-4 tracking-tight">
          Featured <span className="gradient-text">Projects & Work</span>
        </h1>
        <p className="text-[#CBD5C0] text-base sm:text-lg leading-relaxed">
          A showcase of capstone and academic development projects.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelectProject={setSelectedProject}
          />
        ))}
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

