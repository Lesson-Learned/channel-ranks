import { getAuthToken } from '@auth';
import { PROFILE_URL } from '../constants';

export async function readIsAdmin(): Promise<boolean> {
  const route = new URL(`${ PROFILE_URL }/is-admin`);

  const token = await getAuthToken();
  const response = await fetch(route, {
    headers: { ...token }
  });

  if (response.status === 200) {
    return true;
  }

  throw new Error('Failed to read admin status.');
}
