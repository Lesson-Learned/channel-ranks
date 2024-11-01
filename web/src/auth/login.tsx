import { loginWithEmailAndPassword, loginWithGoogle } from '@libraries';
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

export function Login() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [password, setPassword] = useState('');

  const status = useStatus();

  function loginViaEmailAndPassword() {
    const errors: string[] = [];

    if (isStringEmpty(email)) {
      errors.push('Please enter your email.');
    }

    if (isStringEmpty(password)) {
      errors.push('Please enter your password.');
    }

    if (errors.length) {
      return setErrors(errors);
    }

    status.setLoading();
    loginWithEmailAndPassword(cleanInputString(email), password)
      .then(status.clear)
      .catch(status.setError);
  }

  function loginViaGoogle() {
    status.setLoading();
    loginWithGoogle()
      .then(status.clear)
      .catch(status.setError);
  }

  return (<>
    <Button disabled={ status.loading } onClick={ loginViaGoogle }>
      Login with Google
    </Button>

    <Form onSubmit={ loginViaEmailAndPassword }>
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

      { errors.map(error => (
        <Error key={ error } message={ error } />
      ))}
      { status.error && <Error message="Something went wrong." /> }

      <Button
        disabled={ !email || !password || status.loading }
        type="submit">
        Login
      </Button>
    </Form>
  </>);
}

const emailInputId = 'email';
const passwordInputId = 'password';
