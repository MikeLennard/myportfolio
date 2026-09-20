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
      </div>

      {/* About Me Card with Photo */}
      <div className="bg-[#273338]/80 border border-[#9CB080]/20 rounded-2xl p-6 sm:p-8 mb-12 shadow-lg backdrop-blur-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Photo Column */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative group">
              {/* Subtle Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#2B5748] via-[#618764] to-[#9CB080] rounded-2xl blur-md opacity-40 group-hover:opacity-70 transition duration-500"></div>

              {/* Image Frame */}
              <div className="relative w-48 h-56 sm:w-60 sm:h-72 rounded-2xl overflow-hidden border-2 border-[#9CB080]/40 shadow-2xl bg-[#273338]">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="mt-3">
              <h3 className="text-base font-bold text-white">{personalInfo.name}</h3>
              <p className="text-xs text-[#9CB080] font-medium">BSIT Student · Web Developer</p>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Learning by Building, Eager to Grow
            </h2>

            <p className="text-[#CBD5C0] text-sm sm:text-base leading-relaxed">
              Hello! I'm <strong className="text-white font-semibold">{personalInfo.name}</strong>, an Information Technology student at Central Luzon State University. My focus is on <strong className="text-white font-semibold">Web Development</strong>, primarily building systems with <strong className="text-white font-semibold">PHP, Laravel, React, and MySQL</strong>.
            </p>

            <p className="text-[#CBD5C0] text-sm sm:text-base leading-relaxed">
              I'm still learning and building my foundation through our <strong className="text-white font-semibold">school projects and my university capstone</strong>. Building these projects has taught me a lot about designing databases, writing structured code, and solving practical problems.
            </p>

            <p className="text-[#CBD5C0] text-sm sm:text-base leading-relaxed">
              I'm always eager to learn more. I am actively looking for <strong className="text-[#9CB080] font-semibold">projects, collaborations, and opportunities</strong> that will challenge me, teach me new technologies, and help me grow as a developer.
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