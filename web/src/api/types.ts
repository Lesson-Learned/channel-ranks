export type AuthToken = {
  Authorization: string;
};
export type Country = typeof COUNTRIES[number];
export type Genre = typeof GENRES[number];
export type Network = typeof NETWORKS[number];
export type Status = typeof STATUSES[number];

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

export const STATUSES = [
  'cancelled',
  'finished',
  'ongoing',
  'upcoming'
] as const;
