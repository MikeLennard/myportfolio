import { useState } from 'react';
import Hero from '../components/home/Hero';
import DashboardStats from '../components/home/DashboardStats';
import FeaturedProjects from '../components/home/FeaturedProjects';
import FeaturedCertificates from '../components/home/FeaturedCertificates';
import QuickSkills from '../components/home/QuickSkills';
import ProjectModal from '../components/projects/ProjectModal';
import CertificateModal from '../components/certificates/CertificateModal';
import { projectsData, skillsData, certificatesData, dashboardStats } from '../data/portfolioData';

/**
 * Home / Dashboard Page Component
 * Demonstrates:
 * - Functional Component
 * - Props support (`props.class`)
 * - State Management (`selectedProject`, `selectedCertificate`)
 * - Event Handling (modal controls, exploration)
 * - Rich Custom UI + Tailwind
 */
const Home = (props) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ${props.class || ''}`}>
      {/* Hero Showcase */}
      <Hero />

      {/* Dashboard Overview Stats */}
      <DashboardStats stats={dashboardStats} />

      {/* Featured Projects Highlight */}
      <FeaturedProjects
        projects={projectsData}
        onSelectProject={setSelectedProject}
      />

      {/* Featured Certificates Highlight */}
      <FeaturedCertificates
        certificates={certificatesData}
        onSelectCertificate={setSelectedCertificate}
      />

      {/* Quick Skills Stack */}
      <QuickSkills skills={skillsData} />

      {/* Modal Preview for Featured Projects */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Modal Preview for Certificates */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </div>
  );
};

export default Home;
