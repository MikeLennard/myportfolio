/**
 * Badge Component
 * Demonstrates functional component with props and user color palette
 */
export default function Badge({ text, children, icon, variant = 'default', size = 'md' }) {
  const variantStyles = {
    default: 'bg-[#273338]/90 text-slate-300 border-[#2B5748]',
    primary: 'bg-[#2B5748]/70 text-[#9CB080] border-[#618764]/50',
    success: 'bg-[#2B5748]/90 text-[#9CB080] border-[#618764]',
    warning: 'bg-amber-950/60 text-amber-200 border-amber-800/50',
    accent: 'bg-[#2B5748]/80 text-[#9CB080] border-[#9CB080]/40',
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
    lg: 'text-sm px-3 py-1.5'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border transition-all duration-200 ${variantStyles[variant] || variantStyles.default} ${sizeStyles[size] || sizeStyles.md}`}
    >
      {icon && <span className="inline-flex items-center">{icon}</span>}
      {text || children}
    </span>
  );
}
