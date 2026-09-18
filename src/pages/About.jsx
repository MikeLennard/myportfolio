import { useState, useEffect } from 'react';
import Timeline from '../components/about/Timeline';
import SkillsMatrix from '../components/about/SkillsMatrix';
import CertificateCard from '../components/certificates/CertificateCard';
import CertificateModal from '../components/certificates/CertificateModal';
import Badge from '../components/common/Badge';
import { personalInfo, educationAndTimeline, skillsData, certificatesData } from '../data/portfolioData';

/**
 * About Page Component
 * Demonstrates:
 * - Functional Component
 * - Props support (`props.class`)
 * - Composition of child components (Timeline, SkillsMatrix, Certificates, Badges)
 * - Custom CSS + Tailwind styling
 */
const About = (props) => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    if (window.location.hash === '#certificates') {
      const el = document.getElementById('certificates');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, []);

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn ${props.class || ''}`}>
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge text="About Me" variant="primary" size="md" />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-4 tracking-tight">
          Passionate About <span className="gradient-text">Web Architecture</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Here is a deeper look into my background, core competencies, and career journey in software engineering.
        </p>
      </div>

      {/* Bio Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
        {/* Bio Text */}
        <div className="lg:col-span-7 glass-panel p-8 rounded-3xl space-y-4">
          <span className="text-xs uppercase tracking-wider text-[#9CB080] font-semibold">
            Background & Ambition
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Transforming Ideas into Functional, Elegant Realities
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Hello! I'm <strong className="text-white">{personalInfo.name}</strong>, a developer based in {personalInfo.location}. My fascination with technology began when I realized how a few lines of code could create interactive tools used by people across the globe.
          </p>
          <p className="text-slate-400 leading-relaxed text-sm">
            I develop full-stack web solutions and cross-platform mobile apps with Flutter, Dart, React, and PHP, supported by well-structured database systems. Along with software engineering, I am passionate about creative media—serving as Head Video Editor and multimedia director for student council initiatives.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <div className="bg-[#273338] border border-[#2B5748] px-4 py-2 rounded-xl text-xs">
              <span className="text-[#CBD5C0]">Location:</span>{' '}
              <span className="text-white font-medium">{personalInfo.location}</span>
            </div>
            <div className="bg-[#273338] border border-[#2B5748] px-4 py-2 rounded-xl text-xs">
              <span className="text-[#CBD5C0]">Status:</span>{' '}
              <span className="text-[#9CB080] font-medium">University Scholar</span>
            </div>
            <div className="bg-[#273338] border border-[#2B5748] px-4 py-2 rounded-xl text-xs">
              <span className="text-[#CBD5C0]">Primary Focus:</span>{' '}
              <span className="text-[#9CB080] font-medium">Web, Mobile & Video Media</span>
            </div>
          </div>
        </div>

        {/* Quick Highlights / Image Placeholder Box */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="glass-panel p-6 rounded-3xl border border-[#9CB080]/30 glow-border">
            <h3 className="text-lg font-bold text-white mb-2">Key Highlights</h3>
            <ul className="space-y-3 text-sm text-[#f1f5f0]">
              <li className="flex items-center gap-2">
                <span className="text-[#9CB080] font-bold">✓</span>
                Consistent College Scholar - University Scholar at CLSU
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9CB080] font-bold">✓</span>
                Full-Stack Web & Mobile (React, Flutter, Dart, PHP, MySQL)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9CB080] font-bold">✓</span>
                Head Video Editor for CLSU BSIT Multimedia Team & IMG
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9CB080] font-bold">✓</span>
                Group Project Developer & Indigenous Peoples Capstone Lead
              </li>
            </ul>
          </div>

          <div className="glass-panel p-6 rounded-3xl bg-gradient-to-br from-[#2B5748]/50 to-[#273338]">
            <h4 className="text-sm font-semibold text-[#f1f5f0] mb-1">Looking for a collaborator?</h4>
            <p className="text-xs text-[#CBD5C0] mb-3">
              Feel free to reach out for project inquiries, tech discussions, or freelance gigs.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block text-xs font-bold text-[#9CB080] hover:text-white transition-colors"
            >
              {personalInfo.email} →
            </a>
          </div>
        </div>
      </div>


      {/* Skills & Timeline Split Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Timeline on the Left */}
        <div className="lg:col-span-7">
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9CB080]">Milestones</span>
            <h2 className="text-2xl font-bold text-white mt-1">Education & Experience</h2>
          </div>
          <Timeline items={educationAndTimeline} />
        </div>

        {/* Skills Matrix on the Right */}
        <div className="lg:col-span-5">
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9CB080]">Proficiency</span>
            <h2 className="text-2xl font-bold text-white mt-1">Technical Skills</h2>
          </div>
          <SkillsMatrix skills={skillsData} />
        </div>
      </div>

      {/* Licenses & Certifications Section */}
      <section id="certificates" className="mt-16 pt-12 border-t border-[#2B5748] scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9CB080]">Accreditations</span>
            <h2 className="text-3xl font-extrabold text-white mt-1">Licenses & Certifications</h2>
            <p className="text-[#CBD5C0] text-sm mt-1">
              Verified credentials and national accreditations across Web Development, Networking, Cisco Systems, Data Analytics, and IT Support
            </p>
          </div>
          <span className="text-xs text-[#CBD5C0] bg-[#273338] px-3.5 py-1.5 rounded-xl border border-[#2B5748] self-start sm:self-auto font-medium">
            {certificatesData.length} Verified Credentials
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert) => (
            <CertificateCard
              key={cert.id}
              certificate={cert}
              onSelectCertificate={setSelectedCertificate}
            />
          ))}
        </div>
      </section>

      {/* Certificate Modal Preview */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </div>
  );
};

export default About;