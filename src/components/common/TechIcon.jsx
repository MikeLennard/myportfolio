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

  // Flutter
  if (normalized.includes('flutter')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M14.3 2.5L5.2 11.6L8.3 14.7L20.5 2.5H14.3Z" fill="#02569B" />
        <path d="M14.2 11.8L8.3 17.7L11.4 20.8L14.4 17.8L20.4 11.8H14.2Z" fill="#0175C2" />
        <path d="M11.4 20.8L14.4 17.8L17.4 20.8L14.4 23.8L11.4 20.8Z" fill="#29B6F6" />
      </svg>
    );
  }

  // Dart
  if (normalized.includes('dart')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4.5 4.5L12.5 3L19.5 9L11.5 21L3 17L4.5 4.5Z" fill="#0175C2" opacity="0.8" />
        <path d="M11.5 5L19.5 9L11.5 21L8 16L11.5 5Z" fill="#02569B" />
        <path d="M4.5 4.5L11.5 5L8 16L3 17L4.5 4.5Z" fill="#29B6F6" />
      </svg>
    );
  }

  // PHP
  if (normalized.includes('php')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#777BB4" />
        <path d="M4 14.5V9.5H6.5C7.3 9.5 8 10 8 10.8C8 11.6 7.3 12.1 6.5 12.1H5.3V14.5H4ZM5.3 10.8H6.3C6.7 10.8 7 10.6 7 10.3C7 10 6.7 9.8 6.3 9.8H5.3V10.8ZM9.5 14.5V9.5H10.8V11.5H13V9.5H14.3V14.5H13V12.6H10.8V14.5H9.5ZM16 14.5V9.5H18.5C19.3 9.5 20 10 20 10.8C20 11.6 19.3 12.1 18.5 12.1H17.3V14.5H16ZM17.3 10.8H18.3C18.7 10.8 19 10.6 19 10.3C19 10 18.7 9.8 18.3 9.8H17.3V10.8Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Video Editing / Multimedia
  if (normalized.includes('video') || normalized.includes('media') || normalized.includes('edit')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="3" fill="#2B5748" stroke="#9CB080" strokeWidth="1.5" />
        <path d="M2 9H22M6 4L4 9M11 4L9 9M16 4L14 9M21 4L19 9" stroke="#9CB080" strokeWidth="1.5" strokeLinecap="round" />
        <polygon points="10,12 16,15 10,18" fill="#9CB080" />
      </svg>
    );
  }

  // Computer Networking / System Servicing
  if (normalized.includes('network') || normalized.includes('system') || normalized.includes('servicing')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#9CB080" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="6" height="6" rx="1" fill="#2B5748" />
        <rect x="16" y="2" width="6" height="6" rx="1" fill="#2B5748" />
        <rect x="9" y="16" width="6" height="6" rx="1" fill="#2B5748" />
        <path d="M5 8v3a2 2 0 002 2h10a2 2 0 002-2V8M12 13v3" />
      </svg>
    );
  }

  // CSS
  if (normalized.includes('css') || normalized.includes('cascading')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M4 3L5.6 19.5L12 21.3L18.4 19.5L20 3H4Z" fill="#1572B6" />
        <path d="M12 4.6V19.7L17 18.3L18.4 4.6H12Z" fill="#33A9DC" />
        <path d="M8 8H16L15.6 11.8H9.8L10 14.5H15.3L15 16.8L12 17.6L9 16.8L8.8 14.8H7.2L7.6 18L12 19.3L16.4 18L17.2 8.8L17.3 6.8H7.9L8 8Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Python
  if (normalized.includes('python')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M11.9 2C8.6 2 8.8 3.4 8.8 3.4L8.8 4.9H12.1V5.4H5.2C5.2 5.4 2 5 2 9.8C2 14.6 4.8 14.4 4.8 14.4H6.3V12.9C6.3 12.9 6.2 11.1 8 11.1H11.9C11.9 11.1 13.5 11.1 13.5 9.6V3.8C13.5 3.8 13.8 2 11.9 2ZM10.3 3.1C10.7 3.1 11.1 3.4 11.1 3.8C11.1 4.2 10.7 4.5 10.3 4.5C9.9 4.5 9.6 4.2 9.6 3.8C9.6 3.4 9.9 3.1 10.3 3.1Z" fill="#3776AB" />
        <path d="M12.1 22C15.4 22 15.2 20.6 15.2 20.6L15.2 19.1H11.9V18.6H18.8C18.8 18.6 22 19 22 14.2C22 9.4 19.2 9.6 19.2 9.6H17.7V11.1C17.7 11.1 17.8 12.9 16 12.9H12.1C12.1 12.1 10.5 12.1 10.5 14.4V20.2C10.5 20.2 10.2 22 12.1 22ZM13.7 20.9C13.3 20.9 12.9 20.6 12.9 20.2C12.9 19.8 13.3 19.5 13.7 19.5C14.1 19.5 14.4 19.8 14.4 20.2C14.4 20.6 14.1 20.9 13.7 20.9Z" fill="#FFD43B" />
      </svg>
    );
  }

  // Java
  if (normalized === 'java' || (normalized.includes('java') && !normalized.includes('javascript'))) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M8.5 19.5c3.5 0 7-1 7-1s-3.5 1.5-7 1.5c-2.5 0-3.5-.5-3.5-.5s1 0 3.5 0z" fill="#E76F00" />
        <path d="M6.5 16.5c4 0 9-1.5 9-1.5s-4 2-9 2c-3.5 0-4.5-.5-4.5-.5s1.5 0 4.5 0z" fill="#E76F00" />
        <path d="M12.5 8c0 0-1.5 1.5 1 4 0 0-3-1.5-2.5-4 .5-2 2-3 1.5-4 0 0 1.5 1.5 0 4z" fill="#5382A1" />
        <path d="M10 9c0 0-2 2 .5 5 0 0-4-2.5-3-5.5.5-2.5 3-3.5 2.5-5 0 0 2 2 0 5.5z" fill="#5382A1" />
        <path d="M4 21c5 1 12 1 15-1 0 0-5 2-15 1z" fill="#E76F00" />
      </svg>
    );
  }

  // C (Programming Language)
  if (normalized.includes('c (programming') || normalized === 'c') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <polygon points="12,2 21,7.2 21,16.8 12,22 3,16.8 3,7.2" fill="#00599C" />
        <path d="M14.8 8.8C14 8.2 13 7.8 11.8 7.8C9.2 7.8 7.3 9.7 7.3 12C7.3 14.3 9.2 16.2 11.8 16.2C13 16.2 14 15.8 14.8 15.2L15.8 16.5C14.7 17.5 13.3 18.1 11.8 18.1C8.2 18.1 5.4 15.4 5.4 12C5.4 8.6 8.2 5.9 11.8 5.9C13.3 5.9 14.7 6.5 15.8 7.5L14.8 8.8Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Laravel
  if (normalized.includes('laravel')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="#FF2D20" opacity="0.9" />
        <path d="M7 8L12 11L17 8M12 11V21" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Bootstrap
  if (normalized.includes('bootstrap')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="5" fill="#7952B3" />
        <path d="M7.5 6H12.5C14.5 6 15.8 7.2 15.8 8.8C15.8 10 15 10.9 14 11.3C15.3 11.7 16.2 12.8 16.2 14.2C16.2 16 14.8 17.5 12.5 17.5H7.5V6ZM10 8.2V10.7H12.2C13.2 10.7 13.8 10.1 13.8 9.4C13.8 8.7 13.2 8.2 12.2 8.2H10ZM10 12.6V15.3H12.4C13.5 15.3 14.2 14.6 14.2 13.9C14.2 13.2 13.5 12.6 12.4 12.6H10Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // WordPress
  if (normalized.includes('wordpress')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#21759B" />
        <path d="M12 3.5C7.3 3.5 3.5 7.3 3.5 12C3.5 14.2 4.3 16.2 5.7 17.7L8.6 9.3C9 8.2 8.9 8.1 8.9 8.1H9.4L11.5 14.2L13.1 9.3C13.5 8.2 13.4 8.1 13.4 8.1H13.9L16.8 16.8C18.9 15 20.3 12.3 20.3 9.3C20.3 7.3 17 3.5 12 3.5Z" fill="#FFFFFF" />
        <circle cx="12" cy="12" r="9" stroke="#FFFFFF" strokeWidth="1.2" />
      </svg>
    );
  }

  // Adobe Photoshop
  if (normalized.includes('photoshop')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#001E36" />
        <path d="M6 7.5H10.5C12.2 7.5 13.2 8.5 13.2 10C13.2 11.5 12.2 12.5 10.5 12.5H8V16.5H6V7.5ZM8 9.3V10.7H10.3C11 10.7 11.4 10.4 11.4 10C11.4 9.6 11 9.3 10.3 9.3H8ZM13.8 15.2L15.3 14.2C15.8 14.8 16.5 15.2 17.3 15.2C18.1 15.2 18.5 14.8 18.5 14.3C18.5 13.7 18 13.4 16.8 13C15 12.4 14.2 11.8 14.2 10.5C14.2 9.2 15.3 8.3 17 8.3C18.2 8.3 19.2 8.7 19.9 9.5L18.6 10.5C18.1 9.9 17.5 9.7 16.9 9.7C16.3 9.7 15.9 10 15.9 10.5C15.9 10.9 16.3 11.2 17.4 11.6C19.3 12.2 20.2 12.8 20.2 14.2C20.2 15.7 19 16.7 17.2 16.7C15.7 16.7 14.5 16.1 13.8 15.2Z" fill="#31A8FF" />
      </svg>
    );
  }

  // Packet Tracer / Cisco
  if (normalized.includes('packet') || normalized.includes('tracer')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#049fd9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" stroke="#049fd9" />
        <line x1="8" y1="9" x2="16" y2="15" />
        <line x1="8" y1="15" x2="16" y2="9" />
        <circle cx="8" cy="9" r="1.5" fill="#049fd9" />
        <circle cx="16" cy="15" r="1.5" fill="#049fd9" />
        <circle cx="8" cy="15" r="1.5" fill="#049fd9" />
        <circle cx="16" cy="9" r="1.5" fill="#049fd9" />
      </svg>
    );
  }

  // Microsoft Access
  if (normalized.includes('access')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#A4373A" />
        <path d="M7 17L11 7H13L17 17H14.8L13.9 14.5H10.1L9.2 17H7ZM10.7 12.8H13.3L12 9.2L10.7 12.8Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // MySQL
  if (normalized.includes('mysql')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00758F" />
        <path d="M6 14C8 10 11 7 15 7C17.5 7 19 8.5 19 10C19 12 17.5 13 15.5 13C14 13 13 12 13 12C13 12 13.5 14 14.5 15C13 15 11.5 14.5 10.5 14C9.5 13.5 8.5 14.5 7.5 15.5C6.5 16.5 6 15 6 14Z" fill="#F29111" />
        <ellipse cx="12" cy="17" rx="6" ry="2" fill="#FFFFFF" opacity="0.8" />
      </svg>
    );
  }

  // Data Scalability and Analytics
  if (normalized.includes('analytic') || normalized.includes('scalability')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#9CB080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <path d="M4 14l5-5 4 4 7-7" stroke="#61DAFB" />
      </svg>
    );
  }

  // Windows System Administration
  if (normalized.includes('windows')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8.5" height="8.5" fill="#00ADEF" />
        <rect x="12.5" y="3" width="8.5" height="8.5" fill="#00ADEF" />
        <rect x="3" y="12.5" width="8.5" height="8.5" fill="#00ADEF" />
        <rect x="12.5" y="12.5" width="8.5" height="8.5" fill="#00ADEF" />
      </svg>
    );
  }

  // Software Engineering / Web Development
  if (normalized.includes('software') || normalized.includes('web development')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#9CB080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="10" y1="19" x2="14" y2="5" stroke="#618764" />
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
