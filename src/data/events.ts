import { EventItem } from '../types';

export const OFFICIAL_EVENTS: EventItem[] = [
  {
    id: 'geek-rush-2026',
    title: 'Geek Rush',
    date: '01 April 2026',
    formattedDate: 'April 01, 2026',
    year: 2026,
    category: 'Competition',
    status: 'Upcoming',
    description:
      'A multi-round technology event combining competitive challenges, technical problem-solving and fun activities.',
    location: 'Auditorium Block / Tech Lab, VIT Bhopal',
    mode: 'In-Person',
    detailedAgenda: [
      { time: '10:00 AM', topic: 'Orientation & Rules Briefing' },
      { time: '11:00 AM', topic: 'Round 1: Rapid Debugging Sprint' },
      { time: '02:00 PM', topic: 'Round 2: Algorithmic Showdown' },
      { time: '04:30 PM', topic: 'Final Round: Interactive Tech Quiz & Awards' },
    ],
  },
  {
    id: 'meet-greet-3',
    title: 'Meet & Greet 3.0',
    date: '18 September 2025',
    formattedDate: 'September 18, 2025',
    year: 2025,
    category: 'Orientation',
    status: 'Past',
    description:
      "An introductory event designed to welcome students and introduce them to the Android Club's technical journey and community.",
    location: 'Central Seminar Hall, VIT Bhopal',
    mode: 'In-Person',
    detailedAgenda: [
      { time: '05:00 PM', topic: 'Welcome Address & Club Journey 2017–Present' },
      { time: '05:45 PM', topic: 'Domain Track Introductions & Tech Roadmaps' },
      { time: '06:30 PM', topic: 'Interactive Q&A & Peer Networking' },
    ],
  },
  {
    id: '404-fun-found',
    title: '404: Fun Found',
    date: '22 February 2025',
    formattedDate: 'February 22, 2025',
    year: 2025,
    category: 'College Fest',
    status: 'Past',
    description:
      'An engaging event organised as part of Advitya 2025, the annual college fest.',
    location: 'Campus Ground / SDC Arena, VIT Bhopal',
    mode: 'In-Person',
    detailedAgenda: [
      { time: '11:00 AM', topic: 'Opening of 404 Interactive Tech Arena' },
      { time: '01:00 PM', topic: 'Campus Treasure Hunt & Logic Riddles' },
      { time: '04:00 PM', topic: 'Advitya 2025 Tech Celebration' },
    ],
  },
  {
    id: 'android-fusion',
    title: 'Android Fusion',
    date: '09 May 2024',
    formattedDate: 'May 09, 2024',
    year: 2024,
    category: 'Mobile Workshop',
    status: 'Past',
    description:
      'An immersive event exploring modern Android development and technology integration.',
    location: 'Computer Lab 3, Academic Block, VIT Bhopal',
    mode: 'Hands-on Workshop',
    detailedAgenda: [
      { time: '02:00 PM', topic: 'Kotlin & Jetpack Compose Fundamentals' },
      { time: '03:30 PM', topic: 'Building a Reactive UI with StateFlow' },
      { time: '05:00 PM', topic: 'API Integration & On-Device Deployment' },
    ],
  },
  {
    id: 'dsa-tussle',
    title: 'DSA Tussle',
    date: '22 February 2024',
    formattedDate: 'February 22, 2024',
    year: 2024,
    category: 'Competitive Coding',
    status: 'Past',
    description:
      'A competitive coding event focused on data structures, algorithms and problem-solving.',
    location: 'Virtual HackerArena / Online Contest',
    mode: 'Online Contest',
    detailedAgenda: [
      { time: '06:00 PM', topic: 'Contest Launch & Platform Access' },
      { time: '06:15 PM', topic: '3-Hour Algorithmic Challenge' },
      { time: '09:30 PM', topic: 'Live Editorial & Leaderboard Reveal' },
    ],
  },
  {
    id: 'meet-and-greet-2023',
    title: 'Meet and Greet',
    date: '11 October 2023',
    formattedDate: 'October 11, 2023',
    year: 2023,
    category: 'Community Meet',
    status: 'Past',
    description:
      'A community gathering introducing students to the club and its activities.',
    location: 'Auditorium Hall, VIT Bhopal',
    mode: 'In-Person',
    detailedAgenda: [
      { time: '04:30 PM', topic: 'Freshers Induction & Club Overview' },
      { time: '05:15 PM', topic: 'Senior Project Demos & Experiences' },
      { time: '06:00 PM', topic: 'Community Interaction & Games' },
    ],
  },
];
