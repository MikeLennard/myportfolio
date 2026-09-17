import { Link } from 'react-router-dom';
import { personalInfo } from '../../data/portfolioData';
import Badge from '../common/Badge';

/**
 * Hero Component
 * Demonstrates:
 * - Functional Component
 * - Props / Data Integration
 * - Event Handling (`onClick`)
 * - Rich Custom CSS Animations & Glassmorphism
 */
export default function Hero() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Introductions & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/40 text-xs font-semibold text-indigo-300 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot"></span>
            <span>Available for New Projects & Internships</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            <br />
            <span className="text-2xl sm:text-4xl text-slate-300 font-bold block mt-2">
              {personalInfo.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            {personalInfo.tagline} {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              to="/projects"
              className="btn-glow px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-500/25 flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <span>→</span>
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 transition-colors"
            >
              Get In Touch
            </Link>

            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 rounded-xl bg-blue-950/60 hover:bg-blue-900/70 text-blue-300 hover:text-white font-semibold text-sm border border-blue-700/60 transition-all flex items-center gap-1.5 shadow-md shadow-blue-900/20"
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
              className="px-4 py-3 rounded-xl text-slate-400 hover:text-indigo-400 text-sm font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>📄</span>
              <span>Download CV</span>
            </a>
          </div>

          {/* Quick Tech Highlights */}
          <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-400">
            <span className="font-semibold text-slate-400">Core Stack:</span>
            <div className="flex flex-wrap gap-1.5">
              {["React 19", "JavaScript (ES6+)", "Tailwind CSS", "Node.js", "Vite"].map((tech) => (
                <Badge key={tech} text={tech} variant="default" size="sm" />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Portrait Photo Showcase Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md group">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-xl opacity-35 group-hover:opacity-55 transition duration-500"></div>

            {/* Main Portrait Card Container */}
            <div className="relative glass-panel rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl animate-float">
              {/* Image Frame */}
              <div className="relative h-[430px] w-full overflow-hidden bg-slate-900">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-transparent"></div>

                {/* Floating Top Status Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-xs font-semibold text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot"></span>
                    <span>Online & Coding</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-indigo-950/80 backdrop-blur-md border border-indigo-500/40 text-[11px] font-mono text-indigo-300">
                    React 19
                  </div>
                </div>

                {/* Floating Bottom Card Details */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-wide">{personalInfo.name}</h3>
                      <p className="text-xs text-indigo-400 font-medium">Software Engineer & UI Developer</p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300 text-sm font-bold">
                      ML
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                    <span>📍 {personalInfo.location}</span>
                    <span className="text-emerald-400 font-semibold">Available for Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
