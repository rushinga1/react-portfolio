import React from 'react';
import { Layers } from 'lucide-react';
import { FOCUS_AREAS_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="focus-areas" className="py-14 sm:py-20 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-zinc-200 dark:border-zinc-800">
          <div className="space-y-1.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Engineering Focus & Craft
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              Core Focus Areas
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
              Specialized experience across Web Development, UI/UX Design, Client-Server Systems, and browser-based games.
            </p>
          </div>

          <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono tabular-nums">
            04 Disciplines
          </div>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {FOCUS_AREAS_DATA.map((area) => (
            <div
              key={area.number}
              className="p-6 sm:p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-5 flex flex-col justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                      <Layers className="w-4 h-4" />
                    </span>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                      {area.number}. {area.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {area.summary}
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  {area.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-blue-600 dark:text-blue-400 mt-0.5">·</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500 font-mono">
                {area.technologies.map((tech, idx) => (
                  <React.Fragment key={tech}>
                    <span>{tech}</span>
                    {idx < area.technologies.length - 1 && <span aria-hidden="true">/</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
