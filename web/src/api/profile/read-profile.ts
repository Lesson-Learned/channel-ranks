import { AuthToken } from '../types';
import { Profile, PROFILE_URL } from './profile';

export async function readProfile(token: AuthToken): Promise<Profile> {
  const response = await fetch(
    new URL(PROFILE_URL),
    {
      headers: { ...token }
    }
  );

  if (response.status === 200 || response.status === 201) {
    return (await response.json());
  }

  throw new Error('Failed to read profile.');
}
