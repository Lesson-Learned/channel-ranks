export type Country = typeof COUNTRIES[number];
export type Genre = typeof GENRES[number];
export type Network = typeof NETWORKS[number];
export type Rating =
  0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 |
  5 | 5.5 | 6 | 6.5 | 7 | 7.5 | 8 | 8.5 | 9 | 9.5 | 10;
export type Status = typeof STATUS[number];

export const COUNTRIES = [
  'USA'
] as const;

export const GENRES = [
  'action',
  'adventure',
  'animation',
  'comedy',
  'crime',
  'dark comedy',
  'drama',
  'fantasy',
  'mystery',
  'psychological',
  'romance',
  'satire',
  'spy',
  'superhero',
  'thriller'
] as const;

export const NETWORKS = [
  'Amazon Prime Video',
  'AMC',
  'BBC America',
  'HBO',
  'Netflix',
  'Nickelodeon'
] as const;

export const STATUS = [
  'cancelled',
  'finished',
  'ongoing',
  'upcoming'
] as const;
