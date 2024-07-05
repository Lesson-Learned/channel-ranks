export type Country = typeof COUNTRIES[number];
export type Genre = typeof GENRES[number];
export type Network = typeof NETWORKS[number];
export type Status = typeof STATUS[StatusKey];
export type StatusKey = keyof typeof STATUS;

export const COUNTRIES = [
  'Australia',
  'Canada',
  'USA'
] as const;

export const GENRES = [
  'action',
  'adventure',
  'comedy',
  'crime',
  'drama',
  'horror',
  'thriller'
] as const;

export const NETWORKS = [
  'ABC',
  'Amazon Prime Video',
  'AMC',
  'Apple TV',
  'Crunchyroll',
  'Disney+',
  'HBO',
  'Hulu',
  'Max',
  'Netflix',
  'Paramount+'
] as const;

export const STATUS = {
  CANCELLED: 1,
  FINISHED: 2,
  ONGOING: 3,
  UPCOMING: 4
} as const;
