import Badge from '../common/Badge';

/**
 * ProjectCard Component
 * Demonstrates:
 * - Functional Component
 * - Props receiving project data and callback
 * - Event Handling (onClick for modal preview)
 */
export default function ProjectCard({ project, onSelectProject }) {
  const { title, category, shortDesc, image, tags, github, demo, featured } = project;

  return (
    <div className="glass-panel rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1.5">
      {/* Thumbnail Banner */}
      <div className="relative h-48 overflow-hidden bg-slate-900">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

        {/* Category & Featured Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge text={category} variant="primary" size="sm" />
          {featured && <Badge text="⭐ Featured" variant="warning" size="sm" />}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {shortDesc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {tags.slice(0, 4).map((tag, idx) => (
              <Badge key={idx} text={tag} variant="default" size="sm" />
            ))}
            {tags.length > 4 && (
              <span className="text-xs text-slate-400 self-center">+{tags.length - 4} more</span>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => onSelectProject(project)}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>View Details</span>
            <span>→</span>
          </button>

          <div className="flex items-center gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors text-sm"
                title="GitHub Repository"
              >
                Code ↗
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 text-xs font-medium rounded-lg bg-indigo-600/80 hover:bg-indigo-600 text-white transition-colors"
                title="Live Demo"
              >
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
