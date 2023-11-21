import { Country, Genre, Network } from '../types';

export interface Show {
  _id: string;
  banner: string;
  country: Country;
  description: string;
  endDate?: number;
  episodeCount: number;
  genre: Genre[];
  name: string;
  network: Network;
  poster: string;
  releaseDate: number;
  seasonCount: number;
}

export type ShowFiles = Pick<Show, 'banner' | 'poster'>;
export type ShowFormFields = Pick<Show,
  'country' |
  'description' |
  'endDate' |
  'episodeCount' |
  'genre' |
  'name' |
  'network' |
  'releaseDate' |
  'seasonCount'>;
