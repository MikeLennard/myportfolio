import { useState, useEffect } from 'react';
import Modal from '../common/Modal';
import Badge from '../common/Badge';

/**
 * ProjectModal Component
 * Styled with custom palette (#9CB080, #618764, #2B5748, #273338)
 */
export default function ProjectModal({ project, onClose }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [prevProjectId, setPrevProjectId] = useState(project?.id);

  if (project?.id !== prevProjectId) {
    setPrevProjectId(project?.id);
    setActiveIdx(0);
  }

  // Safely extract properties
  const title = project?.title || '';
  const year = project?.year || '';
  const category = project?.category || '';
  const fullDesc = project?.fullDesc || '';
  const tags = project?.tags || [];
  const demo = project?.demo || null;
  const highlights = project?.highlights || [];

  // Resolve list of images defensively
  const rawList = Array.isArray(project?.images) && project.images.length > 0
    ? project.images
    : Array.isArray(project?.image)
      ? project.image
      : project?.image
        ? [project.image]
        : [];

  const imageList = rawList
    .filter(Boolean)
    .map(img => (typeof img === 'string' && img.startsWith('public/') ? '/' + img.slice(7) : img));

  const hasMultipleImages = imageList.length > 1;
  const currentImg = imageList[activeIdx] || imageList[0] || '';

  const handlePrev = (e) => {
    e?.stopPropagation();
    setActiveIdx((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setActiveIdx((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation when modal is open and has multiple images
  useEffect(() => {
    if (!project || !hasMultipleImages) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setActiveIdx((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveIdx((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, hasMultipleImages, imageList.length]);

  if (!project) return null;

  return (
    <Modal isOpen={!!project} onClose={onClose} title={title}>
      <div className="space-y-6">
        {/* Banner / Interactive Carousel */}
        <div className="space-y-3">
          <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden bg-[#1c2428] border border-[#2B5748]/60 group">
            <img
              key={currentImg}
              src={currentImg}
              alt={`${title} - Screenshot ${activeIdx + 1}`}
              className="w-full h-full object-contain transition-opacity duration-300"
            />

            {/* Badges: Category & Year */}
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
              {category && category !== 'Groupings' && (
                <Badge text={category} variant="primary" size="md" />
              )}
              {year && (
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#273338]/90 text-[#9CB080] border border-[#2B5748] backdrop-blur-md shadow-md flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#9CB080]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{year}</span>
                </span>
              )}
            </div>

            {/* Counter badge (if multiple images) */}
            {hasMultipleImages && (
              <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#273338]/85 text-[#CBD5C0] border border-[#2B5748] backdrop-blur-md shadow-md">
                {activeIdx + 1} / {imageList.length}
              </div>
            )}

            {/* Prev / Next navigation buttons (if multiple images) */}
            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#273338]/85 hover:bg-[#2B5748] text-white border border-[#2B5748] backdrop-blur-sm flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-105 cursor-pointer shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#273338]/85 hover:bg-[#2B5748] text-white border border-[#2B5748] backdrop-blur-sm flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-105 cursor-pointer shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Strip (if multiple images) */}
          {hasMultipleImages && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-0.5">
              {imageList.map((img, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    aria-label={`View photo ${idx + 1}`}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer bg-[#273338] ${
                      isActive
                        ? 'border-[#9CB080] ring-2 ring-[#9CB080]/50 scale-100 opacity-100 shadow-md'
                        : 'border-[#2B5748] opacity-60 hover:opacity-90 hover:border-[#618764]'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Project Meta Details */}
        {(year || project?.role) && (
          <div className="flex flex-wrap items-center gap-2.5 pb-2 border-b border-[#2B5748]/60">
            {year && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#273338] text-[#CBD5C0] border border-[#2B5748]">
                <svg className="w-3.5 h-3.5 text-[#9CB080]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-[#9CB080] font-semibold">Year:</span>
                <span className="text-white font-medium">{year}</span>
              </div>
            )}
            {project?.role && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-[#273338] text-[#CBD5C0] border border-[#2B5748]">
                <span className="text-[#9CB080] font-semibold">Role:</span>
                <span className="text-white font-medium">{project.role}</span>
              </div>
            )}
          </div>
        )}

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
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#618764] to-[#2B5748] hover:from-[#9CB080] hover:to-[#618764] rounded-xl shadow-lg shadow-[#2B5748]/40 transition-colors flex items-center gap-1.5"
            >
              <span>Launch Live Demo</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
}
