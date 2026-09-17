import { Link } from 'react-router-dom';
import { personalInfo } from '../../data/portfolioData';

/**
 * Footer Component
 * Styled with custom palette (#9CB080, #618764, #2B5748, #273338)
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-[#2B5748] bg-[#273338]/90 backdrop-blur-md text-[#CBD5C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#618764] to-[#2B5748] border border-[#9CB080]/30 flex items-center justify-center font-bold text-white text-sm">
                ML
              </div>
              <span className="font-bold text-white text-lg tracking-wide">{personalInfo.name}</span>
            </div>
            <p className="text-sm text-[#CBD5C0] max-w-md leading-relaxed">
              {personalInfo.tagline} Built using React JS, custom CSS animations, and modern UI components.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#9CB080] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#9CB080] pulse-dot"></span>
              Open for freelance projects and full-time opportunities.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-200 font-semibold mb-3">Quick Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#9CB080] transition-colors">Dashboard / Home</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#9CB080] transition-colors">Projects Showcase</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#9CB080] transition-colors">About & Skills</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#9CB080] transition-colors">Contact Me</Link>
              </li>
            </ul>
          </div>

          {/* Social & Connect */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-200 font-semibold mb-3">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <span>🐙</span> GitHub
                </a>
              </li>
              <li>
                <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <span>💼</span> LinkedIn
                </a>
              </li>
              <li>
                <a href={personalInfo.socialLinks.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <span>🐦</span> Twitter / X
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors flex items-center gap-2">
                  <span>📧</span> Email Me
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2B5748]/60 flex flex-col sm:flex-row items-center justify-between text-xs text-[#CBD5C0] gap-4">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="bg-[#2B5748]/60 px-3 py-1 rounded-full border border-[#618764]/30 text-[#CBD5C0]">React JS 19 + Custom CSS</span>
            <span className="text-[#9CB080] font-medium">CS / IT Portfolio Assignment</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
