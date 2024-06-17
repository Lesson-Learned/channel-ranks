import { Profile } from '@api';
import { onAuthStateChanged, User } from 'firebase/auth';
import { ReactNode, useEffect, useState } from 'react';
import { auth } from '../config';
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
    const unsubscribe = onAuthStateChanged(
      auth,
      user => {
        setUser(user ?? undefined);
        setLoading(false);
      }
    );
    
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
