import { logout, useAuth } from '@auth';
import { AdminRoutes, Routes } from '@shared';
import { Link } from 'react-router-dom';

export function Home() {
  const { isAdmin, user } = useAuth();

  return (
    <>
      { isAdmin && (
        <Link to={ AdminRoutes.Home }>Admin</Link>
      )}

      { user ? (
        <button onClick={ logout }>Log Out</button>
      ) : (
        <Link to={ Routes.Signup }>Sign Up</Link>
      )}
    </>
  );
}
