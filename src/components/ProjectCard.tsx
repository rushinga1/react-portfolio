import React, { useState } from 'react';
import { ExternalLink, Bookmark, ArrowRight, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  viewMode?: 'grid' | 'list';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  isSaved,
  onToggleSave,
  viewMode = 'grid',
}) => {
  const [imageError, setImageError] = useState(false);

  const isLive = project.status === 'Live';

  if (viewMode === 'list') {
    return (
      <div className="group border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl p-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <div className="space-y-1.5 flex-1 min-w-0">
          {/* Unboxed Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <span className={`font-semibold ${isLive ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
              {isLive ? 'Live' : 'Coming Soon'}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-blue-600 dark:text-blue-400">{project.subtitleType}</span>
          </div>

          <h3
            onClick={() => onSelect(project)}
            className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer"
          >
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-1 max-w-2xl">
            {project.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 pt-1">
            {project.technologies.slice(0, 5).map((tech, idx) => (
              <React.Fragment key={tech}>
                <span>{tech}</span>
                {idx < Math.min(project.technologies.length, 5) - 1 && <span aria-hidden="true">/</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 rounded-lg transition-colors"
            >
              <span>Visit Live</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          <button
            type="button"
            onClick={() => onToggleSave(project.id)}
            aria-label={isSaved ? 'Remove bookmark' : 'Bookmark project'}
            className={`p-2 rounded-lg border transition-colors cursor-pointer ${
              isSaved
                ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400'
                : 'border-zinc-200 dark:border-zinc-800 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>

          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-lg transition-colors cursor-pointer"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="group flex flex-col h-full border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 shadow-sm hover:shadow-md">
      
      {/* Media Slot with Zero-Broken-Image Policy */}
      <div
        onClick={() => onSelect(project)}
        className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800/80 cursor-pointer"
      >
        {!imageError ? (
          <img
            src={project.image}
            alt={project.imageAlt}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800">
            <Layers className="w-8 h-8 text-zinc-400 mb-2" />
            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{project.title}</span>
            <span className="text-xs text-zinc-500 mt-1">{project.subtitleType}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <span className="text-xs font-medium text-white flex items-center gap-1">
            <span>Inspect project details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Bookmark Action */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(project.id);
          }}
          aria-label={isSaved ? 'Remove bookmark' : 'Bookmark project'}
          className={`absolute top-3 right-3 p-2 rounded-lg backdrop-blur-md transition-colors cursor-pointer ${
            isSaved
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-black/40 text-white/90 hover:bg-black/60'
          }`}
        >
          <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Clean Unboxed Metadata */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
            <span className={`font-semibold ${isLive ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
              {isLive ? 'Live' : 'In Development'}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-blue-600 dark:text-blue-400 truncate">{project.subtitleType}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onSelect(project)}
            className="text-lg font-bold text-zinc-950 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer leading-snug"
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        <div className="space-y-4 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
          {/* Tech Stack - Unboxed Text with Separators */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <React.Fragment key={tech}>
                <span>{tech}</span>
                {idx < Math.min(project.technologies.length, 4) - 1 && <span aria-hidden="true">·</span>}
              </React.Fragment>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-zinc-400">+{project.technologies.length - 4}</span>
            )}
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-1">
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline transition-colors"
                aria-label={`Open live app ${project.title}`}
              >
                <span>Open Live</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className="text-xs text-zinc-400 dark:text-zinc-500">
                Coming Soon
              </span>
            )}
          </div>
        </div>

      </div>

    </article>
  );
};
