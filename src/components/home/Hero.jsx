import { Link } from 'react-router-dom';
import { personalInfo } from '../../data/portfolioData';
import Badge from '../common/Badge';

/**
 * Hero Component
 * Demonstrates:
 * - Functional Component
 * - Props / Data Integration
 * - Event Handling (`onClick`)
 * - Circular Profile Picture with User Custom Palette (#9CB080, #618764, #2B5748, #273338)
 */
export default function Hero() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Introductions & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2B5748]/70 border border-[#9CB080]/40 text-xs font-semibold text-[#9CB080] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#9CB080] pulse-dot"></span>
            <span>Available for New Projects & Internships</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            <br />
            <span className="text-2xl sm:text-4xl text-[#9CB080] font-bold block mt-2">
              {personalInfo.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#CBD5C0] text-base sm:text-lg max-w-2xl leading-relaxed">
            {personalInfo.tagline} {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              to="/projects"
              className="btn-glow px-6 py-3 rounded-xl text-white font-semibold text-sm shadow-xl flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <span>→</span>
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-[#273338]/90 hover:bg-[#2B5748] text-[#f1f5f0] hover:text-white font-semibold text-sm border border-[#2B5748] transition-colors"
            >
              Get In Touch
            </Link>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 rounded-xl bg-[#2B5748]/70 hover:bg-[#618764] text-[#9CB080] hover:text-white font-semibold text-sm border border-[#9CB080]/40 transition-all flex items-center gap-1.5 shadow-md shadow-[#2B5748]/30"
            >
              <span>💼</span>
              <span>LinkedIn</span>
            </a>

            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                alert(`Resume download simulation: Profile for ${personalInfo.name} loaded successfully!`);
              }}
              className="px-4 py-3 rounded-xl text-[#9CB080] hover:text-white text-sm font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>📄</span>
              <span>Download CV</span>
            </a>
          </div>

          {/* Quick Tech Highlights */}
          <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-300">
            <span className="font-semibold text-[#9CB080]">Core Stack:</span>
            <div className="flex flex-wrap gap-1.5">
              {["React 19", "JavaScript (ES6+)", "Tailwind CSS", "Node.js", "Vite"].map((tech) => (
                <Badge key={tech} text={tech} variant="primary" size="sm" />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Circular Profile Picture with Custom Palette Glowing Ring */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative group">
            {/* Ambient Background Glow with #618764 and #9CB080 */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#2B5748] via-[#618764] to-[#9CB080] rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition duration-700"></div>

            {/* Glowing Gradient Ring Border */}
            <div className="relative p-2 rounded-full bg-gradient-to-tr from-[#2B5748] via-[#618764] to-[#9CB080] shadow-2xl shadow-[#2B5748]/40 animate-float">
              {/* Circular Inner Frame */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#273338] bg-[#273338] shadow-inner">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
