import { formError } from '../errors/form-error';
import { validateString } from './validate-string';

export function validateDescription(value: unknown): string {
  const description = validateString(value).trim().required();

  if (description.value) {
    return description.value;
  }

  throw formError({ description: 'Invalid description.' });
}
