import { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  currentPath: string;
}

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Research', path: '/research' },
  { label: 'CV', path: '/cv' },
  { label: 'Blog', path: '/blog' },
  // { label: 'Gallery', path: '/gallery' },
];

export default function Navbar({ currentPath }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) =>
    path === '/' ? currentPath === '/' : currentPath.startsWith(path);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 md:px-12 py-6 w-full">
        {/* Logo */}
        <Link
          to="/"
          className="font-headline text-2xl italic font-semibold text-[#003262] hover:opacity-80 transition-opacity"
        >
          Sirui Zou
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={
                isActive(link.path)
                  ? 'nav-link-active'
                  : 'nav-link'
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="p-2 text-[#003262] hover:opacity-70 transition-opacity md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Fade gradient */}
      <div className="h-3 w-full bg-gradient-to-b from-[#f8f9fa]/60 to-transparent pointer-events-none" />

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#f8f9fa]/95 backdrop-blur-xl border-t border-outline-variant/10 px-8 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-lg font-headline ${
                isActive(link.path)
                  ? 'text-[#003262] font-semibold'
                  : 'text-slate-500'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
