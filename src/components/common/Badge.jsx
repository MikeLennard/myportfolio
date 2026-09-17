/**
 * Badge Component
 * Demonstrates functional component with props
 */
export default function Badge({ text, variant = 'default', size = 'md' }) {
  const variantStyles = {
    default: 'bg-slate-800/80 text-slate-300 border-slate-700/60',
    primary: 'bg-indigo-950/60 text-indigo-300 border-indigo-800/50',
    success: 'bg-emerald-950/60 text-emerald-300 border-emerald-800/50',
    warning: 'bg-amber-950/60 text-amber-300 border-amber-800/50',
    accent: 'bg-purple-950/60 text-purple-300 border-purple-800/50',
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
    lg: 'text-sm px-3 py-1.5'
  };

  return (
    <span
      className={`inline-flex items-center gap-1 font-medium rounded-full border transition-all duration-200 ${variantStyles[variant] || variantStyles.default} ${sizeStyles[size] || sizeStyles.md}`}
    >
      {text}
    </span>
  );
}
