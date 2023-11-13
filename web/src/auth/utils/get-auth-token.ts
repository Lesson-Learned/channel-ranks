import { auth } from '../config';
import { AuthToken } from '../types';

export async function getAuthToken(): Promise<AuthToken> {
  if (!auth.currentUser) {
    throw new Error('No user.');
  }

  const token = await auth.currentUser.getIdToken();

  return { Authorization: `Bearer ${ token }` };
}
