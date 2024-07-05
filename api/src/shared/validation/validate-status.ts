import { clientFormError } from '../errors/client-form-error';
import { Status, STATUS } from '../types';

export function validateStatus(value: unknown): Status {
  if (STATUS_VALUE_INDEX[value as Status]) {
    return value as Status;
  }

  throw clientFormError({ status: 'Invalid status.' });
}

const STATUS_VALUE_INDEX = {
  [STATUS.CANCELLED]: 'CANCELLED',
  [STATUS.FINISHED]: 'FINISHED',
  [STATUS.ONGOING]: 'ONGOING',
  [STATUS.UPCOMING]: 'UPCOMING'
} as const;
