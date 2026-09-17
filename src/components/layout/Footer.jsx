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
              <li>
                <a href={personalInfo.socialLinks.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2 text-slate-300">
                  <svg className="w-4 h-4 fill-current text-[#1DA1F2]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                  </svg>
                  Twitter
                </a>
              </li>
              <li>
                <a href={personalInfo.socialLinks.discord} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2 text-slate-300">
                  <svg className="w-4 h-4 fill-current text-[#5865F2]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  Discord
                </a>
              </li>
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors flex items-center gap-2 text-slate-300">
                  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Me
                </a>
              </li>
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
