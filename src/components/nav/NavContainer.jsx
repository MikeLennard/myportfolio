import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';

/**
 * NavContainer Component
 * Demonstrates:
 * - Functional Component
 * - Props (`items`, `currentPath`)
 * - State (`isMenuOpen`)
 * - Event Handling (`onClick` toggle, close)
 * - Custom CSS + Tailwind
 */
const NavContainer = ({ items = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              ML
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-base tracking-wide flex items-center gap-1.5">
                Mike Lennard Dela Cruz
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block pulse-dot" title="Available for projects"></span>
              </span>
              <span className="text-xs text-indigo-400 font-mono">Portfolio.jsx</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2">
            <ul className="flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
              {items.map((item) => (
                <NavItem
                  key={item.id}
                  href={item.href}
                  name={item.name}
                />
              ))}
            </ul>

            <Link
              to="/contact"
              className="ml-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-md shadow-indigo-500/20 transition-all hover:-translate-y-0.5"
            >
              Hire Me
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none cursor-pointer"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 backdrop-blur-2xl animate-fadeIn">
          <ul className="flex flex-col gap-2">
            {items.map((item) => (
              <NavItem
                key={item.id}
                href={item.href}
                name={item.name}
                onClick={closeMenu}
              />
            ))}
          </ul>
          <div className="pt-4 border-t border-slate-800/80">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="w-full block text-center py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-indigo-500/20"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavContainer;
