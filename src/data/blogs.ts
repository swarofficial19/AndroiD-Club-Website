import { BlogPost } from '../types';

export const EDUCATIONAL_BLOGS: BlogPost[] = [
  {
    id: 'jetpack-compose',
    number: '01',
    title: 'Jetpack Compose',
    category: 'Modern UI Toolkit',
    estimatedReadTime: '5 min read',
    description:
      "Explore Jetpack Compose, Google's modern native UI toolkit for building Android interfaces using declarative Kotlin APIs.",
    topics: ['Declarative UI', 'Composables', 'Recomposition', 'Material 3 Design'],
    summary:
      'Jetpack Compose dramatically accelerates Android UI engineering by replacing traditional XML layouts with idiomatic Kotlin functions. Learn how state hoisting, modifier chains, and declarative design simplify intuitive layout creation.',
  },
  {
    id: 'kotlin-coroutines',
    number: '02',
    title: 'Kotlin Coroutines',
    category: 'Asynchronous Programming',
    estimatedReadTime: '6 min read',
    description:
      'Understand asynchronous programming with Kotlin Coroutines and learn how to perform background operations without blocking the main UI thread.',
    topics: ['Suspend Functions', 'Dispatchers', 'Structured Concurrency', 'StateFlow'],
    summary:
      'Coroutines eliminate callback nesting and complex threading logic. Discover how light-weight threads, dispatchers (Dispatchers.IO vs Dispatchers.Main), and structured concurrency prevent memory leaks in mobile applications.',
  },
  {
    id: 'mvvm-architecture',
    number: '03',
    title: 'MVVM Architecture',
    category: 'System Design & Patterns',
    estimatedReadTime: '7 min read',
    description:
      'Learn about Model-View-ViewModel architecture and how it separates business logic from the user interface to create maintainable applications.',
    topics: ['Separation of Concerns', 'ViewModel Lifecycle', 'LiveData & StateFlow', 'Clean Architecture'],
    summary:
      'MVVM provides a clean decoupled boundary between UI components and domain business logic. This guide covers how ViewModel preserves UI state during configuration changes and coordinates with repository layers.',
  },
  {
    id: 'android-jetpack-libraries',
    number: '04',
    title: 'Android Jetpack Libraries',
    category: 'Core Android Suite',
    estimatedReadTime: '6 min read',
    description:
      'Discover Android Jetpack libraries such as Room, Navigation and WorkManager that simplify modern Android application development.',
    topics: ['Room SQLite ORM', 'Navigation Component', 'WorkManager', 'Lifecycle Awareness'],
    summary:
      'Android Jetpack is a curated suite of libraries designed to follow best practices, eliminate boilerplate code, and write code that works consistently across diverse Android versions and devices.',
  },
];
