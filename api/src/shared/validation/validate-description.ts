import { clientFormError } from '../errors/client-form-error';
import { validateString } from './validate-string';

export function validateDescription(value: unknown): string {
  const description = validateString(value).trim().required();

  if (description.value) {
    return description.value;
  }

  throw clientFormError({ description: 'Invalid description.' });
}
