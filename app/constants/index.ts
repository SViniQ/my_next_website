import { FaJava } from 'react-icons/fa';
import { SiSpring, SiNodedotjs, SiNextdotjs, SiJavascript, SiPostgresql, SiDocker, SiGit, SiReact, SiTypescript } from 'react-icons/si';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Skill, Project, Experience, SocialLink, NavItem } from '../types';

export const SKILLS: Skill[] = [
  { name: 'Java', icon: FaJava, color: '#f89820', category: 'backend' },
  { name: 'Spring Boot', icon: SiSpring, color: '#6db33f', category: 'backend' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', category: 'frontend' },
  { name: 'React', icon: SiReact, color: '#61dafb', category: 'frontend' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', category: 'frontend' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#68a063', category: 'backend' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', category: 'frontend' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', category: 'database' },
  { name: 'Docker', icon: SiDocker, color: '#0db7ed', category: 'devops' },
  { name: 'Git', icon: SiGit, color: '#f05032', category: 'tools' }
];

export const PROJECTS: Project[] = [
  {
    id: 'home-automation',
    title: 'Home Automation Dashboard',
    description: 'Sistema completo de automação residencial com backend em Spring Boot integrado ao Home Assistant e dashboard em Power BI para monitoramento em tempo real.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Power BI', 'REST API', 'Home Assistant'],
    gradient: 'linear(to-r, #1E40FF, #00D4FF)',
    featured: true
  },
  {
    id: 'gym-system',
    title: 'Sistema de Academia',
    description: 'Aplicação fullstack para gestão completa de academia com frontend responsivo em Next.js e API robusta em Spring Boot para controle de membros e treinos.',
    technologies: ['Next.js', 'Spring Boot', 'TypeScript', 'PostgreSQL', 'REST API'],
    gradient: 'linear(to-r, #8B5CF6, #EC4899)',
    featured: true
  },
  {
    id: 'hemotherapy-system',
    title: 'Hemotherapy System',
    description: 'Sistema de hemoterapia com gerenciamento de doadores, gestão inteligente de doações.',
    technologies: ['Next.js', 'TypeScript', 'Chakra UI', 'Vercel', 'Framer Motion'],
    gradient: 'linear(to-r, #F59E0B, #EF4444)',
    featured: false
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'alma-ceo',
    role: 'Estagiário em Desenvolvimento de Sistemas',
    company: 'Associação Brasileira de Pacientes Crônicos (ABPC)',
    period: '2025 - Presente',
    description: 'Lidero estratégias de produto e coordeno equipes técnicas multidisciplinares em projetos de automação e soluções SaaS escaláveis.',
    technologies: ['Java', 'Spring Boot', 'Next.js', 'PostgreSQL', 'Docker', 'AWS'],
    achievements: [
      'Desenvolveu Site Principal da Associação Brasileira de Pacientes Crônicos (ABPC)',
      'Ofereceu suporte de TI, desde Hardware até Software',
      'Integrou soluções de automação para otimizar processos internos e administrativos'
    ]
  },
  {
    id: 'cesar-student',
    role: 'Análise e Desenvolvimento de Sistemas',
    company: 'CESAR School',
    period: '2023 - Presente',
    description: 'Formação focada em desenvolvimento de software moderno, engenharia de software, metodologias ágeis e práticas DevOps.',
    technologies: ['Java', 'Spring', 'React', 'Node.js', 'PostgreSQL', 'Git'],
    achievements: [
      'Desenvolveu +15 projetos full-stack com nota máxima',
      'Certificação em metodologias ágeis (Scrum/Kanban)',
      'Especialização em arquiteturas de software escaláveis'
    ]
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/SViniQ', icon: FiGithub, color: '#333' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/viníciussilvaqueiroz', icon: FiLinkedin, color: '#0077b5' },
  { name: 'Email', url: 'mailto:coder.fullstack.vinicius@gmail.com', icon: FiMail, color: '#ea4335' }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Contato', href: '#contact' }
];

export const THEME_COLORS = {
  light: {
    bgColor: '#F7F7F8',
    surfaceColor: '#FFFFFF',
    textColor: '#111111',
    mutedColor: '#E5E5E7',
    textSecondary: '#374151'
  },
  dark: {
    bgColor: '#0C0C0D',
    surfaceColor: '#121214',
    textColor: '#F5F5F7',
    mutedColor: '#2C2C2E',
    textSecondary: '#D1D5DB'
  },
  accent: {
    blue: '#1E40FF',
    purple: '#8B5CF6'
  }
};

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};