import { useState } from 'react';
import Button from '../common/Button';

/**
 * ContactForm Component
 * Demonstrates:
 * - Functional Component
 * - Controlled Form State (inputs, textarea)
 * - Validation State & Error Messages
 * - Event Handling (onChange, onBlur, onSubmit with preventDefault)
 * - Submission Feedback (loading, success banner)
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validate form fields
  const validateField = (name, value) => {
    let error = '';
    if (!value.trim()) {
      error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Please enter a valid email address';
    } else if (name === 'message' && value.trim().length < 10) {
      error = 'Message must be at least 10 characters long';
    }
    return error;
  };

  // Event handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error on change if field becomes valid
    if (errors[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  // Event handler for blur validation
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate network submission
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 1200);
  };

  // Reset form handler
  const handleSendAnother = () => {
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="glass-panel p-8 rounded-3xl text-center space-y-4 animate-fadeIn border-emerald-500/30">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-3xl">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
        <p className="text-slate-300 text-sm max-w-md mx-auto">
          Thank you for getting in touch. Your message has been recorded and I will respond to your email as soon as possible.
        </p>
        <div className="pt-4">
          <Button onClick={handleSendAnother} variant="secondary">
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-3xl">
      <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
      <p className="text-slate-400 text-sm mb-6">
        Have a question, collaboration idea, or project proposition? Fill out the form below.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
            Your Name <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="John Doe"
            className={`w-full px-4 py-3 bg-slate-900/90 border rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
              errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-indigo-500'
            }`}
          />
          {errors.name && <p className="text-rose-400 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
            Your Email <span className="text-rose-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="johndoe@example.com"
            className={`w-full px-4 py-3 bg-slate-900/90 border rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
              errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-indigo-500'
            }`}
          />
          {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
            Subject <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Project Collaboration / Inquiries"
            className={`w-full px-4 py-3 bg-slate-900/90 border rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors ${
              errors.subject ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-indigo-500'
            }`}
          />
          {errors.subject && <p className="text-rose-400 text-xs mt-1">{errors.subject}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
            Message <span className="text-rose-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Describe your project, timeline, or question here..."
            className={`w-full px-4 py-3 bg-slate-900/90 border rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors resize-none ${
              errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-indigo-500'
            }`}
          ></textarea>
          {errors.message && <p className="text-rose-400 text-xs mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                Sending Message...
              </span>
            ) : (
              'Send Message 🚀'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
