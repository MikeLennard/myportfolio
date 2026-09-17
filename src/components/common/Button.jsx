/**
 * Button Component
 * Functional component showcasing props and event handling
 */
export default function Button({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  className = '',
  icon = null
}) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';

  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-indigo-500/25 focus:ring-indigo-500',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 focus:ring-slate-500',
    outline: 'border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/10 focus:ring-indigo-500',
    danger: 'bg-red-600 hover:bg-red-500 text-white focus:ring-red-500'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </button>
  );
}
