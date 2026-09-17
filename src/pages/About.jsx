import Timeline from '../components/about/Timeline';
import SkillsMatrix from '../components/about/SkillsMatrix';
import Badge from '../components/common/Badge';
import { personalInfo, educationAndTimeline, skillsData } from '../data/portfolioData';

/**
 * About Page Component
 * Demonstrates:
 * - Functional Component
 * - Props support (`props.class`)
 * - Composition of child components (Timeline, SkillsMatrix, Badges)
 * - Custom CSS + Tailwind styling
 */
const About = (props) => {
  const principles = [
    {
      icon: (
        <svg className="w-7 h-7 text-[#F7DF1E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Performance First",
      desc: "Optimized asset delivery, minimal re-renders, and fast page loads across all viewports."
    },
    {
      icon: (
        <svg className="w-7 h-7 text-[#9CB080]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4 4 4 0 014-4 4 4 0 014 4 4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "User-Centric Design",
      desc: "Pixel-perfect interfaces with intuitive navigation, fluid animations, and high accessibility."
    },
    {
      icon: (
        <svg className="w-7 h-7 text-[#61DAFB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Clean Modular Code",
      desc: "Reusable functional components, structured separation of concerns, and clean hooks architecture."
    },
    {
      icon: (
        <svg className="w-7 h-7 text-[#618764]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Continuous Growth",
      desc: "Always exploring emerging frameworks, modern toolchains, and industry best practices."
    }
  ];

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn ${props.class || ''}`}>
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge text="About Me" variant="primary" size="md" />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-4 tracking-tight">
          Passionate About <span className="gradient-text">Web Architecture</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Here is a deeper look into my background, core competencies, and career journey in software engineering.
        </p>
      </div>

      {/* Bio Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
        {/* Bio Text */}
        <div className="lg:col-span-7 glass-panel p-8 rounded-3xl space-y-4">
          <span className="text-xs uppercase tracking-wider text-indigo-400 font-semibold">
            Background & Ambition
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Transforming Ideas into Functional, Elegant Realities
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Hello! I'm <strong className="text-white">{personalInfo.name}</strong>, a developer based in {personalInfo.location}. My fascination with technology began when I realized how a few lines of code could create interactive tools used by people across the globe.
          </p>
          <p className="text-slate-400 leading-relaxed text-sm">
            I specialize in the React ecosystem, creating seamless user interfaces backed by solid API architecture. I believe great software isn't just about code that functions—it's about code that is readable, scalable, and delivers a delightful user experience.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <div className="bg-[#273338] border border-[#2B5748] px-4 py-2 rounded-xl text-xs">
              <span className="text-[#CBD5C0]">Location:</span>{' '}
              <span className="text-white font-medium">{personalInfo.location}</span>
            </div>
            <div className="bg-[#273338] border border-[#2B5748] px-4 py-2 rounded-xl text-xs">
              <span className="text-[#CBD5C0]">Status:</span>{' '}
              <span className="text-[#9CB080] font-medium">Available for hire</span>
            </div>
            <div className="bg-[#273338] border border-[#2B5748] px-4 py-2 rounded-xl text-xs">
              <span className="text-[#CBD5C0]">Primary Focus:</span>{' '}
              <span className="text-[#9CB080] font-medium">React & Full-Stack</span>
            </div>
          </div>
        </div>

        {/* Quick Highlights / Image Placeholder Box */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="glass-panel p-6 rounded-3xl border border-[#9CB080]/30 glow-border">
            <h3 className="text-lg font-bold text-white mb-2">Key Highlights</h3>
            <ul className="space-y-3 text-sm text-[#f1f5f0]">
              <li className="flex items-center gap-2">
                <span className="text-[#9CB080] font-bold">✓</span>
                Proficient in Modern React 19, Hooks, & Vite
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9CB080] font-bold">✓</span>
                Strong understanding of state management & lifecycle
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9CB080] font-bold">✓</span>
                Clean CSS design systems (Tailwind + Custom CSS)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9CB080] font-bold">✓</span>
                REST API design, database schemas & integration
              </li>
            </ul>
          </div>

          <div className="glass-panel p-6 rounded-3xl bg-gradient-to-br from-[#2B5748]/50 to-[#273338]">
            <h4 className="text-sm font-semibold text-[#f1f5f0] mb-1">Looking for a collaborator?</h4>
            <p className="text-xs text-[#CBD5C0] mb-3">
              Feel free to reach out for project inquiries, tech discussions, or freelance gigs.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block text-xs font-bold text-[#9CB080] hover:text-white transition-colors"
            >
              {personalInfo.email} →
            </a>
          </div>
        </div>
      </div>

      {/* Engineering Principles */}
      <div className="mb-14">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Methodology</span>
          <h2 className="text-2xl font-bold text-white mt-1">Core Principles</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((p, idx) => (
            <div key={idx} className="glass-panel p-5 rounded-2xl group hover:border-indigo-500/40 transition-all">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">
                {p.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-1.5">{p.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills & Timeline Split Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Timeline on the Left */}
        <div className="lg:col-span-7">
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Milestones</span>
            <h2 className="text-2xl font-bold text-white mt-1">Education & Experience</h2>
          </div>
          <Timeline items={educationAndTimeline} />
        </div>

        {/* Skills Matrix on the Right */}
        <div className="lg:col-span-5">
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Proficiency</span>
            <h2 className="text-2xl font-bold text-white mt-1">Technical Skills</h2>
          </div>
          <SkillsMatrix skills={skillsData} />
        </div>
      </div>
    </div>
  );
};

export default About;