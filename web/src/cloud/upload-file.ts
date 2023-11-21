import { storage } from '@auth';
import { ref, uploadBytes } from 'firebase/storage';

export async function uploadFile(file: File, path: string) {
  await uploadBytes(ref(storage, path), file);
}
