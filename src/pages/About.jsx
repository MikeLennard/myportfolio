import { useState, useEffect } from 'react';
import Timeline from '../components/about/Timeline';
import SkillsMatrix from '../components/about/SkillsMatrix';
import CertificateCard from '../components/certificates/CertificateCard';
import CertificateModal from '../components/certificates/CertificateModal';
import { personalInfo, educationAndTimeline, skillsData, certificatesData } from '../data/portfolioData';

/**
 * About Page Component
 * Demonstrates:
 * - Simple, clean layout
 * - Highlights student journey, school projects, and desire to learn and collaborate
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
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          About <span className="gradient-text">Me</span>
        </h1>
        <p className="text-sm sm:text-base text-[#9CB080] mt-2 font-medium">
          A glimpse into my journey, passion for web development, and drive to learn
        </p>
      </div>

      {/* About Me Card with Photo */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl mb-14 shadow-2xl border border-[#9CB080]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Photo Column */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-48 h-56 sm:w-56 sm:h-68 rounded-2xl overflow-hidden border-2 border-[#9CB080]/35 shadow-2xl bg-[#273338] transition-all duration-300 hover:border-[#9CB080]/60">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-8 space-y-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#9CB080]">
                Background & Goals
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                Learning by Building, Eager to Grow
              </h2>
            </div>

            <p className="text-[#E2EBE0] text-sm sm:text-base leading-relaxed">
              Hello! I'm <strong className="text-white font-semibold">{personalInfo.name}</strong>, an Information Technology student at Central Luzon State University. My focus is on <strong className="text-white font-semibold">Web Development</strong>, building full-stack web applications with{' '}
              <span className="inline-flex flex-wrap gap-1.5 align-middle my-0.5">
                <span className="px-2 py-0.5 rounded-md bg-[#2B5748] text-[#9CB080] font-mono text-xs font-semibold border border-[#9CB080]/30">PHP</span>
                <span className="px-2 py-0.5 rounded-md bg-[#2B5748] text-[#9CB080] font-mono text-xs font-semibold border border-[#9CB080]/30">Laravel</span>
                <span className="px-2 py-0.5 rounded-md bg-[#2B5748] text-[#9CB080] font-mono text-xs font-semibold border border-[#9CB080]/30">React</span>
                <span className="px-2 py-0.5 rounded-md bg-[#2B5748] text-[#9CB080] font-mono text-xs font-semibold border border-[#9CB080]/30">MySQL</span>
              </span>.
            </p>

            <p className="text-[#CBD5C0] text-sm sm:text-base leading-relaxed">
              I'm still learning and building my foundation through our <strong className="text-white font-medium">school projects and my university capstone</strong>. Building these systems has taught me how to write cleaner code, design structured databases, and solve practical problems.
            </p>

            <p className="text-[#CBD5C0] text-sm sm:text-base leading-relaxed">
              I'm always eager to learn more. I am actively looking for <strong className="text-[#9CB080] font-medium">projects, collaborations, and opportunities</strong> that will challenge me, teach me new technologies, and help me grow as a developer.
            </p>
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
              National accreditations and credentials across Web Development, Networking, Cisco Systems, Data Analytics, and IT Support
            </p>
          </div>
          <span className="text-xs text-[#CBD5C0] bg-[#273338] px-3.5 py-1.5 rounded-xl border border-[#2B5748] self-start sm:self-auto font-medium">
            {certificatesData.length} Certificates
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