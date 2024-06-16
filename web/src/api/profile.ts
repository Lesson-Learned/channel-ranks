import { AuthToken } from './types';

export async function createProfile(token: AuthToken) {
  const response = await fetch(new URL(PROFILE_URL), {
    headers: { ...token },
    method: 'POST'
  });

  if (response.status !== 201) {
    throw 'Failed to create profile.';
  }
}

// TODO - Fix this implementation.
export async function readIsAdmin(token: AuthToken): Promise<boolean> {
  const response = await fetch(new URL(`${PROFILE_URL}/is-admin`), {
    headers: { ...token }
  });

  if (response.status === 200) {
    return true;
  }

  throw 'Failed to read admin status.';
}

const PROFILE_URL = `${import.meta.env.VITE_API_URL}/profile`;
