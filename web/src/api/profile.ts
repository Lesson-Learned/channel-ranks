import { AuthToken } from './types';

export async function createProfile(
  body: Pick<Profile, 'name'>,
  token: AuthToken
): Promise<Profile> {
  const response = await fetch(new URL(PROFILE_URL), {
    body: JSON.stringify(body),
    headers: { ...token },
    method: 'POST'
  });

  if (response.status === 201) {
    return (await response.json());
  }

  if (response.status === 400) {
    throw (await response.json());
  }

  throw new Error('Failed to create profile.');
}

export async function readProfile(
  token: AuthToken
): Promise<Profile> {
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
  admin?: true;
  name: string;
}

const PROFILE_URL = `${import.meta.env.VITE_API_URL}/profile`;
