import { Link } from 'react-router-dom';
import { personalInfo } from '../../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2B5748]/70 border border-[#9CB080]/40 text-xs font-semibold text-[#9CB080] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#9CB080] pulse-dot"></span>
            <span>Available for New Projects & Internships</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            <br />
            <span className="text-2xl sm:text-4xl text-[#9CB080] font-bold block mt-2">
              {personalInfo.title}
            </span>
          </h1>

          <p className="text-[#CBD5C0] text-base sm:text-lg max-w-2xl leading-relaxed">
            {personalInfo.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              to="/projects"
              className="btn-glow px-6 py-3 rounded-xl text-white font-semibold text-sm shadow-xl flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <span>→</span>
            </Link>

            <Link
              to="/cv"
              className="px-5 py-3 rounded-xl bg-[#273338]/90 hover:bg-[#2B5748] text-[#9CB080] hover:text-white text-sm font-semibold border border-[#2B5748] flex items-center gap-2 transition-all cursor-pointer shadow-md group"
            >
              <svg className="w-4 h-4 text-[#9CB080] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>View & Print CV</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#2B5748] via-[#618764] to-[#9CB080] rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition duration-700"></div>

            <div className="relative p-2 rounded-full bg-gradient-to-tr from-[#2B5748] via-[#618764] to-[#9CB080] shadow-2xl shadow-[#2B5748]/40 animate-float">

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
