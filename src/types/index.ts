export interface Project {
  id: string;
  title: string;
  category: 'Android Native' | 'AI & ML' | 'Full-Stack' | 'Sustainability' | 'Mobile & RnD';
  tagline: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  stats: { label: string; value: string }[];
  features: string[];
  architectureOverview: string;
  demoUrl?: string;
  githubUrl?: string;
  mockupType: 'finance' | 'campus' | 'recycling' | 'health';
  year: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  formattedDate?: string;
  year: number;
  category: 'Competition' | 'Orientation' | 'College Fest' | 'Mobile Workshop' | 'Competitive Coding' | 'Community Meet';
  description: string;
  detailedAgenda?: { time: string; topic: string }[];
  status: 'Upcoming' | 'Past';
  location?: string;
  mode?: string;
}

export interface LeaderProfile {
  id: string;
  name: string;
  role: string;
  quote: string;
  initials: string;
  focusDomain: string;
}

export interface TeamMember extends LeaderProfile {
  domain: string;
  bio: string;
  skills: string[];
  github?: string;
  linkedin?: string;
  email?: string;
  avatarColor: string;
}

export interface DomainItem {
  id: string;
  domainNumber: string;
  title: string;
  description: string;
  focusAreas: string[];
  icon: string;
}

export interface ClubStatistic {
  id: string;
  label: string;
  value: string;
  numericValue: number;
  suffix?: string;
  description: string;
  iconName?: string;
}

export interface SocialStat {
  id: string;
  platform: string;
  followers: string;
  numericCount: number;
  sublabel: string;
  iconName: string;
  actionHint: string;
}

export interface BlogPost {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
  estimatedReadTime: string;
  topics: string[];
  summary: string;
}

export interface Sponsor {
  id: string;
  name: string;
  category: string;
  tagline: string;
}
