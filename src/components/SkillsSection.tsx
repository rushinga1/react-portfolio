import React, { useState, useMemo } from 'react';
import { Code2, Server, Palette, Rocket, Wrench, Layers, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchSkill, setSearchSkill] = useState<string>('');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Code2 className="w-4 h-4" />;
      case 'backend':
        return <Server className="w-4 h-4" />;
      case 'design':
        return <Palette className="w-4 h-4" />;
      case 'deployment':
        return <Rocket className="w-4 h-4" />;
      case 'tools':
        return <Wrench className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const filteredCategories = useMemo(() => {
    const query = searchSkill.trim().toLowerCase();
    return SKILL_CATEGORIES.filter(cat =>
      selectedCategory === 'All' ? true : cat.title === selectedCategory
    )
      .map(cat => ({
        ...cat,
        skills: query
          ? cat.skills.filter(
              s =>
                s.name.toLowerCase().includes(query) ||
                s.description.toLowerCase().includes(query)
            )
          : cat.skills
      }))
      .filter(cat => cat.skills.length > 0);
  }, [selectedCategory, searchSkill]);

  const totalSkillsCount = SKILL_CATEGORIES.reduce((sum, cat) => sum + cat.skills.length, 0);

  return (
    <section id="skills" className="py-14 sm:py-20 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-zinc-200 dark:border-zinc-800">
          <div className="space-y-1.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Technical Capabilities & Stack
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              Skills & Engineering Toolbelt
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
              Practical technologies and workflows used to design, build, test, and deploy scalable applications and browser-based games.
            </p>
          </div>

          <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono tabular-nums">
            {SKILL_CATEGORIES.length} Categories · {totalSkillsCount} Core Skills
          </div>
        </div>

        {/* Interactive Category Filter & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
            <button
              type="button"
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedCategory === 'All'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              All
            </button>
            {SKILL_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.title)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.title
                    ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <div className="w-full lg:w-60 shrink-0">
            <input
              type="text"
              placeholder="Filter skills (e.g. React, Figma)..."
              value={searchSkill}
              onChange={(e) => setSearchSkill(e.target.value)}
              className="w-full px-3.5 py-1.5 text-xs rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* 6 Skill Category Cards */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredCategories.map((cat) => (
              <div
                key={cat.id}
                className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm flex flex-col justify-between space-y-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-2.5">
                      <span className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                        {getCategoryIcon(cat.id)}
                      </span>
                      <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-zinc-400 tabular-nums">
                      {cat.skills.length}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills List */}
                  <ul className="space-y-3 pt-1">
                    {cat.skills.map((skill) => (
                      <li key={skill.name} className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                            {skill.name}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {skill.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Unboxed Summary Footer */}
                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                  {cat.skills.map((skill, idx) => (
                    <React.Fragment key={skill.name}>
                      <span>{skill.name}</span>
                      {idx < cat.skills.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-10 text-center border border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl text-xs text-zinc-500 dark:text-zinc-400">
            No skills matched "{searchSkill}".
          </div>
        )}

        {/* Broader Focus Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Web Development</span>
            </div>
            <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              Practical & Scalable Apps
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              From business inventory management and Vue.js storefronts to interactive browser-based platformer, puzzle, and strategy games.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>UI/UX Design</span>
            </div>
            <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              Prototyping & Responsiveness
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Shaping intuitive user flows in Figma before implementing clean, responsive layouts across every viewport size.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Client-Server Systems</span>
            </div>
            <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              APIs & Agile Delivery
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Connecting frontends to Node.js backends and REST APIs, tested with Postman and shipped smoothly via Git, GitHub, and Vercel.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
