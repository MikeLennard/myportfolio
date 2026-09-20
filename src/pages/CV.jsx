import { Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';

/**
 * Harvard-Format Resume Page Component
 * Modeled after the Harvard FAS Office of Career Services Resume Standard.
 * Features:
 * - Authentic serif typography (Georgia / Times New Roman)
 * - Centered header with clean bullet-delimited contact info
 * - Uppercase section titles with horizontal divider rules
 * - Two-column justified institution/role and location/dates
 * - Action-verb driven bulleted achievements
 * - One-click Print-to-PDF (`window.print()`) with print stylesheet
 */
const CV = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen py-6 px-3 sm:px-6 lg:px-8 font-sans">
      {/* Top Floating Action Toolbar - Hidden when printing */}
      <div className="no-print max-w-4xl mx-auto mb-6">
        <div className="glass-panel p-4 rounded-2xl flex items-center justify-between gap-4 border border-[#9CB080]/30 shadow-xl">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#273338] hover:bg-[#2B5748] text-[#CBD5C0] hover:text-white text-xs font-semibold border border-[#2B5748] transition-all"
            >
              <span>←</span>
              <span>Portfolio</span>
            </Link>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              type="button"
              className="btn-glow px-4 py-2 rounded-xl text-white text-xs font-semibold shadow-lg flex items-center gap-1.5 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>


      </div>

      {/* Realistic Harvard Paper Sheet Container */}
      <div className="flex justify-center">
        <div
          id="harvard-resume-document"
          className="harvard-paper w-full max-w-[850px] bg-white text-black font-serif px-8 py-10 sm:px-12 sm:py-12 shadow-2xl rounded-sm leading-relaxed"
          style={{
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
            color: '#111827'
          }}
        >
          {/* ========================================================= */}
          {/* HEADER (Centered) */}
          {/* ========================================================= */}
          <header className="text-center pb-2">
            <h1 className="text-2xl sm:text-[26px] font-bold tracking-normal uppercase text-black mb-1.5">
              {personalInfo.name}
            </h1>
            <p className="text-[12.5px] sm:text-[13px] text-gray-800 leading-snug">
              <span>{personalInfo.location}</span>
              <span className="mx-1.5 font-bold text-gray-400">•</span>
              <a href={`mailto:${personalInfo.email}`} className="text-black hover:underline">
                {personalInfo.email}
              </a>
              <span className="mx-1.5 font-bold text-gray-400">•</span>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-black hover:underline"
              >
                LinkedIn
              </a>
              <span className="mx-1.5 font-bold text-gray-400">•</span>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="text-black hover:underline"
              >
                GitHub
              </a>
            </p>
          </header>

          {/* ========================================================= */}
          {/* SECTION: EDUCATION */}
          {/* ========================================================= */}
          <section className="resume-section mt-4">
            <h2 className="text-[13px] sm:text-[14px] font-bold tracking-wider uppercase text-black border-b border-black pb-0.5 mb-2">
              Education
            </h2>

            {/* CLSU */}
            <div className="mb-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <span className="font-bold text-[13.5px] sm:text-[14px] text-black">
                  CENTRAL LUZON STATE UNIVERSITY (CLSU)
                </span>
                <span className="text-[12px] sm:text-[13px] text-black sm:text-right">
                  Science City of Muñoz, Nueva Ecija
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline italic text-[12.5px] sm:text-[13px] text-gray-900">
                <span>Bachelor of Science in Information Technology (Major in System Development)</span>
                <span className="not-italic text-[12px] sm:text-[13px] text-black font-medium">Aug 2023 – Present</span>
              </div>
              <ul className="list-disc ml-5 mt-1 text-[12px] sm:text-[12.5px] text-gray-800 space-y-0.5">
                <li>
                  <strong className="font-semibold text-black">Academic Distinction:</strong> Consistent University Scholar / College Scholar (Maintained scholastic honors every semester, 2023 – Present).
                </li>
                <li>
                  <strong className="font-semibold text-black">Relevant Coursework:</strong> Systems Development, Database Management Systems, Web Development, Computer Networks.
                </li>
              </ul>
            </div>

            {/* High School */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <span className="font-bold text-[13.5px] sm:text-[14px] text-black">
                  MUÑOZ NATIONAL HIGH SCHOOL MAIN
                </span>
                <span className="text-[12px] sm:text-[13px] text-black sm:text-right">
                  Science City of Muñoz, Nueva Ecija
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline italic text-[12.5px] sm:text-[13px] text-gray-900">
                <span>Technical-Vocational Track: Information & Communications Technology (CSS)</span>
                <span className="not-italic text-[12px] sm:text-[13px] text-black font-medium">Sep 2021 – Jul 2023</span>
              </div>
              <ul className="list-disc ml-5 mt-1 text-[12px] sm:text-[12.5px] text-gray-800 space-y-0.5">
                <li>
                  Specialized in Computer Systems Servicing (CSS), diagnostic troubleshooting, hardware assembly, server deployment, and local network configuration.
                </li>
              </ul>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION: TECHNICAL SKILLS */}
          {/* ========================================================= */}
          <section className="resume-section mt-4">
            <h2 className="text-[13px] sm:text-[14px] font-bold tracking-wider uppercase text-black border-b border-black pb-0.5 mb-2">
              Technical Skills
            </h2>
            <div className="text-[12px] sm:text-[12.5px] text-gray-800 space-y-1">
              <div>
                <strong className="font-semibold text-black">Programming Languages: </strong>
                PHP, JavaScript, Python, Java, C, HTML, CSS
              </div>
              <div>
                <strong className="font-semibold text-black">Frameworks & Libraries: </strong>
                Laravel, React.js, Tailwind CSS, Bootstrap, Flutter
              </div>
              <div>
                <strong className="font-semibold text-black">Databases & Backend: </strong>
                MySQL, RESTful API Integration, Apache
              </div>
              <div>
                <strong className="font-semibold text-black">Developer Tools & Platforms: </strong>
                Git, GitHub, Vite, WordPress, Figma UI/UX, Visual Studio Code, AntiGravity IDE
              </div>
              <div>
                <strong className="font-semibold text-black">Hardware & Systems: </strong>
                Computer Systems Servicing (TESDA NC II Certified), LAN/WAN Setup, Cisco Packet Tracer, Diagnostic Testing
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION: TECHNICAL & CAPSTONE PROJECTS */}
          {/* ========================================================= */}
          <section className="resume-section mt-4">
            <h2 className="text-[13px] sm:text-[14px] font-bold tracking-wider uppercase text-black border-b border-black pb-0.5 mb-2">
              Technical & Capstone Projects
            </h2>

            {/* Project 1: Capstone */}
            <div className="mb-3.5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <span className="font-bold text-[13px] sm:text-[13.5px] text-black">
                  ENHANCED WEB-BASED RECORD MANAGEMENT SYSTEM FOR INDIGENOUS PEOPLE
                </span>
                <span className="text-[12px] sm:text-[13px] text-black sm:text-right font-medium">
                  2026 – Present
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-[12px] sm:text-[12.5px] text-gray-900">
                <span className="italic">Full-Stack Developer | University Capstone Project</span>
                <span className="text-gray-700">Laravel, Vite, Tailwind CSS, MySQL</span>
              </div>
              <ul className="list-disc ml-5 mt-1 text-[12px] sm:text-[12.5px] text-gray-800 space-y-0.5">
                <li>
                  Integrated an AI chatbot and automated SMS notifications to deliver real-time user assistance and community updates.
                </li>
                <li>
                  Redesigned the user interface using Tailwind CSS, enhancing visual aesthetics, responsiveness, and overall accessibility.
                </li>
                <li>
                  Resolved critical system bugs and optimized application workflows to significantly improve platform stability and user experience.
                </li>
              </ul>
            </div>

            {/* Project 2: NBL Apparel */}
            <div className="mb-3.5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <span className="font-bold text-[13px] sm:text-[13.5px] text-black">
                  NBL APPAREL — E-COMMERCE PLATFORM
                </span>
                <span className="text-[12px] sm:text-[13px] text-black sm:text-right font-medium">
                  2026
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-[12px] sm:text-[12.5px] text-gray-900">
                <span className="italic">Web Developer | Group Project</span>
                <span className="text-gray-700">PHP, MySQL, Bootstrap, JavaScript</span>
              </div>
              <ul className="list-disc ml-5 mt-1 text-[12px] sm:text-[12.5px] text-gray-800 space-y-0.5">
                <li>
                  Built an end-to-end e-commerce clothing retail storefront featuring responsive product catalog grids, interactive category filters, and product detail views.
                </li>
                <li>
                  Programmed session-based shopping cart workflows, dynamic item subtotal computations, and organized checkout invoice summaries.
                </li>
              </ul>
            </div>

            {/* Project 3: Clinic Management */}
            <div className="mb-3.5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <span className="font-bold text-[13px] sm:text-[13.5px] text-black">
                  CLINICAL MANAGEMENT SYSTEM
                </span>
                <span className="text-[12px] sm:text-[13px] text-black sm:text-right font-medium">
                  2025
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-[12px] sm:text-[12.5px] text-gray-900">
                <span className="italic">Web Developer | Group Project</span>
                <span className="text-gray-700">PHP, MySQL, Bootstrap, JavaScript</span>
              </div>
              <ul className="list-disc ml-5 mt-1 text-[12px] sm:text-[12.5px] text-gray-800 space-y-0.5">
                <li>
                  Designed and developed a clinical administration web application enabling patient registrations, appointment scheduling, and diagnosis logs.
                </li>
                <li>
                  Structured relational SQL tables with foreign key constraints to maintain longitudinal data integrity across medical consultations.
                </li>
              </ul>
            </div>

            {/* Project 4: ITour */}
            <div className="mb-3.5">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <span className="font-bold text-[13px] sm:text-[13.5px] text-black">
                  ITOUR — TOURIST DESTINATION & BOOKING APPLICATION
                </span>
                <span className="text-[12px] sm:text-[13px] text-black sm:text-right font-medium">
                  2025
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-[12px] sm:text-[12.5px] text-gray-900">
                <span className="italic">Mobile Application Developer | Group Project</span>
                <span className="text-gray-700">Flutter, Dart</span>
              </div>
              <ul className="list-disc ml-5 mt-1 text-[12px] sm:text-[12.5px] text-gray-800 space-y-0.5">
                <li>
                  Engineered a cross-platform mobile application highlighting regional attractions with photo showcases, spot overviews, and travel booking flows.
                </li>
              </ul>
            </div>

            {/* Project 5: Library */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <span className="font-bold text-[13px] sm:text-[13.5px] text-black">
                  LIBRARY MANAGEMENT SYSTEM
                </span>
                <span className="text-[12px] sm:text-[13px] text-black sm:text-right font-medium">
                  2025
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline text-[12px] sm:text-[12.5px] text-gray-900">
                <span className="italic">Backend Developer | Group Project</span>
                <span className="text-gray-700">PHP, MySQL, HTML, CSS</span>
              </div>
              <ul className="list-disc ml-5 mt-1 text-[12px] sm:text-[12.5px] text-gray-800 space-y-0.5">
                <li>
                  Constructed an automated library cataloging system tracking book inventory, student lending privileges, return schedules, and overdue penalties.
                </li>
              </ul>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION: CERTIFICATIONS & HONORS */}
          {/* ========================================================= */}
          <section className="resume-section mt-4">
            <h2 className="text-[13px] sm:text-[14px] font-bold tracking-wider uppercase text-black border-b border-black pb-0.5 mb-2">
              Certifications & Honors
            </h2>
            <ul className="list-disc ml-5 text-[12px] sm:text-[12.5px] text-gray-800 space-y-1">
              <li>
                <strong className="font-semibold text-black">Computer Systems Servicing NC II</strong> — Technical Education and Skills Development Authority (TESDA, 2023)
              </li>
              <li>
                <strong className="font-semibold text-black">Web Development Professional Training Series</strong> (Cloud WebDev, JavaScript, HTML/CSS) — Department of Information and Communications Technology (DICT, 2026)
              </li>
              <li>
                <strong className="font-semibold text-black">2nd Runner Up, Video Editing Competition</strong> — Philippine Society of Information Technology Educators (PSITE IRCITE 2025)
              </li>
              <li>
                <strong className="font-semibold text-black">Cisco Certified Competencies</strong> — Cisco Networking Academy: Cisco Packet Tracer (2025), IT Support Security & Workstation Connectivity (2026), IT Customer Support Basics (2026), Creating Compelling Reports (2025)
              </li>
              <li>
                <strong className="font-semibold text-black">Data Visualization using Bokeh and Plotly</strong> — Coursera (Interactive Web Charts & Python Analytics, 2026)
              </li>
              <li>
                <strong className="font-semibold text-black">WordPress Essentials & CMS Administration</strong> — Department of Information and Communications Technology (DICT, 2024)
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CV;
