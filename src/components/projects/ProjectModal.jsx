import Modal from '../common/Modal';
import Badge from '../common/Badge';

/**
 * ProjectModal Component
 * Styled with custom palette (#9CB080, #618764, #2B5748, #273338)
 */
export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const { title, category, fullDesc, image, tags, github, demo, highlights } = project;

  return (
    <Modal isOpen={!!project} onClose={onClose} title={title}>
      <div className="space-y-6">
        {/* Banner */}
        <div className="relative h-64 rounded-xl overflow-hidden bg-[#273338]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3">
            <Badge text={category} variant="primary" size="md" />
          </div>
        </div>

        {/* Overview */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#9CB080] mb-2">Project Overview</h4>
          <p className="text-[#f1f5f0] leading-relaxed text-sm">
            {fullDesc}
          </p>
        </div>

        {/* Key Highlights */}
        {highlights && highlights.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#9CB080] mb-2">Key Highlights</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[#f1f5f0] bg-[#273338] p-2.5 rounded-lg border border-[#2B5748]">
                  <span className="text-[#9CB080] font-bold">✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#9CB080] mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((t, idx) => (
              <Badge key={idx} text={t} variant="accent" size="sm" />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#2B5748] flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#CBD5C0] hover:text-white bg-[#273338] hover:bg-[#2B5748] rounded-xl transition-colors cursor-pointer border border-[#2B5748]"
          >
            Close
          </button>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 text-xs font-semibold text-[#f1f5f0] bg-[#273338] hover:bg-[#2B5748] border border-[#2B5748] rounded-xl transition-colors"
            >
              Source Code ↗
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#618764] to-[#2B5748] hover:from-[#9CB080] hover:to-[#618764] rounded-xl shadow-lg shadow-[#2B5748]/40 transition-colors"
            >
              Launch Live Demo 🚀
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
}
