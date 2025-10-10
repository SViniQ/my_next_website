import { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ThemeColors {
  bgColor: string;
  surfaceColor: string;
  textColor: string;
  mutedColor: string;
  textSecondary: string;
  accentBlue: string;
  accentPurple: string;
}