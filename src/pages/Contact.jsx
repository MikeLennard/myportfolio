import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import Badge from '../components/common/Badge';
import { personalInfo } from '../data/portfolioData';

/**
 * Contact Page Component
 * Demonstrates:
 * - Functional Component
 * - Props support (`props.class`)
 * - State Management (in child ContactForm & ContactInfo)
 * - Event Handling (form submission, input changes, clipboard copy)
 * - Tailwind + Custom CSS
 */
const Contact = (props) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn ${props.class || ''}`}>
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge text="Get In Touch" variant="primary" size="md" />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-4 tracking-tight">
          Let's Start a <span className="gradient-text">Conversation</span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Whether you have an upcoming project, a freelance opportunity, or simply want to connect, my inbox is always open.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Column */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Info Column */}
        <div className="lg:col-span-5">
          <ContactInfo info={personalInfo} />
        </div>
      </div>
    </div>
  );
};

export default Contact;