export type Country = typeof COUNTRIES[number];
export type Genre = typeof GENRES[number];
export type Network = typeof NETWORKS[number];
export type Status = typeof STATUS[number];

export const COUNTRIES = [
  'USA'
] as const;

export const GENRES = [
  'crime',
  'drama',
  'thriller'
] as const;

export const NETWORKS = [
  'AMC',
  'HBO'
] as const;

export const STATUS = [
  'cancelled',
  'finished',
  'ongoing',
  'upcoming'
] as const;
