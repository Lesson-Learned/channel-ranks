import { AuthToken } from '@api';
import { getToken } from '@libraries';

export async function getAuthToken(): Promise<AuthToken> {
  return { Authorization: `Bearer ${ await getToken() }` };
}
