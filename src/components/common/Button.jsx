/**
 * Button Component
 * Functional component showcasing props and event handling with custom palette
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
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#273338]';

  const variants = {
    primary: 'bg-gradient-to-r from-[#618764] to-[#2B5748] hover:from-[#9CB080] hover:to-[#618764] text-white shadow-lg shadow-[#2B5748]/30 border border-[#9CB080]/30 focus:ring-[#9CB080]',
    secondary: 'bg-[#273338] hover:bg-[#2B5748] text-[#f1f5f0] border border-[#2B5748] focus:ring-[#618764]',
    outline: 'border border-[#9CB080]/40 text-[#9CB080] hover:bg-[#618764]/20 focus:ring-[#9CB080]',
    danger: 'bg-red-700 hover:bg-red-600 text-white focus:ring-red-500'
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
