import { sendVerificationEmail } from '@libraries';
import { Button, Error, useStatus } from '@shared';

export function VerifyEmail() {
  const status = useStatus();

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
      <Button onClick={ () => window.location.reload() }>
        Reload This Page
      </Button>
    </div>
    { status.error && (
      <Error message="Failed to resend verification email." />
    )}
  </>);
}
