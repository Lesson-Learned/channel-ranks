import { Country, Genre, Network, Status } from '../types';

export interface Episode {
  _id: string;
  description: string;
  duration: number;
  episode: number;
  name: string;
  releaseDate: number;
  season: number;
}

export interface Show {
  _id: string;
  country: Country;
  description: string;
  endDate?: number;
  genre: Genre[];
  name: string;
  network: Network;
  poster: string;
  seasons: number[];
  startDate?: number;
  status: Status;
}

export type ReadShowsResponse = {
  numberOfShows: number;
  shows: Show[];
};

export const SHOWS_URL = `${import.meta.env.VITE_API_URL}/shows`;
