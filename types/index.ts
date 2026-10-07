export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  badge?: string;
  benefits: string[];
  deliverables: string[];
  keyFeatures: string[];
  technologiesUsed: string[];
}

export interface Solution {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  impactMetrics: { label: string; value: string }[];
  keyModules: string[];
  idealFor: string[];
}

export interface Industry {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  keyUseCases: string[];
  stat: { value: string; label: string };
  gradient: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  phase: string;
  description: string;
  deliverables: string[];
  duration: string;
  iconName: string;
}

export interface TechItem {
  name: string;
  category: "frontend" | "backend" | "database" | "cloud" | "devops";
  iconName: string;
  description: string;
  proficiency: number;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  tagline: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: { metric: string; description: string }[];
  metrics: { label: string; value: string }[];
  featuredImage: string;
  projectUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  projectScope: string;
}

export interface MetricStat {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description: string;
  iconName: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "AI" | "Web Development" | "Cloud" | "Business Technology" | "Software Engineering";
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  featuredImage: string;
  tags: string[];
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-Time" | "Remote" | "Hybrid";
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}
