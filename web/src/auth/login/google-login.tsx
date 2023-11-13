import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../config';

export function GoogleLogin() {
  const [loading, setLoading] = useState(false);

  function login() {
    async function handler() {
      try {
        await signInWithPopup(auth, new GoogleAuthProvider());
      } catch {
        alert('Failed to login.');
      } finally {
        setLoading(false);
      }
    }

    setLoading(true);
    handler();
  }

  return (
    <button disabled={ loading } onClick={ login }>
      Login With Google
    </button>
  );
}
