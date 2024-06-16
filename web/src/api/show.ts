import { AuthToken, Country, Genre, Network } from './types';

export async function createShow(
  body: ShowFormFields,
  token: AuthToken
): Promise<Show> {
  const response = await fetch(new URL(SHOWS_URL), {
    body: JSON.stringify(body),
    headers: { ...token },
    method: 'POST',
  });

  if (response.status === 201) {
    return (await response.json());
  }

  if (response.status === 400) {
    throw (await response.json());
  }

  throw 'Failed to create show.';
}

export async function deleteShow(
  id: string,
  token: AuthToken
) {
  const response = await fetch(new URL(`${SHOWS_URL}/${id}`), {
    headers: { ...token },
    method: 'DELETE'
  });

  if (response.status !== 204) {
    throw 'Failed to delete show.';
  }
}

export async function readShow(id: string): Promise<Show> {
  const response = await fetch(new URL(`${SHOWS_URL}/${id}`));

  if (response.status === 200) {
    return (await response.json());
  }

  throw 'Failed to read show.';
}

export async function readShowFilePaths(id: string): Promise<ShowFiles> {
  const response = await fetch(new URL(`${SHOWS_URL}/file-paths/${id}`));

  if (response.status === 200) {
    return (await response.json());
  }

  throw 'Failed to read show file paths.';
}

export async function readShows(): Promise<Show[]> {
  const response = await fetch(new URL(SHOWS_URL));

  if (response.status === 200) {
    return (await response.json());
  }

  throw 'Failed to read shows.';
}

export async function updateShow(
  id: string,
  updates: ShowFormFields,
  token: AuthToken
): Promise<Partial<Show>> {
  const response = await fetch(new URL(`${SHOWS_URL}/${id}`), {
    body: JSON.stringify(updates),
    headers: { ...token },
    method: 'PATCH'
  });

  if (response.status === 200) {
    return (await response.json());
  }

  throw 'Failed to update show.';
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

const SHOWS_URL = `${import.meta.env.VITE_API_URL}/shows`;
