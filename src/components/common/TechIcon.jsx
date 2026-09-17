/**
 * TechIcon Component
 * Renders authentic SVG logos for developer technologies and frameworks
 */
export default function TechIcon({ name, className = "w-5 h-5" }) {
  const normalized = (name || '').toLowerCase();

  // React
  if (normalized.includes('react')) {
    return (
      <svg className={className} viewBox="0 0 115 100" fill="none">
        <ellipse cx="57.5" cy="50" rx="55" ry="21" stroke="#61DAFB" strokeWidth="6" transform="rotate(30 57.5 50)" />
        <ellipse cx="57.5" cy="50" rx="55" ry="21" stroke="#61DAFB" strokeWidth="6" transform="rotate(90 57.5 50)" />
        <ellipse cx="57.5" cy="50" rx="55" ry="21" stroke="#61DAFB" strokeWidth="6" transform="rotate(150 57.5 50)" />
        <circle cx="57.5" cy="50" r="10" fill="#61DAFB" />
      </svg>
    );
  }

  // JavaScript
  if (normalized.includes('javascript') || normalized === 'js') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M6.5 18.5V14.2M6.5 18.5C6.5 19.5 7.5 20 8.5 20C9.8 20 10.5 19.2 10.5 17.5V10.5M14 17.8C14.5 18.5 15.3 19 16.5 19C17.9 19 19 18.2 19 17C19 15.6 17.8 15 16.2 14.4C14.4 13.7 13.5 13 13.5 11.5C13.5 10.2 14.5 9 16.2 9C17.2 9 18 9.4 18.6 10.2M18.8 10.4L17.5 11.5" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes('typescript') || normalized === 'ts') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M5 9.5H11M8 9.5V18M13 16.8C13.5 17.5 14.3 18 15.5 18C16.9 18 18 17.2 18 16C18 14.6 16.8 14 15.2 13.4C13.4 12.7 12.5 12 12.5 10.5C12.5 9.2 13.5 8 15.2 8C16.2 8 17 8.4 17.6 9.2" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // HTML5
  if (normalized.includes('html')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4 3L5.6 19.5L12 21.3L18.4 19.5L20 3H4Z" fill="#E34F26" />
        <path d="M12 4.6V19.7L17 18.3L18.4 4.6H12Z" fill="#EF652A" />
        <path d="M8 8H16L15.6 11.8H9.8L10 14.5H15.3L15 16.8L12 17.6L9 16.8L8.8 14.8H7.2L7.6 18L12 19.3L16.4 18L17.2 8.8L17.3 6.8H7.9L8 8Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2.1-1.1 3.3-.9 1 .2 1.7.9 2.5 1.7 1.3 1.3 2.8 2.8 5.7 2.8 2.4 0 3.9-1.2 4.5-3.6-1 .8-2.1 1.1-3.3.9-1-.2-1.7-.9-2.5-1.7C16.4 7.5 14.9 6 12 6zM6.5 13.2c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2.1-1.1 3.3-.9 1 .2 1.7.9 2.5 1.7 1.3 1.3 2.8 2.8 5.7 2.8 2.4 0 3.9-1.2 4.5-3.6-1 .8-2.1 1.1-3.3.9-1-.2-1.7-.9-2.5-1.7-1.3-1.3-2.8-2.8-5.7-2.8z" fill="#06B6D4" />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L21 7.2V17.5L12 22.8L3 17.5V7.2L12 2Z" fill="#539E43" />
        <path d="M12 4.5L19 8.5V16.5L12 20.5L5 16.5V8.5L12 4.5Z" fill="#333333" />
        <path d="M10 9V15L14 15" stroke="#539E43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // RESTful APIs
  if (normalized.includes('api') || normalized.includes('rest')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#9CB080" strokeWidth="2">
        <rect x="2" y="4" width="20" height="6" rx="2" />
        <rect x="2" y="14" width="20" height="6" rx="2" />
        <circle cx="6" cy="7" r="1" fill="#9CB080" />
        <circle cx="6" cy="17" r="1" fill="#9CB080" />
        <path d="M14 7h4M14 17h4" strokeLinecap="round" />
      </svg>
    );
  }

  // MongoDB
  if (normalized.includes('mongo')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 2 6.5 7.5 6.5 13.5C6.5 17.5 9 21.5 12 22.5C15 21.5 17.5 17.5 17.5 13.5C17.5 7.5 12 2 12 2Z" fill="#47A248" />
        <path d="M12 2V22.5C11.5 22.5 11 21.5 10.5 20.5C9.5 18 10 15 10.5 13C11 11 11.5 7 12 2Z" fill="#3FA037" />
        <path d="M12 2V22.5C12.5 22.5 13.5 20.5 14 18.5C14.5 16.5 14 14 13.5 12C13 10 12.5 6 12 2Z" fill="#499D4A" />
      </svg>
    );
  }

  // SQL & PostgreSQL
  if (normalized.includes('sql') || normalized.includes('postgres')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="9" ry="3" fill="#2B5748" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      </svg>
    );
  }

  // Git & GitHub
  if (normalized.includes('git')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M21.6 10.8L13.2 2.4C12.7 1.9 11.9 1.9 11.4 2.4L9.3 4.5L11.7 6.9C12.3 6.7 13 6.8 13.5 7.3C14 7.8 14.1 8.5 13.9 9.1L16.2 11.4C16.8 11.2 17.5 11.3 18 11.8C18.7 12.5 18.7 13.6 18 14.3C17.3 15 16.2 15 15.5 14.3C15 13.8 14.9 13.1 15.1 12.5L12.9 10.3V15.6C13.1 15.8 13.2 16.1 13.2 16.4C13.2 17.5 12.3 18.4 11.2 18.4C10.1 18.4 9.2 17.5 9.2 16.4C9.2 15.5 9.8 14.8 10.6 14.5V10C9.8 9.7 9.2 9 9.2 8.1C9.2 7.7 9.3 7.4 9.5 7.1L7.2 4.8L2.4 9.6C1.9 10.1 1.9 10.9 2.4 11.4L10.8 19.8C11.3 20.3 12.1 20.3 12.6 19.8L21.6 10.8Z" fill="#F05032" />
      </svg>
    );
  }

  // Vite
  if (normalized.includes('vite')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M21.4 3.7L12.5 20.2C12.3 20.6 11.7 20.6 11.5 20.2L2.6 3.7C2.4 3.2 2.8 2.7 3.3 2.8L12 4.3L20.7 2.8C21.2 2.7 21.6 3.2 21.4 3.7Z" fill="#646CFF" />
        <path d="M13.2 3.5L8.5 12H12L10.5 17.5L16.5 9.5H12.5L13.2 3.5Z" fill="#FFD62E" />
      </svg>
    );
  }

  // Figma
  if (normalized.includes('figma')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M8 2h4v5H8a2.5 2.5 0 1 1 0-5z" fill="#F24E1E" />
        <path d="M12 2h4a2.5 2.5 0 0 1 0 5h-4V2z" fill="#FF7262" />
        <path d="M12 7h4a2.5 2.5 0 0 1 0 5h-4V7z" fill="#1ABCFE" />
        <path d="M8 7h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#A259FF" />
        <path d="M8 12h4v2.5a2.5 2.5 0 1 1-4 0V12z" fill="#0ACF83" />
      </svg>
    );
  }

  // Postman
  if (normalized.includes('postman')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#FF6C37" />
        <path d="M6 13L10 9L18 10L14 14L10 13L8 16L6 13Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Fallback generic code logo
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}
