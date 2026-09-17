import { Link } from 'react-router-dom';
import ProjectCard from '../projects/ProjectCard';

/**
 * FeaturedProjects Component
 * Styled with custom palette (#9CB080, #618764, #2B5748, #273338)
 */
export default function FeaturedProjects({ projects = [], onSelectProject }) {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-12 border-t border-[#2B5748]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#9CB080]">Highlights</span>
          <h2 className="text-3xl font-extrabold text-white mt-1">Featured Works</h2>
        </div>

        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9CB080] hover:text-white transition-colors"
        >
          <span>View All Projects</span>
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((proj) => (
          <ProjectCard
            key={proj.id}
            project={proj}
            onSelectProject={onSelectProject}
          />
        ))}
      </div>
    </section>
  );
}
