import { Show } from './show';
import { AuthToken } from './types';

export async function createShow(
  body: CreateShowBody,
  token: AuthToken
): Promise<CreateShowResponse> {
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

  throw new Error('Failed to create show.');
}

export async function updateShow(
  id: string,
  updates: CreateShowBody,
  token: AuthToken
): Promise<UpdateShowResponse> {
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

  throw new Error('Failed to update show.');
}

export type CreateShowBody = Pick<Show,
  'country' |
  'description' |
  'endDate' |
  'genre' |
  'name' |
  'network' |
  'numEpisodes' |
  'numSeasons' |
  'startDate' |
  'status'>;

type CreateShowResponse = {
  paths: {
    banner: string;
    poster: string;
  };
  show: Show;
};

type UpdateShowResponse = {
  paths: {
    banner: string;
    poster: string;
  };
  show: Show;
};

const ADMIN_URL = `${import.meta.env.VITE_API_URL}/admin`;
