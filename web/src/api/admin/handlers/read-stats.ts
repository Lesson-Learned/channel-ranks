import { getAuthToken } from '@auth';
import { ADMIN_URL } from '../constants';
import { Stats } from '../types';

export async function readStats(): Promise<Stats> {
  const route = new URL(`${ ADMIN_URL }/stats`);

  const token = await getAuthToken();
  const response = await fetch(route, {
    headers: { ...token }
  });

  if (response.status === 200) {
    return (await response.json());
  }

  throw new Error('Failed to read stats.');
}
