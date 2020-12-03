import { Route, Skill } from '@client';

export const ROUTES: Route[] = [
  {
    to: 'https://github.com/on3dd',
    name: 'github',
  },
  {
    to: 'https://t.me/on3dd',
    name: 'telegram',
  },
  {
    to: 'https://vk.com/on3dd',
    name: 'vk',
  },
  {
    to: 'https://twitter.com/on3dd',
    name: 'twitter',
  },
  {
    to: 'https://www.pinterest.ru/on3dd/',
    name: 'pinterest',
  },
  {
    to: 'https://www.last.fm/user/one_dead',
    name: 'last.fm',
    icon: 'lastfm',
  },
  {
    to: 'mailto:onedeadwave.work@gmai.com',
    name: 'mail',
    icon: 'envelope',
  },
];

export const SKILLS: Skill[] = [
  {
    name: 'HTML, CSS',
    amount: 90,
  },
  {
    name: 'Vue',
    amount: 85,
  },
  {
    name: 'React',
    amount: 75,
  },
  {
    name: 'React Native',
    amount: 35,
  },
  {
    name: 'JavaScript',
    amount: 80,
  },
  {
    name: 'TypeScript',
    amount: 70,
  },
  {
    name: 'Node.js',
    amount: 65,
  },
  {
    name: 'Go',
    amount: 50,
  },
  {
    name: 'SQL',
    amount: 45,
  },
  {
    name: 'NoSQL',
    amount: 60,
  },
  {
    name: 'GraphQL',
    amount: 40,
  },
  {
    name: 'RabbitMQ',
    amount: 30,
  },
  {
    name: 'Docker',
    amount: 25,
  },
];
