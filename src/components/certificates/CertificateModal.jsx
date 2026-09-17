import Modal from '../common/Modal';
import TechIcon from '../common/TechIcon';

/**
 * CertificateModal Component
 * Shows full verification details, large preview image, issuer, and validation link.
 * Styled with custom palette (#9CB080, #618764, #2B5748, #273338).
 */
export default function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;

  const { title, issuer, issueDate, credentialId, verifyUrl, image, skills = [], description } = certificate;

  return (
    <Modal isOpen={!!certificate} onClose={onClose} title={title}>
      <div className="space-y-6">
        {/* Certificate Preview Image */}
        <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden bg-[#273338] border border-[#2B5748]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#273338]/90 border border-[#9CB080]/50 text-[#9CB080] text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Verified Credential</span>
          </div>
        </div>

        {/* Credential Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-[#273338] p-3.5 rounded-xl border border-[#2B5748]">
            <div className="text-[11px] text-[#CBD5C0]">Issuing Body</div>
            <div className="text-sm font-bold text-white mt-0.5">{issuer}</div>
          </div>
          <div className="bg-[#273338] p-3.5 rounded-xl border border-[#2B5748]">
            <div className="text-[11px] text-[#CBD5C0]">Issued Date</div>
            <div className="text-sm font-bold text-white mt-0.5">{issueDate}</div>
          </div>
          <div className="bg-[#273338] p-3.5 rounded-xl border border-[#2B5748]">
            <div className="text-[11px] text-[#CBD5C0]">Credential ID</div>
            <div className="text-xs font-mono font-bold text-[#9CB080] mt-0.5 break-all">{credentialId}</div>
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
        <div className="pt-4 border-t border-[#2B5748] flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#CBD5C0] hover:text-white bg-[#273338] hover:bg-[#2B5748] rounded-xl transition-colors cursor-pointer border border-[#2B5748]"
          >
            Close
          </button>
          {verifyUrl && (
            <a
              href={verifyUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#618764] to-[#2B5748] hover:from-[#9CB080] hover:to-[#618764] rounded-xl shadow-lg shadow-[#2B5748]/40 transition-colors flex items-center gap-1.5"
            >
              <span>Verify Credential</span>
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
