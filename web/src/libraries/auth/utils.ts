import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import { auth } from './config';
import { Unsubscribe, User } from './types';

export async function getToken(): Promise<string> {
  const token = await auth.currentUser?.getIdToken();

  if (token) {
    return token;
  }

  throw 'No token.';
}

export async function loginWithEmailAndPassword(
  email: string,
  password: string
) {
  await signInWithEmailAndPassword(auth, email, password);
}

export async function loginWithGoogle() {
  await signInWithPopup(auth, new GoogleAuthProvider());
}

export function logout() {
  signOut(auth);
}

export function onAuthStateChange(
  observer: (user: User | null) => void | Promise<void>
): Unsubscribe {
  return onAuthStateChanged(auth, observer);
}

export function sendVerificationEmail(): Promise<void> {
  if (auth.currentUser) {
    return sendEmailVerification(auth.currentUser);
  }

  throw 'Failed to send verification email.';
}

export async function signupWithEmailAndPassword(
  email: string,
  password: string
) {
  const credential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await sendEmailVerification(credential.user);
}

export async function signupWithGoogle() {
  await signInWithPopup(auth, new GoogleAuthProvider());
}
