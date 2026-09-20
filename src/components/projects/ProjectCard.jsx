import TechIcon from '../common/TechIcon';

export default function ProjectCard({ project, onSelectProject }) {
  const { title, year, image, images, tags = [] } = project;

  // Resolve list of images defensively (handles array, string, or 'public/' prefix)
  const rawList = Array.isArray(images) && images.length > 0
    ? images
    : Array.isArray(image)
      ? image
      : image
        ? [image]
        : [];

  const normalizedImages = rawList
    .filter(Boolean)
    .map(img => (typeof img === 'string' && img.startsWith('public/') ? '/' + img.slice(7) : img));

  const thumbnail = normalizedImages[0] || (typeof image === 'string' ? image : '');
  const imageCount = normalizedImages.length;

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
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#273338] via-transparent to-transparent"></div>

        {/* Year badge */}
        {year && (
          <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#273338]/90 text-[#9CB080] border border-[#2B5748] backdrop-blur-md shadow-md flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#9CB080]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{year}</span>
          </div>
        )}

        {/* Multi-image indicator badge */}
        {imageCount > 1 && (
          <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-lg text-[11px] font-medium bg-[#273338]/90 text-[#CBD5C0] border border-[#2B5748] backdrop-blur-sm flex items-center gap-1.5 shadow-md">
            <svg className="w-3.5 h-3.5 text-[#9CB080]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{imageCount} photos</span>
          </div>
        )}
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
