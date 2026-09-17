import TechIcon from '../common/TechIcon';

/**
 * ProjectCard Component
 * Simplified layout: image, title with view details, and technologies used
 * Styled with custom palette (#9CB080, #618764, #2B5748, #273338)
 */
export default function ProjectCard({ project, onSelectProject }) {
  const { title, image, tags = [] } = project;

  return (
    <div
      onClick={() => onSelectProject(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectProject(project);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${title}`}
      className="glass-panel rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1.5 hover:border-[#9CB080]/50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#9CB080]/60"
    >
      {/* Thumbnail Banner */}
      <div className="relative h-48 overflow-hidden bg-[#273338]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#273338] via-transparent to-transparent"></div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-3.5">
        {/* Full-width Title */}
        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#9CB080] transition-colors leading-snug">
          {title}
        </h3>

        {/* Technologies Used with SVG Icons */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#273338] text-[#CBD5C0] border border-[#2B5748] group-hover:border-[#618764]/60 transition-colors"
            >
              <TechIcon name={tag} className="w-3.5 h-3.5" />
              <span>{tag}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
