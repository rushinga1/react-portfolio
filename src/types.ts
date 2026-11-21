export type ProjectCategory =
  | 'Web Apps'
  | 'Game Development'
  | 'Business & Commerce'
  | 'UI/UX & Prototypes';

export type ProjectStatus = 'Live' | 'In Development';

export interface Project {
  id: string;
  title: string;
  slug: string;
  subtitleType: string;
  tagline: string;
  category: ProjectCategory;
  status: ProjectStatus;
  year: string;
  featured: boolean;
  image: string;
  imageAlt: string;
  description: string;
  longDescription: string;
  client?: string;
  role: string;
  impact: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface FocusAreaItem {
  number: string;
  title: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  projectType: string;
  timeline: string;
  budget: string;
  message: string;
}

export interface ContactFormErrors {
  fullName?: string;
  email?: string;
  projectType?: string;
  message?: string;
}
