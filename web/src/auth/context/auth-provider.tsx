import { Profile, readProfile } from '@api';
import { onAuthStateChange, User } from '@libraries';
import { ReactNode, useEffect, useState } from 'react';
import { getAuthToken } from '../utils/get-auth-token';
import { AuthContext } from './auth-context';

export function AuthProvider({ children }: Props) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile>();
  const [user, setUser] = useState<User>();

  function setProfileName(name: string) {
    setProfile(profile => ({ ...profile!, name }));
  }

  function setProfilePhoto(photo: string) {
    setProfile(profile => ({ ...profile!, photo }));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChange(user => {
      setUser(user ?? undefined);

      if (user?.emailVerified) {
        setLoading(true);

        (async function() {
          const token = await getAuthToken();
          const profile = await readProfile(token);

          setProfile(profile);
        })()
        .catch(() => setProfile(undefined))
        .finally(() => setLoading(false));
      } else {
        setLoading(false);
        setProfile(undefined);
      }
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider value={{
      profile,
      setProfileName,
      setProfilePhoto,
      user
    }}>
      { children }
    </AuthContext.Provider>
  );
}

type Props = {
  children: ReactNode;
};
