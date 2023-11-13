import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/auth-context';

interface Props {
  children: ReactNode;
}

export function AdminGuard({ children }: Props) {
  const { isAdmin, user } = useAuth();

  if (isAdmin && user) {
    return <>{ children }</>;
  }

  return <Navigate replace to="/" />;
}
