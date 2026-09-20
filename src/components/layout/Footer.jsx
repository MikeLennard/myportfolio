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
              {personalInfo.tagline} Built using Laravel, custom CSS animations, and modern UI components.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#9CB080] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#9CB080] pulse-dot"></span>
              Open for freelance projects and Internship opportunities.
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
                <Link to="/cv" className="hover:text-[#9CB080] transition-colors">Curriculum Vitae (CV)</Link>
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
                <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2 text-slate-300">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2 text-slate-300">
                  <svg className="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.89 0-1.61.72-1.61 1.61 0 .88.72 1.6 1.61 1.6.88 0 1.6-.72 1.6-1.6 0-.89-.72-1.61-1.6-1.61z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              {personalInfo.socialLinks.facebook && (
                <li>
                  <a href={personalInfo.socialLinks.facebook} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2 text-slate-300">
                    <svg className="w-4 h-4 fill-current text-[#1877F2]" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2B5748]/60 flex items-center justify-center text-xs text-[#CBD5C0]">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
