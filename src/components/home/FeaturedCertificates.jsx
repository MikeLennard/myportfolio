import { Link } from 'react-router-dom';
import CertificateCard from '../certificates/CertificateCard';

export default function FeaturedCertificates({ certificates = [], onSelectCertificate }) {
  const featured = certificates.filter((c) => c.featured).slice(0, 3);

  return (
    <section className="py-12 border-t border-[#2B5748]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#9CB080]">Accreditations</span>
          <h2 className="text-3xl font-extrabold text-white mt-1">Licenses & Certifications</h2>
        </div>

        <Link
          to="/about#certificates"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9CB080] hover:text-white transition-colors"
        >
          <span>View All Credentials</span>
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((cert) => (
          <CertificateCard
            key={cert.id}
            certificate={cert}
            onSelectCertificate={onSelectCertificate}
          />
        ))}
      </div>
    </section>
  );
}
