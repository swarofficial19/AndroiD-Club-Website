import { DomainItem } from '../types';

export const DOMAINS: DomainItem[] = [
  {
    id: 'android-dev',
    domainNumber: '01',
    title: 'Android Development',
    description:
      'We build powerful and intuitive mobile applications using modern Android development technologies, architectures and design patterns.',
    focusAreas: [
      'Kotlin',
      'UI State Management',
      'Jetpack Compose',
      'Kotlin Coroutines',
      'Modern Android Architecture',
    ],
    icon: 'Smartphone',
  },
  {
    id: 'web-dev',
    domainNumber: '02',
    title: 'Web Development',
    description:
      'We develop scalable and responsive web applications with a strong focus on performance, usability and security.',
    focusAreas: [
      'Frontend Development',
      'Backend Development',
      'Full-Stack Applications',
      'Responsive Web Design',
      'Web Security and Performance',
    ],
    icon: 'Globe',
  },
  {
    id: 'rnd',
    domainNumber: '03',
    title: 'Research & Development (RnD)',
    description:
      'We explore emerging technologies and experiment with innovative solutions that address real-world challenges.',
    focusAreas: [
      'Machine Learning',
      'Internet of Things (IoT)',
      'Cybersecurity',
      'Emerging Technologies',
      'Research and Experimentation',
    ],
    icon: 'Cpu',
  },
  {
    id: 'ui-ux',
    domainNumber: '04',
    title: 'UI/UX Design',
    description:
      'We design intuitive and engaging digital experiences with a strong emphasis on usability, accessibility and user-centred design.',
    focusAreas: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Interaction Design',
      'Accessibility',
    ],
    icon: 'Palette',
  },
];
