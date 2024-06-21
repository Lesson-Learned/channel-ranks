import { formError } from '../errors/form-error';
import { Status, STATUS_VALUE_MAP } from '../types';

export function validateStatus(value: unknown): Status {
  if (STATUS_VALUE_MAP[value as Status]) {
    return value as Status;
  }

  throw formError({ status: 'Invalid status.' });
}
