import { ClubStatistic, SocialStat } from '../types';

export const CLUB_STATISTICS: ClubStatistic[] = [
  {
    id: 'founded',
    label: 'Founded',
    value: '2017',
    numericValue: 2017,
    suffix: '',
    description: 'Years of peer development and community growth at VIT Bhopal',
    iconName: 'Calendar',
  },
  {
    id: 'core-members',
    label: 'Core Members',
    value: '80+',
    numericValue: 80,
    suffix: '+',
    description: 'Active student leads driving technology tracks and initiatives',
    iconName: 'Users',
  },
  {
    id: 'enthusiasts',
    label: 'Enthusiasts',
    value: '1,000+',
    numericValue: 1000,
    suffix: '+',
    description: 'Curious learners attending our hands-on workshops and hackathons',
    iconName: 'Sparkles',
  },
  {
    id: 'events',
    label: 'Events Hosted',
    value: '40+',
    numericValue: 40,
    suffix: '+',
    description: 'Hackathons, coding tussles, fests, and technical workshops',
    iconName: 'Award',
  },
];

export const SOCIAL_STATISTICS: SocialStat[] = [
  {
    id: 'instagram',
    platform: 'Instagram',
    followers: '500+',
    numericCount: 500,
    sublabel: 'Followers',
    iconName: 'Instagram',
    actionHint: 'Official Club Announcements',
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    followers: '500+',
    numericCount: 500,
    sublabel: 'Followers',
    iconName: 'Linkedin',
    actionHint: 'Professional Network & Updates',
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    followers: '100+',
    numericCount: 100,
    sublabel: 'Subscribers',
    iconName: 'Youtube',
    actionHint: 'Workshops & Event Archives',
  },
  {
    id: 'community',
    platform: 'Overall Community',
    followers: '1,500+',
    numericCount: 1500,
    sublabel: 'Followers / Members',
    iconName: 'Globe',
    actionHint: 'Ecosystem of Tech Enthusiasts',
  },
];
