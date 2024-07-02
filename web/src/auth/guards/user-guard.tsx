import { routes } from '@shared';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/auth-context';

interface Props {
  children: ReactNode;
}

export function UserGuard({ children }: Props) {
  const { user } = useAuth();

  if (user && user.emailVerified) {
    return <>{ children }</>;
  }

  return <Navigate replace to={ routes.signup } />;
}
