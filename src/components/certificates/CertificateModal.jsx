import { useState, useEffect } from 'react';
import Modal from '../common/Modal';
import TechIcon from '../common/TechIcon';

/**
 * CertificateModal Component
 * Shows full verification details, large preview image gallery, issuer, and validation link.
 * Styled with custom palette (#9CB080, #618764, #2B5748, #273338).
 */
export default function CertificateModal({ certificate, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevCertId, setPrevCertId] = useState(certificate?.id);

  if (certificate?.id !== prevCertId) {
    setPrevCertId(certificate?.id);
    setCurrentImageIndex(0);
  }

  const rawImages = certificate?.images?.length > 0
    ? certificate.images
    : (certificate?.image ? [certificate.image] : []);

  const sanitizePath = (p) => {
    if (!p) return '';
    if (p.startsWith('http://') || p.startsWith('https://')) return p;
    if (p.startsWith('public/')) return `/${p.slice(7)}`;
    if (!p.startsWith('/')) return `/${p}`;
    return p;
  };

  const images = rawImages.map(sanitizePath);
  const totalImages = images.length;
  const currentImage = images[currentImageIndex] || images[0] || '';

  // Keyboard navigation for multi-image certificates
  useEffect(() => {
    if (!certificate || totalImages <= 1) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % totalImages);
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [certificate, totalImages]);

  if (!certificate) return null;

  const { title, issuer, issueDate, skills = [], description } = certificate;

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  return (
    <Modal isOpen={!!certificate} onClose={onClose} title={title}>
      <div className="space-y-6">
        {/* Certificate Preview Image Container */}
        <div className="space-y-3">
          <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden bg-[#1c262a] border border-[#2B5748] flex items-center justify-center group">
            {currentImage ? (
              <img
                src={currentImage}
                alt={`${title} - Document ${currentImageIndex + 1}`}
                className="w-full h-full object-contain transition-all duration-300"
              />
            ) : (
              <div className="text-sm text-[#CBD5C0]">No preview available</div>
            )}

            {/* Carousel Controls if multiple images */}
            {totalImages > 1 && (
              <>
                {/* Slide Counter */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#273338]/90 border border-[#9CB080]/40 text-[#CBD5C0] text-xs font-mono font-semibold backdrop-blur-md z-10">
                  {currentImageIndex + 1} / {totalImages}
                </div>

                {/* Left Arrow Button */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#273338]/90 hover:bg-[#2B5748] text-white border border-[#9CB080]/40 flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-105 z-10 cursor-pointer shadow-lg"
                  aria-label="Previous certificate document"
                >
                  <svg className="w-5 h-5 text-[#9CB080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Right Arrow Button */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#273338]/90 hover:bg-[#2B5748] text-white border border-[#9CB080]/40 flex items-center justify-center transition-all opacity-80 hover:opacity-100 hover:scale-105 z-10 cursor-pointer shadow-lg"
                  aria-label="Next certificate document"
                >
                  <svg className="w-5 h-5 text-[#9CB080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Clickable Mini-Thumbnail Strip */}
          {totalImages > 1 && (
            <div className="flex items-center gap-2.5 overflow-x-auto pb-1 pt-0.5">
              {images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer bg-[#273338] ${
                    idx === currentImageIndex
                      ? 'border-[#9CB080] ring-2 ring-[#9CB080]/40 scale-105'
                      : 'border-[#2B5748] opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Select certificate ${idx + 1}`}
                >
                  <img
                    src={imgUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-0.5 right-1 text-[9px] font-mono font-bold text-white drop-shadow">
                    #{idx + 1}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Certificate Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-[#273338] p-3.5 rounded-xl border border-[#2B5748]">
            <div className="text-[11px] text-[#CBD5C0]">Issuing Body</div>
            <div className="text-sm font-bold text-white mt-0.5">{issuer}</div>
          </div>
          <div className="bg-[#273338] p-3.5 rounded-xl border border-[#2B5748]">
            <div className="text-[11px] text-[#CBD5C0]">Issued Date</div>
            <div className="text-sm font-bold text-white mt-0.5">{issueDate}</div>
          </div>
        </div>

        {/* Overview */}
        {description && (
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#9CB080] mb-2">Curriculum & Scope</h4>
            <p className="text-[#f1f5f0] leading-relaxed text-sm">
              {description}
            </p>
          </div>
        )}

        {/* Skills Validated */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#9CB080] mb-2">Competencies Validated</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-[#273338] text-[#CBD5C0] border border-[#2B5748]"
              >
                <TechIcon name={skill} className="w-3.5 h-3.5" />
                <span>{skill}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-[#2B5748] flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-[#CBD5C0] hover:text-white bg-[#273338] hover:bg-[#2B5748] rounded-xl transition-colors cursor-pointer border border-[#2B5748]"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}
