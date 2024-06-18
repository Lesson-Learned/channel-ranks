import { Login, SetupProfile, useAuth, VerifyEmail } from '@auth';
import { PageTitle } from '@shared';
import { Navigate } from 'react-router-dom';

export function LoginPage() {
  const { profile, user } = useAuth();

  if (profile && user?.emailVerified) {
    return <Navigate replace to="/" />;
  }

  if (user?.emailVerified) {
    return (
      <PageTitle title="Setup Profile">
        <SetupProfile />
      </PageTitle>
    );
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
