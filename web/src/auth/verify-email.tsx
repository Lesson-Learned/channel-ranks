import { Button, Error, useStatus } from '@shared';
import { sendEmailVerification } from 'firebase/auth';
import { auth } from './config';

export function VerifyEmail() {
  const status = useStatus();

  function resendVerification() {
    sendEmailVerification(auth.currentUser!).catch(status.setError);
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
