import { useState } from 'react';

/**
 * ContactInfo Component
 */
export default function ContactInfo({ info }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(info.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(info.phone || '+63 9380937982');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Direct Contact Cards */}
      <div className="space-y-3">
        {/* Email Card with Copy Feature */}
        <div className="glass-panel p-5 rounded-2xl flex items-center justify-between hover:border-[#9CB080]/50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2B5748]/70 border border-[#618764]/40 flex items-center justify-center text-[#9CB080]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-[#CBD5C0]">Email Address</div>
              <a href={`mailto:${info.email}`} className="text-sm font-semibold text-white hover:text-[#9CB080] transition-colors">
                {info.email}
              </a>
            </div>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#273338] hover:bg-[#2B5748] border border-[#2B5748] text-[#CBD5C0] hover:text-white transition-colors cursor-pointer"
            title="Copy email to clipboard"
          >
            {copiedEmail ? 'Copied! ✓' : 'Copy'}
          </button>
        </div>

        {/* Phone Number Card with Copy Feature */}
        <div className="glass-panel p-5 rounded-2xl flex items-center justify-between hover:border-[#9CB080]/50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2B5748]/70 border border-[#618764]/40 flex items-center justify-center text-[#9CB080]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-[#CBD5C0]">Phone Number</div>
              <a href={`tel:${info.phone || '+639380937982'}`} className="text-sm font-semibold text-white hover:text-[#9CB080] transition-colors">
                {info.phone || '+63 9380937982'}
              </a>
            </div>
          </div>
          <button
            type="button"
            onClick={handleCopyPhone}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#273338] hover:bg-[#2B5748] border border-[#2B5748] text-[#CBD5C0] hover:text-white transition-colors cursor-pointer"
            title="Copy phone number to clipboard"
          >
            {copiedPhone ? 'Copied! ✓' : 'Copy'}
          </button>
        </div>

        {/* Location Card */}
        <div className="glass-panel p-5 rounded-2xl flex items-center gap-3 hover:border-[#9CB080]/50 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-[#2B5748]/70 border border-[#618764]/40 flex items-center justify-center text-[#9CB080]">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <div className="text-xs text-[#CBD5C0]">Location</div>
            <div className="text-sm font-semibold text-white">{info.location}</div>
          </div>
        </div>

        {/* GitHub Card */}
        <div className="glass-panel p-5 rounded-2xl flex items-center justify-between hover:border-[#9CB080]/50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2B5748]/70 border border-[#618764]/40 flex items-center justify-center text-white">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-[#CBD5C0]">GitHub</div>
              <a
                href={info.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-white hover:text-[#9CB080] transition-colors"
              >
                github.com/MikeLennard
              </a>
            </div>
          </div>
          <a
            href={info.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#273338] hover:bg-[#2B5748] border border-[#2B5748] text-[#CBD5C0] hover:text-white transition-colors flex items-center gap-1"
            title="Visit GitHub profile"
          >
            <span>Visit</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* LinkedIn Card */}
        <div className="glass-panel p-5 rounded-2xl flex items-center justify-between hover:border-[#9CB080]/50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2B5748]/70 border border-[#618764]/40 flex items-center justify-center text-[#0A66C2]">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.89 0-1.61.72-1.61 1.61 0 .88.72 1.6 1.61 1.6.88 0 1.6-.72 1.6-1.6 0-.89-.72-1.61-1.6-1.61z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-[#CBD5C0]">LinkedIn</div>
              <a
                href={info.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-white hover:text-[#9CB080] transition-colors"
              >
                Mike Lennard Dela Cruz
              </a>
            </div>
          </div>
          <a
            href={info.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#273338] hover:bg-[#2B5748] border border-[#2B5748] text-[#CBD5C0] hover:text-white transition-colors flex items-center gap-1"
            title="Visit LinkedIn profile"
          >
            <span>Connect</span>
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Facebook Card */}
        {info.socialLinks?.facebook && (
          <div className="glass-panel p-5 rounded-2xl flex items-center justify-between hover:border-[#9CB080]/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#2B5748]/70 border border-[#618764]/40 flex items-center justify-center text-[#1877F2]">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-[#CBD5C0]">Facebook</div>
                <a
                  href={info.socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-white hover:text-[#9CB080] transition-colors"
                >
                  mikelennard.delacruz
                </a>
              </div>
            </div>
            <a
              href={info.socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#273338] hover:bg-[#2B5748] border border-[#2B5748] text-[#CBD5C0] hover:text-white transition-colors flex items-center gap-1"
              title="Visit Facebook profile"
            >
              <span>Visit</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
