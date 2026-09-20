import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';

const NavContainer = ({ items = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#273338]/85 border-b border-[#2B5748]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#618764] to-[#2B5748] border border-[#9CB080]/30 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-[#2B5748]/30 group-hover:scale-105 transition-transform">
              ML
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-base tracking-wide flex items-center gap-1.5">
                Mike Lennard Dela Cruz
                <span className="w-2 h-2 rounded-full bg-[#9CB080] inline-block pulse-dot" title="Available for projects"></span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2">
            <ul className="flex items-center gap-1 bg-[#273338]/95 p-1.5 rounded-2xl border border-[#2B5748]">
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
              className="ml-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#618764] to-[#2B5748] hover:from-[#9CB080] hover:to-[#618764] rounded-xl shadow-md shadow-[#2B5748]/40 border border-[#9CB080]/30 transition-all hover:-translate-y-0.5"
            >
              Hire Me
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-[#273338] border border-[#2B5748] focus:outline-none cursor-pointer"
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
        <div className="md:hidden bg-[#273338]/95 border-b border-[#2B5748] px-4 pt-2 pb-6 space-y-2 backdrop-blur-2xl animate-fadeIn">
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
          <div className="pt-4 border-t border-[#2B5748]">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="w-full block text-center py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#618764] to-[#2B5748] shadow-md shadow-[#2B5748]/30"
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
