import { useState } from 'react';

/**
 * ContactInfo Component
 * Demonstrates:
 * - Functional Component
 * - Props (`info`)
 * - State (`copied`)
 * - Event Handling (`onClick` to copy email to clipboard)
 */
export default function ContactInfo({ info }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(info.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Availability Status Card */}
      <div className="glass-panel p-6 rounded-3xl border border-emerald-500/30">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 pulse-dot"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Available for Opportunities
          </span>
        </div>
        <h4 className="text-lg font-bold text-white mb-1">Let's Build Something Great</h4>
        <p className="text-xs text-slate-300 leading-relaxed">
          I am currently accepting freelance web applications, contract work, and discussing software engineering opportunities.
        </p>
      </div>

      {/* Direct Contact Cards */}
      <div className="space-y-3">
        {/* Email Card with Copy Feature */}
        <div className="glass-panel p-5 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-800/40 flex items-center justify-center text-lg">
              ✉️
            </div>
            <div>
              <div className="text-xs text-slate-400">Email Address</div>
              <a href={`mailto:${info.email}`} className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors">
                {info.email}
              </a>
            </div>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Copy email to clipboard"
          >
            {copied ? 'Copied! ✓' : 'Copy'}
          </button>
        </div>

        {/* Location Card */}
        <div className="glass-panel p-5 rounded-2xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-800/40 flex items-center justify-center text-lg">
            📍
          </div>
          <div>
            <div className="text-xs text-slate-400">Location</div>
            <div className="text-sm font-semibold text-white">{info.location}</div>
          </div>
        </div>

        {/* Phone / Discord Card */}
        <div className="glass-panel p-5 rounded-2xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-800/40 flex items-center justify-center text-lg">
            💬
          </div>
          <div>
            <div className="text-xs text-slate-400">Discord / Community</div>
            <div className="text-sm font-semibold text-white">@mikelennard</div>
          </div>
        </div>
      </div>

      {/* Social Profiles */}
      <div className="glass-panel p-6 rounded-3xl">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
          Online Presence & Profiles
        </h4>
        <div className="flex flex-wrap gap-2">
          <a
            href={info.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-2"
          >
            <span>🐙</span> GitHub
          </a>
          <a
            href={info.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-2"
          >
            <span>💼</span> LinkedIn
          </a>
          <a
            href={info.socialLinks.twitter}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-2"
          >
            <span>🐦</span> Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
