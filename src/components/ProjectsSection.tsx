import React, { useState, useMemo } from 'react';
import { Search, LayoutGrid, List, Bookmark, RefreshCw, Layers } from 'lucide-react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { PROJECTS_DATA } from '../data/portfolioData';

interface ProjectsSectionProps {
  limit?: number;
  showFilters?: boolean;
  title?: string;
  subtitle?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  limit,
  showFilters = true,
  title = "Selected Projects & Applications",
  subtitle = "Live deployed web applications, browser-based games, and upcoming collaborative builds."
}) => {
  const [projects] = useState<Project[]>(PROJECTS_DATA);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const [savedProjectIds, setSavedProjectIds] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('portfolio_saved_projects_v2');
        return saved ? JSON.parse(saved) : ['skycast'];
      } catch {
        return ['skycast'];
      }
    }
    return ['skycast'];
  });

  const toggleSaveProject = (id: string) => {
    setSavedProjectIds(prev => {
      const updated = prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id];
      try {
        localStorage.setItem('portfolio_saved_projects_v2', JSON.stringify(updated));
      } catch (err) {
        console.error('Failed to save bookmark to localStorage', err);
      }
      return updated;
    });
  };

  const filterTabs = [
    'All',
    'Live',
    'Coming Soon',
    'Web Apps',
    'Game Development',
    'Business & Commerce',
    'UI/UX & Prototypes',
    'Saved'
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      if (selectedFilter === 'Saved') {
        if (!savedProjectIds.includes(project.id)) return false;
      } else if (selectedFilter === 'Live') {
        if (project.status !== 'Live') return false;
      } else if (selectedFilter === 'Coming Soon') {
        if (project.status !== 'In Development') return false;
      } else if (selectedFilter !== 'All' && project.category !== selectedFilter) {
        return false;
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesSub = project.subtitleType.toLowerCase().includes(query);
        const matchesDesc = project.description.toLowerCase().includes(query);
        const matchesTagline = project.tagline.toLowerCase().includes(query);
        const matchesTech = project.technologies.some(t => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesSub && !matchesDesc && !matchesTagline && !matchesTech) {
          return false;
        }
      }

      return true;
    });
  }, [projects, selectedFilter, searchQuery, savedProjectIds]);

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;
  const shouldGroupByStatus = selectedFilter === 'All' && !searchQuery.trim() && !limit;

  const liveProjects = displayedProjects.filter(p => p.status === 'Live');
  const upcomingProjects = displayedProjects.filter(p => p.status === 'In Development');

  const renderProjectCollection = (items: Project[]) => (
    <div
      className={
        viewMode === 'grid'
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch'
          : 'space-y-4'
      }
    >
      {items.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          viewMode={viewMode}
          onSelect={(proj) => setActiveProject(proj)}
          isSaved={savedProjectIds.includes(project.id)}
          onToggleSave={toggleSaveProject}
        />
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-zinc-200 dark:border-zinc-800">
          <div className="space-y-1.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Portfolio & Applications
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              {title}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
              {subtitle}
            </p>
          </div>

          <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono tabular-nums self-start md:self-end">
            Showing {displayedProjects.length} of {projects.length} projects
          </div>
        </div>

        {/* Filter Bar & Controls */}
        {showFilters && (
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pt-1">
            
            {/* Interactive Filter Segmented Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
              {filterTabs.map(tab => {
                const isActive = selectedFilter === tab;
                const isSavedTab = tab === 'Saved';
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setSelectedFilter(tab)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-xs'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                    }`}
                  >
                    {isSavedTab && <Bookmark className="w-3 h-3" />}
                    <span>{tab}</span>
                    {isSavedTab && (
                      <span className="text-[11px] font-mono tabular-nums opacity-75">
                        ({savedProjectIds.length})
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Search Input & View Mode Toggles */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="relative flex-1 sm:w-60">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects or stack..."
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="hidden sm:flex items-center p-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  aria-label="Grid layout view"
                  className={`p-1.5 rounded transition-colors cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs'
                      : 'text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  aria-label="List layout view"
                  className={`p-1.5 rounded transition-colors cursor-pointer ${
                    viewMode === 'list'
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xs'
                      : 'text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Projects Cards Layout */}
        {displayedProjects.length > 0 ? (
          shouldGroupByStatus ? (
            <div className="space-y-14 pt-2">
              {liveProjects.length > 0 && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800/80 pb-2.5">
                    <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      <span>Live Projects</span>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 tabular-nums">
                      {liveProjects.length} deployed
                    </span>
                  </div>
                  {renderProjectCollection(liveProjects)}
                </div>
              )}

              {upcomingProjects.length > 0 && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800/80 pb-2.5">
                    <div className="flex items-center gap-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      <span>Coming Soon / In Development</span>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 tabular-nums">
                      {upcomingProjects.length} upcoming
                    </span>
                  </div>
                  {renderProjectCollection(upcomingProjects)}
                </div>
              )}
            </div>
          ) : (
            renderProjectCollection(displayedProjects)
          )
        ) : (
          /* Empty Search or Filter State */
          <div className="py-16 text-center border border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/40 p-8 space-y-3">
            <Layers className="w-8 h-8 mx-auto text-zinc-400" />
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              No matching projects found
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto">
              No projects matched "{searchQuery}" under {selectedFilter}. Try resetting filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedFilter('All');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-200/80 dark:bg-zinc-800 rounded-lg hover:bg-zinc-300 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        isSaved={activeProject ? savedProjectIds.includes(activeProject.id) : false}
        onToggleSave={toggleSaveProject}
      />
    </section>
  );
};
