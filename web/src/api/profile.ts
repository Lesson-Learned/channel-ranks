import { AuthToken } from './types';

export async function readProfile(token: AuthToken): Promise<Profile> {
  const response = await fetch(new URL(PROFILE_URL), {
    headers: { ...token },
  });

  if (response.status === 200) {
    return (await response.json());
  }

  throw new Error('Failed to read profile.');
}

export interface Profile {
  _id: string;
  name: string;
}

const PROFILE_URL = `${import.meta.env.VITE_API_URL}/profile`;
