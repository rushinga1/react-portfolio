import React from 'react';
import { ProjectsSection } from '../components/ProjectsSection';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="py-6 sm:py-10">
      <ProjectsSection
        showFilters={true}
        title="Projects & Applications"
        subtitle="Live deployed web applications, browser-based games, e-commerce builds, and upcoming client & personal projects."
      />
    </div>
  );
};
