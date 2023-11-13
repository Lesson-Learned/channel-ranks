import { getAuthToken } from '@auth';
import { PROFILE_URL } from '../constants';

export async function createProfile() {
  const route = new URL(PROFILE_URL);

  const token = await getAuthToken();
  const response = await fetch(route, {
    headers: { ...token },
    method: 'POST'
  });

  if (response.status !== 201) {
    throw new Error('Failed to create profile.');
  }
}
