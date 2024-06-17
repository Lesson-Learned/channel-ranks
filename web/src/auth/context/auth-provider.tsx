import { Profile } from '@api';
import { onAuthStateChange, User } from '@libraries';
import { ReactNode, useEffect, useState } from 'react';
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
      console.log('ON-AUTH-STATE-CHANGE', user);
      setUser(user ?? undefined);
      setLoading(false);
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
