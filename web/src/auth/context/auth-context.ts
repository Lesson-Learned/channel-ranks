import { User } from 'firebase/auth';
import { createContext, useContext } from 'react';

interface AuthContextValues {
  isAdmin: boolean;
  user: User | null;
}

export const AuthContext = createContext<AuthContextValues>({
  isAdmin: false,
  user: null
});

export function useAuth() {
  return useContext(AuthContext);
}
