import { clientFormError } from '../errors/client-form-error';
import { validateString } from './validate-string';

export function validateName(value: unknown): string {
  const name = validateString(value).trim().required();

  if (name.value) {
    return name.value;
  }

  throw clientFormError({ name: 'Invalid name.' });
}
