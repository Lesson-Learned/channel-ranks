import { loginWithEmailAndPassword, loginWithGoogle } from '@libraries';
import {
  Button,
  Error,
  Form,
  Input,
  Label,
  useInput,
  useStatus
} from '@shared';

export function Login() {
  const email = useInput();
  const password = useInput();
  const status = useStatus();

  function emailAndPasswordLogin() {
    if (email.empty()) {
      return email.setError('Please enter your email.');
    }

    if (password.empty()) {
      return password.setError('Please enter your password.');
    }

    status.setLoading();
    loginWithEmailAndPassword(email.clean(), password.get)
      .then(status.setNone)
      .catch(status.setError);
  }

  function googleLogin() {
    status.setLoading();
    loginWithGoogle()
      .then(status.setNone)
      .catch(status.setError);
  }

  return (<>
    <Button disabled={ status.loading } onClick={ googleLogin }>
      Login with Google
    </Button>

    <Form onSubmit={ emailAndPasswordLogin }>
      <Label htmlFor="Email" />
      <Input
        disabled={ status.loading }
        id="Email"
        onChange={ email.set }
        required
        value={ email.get }
      />

      <Label htmlFor="Password" />
      <Input
        disabled={ status.loading }
        id="Password"
        onChange={ password.set }
        required
        type="password"
        value={ password.get }
      />

      { email.error && <Error message={ email.error } /> }
      { password.error && <Error message={ password.error } /> }
      { status.error && <Error message="Something went wrong." /> }

      <Button
        disabled={ email.empty() || password.empty() || status.loading }
        type="submit">
        Login
      </Button>
    </Form>
  </>);
}
