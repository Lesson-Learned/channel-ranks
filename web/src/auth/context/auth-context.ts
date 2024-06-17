import { Profile } from '@api';
import { User } from '@libraries';
import { createContext, useContext } from 'react';

interface AuthContextValues {
  profile: Profile | undefined;
  setProfile(profile: Profile | undefined): void;
  user: User | undefined;
}

export const AuthContext = createContext<AuthContextValues>({
  profile: undefined,
  setProfile() {},
  user: undefined
});

export function useAuth() {
  return useContext(AuthContext);
}
