import { Profile } from '@api';
import { User } from '@libraries';
import { createContext, useContext } from 'react';

export const AuthContext = createContext<AuthContextValues>({
  profile: undefined,
  setProfile() {},
  user: undefined
});

export function useAuth(): AuthContextValues {
  return useContext(AuthContext);
}

type AuthContextValues = {
  profile: Profile | undefined;
  setProfile(profile: Profile | undefined): void;
  user: User | undefined;
};
