import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/auth-context';

interface Props {
  children: ReactNode;
}

export function GuestGuard({ children }: Props) {
  const { user } = useAuth();

  if (user) {
    return <Navigate replace to="/" />;
  }

  return <>{ children }</>;
}
