import { Profile } from '@api';
import { User } from '@libraries';
import { createContext, useContext } from 'react';

export const AuthContext = createContext<AuthContextValues>({
  profile: undefined,
  setProfileName() {},
  setProfilePhoto() {},
  user: undefined
});

export function useAuth(): AuthContextValues {
  return useContext(AuthContext);
}

type AuthContextValues = {
  profile: Profile | undefined;
  setProfileName(name: string): void;
  setProfilePhoto(photo: string): void;
  user: User | undefined;
};
