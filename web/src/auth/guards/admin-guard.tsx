import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/auth-context';

interface Props {
  children: ReactNode;
}

// TODO - Fix this.
export function AdminGuard({ children }: Props) {
  const { user } = useAuth();

  if (user) {
    return <>{ children }</>;
  }

  return <Navigate replace to="/" />;
}
