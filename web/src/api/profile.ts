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

  throw 'Failed to create profile.';
}

export interface Profile {
  _id: string;
  admin?: true;
  name: string;
}

const PROFILE_URL = `${import.meta.env.VITE_API_URL}/profile`;
