import { getAuth } from 'firebase-admin/auth';

export async function getUid(token: string): Promise<string> {
  const decoded = await getAuth().verifyIdToken(token);

  return decoded.uid;
}
