import { useState } from 'react';
import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import QuickSkills from '../components/home/QuickSkills';
import ProjectModal from '../components/projects/ProjectModal';
import { projectsData, skillsData } from '../data/portfolioData';

/**
 * Home / Dashboard Page Component
 * Demonstrates:
 * - Functional Component
 * - Props support (`props.class`)
 * - State Management (`selectedProject`)
 * - Event Handling (modal controls, exploration)
 * - Rich Custom UI + Tailwind
 */
const Home = (props) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ${props.class || ''}`}>
      {/* Hero Showcase */}
      <Hero />

      {/* Featured Projects Highlight */}
      <FeaturedProjects
        projects={projectsData}
        onSelectProject={setSelectedProject}
      />

      {/* Quick Skills Stack */}
      <QuickSkills skills={skillsData} />

      {/* Modal Preview for Featured Projects */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Home;
