import { Country, Genre, Network } from './types';

export async function readShow(id: string): Promise<Show> {
  const response = await fetch(new URL(`${SHOWS_URL}/${id}`));

  if (response.status === 200) {
    return (await response.json());
  }

  throw 'Failed to read show.';
}

export async function readShows(): Promise<Show[]> {
  const response = await fetch(new URL(SHOWS_URL));

  if (response.status === 200) {
    return (await response.json());
  }

  throw 'Failed to read shows.';
}

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

const SHOWS_URL = `${import.meta.env.VITE_API_URL}/shows`;
