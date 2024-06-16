import { AuthToken } from '@api';
import { auth } from '../config';

export async function getAuthToken(): Promise<AuthToken> {
  const token = await auth.currentUser?.getIdToken();

  if (token) {
    return { Authorization: `Bearer ${ token }` };
  }

  throw 'No token.';
}
