import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Work', to: '/projects' },
    { label: 'Skills', to: '/skills' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/90 dark:bg-zinc-950/90 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
        >
          MUGISHA RUSHINGA Guevara
        </Link>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `transition-colors hover:text-zinc-900 dark:hover:text-white whitespace-nowrap shrink-0 ${
                isActive ? 'text-zinc-950 dark:text-white font-semibold' : ''
              }`
            }
          >
            Overview
          </NavLink>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors hover:text-zinc-900 dark:hover:text-white whitespace-nowrap shrink-0 ${
                  isActive ? 'text-zinc-950 dark:text-white font-semibold' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: 1 primary action & theme toggle */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Dark/Light mode toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700" />
            )}
          </button>

          {/* Primary Action Button */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile menu hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile navigation menu"
            className="md:hidden p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              `block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive
                  ? 'bg-zinc-200/70 dark:bg-zinc-800 text-zinc-950 dark:text-white'
                  : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900'
              }`
            }
          >
            Overview
          </NavLink>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? 'bg-zinc-200/70 dark:bg-zinc-800 text-zinc-950 dark:text-white'
                    : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="flex items-center justify-center gap-1.5 w-full py-2.5 text-xs font-semibold text-white bg-zinc-900 dark:bg-white dark:text-zinc-950 rounded-lg shadow-sm"
            >
              <span>Initiate Inquiry / Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
