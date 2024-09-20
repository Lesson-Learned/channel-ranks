import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../auth/config';

export async function uploadFile(file: File, path: string): Promise<void> {
  await uploadBytes(ref(storage, path), file);
}
