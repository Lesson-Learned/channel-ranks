import { getDownloadURL, getStorage } from 'firebase-admin/storage';
import { STORAGE } from '../../config';

export async function getFileUrl(path: string): Promise<string> {
  const fileRef = getStorage().bucket(STORAGE).file(path);

  return (await getDownloadURL(fileRef));
}
