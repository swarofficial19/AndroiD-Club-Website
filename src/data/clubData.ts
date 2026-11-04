export * from './club';
export * from './statistics';
export * from './domains';
export * from './team';
export * from './events';
export * from './blogs';
export * from './sponsors';
export * from './social';

import { CLUB_STATISTICS, SOCIAL_STATISTICS } from './statistics';
import { DOMAINS as OFFICIAL_DOMAINS } from './domains';
import { OFFICIAL_EVENTS } from './events';
import { LEADERSHIP_TEAM } from './team';
import { Project } from '../types';

// Backward compatibility alias for statistics
export const CLUB_STATS = CLUB_STATISTICS;
export const SOCIAL_STATS = SOCIAL_STATISTICS;
export const EVENTS = OFFICIAL_EVENTS;

// Student Research Prototypes built by Android Club VIT Bhopal
export const PROJECTS: Project[] = [
  {
    id: 'smart-expense-tracker',
    title: 'Smart Expense Tracker',
    category: 'Android Native',
    tagline: 'Personal finance management with predictive budgeting',
    description:
      'A native Android finance tracker built with Jetpack Compose and Room DB, featuring automated expense categorization, INR analytics, and budget forecasting.',
    fullDescription:
      'Developed by student members of Android Club, Smart Expense Tracker demonstrates clean architecture and offline-first Room database storage. It captures daily university expenses with local encryption and intuitive spending trends.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room DB', 'Coroutines', 'Material 3', 'StateFlow'],
    stats: [
      { label: 'Latency', value: '<12ms' },
      { label: 'Storage', value: '100% Local' },
      { label: 'Architecture', value: 'Clean MVI' },
    ],
    features: [
      'Instant expense logging with custom INR currency formatting',
      'Offline-first architecture with encrypted Room database storage',
      'Interactive categorical breakdown charts and monthly budget limits',
      'Exportable CSV and PDF summary reports for monthly accounting',
      'Biometric fingerprint authentication lock',
    ],
    architectureOverview:
      'MVI (Model-View-Intent) pattern with Kotlin Flow streams, Repository abstraction layer, and SQLCipher encrypted local SQLite storage.',
    githubUrl: 'https://github.com/androidclub-vitbhopal',
    demoUrl: 'https://github.com/androidclub-vitbhopal',
    mockupType: 'finance',
    year: '2026',
  },
  {
    id: 'campus-connect',
    title: 'Campus Connect',
    category: 'Full-Stack',
    tagline: 'Student community and real-time communication platform',
    description:
      'An all-in-one university hub connecting student clubs, academic event feeds, timetable syncing, and verified peer-to-peer discussion channels.',
    fullDescription:
      'Campus Connect was conceptualized by Android Club to consolidate campus activities. It delivers official department notices, club event registrations, and lost-and-found boards in a consolidated application.',
    technologies: ['Kotlin', 'Jetpack Compose', 'WebSockets', 'Node.js', 'PostgreSQL', 'Coroutines'],
    stats: [
      { label: 'Sync Time', value: 'Real-Time' },
      { label: 'Clubs Supported', value: '18+' },
      { label: 'Target Platform', value: 'Android 14+' },
    ],
    features: [
      'Role-based official announcement broadcast system',
      'Integrated event calendar with one-tap Google Calendar sync',
      'Student marketplace for course textbooks and lab equipment',
      'Anonymous campus suggestion and inquiry board',
      'Low-bandwidth offline cache mode for campus Wi-Fi',
    ],
    architectureOverview:
      'Clean Architecture with Hilt Dependency Injection, Retrofit for REST endpoints, and WebSocket channels for instant event broadcasts.',
    githubUrl: 'https://github.com/androidclub-vitbhopal',
    demoUrl: 'https://github.com/androidclub-vitbhopal',
    mockupType: 'campus',
    year: '2026',
  },
  {
    id: 'ecosort-ai',
    title: 'EcoSort',
    category: 'AI & ML',
    tagline: 'Waste segregation & sustainability awareness platform',
    description:
      'An AI-powered environmental application that utilizes an on-device computer vision model to identify waste types and instruct proper campus recycling.',
    fullDescription:
      'EcoSort tackles on-campus waste contamination. By pointing the phone camera at waste items, students receive immediate classification (dry, wet, recyclable, e-waste) along with campus bin locations and sustainability points.',
    technologies: ['Kotlin', 'TensorFlow Lite', 'CameraX', 'MediaPipe', 'Material 3', 'Room'],
    stats: [
      { label: 'Model Size', value: '4.8 MB' },
      { label: 'Classification', value: '96.2%' },
      { label: 'Inference', value: '45ms' },
    ],
    features: [
      'Real-time CameraX video feed with on-device bounding boxes',
      'TensorFlow Lite quantized neural net running offline without internet',
      'Interactive campus recycling map with navigation to nearest bin',
      'Gamified green points leaderboard to foster eco-friendly student habits',
      'Detailed educational guides on proper e-waste and plastic disposal',
    ],
    architectureOverview:
      'CameraX image analysis pipeline feeding a quantized MobileNetV3 backbone via TensorFlow Lite GPU delegate.',
    githubUrl: 'https://github.com/androidclub-vitbhopal',
    demoUrl: 'https://github.com/androidclub-vitbhopal',
    mockupType: 'recycling',
    year: '2025',
  },
  {
    id: 'healthmate',
    title: 'HealthMate',
    category: 'Sustainability',
    tagline: 'Digital health and student wellness management concept',
    description:
      'A holistic student wellness tracker combining hydration reminders, study-break posture timers, sleep logging, and ergonomic screen-time tracking.',
    fullDescription:
      'Long coding and study sessions take a toll on student health. HealthMate uses subtle notifications, step monitoring via Android Sensor API, and sleep cycle correlation to help students sustain peak physical and mental wellness.',
    technologies: ['Kotlin', 'Android Sensors API', 'WorkManager', 'Jetpack Compose', 'DataStore'],
    stats: [
      { label: 'Battery Impact', value: '<1.5%/day' },
      { label: 'Sensors', value: 'Step + Light' },
      { label: 'Privacy', value: 'Zero Cloud Send' },
    ],
    features: [
      'Background step and movement calculation using hardware step detector',
      'Smart hydration reminders calibrated to temperature and daily activity',
      'Pomodoro study cycles with guided 20-20-20 eye strain exercises',
      'Sleep consistency streak tracker with quiet dark mode bedtime themes',
      'Weekly wellness summary cards ready for personal retrospective',
    ],
    architectureOverview:
      'Android WorkManager for periodic background health alarms and Jetpack DataStore for lightweight preference persistence.',
    githubUrl: 'https://github.com/androidclub-vitbhopal',
    demoUrl: 'https://github.com/androidclub-vitbhopal',
    mockupType: 'health',
    year: '2025',
  },
];
