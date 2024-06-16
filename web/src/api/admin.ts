import { AuthToken } from './types';

export async function readStats(token: AuthToken): Promise<Stats> {
  const response = await fetch(new URL(`${ADMIN_URL}/stats`), {
    headers: { ...token }
  });

  if (response.status === 200) {
    return (await response.json());
  }

  throw 'Failed to read stats.';
}

export type Stats = {
  showCount: number;
};

const ADMIN_URL = `${import.meta.env.VITE_API_URL}/admin`;
