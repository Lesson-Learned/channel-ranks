import { signOut } from 'firebase/auth';
import { auth } from '../config';

export function logout() {
  signOut(auth);
}
