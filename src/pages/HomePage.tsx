import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { ProjectsSection } from '../components/ProjectsSection';
import { SkillsSection } from '../components/SkillsSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Hero Section */}
      <Hero />

      {/* Full Live & Coming Soon Projects Showcase */}
      <ProjectsSection
        showFilters={true}
        title="Live & Upcoming Projects"
        subtitle="Six live deployed applications and games alongside four platforms currently in development."
      />

      {/* Link to Full Projects Page */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 pb-8 flex justify-center">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 rounded-xl transition-colors"
        >
          <span>Open Dedicated Projects View</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Skills Matrix */}
      <SkillsSection />

      {/* Core Focus Areas */}
      <ExperienceSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};
