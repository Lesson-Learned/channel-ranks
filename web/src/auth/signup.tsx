import { signupWithEmailAndPassword, signupWithGoogle } from '@libraries';
import {
  Button,
  Error,
  Form,
  Input,
  Label,
  useInput,
  useStatus
} from '@shared';
import css from './signup.module.css';

export function Signup() {
  const email = useInput();
  const password = useInput();
  const password2 = useInput();
  const status = useStatus();

  function emailAndPasswordSignup() {
    if (email.empty()) {
      return email.setError('Please enter your email.');
    }

    if (password.empty()) {
      return password.setError('Please enter a password.');
    }

    if (!password.get.trim()) {
      return password.setError('Please use a stronger password.');
    }

    if (password.get.length < 8) {
      return password.setError('Password must be at least 8 characters.');
    }

    if (password2.empty()) {
      return password.setError('Please confirm your password.');
    }

    if (password.get !== password2.get) {
      return password.setError('Passwords do not match.');
    }

    status.setLoading();
    signupWithEmailAndPassword(email.clean(), password.get)
      .then(status.setNone)
      .catch(status.setError);
  }

  function googleSignup() {
    status.setLoading();

    signupWithGoogle()
      .then(status.setNone)
      .catch(status.setError);
  }

  return (<>
    <Button disabled={ status.loading } onClick={ googleSignup }>
      Sign up with Google
    </Button>

    <Form className={ css.form } onSubmit={ emailAndPasswordSignup }>
      <Label className={ css.label } htmlFor="Email" />
      <Input
        className={ css.input }
        disabled={ status.loading }
        id="Email"
        onChange={ email.set }
        required
        value={ email.get }
      />

      <Label className={ css.label } htmlFor="Password" />
      <Input
        className={ css.input }
        disabled={ status.loading }
        id="Password"
        onChange={ password.set }
        required
        value={ password.get }
      />

      <Label className={ css.label } htmlFor="Confirm Password" />
      <Input
        className={ css.input }
        disabled={ status.loading }
        id="Confirm Password"
        onChange={ password2.set }
        required
        value={ password2.get }
      />

      { email.error && <Error message={ email.error } /> }
      { password.error && <Error message={ password.error } /> }
      { status.error && <Error message="Something went wrong." /> }

      <Button
        disabled={
          email.empty() ||
          password.empty() ||
          password2.empty() ||
          status.loading
        }
        type="submit">
        Sign Up
      </Button>
    </Form>
  </>);
}
