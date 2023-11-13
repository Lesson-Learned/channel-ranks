import { GoogleSignup, GuestGuard } from '@auth';
import { PageTitle, Routes } from '@shared';
import { Link } from 'react-router-dom';

export function SignupPage() {
  return (
    <GuestGuard>
      <PageTitle title="Sign Up">
        <GoogleSignup />
        <Link to={ Routes.Login }>Login</Link>
      </PageTitle>
    </GuestGuard>
  );
}
