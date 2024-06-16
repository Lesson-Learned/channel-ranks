import { createProfile } from '@api';
import { getAuthToken } from '@auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../config';

export function GoogleSignup() {
  const [loading, setLoading] = useState(false);

  function signup() {
    async function handler() {
      try {
        await signInWithPopup(auth, new GoogleAuthProvider());
        await createProfile(await getAuthToken());
      } catch {
        alert('Failed to sign up.');
      } finally {
        setLoading(false);
      }
    }

    setLoading(true);
    handler();
  }

  return (
    <button disabled={ loading } onClick={ signup }>
      Sign Up With Google
    </button>
  );
}
