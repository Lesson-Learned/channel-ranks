import { getDownloadURL, getStorage } from 'firebase-admin/storage';
import { STORAGE } from './config';

export function readFileUrl(path: string): Promise<string> {
  const fileRef = getStorage().bucket(STORAGE).file(path);

  return getDownloadURL(fileRef);
}
