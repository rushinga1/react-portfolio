import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Bookmark } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const isLive = project.status === 'Live';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <span className={`font-semibold ${isLive ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
              {isLive ? 'Live Project' : 'Coming Soon / In Development'}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-blue-600 dark:text-blue-400">{project.subtitleType}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onToggleSave(project.id)}
              aria-label={isSaved ? 'Remove from saved' : 'Save project'}
              className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                isSaved
                  ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400'
                  : 'border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project modal"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Hero Media */}
          <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 shadow-inner">
            <img
              src={project.image}
              alt={project.imageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Tagline */}
          <div className="space-y-2">
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 tracking-tight">
              {project.title}
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Key Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/80 text-xs">
            <div>
              <span className="text-zinc-400 uppercase tracking-wider block font-medium">Role</span>
              <span className="text-zinc-900 dark:text-zinc-100 font-semibold mt-0.5 block">{project.role}</span>
            </div>
            <div>
              <span className="text-zinc-400 uppercase tracking-wider block font-medium">Context</span>
              <span className="text-zinc-900 dark:text-zinc-100 font-semibold mt-0.5 block">{project.client || project.subtitleType}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-zinc-400 uppercase tracking-wider block font-medium">Status</span>
              <span className={`font-semibold mt-0.5 block ${isLive ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
                {project.impact}
              </span>
            </div>
          </div>

          {/* Overview Prose */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              What It Is
            </h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Architectural Highlights */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Key Details
            </h3>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Technologies & Stack
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span>{tech}</span>
                  {idx < project.technologies.length - 1 && <span className="text-zinc-400" aria-hidden="true">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            Close Viewer
          </button>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
              >
                <span>Visit Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="px-4 py-2 text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                Currently In Development
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
