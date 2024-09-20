import { Login, useAuth, VerifyEmail } from '@auth';
import { PageTitle } from '@shared';
import { Navigate } from 'react-router-dom';

export function LoginPage() {
  const { user } = useAuth();

  if (user?.emailVerified) {
    return <Navigate replace to="/" />;
  }

  if (user) {
    return (
      <PageTitle title="Verify Email">
        <VerifyEmail />
      </PageTitle>
    );
  }

  return (
    <PageTitle title="Login">
      <Login />
    </PageTitle>
  );
}
