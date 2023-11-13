import { GoogleLogin, GuestGuard } from '@auth';
import { PageTitle, Routes } from '@shared';
import { Link } from 'react-router-dom';

export function LoginPage() {
  return (
    <GuestGuard>
      <PageTitle title="Login">
        <GoogleLogin />
        <Link to={ Routes.Signup }>Sign Up</Link>
      </PageTitle>
    </GuestGuard>
  );
}
