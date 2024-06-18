import { Profile, readProfile } from '@api';
import { onAuthStateChange, User } from '@libraries';
import { ReactNode, useEffect, useState } from 'react';
import { getAuthToken } from '../utils/get-auth-token';
import { AuthContext } from './auth-context';

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile>();
  const [user, setUser] = useState<User>();

  function updateProfile(profile: Profile | undefined) {
    setProfile(profile);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChange(user => {
      setUser(user ?? undefined);

      if (user?.emailVerified) {
        setLoading(true);

        (async function() {
          setProfile(
            await readProfile(await getAuthToken())
          );
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
      setProfile: updateProfile,
      user
    }}>
      { children }
    </AuthContext.Provider>
  );
}
