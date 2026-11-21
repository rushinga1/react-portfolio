import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/40 py-12 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <Link
              to="/"
              className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              MUGISHA RUSHINGA Guevara
            </Link>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
              Web Development, UI/UX Design, and Client-Server Systems. Building practical, scalable applications and browser-based games.
            </p>
          </div>

          <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400">
            <a
              href="https://github.com/rushinga1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors"
              aria-label="GitHub Profile (github.com/rushinga1)"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:mugishaguevara12@gmail.com"
              className="p-2 rounded-lg hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors"
              aria-label="Email MUGISHA RUSHINGA Guevara"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>© {new Date().getFullYear()} MUGISHA RUSHINGA Guevara</span>
            <span aria-hidden="true">·</span>
            <a href="mailto:mugishaguevara12@gmail.com" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              mugishaguevara12@gmail.com
            </a>
            <span aria-hidden="true">·</span>
            <span>0791 895 352 / 0732 795 406</span>
            <span aria-hidden="true">·</span>
            <span className="text-zinc-600 dark:text-zinc-300">Kigali, Rwanda</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <Link to="/projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                Work
              </Link>
              <Link to="/skills" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                Skills
              </Link>
              <Link to="/contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                Contact
              </Link>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
