export interface AuthToken {
  Authorization: string;
}

export type Country = typeof COUNTRIES[number];
export type Genre = typeof GENRES[number];
export type Network = typeof NETWORKS[number];
export type Status = typeof STATUSES[number];

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

export const STATUSES = [1, 2, 3, 4] as const;

export const STATUS_KEY_MAP = {
  CANCELLED: STATUSES[0],
  FINISHED: STATUSES[1],
  ONGOING: STATUSES[2],
  UPCOMING: STATUSES[3]
} as const;

export const STATUS_VALUE_MAP = {
  [STATUSES[0]]: 'cancelled',
  [STATUSES[1]]: 'finished',
  [STATUSES[2]]: 'ongoing',
  [STATUSES[3]]: 'upcoming'
} as const;
