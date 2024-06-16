import { Countries, Genres, Networks } from './constants';

export interface AuthToken {
  Authorization: string;
}

export type Country = typeof Countries[number];
export type Genre = typeof Genres[number];
export type Network = typeof Networks[number];
