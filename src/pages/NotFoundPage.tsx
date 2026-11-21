import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-5">
        <div className="text-4xl sm:text-5xl font-mono font-extrabold text-blue-600 dark:text-blue-400">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-zinc-50">
            Page Not Located
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            The page or case study you requested does not exist or has been moved to another route in this portfolio.
          </p>
        </div>
        <div className="pt-2 flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 rounded-lg transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Overview</span>
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse Works</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
