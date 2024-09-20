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
  'crime',
  'drama',
  'fantasy',
  'thriller'
] as const;

export const NETWORKS = [
  'AMC',
  'HBO',
] as const;

export const STATUSES = [
  'cancelled',
  'finished',
  'ongoing',
  'upcoming'
] as const;
