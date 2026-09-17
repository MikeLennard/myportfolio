import TechIcon from '../common/TechIcon';

/**
 * CertificateCard Component
 * Displays verified certification with issuer, credential ID, skills, and preview modal trigger.
 * Styled with custom palette (#9CB080, #618764, #2B5748, #273338).
 */
export default function CertificateCard({ certificate, onSelectCertificate }) {
  const { title, issuer, issueDate, credentialId, image, skills = [] } = certificate;

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
      {/* Thumbnail Banner with Verified Ribbon */}
      <div className="relative h-44 overflow-hidden bg-[#273338]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#273338] via-[#273338]/40 to-transparent"></div>

        {/* Verified Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#273338]/90 border border-[#9CB080]/40 text-[#9CB080] text-[11px] font-semibold backdrop-blur-md">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Verified Credential</span>
        </div>

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

          {/* Credential ID and Date */}
          <div className="flex items-center justify-between text-xs text-[#CBD5C0]">
            <span className="font-mono text-[11px] text-[#9CB080]/90">ID: {credentialId}</span>
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
