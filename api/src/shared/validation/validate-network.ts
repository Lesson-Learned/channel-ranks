import { formError } from '../errors/form-error';
import { Network, NETWORK_VALUE_MAP } from '../types';

export function validateNetwork(value: unknown): Network {
  if (NETWORK_VALUE_MAP[value as Network]) {
    return value as Network;
  }

  throw formError({ network: 'Invalid network.' });
}
