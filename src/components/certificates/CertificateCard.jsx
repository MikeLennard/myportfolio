import TechIcon from '../common/TechIcon';

export default function CertificateCard({ certificate, onSelectCertificate }) {
  const { title, issuer, issueDate, image, images = [], skills = [] } = certificate;

  const allImages = images.length > 0 ? images : (image ? [image] : []);
  const displayImage = allImages[0] || '';
  const hasMultipleImages = allImages.length > 1;

  return (
    <div
      onClick={() => onSelectCertificate(certificate)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectCertificate(certificate);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View certificate details for ${title}`}
      className="glass-panel rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1.5 hover:border-[#9CB080]/50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#9CB080]/60"
    >
      {/* Thumbnail Banner */}
      <div className="relative h-44 overflow-hidden bg-[#273338]">
        <img
          src={displayImage}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#273338] via-[#273338]/40 to-transparent"></div>

        {/* Multi-Document Count Badge */}
        {hasMultipleImages && (
          <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-md bg-[#273338]/90 border border-[#9CB080]/40 text-[#9CB080] text-[11px] font-semibold flex items-center gap-1 backdrop-blur-sm shadow-md">
            <span>{allImages.length} photos</span>
          </div>
        )}

        {/* Issuer Tag */}
        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-lg bg-[#2B5748]/80 text-[#CBD5C0] text-[10px] font-medium border border-[#618764]/40">
          {issuer}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-3.5">
        <div>
          {/* Certificate Title */}
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#9CB080] transition-colors leading-snug mb-1.5">
            {title}
          </h3>

          {/* Issued Date */}
          <div className="text-xs text-[#CBD5C0]">
            <span>Issued {issueDate}</span>
          </div>
        </div>

        {/* Skills Covered with SVG Tech Icons */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#273338] text-[#CBD5C0] border border-[#2B5748] group-hover:border-[#618764]/60 transition-colors"
            >
              <TechIcon name={skill} className="w-3.5 h-3.5" />
              <span>{skill}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
