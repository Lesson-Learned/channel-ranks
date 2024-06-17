import { GuestGuard } from '@auth';
import { PageTitle } from '@shared';

export function LoginPage() {
  return (
    <GuestGuard>
      <PageTitle title="Login">
        Login Page
      </PageTitle>
    </GuestGuard>
  );
}
