import { AuthToken } from '../types';
import { PROFILE_URL } from './profile';

export async function addShowToProfile(
  showId: string,
  token: AuthToken
): Promise<void> {
  const response = await fetch(
    new URL(`${PROFILE_URL}/shows/${showId}/add`),
    {
      headers: { ...token },
      method: 'PATCH'
    }
  );

  if (response.status !== 200) {
    throw new Error('Failed to add show to profile.');
  }
}
