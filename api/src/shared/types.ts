export type Country = typeof countries[number];
export type Genre = typeof genres[number];
export type Network = typeof networks[number];

const countries = [
  'Australia',
  'Canada',
  'United States'
] as const;

const genres = [
  'Action',
  'Adventure',
  'Comedy',
  'Crime',
  'Drama',
  'Horror',
  'Thriller'
] as const;

const networks = [
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