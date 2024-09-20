import { signupWithEmailAndPassword, signupWithGoogle } from '@libraries';
import {
  Button,
  cleanInputString,
  Error,
  Form,
  Input,
  isStringEmpty,
  useStatus
} from '@shared';
import { useState } from 'react';

export function Signup() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const status = useStatus();

  function signupViaEmailAndPassword() {
    const errors: string[] = [];

    if (isStringEmpty(email)) {
      errors.push('Please enter your email.');
    }

    if (isStringEmpty(password)) {
      errors.push('Please enter a password.');
    }
    else if (password.length < minimumPasswordLength) {
      errors.push(
        `Password must be at least ${minimumPasswordLength} characters.`
      );
    }
    else if (isStringEmpty(password2)) {
      errors.push('Please confirm your password.');
    }
    else if (password !== password2) {
      errors.push('Passwords do not match.');
    }

    if (errors.length) {
      return setErrors(errors);
    }

    status.setLoading();
    signupWithEmailAndPassword(cleanInputString(email), password)
      .then(status.setNone)
      .catch(status.setError);
  }

  function signupViaGoogle() {
    status.setLoading();

    signupWithGoogle()
      .then(status.setNone)
      .catch(status.setError);
  }

  return (<>
    <Button disabled={ status.loading } onClick={ signupViaGoogle }>
      Sign up with Google
    </Button>

    <Form onSubmit={ signupViaEmailAndPassword }>
      <label htmlFor={ emailInputId }>Email</label>
      <Input
        disabled={ status.loading }
        id={ emailInputId }
        onChange={ setEmail }
        required
        value={ email }
      />

      <label htmlFor={ passwordInputId }>Password</label>
      <Input
        disabled={ status.loading }
        id={ passwordInputId }
        onChange={ setPassword }
        required
        type="password"
        value={ password }
      />

      <label htmlFor={ passwordInputId2 }>Confirm Password</label>
      <Input
        disabled={ status.loading }
        id={ passwordInputId2 }
        onChange={ setPassword2 }
        required
        type="password"
        value={ password2 }
      />

      { errors.map(error => (
        <Error key={ error } message={ error } />
      ))}
      { status.error && <Error message="Something went wrong." /> }

      <Button
        disabled={ !email || !password || !password2 || status.loading }
        type="submit">
        Sign Up
      </Button>
    </Form>
  </>);
}

const emailInputId = 'email';
const minimumPasswordLength = 8;
const passwordInputId = 'password';
const passwordInputId2 = 'password2';
