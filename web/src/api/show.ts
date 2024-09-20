import { Country, Genre, Network, Status } from './types';

export async function readShow(showId: string): Promise<Show> {
  const response = await fetch(
    new URL(`${SHOWS_URL}/${showId}`)
  );

  if (response.status === 200) {
    return (await response.json());
  }

  throw new Error('Failed to read show.');
}

export async function readShows(query: string): Promise<ReadShowsResponse> {
  const response = await fetch(
    new URL(`${SHOWS_URL}${ query ? `?${query}` : '' }`)
  );

  if (response.status === 200) {
    return (await response.json());
  }

  throw new Error('Failed to read shows.');
}

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
  banner: string;
  country: Country;
  description: string;
  endDate?: number;
  genre: Genre[];
  name: string;
  network: Network;
  poster: string;
  // Index indicates the season, element indicates number of episodes.
  seasons: number[];
  startDate?: number;
  status: Status;
}

type ReadShowsResponse = {
  numberOfShows: number;
  shows: Show[];
};

const SHOWS_URL = `${import.meta.env.VITE_API_URL}/shows`;
