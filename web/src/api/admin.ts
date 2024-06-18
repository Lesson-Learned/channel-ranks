import { Show } from './show';
import { AuthToken } from './types';

export async function createShow(
  body: ShowFormFields,
  token: AuthToken
): Promise<Show> {
  const response = await fetch(new URL(`${ADMIN_URL}/shows`), {
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

export async function readStats(token: AuthToken): Promise<Stats> {
  const response = await fetch(new URL(`${ADMIN_URL}/stats`), {
    headers: { ...token }
  });

  if (response.status === 200) {
    return (await response.json());
  }

  throw 'Failed to read stats.';
}

export async function updateShow(
  id: string,
  updates: ShowFormFields,
  token: AuthToken
): Promise<Partial<Show>> {
  const response = await fetch(new URL(`${ADMIN_URL}/shows/${id}`), {
    body: JSON.stringify(updates),
    headers: { ...token },
    method: 'PATCH'
  });

  if (response.status === 200) {
    return (await response.json());
  }

  if (response.status === 400) {
    throw (await response.json());
  }

  throw 'Failed to update show.';
}

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

export type Stats = {
  showCount: number;
};

const ADMIN_URL = `${import.meta.env.VITE_API_URL}/admin`;
