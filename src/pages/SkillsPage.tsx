import React from 'react';
import { SkillsSection } from '../components/SkillsSection';
import { Layers, Layout, Server, Rocket } from 'lucide-react';

export const SkillsPage: React.FC = () => {
  return (
    <div className="py-6 sm:py-10 space-y-12">
      <SkillsSection />

      {/* Focus Pillars & Practices */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-1 border-b border-zinc-200 dark:border-zinc-800 pb-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Engineering Practice
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            How the Stack Comes Together
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            Combining frontend frameworks, UI/UX prototyping, and client-server engineering across every build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-3">
            <div className="p-2 w-fit rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
              <Layout className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              Responsive Multi-Framework Frontends
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Building accessible, responsive user interfaces with HTML, CSS, JavaScript, React, and Vue.js—adaptable to mobile screens, tablets, and wide desktop monitors.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-3">
            <div className="p-2 w-fit rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
              <Server className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              Reliable Client-Server & REST Integrations
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Connecting client applications to Node.js services and third-party REST APIs—verifying endpoints, payloads, and error handling carefully in Postman.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-3">
            <div className="p-2 w-fit rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              Figma Design & Interactive Prototyping
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Validating layout hierarchy, user flows, and component consistency through interactive Figma prototypes before writing production code.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-3">
            <div className="p-2 w-fit rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
              <Rocket className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              Agile Collaboration & Web Deployment
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Collaborating across personal, group, and client-commissioned projects with Git, GitHub, VS Code, Agile sprints, and live Vercel deployments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
