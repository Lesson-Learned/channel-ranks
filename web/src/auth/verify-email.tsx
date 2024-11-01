import { sendVerificationEmail } from '@libraries';
import { Button, Error, useStatus } from '@shared';
import { useAuth } from './context/auth-context';

export function VerifyEmail() {
  const { user } = useAuth();
  const status = useStatus();

  function reloadPage() {
    user?.getIdToken(true)
      .then(() => window.location.reload());
  }

  function resendVerification() {
    sendVerificationEmail().catch(status.setError);
  }

  return (<>
    <span>Please follow the instructions sent to your email.</span>

    <div>
      Don't see the email?
      <Button onClick={ resendVerification }>Resend</Button>
    </div>

    <div>
      When your email is verified,
      <Button onClick={ reloadPage }>Next</Button>
    </div>

    { status.error && (
      <Error message="Failed to resend verification email." />
    )}
  </>);
}
