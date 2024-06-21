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

export const COUNTRY_VALUE_MAP = {
  [COUNTRIES[0]]: COUNTRIES[0],
  [COUNTRIES[1]]: COUNTRIES[1],
  [COUNTRIES[2]]: COUNTRIES[2]
} as const;

export const GENRES = [
  'action',
  'adventure',
  'comedy',
  'crime',
  'drama',
  'horror',
  'thriller'
] as const;

export const GENRE_VALUE_MAP = {
  [GENRES[0]]: GENRES[0],
  [GENRES[1]]: GENRES[1],
  [GENRES[2]]: GENRES[2],
  [GENRES[3]]: GENRES[3],
  [GENRES[4]]: GENRES[4],
  [GENRES[5]]: GENRES[5],
  [GENRES[6]]: GENRES[6]
} as const;

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

export const NETWORK_VALUE_MAP = {
  [NETWORKS[0]]: NETWORKS[0],
  [NETWORKS[1]]: NETWORKS[1],
  [NETWORKS[2]]: NETWORKS[2],
  [NETWORKS[3]]: NETWORKS[3],
  [NETWORKS[4]]: NETWORKS[4],
  [NETWORKS[5]]: NETWORKS[5],
  [NETWORKS[6]]: NETWORKS[6],
  [NETWORKS[7]]: NETWORKS[7],
  [NETWORKS[8]]: NETWORKS[8],
  [NETWORKS[9]]: NETWORKS[9],
  [NETWORKS[10]]: NETWORKS[10]
} as const;

export const STATUS = {
  CANCELLED: 1,
  FINISHED: 2,
  ONGOING: 3,
  UPCOMING: 4
} as const;

export const STATUS_VALUE_MAP = {
  [STATUS.CANCELLED]: 'CANCELLED',
  [STATUS.FINISHED]: 'FINISHED',
  [STATUS.ONGOING]: 'ONGOING',
  [STATUS.UPCOMING]: 'UPCOMING'
} as const;
