import { clientFormError } from '../errors/client-form-error';
import { Network, NETWORKS } from '../types';

export function validateNetwork(value: unknown): Network {
  if (NETWORK_VALUE_INDEX[value as Network]) {
    return value as Network;
  }

  throw clientFormError({ network: 'Invalid network.' });
}

const NETWORK_VALUE_INDEX = {
  [NETWORKS[0]]: NETWORKS[0],
  [NETWORKS[1]]: NETWORKS[1],
  [NETWORKS[2]]: NETWORKS[2],
  [NETWORKS[3]]: NETWORKS[3],
  [NETWORKS[4]]: NETWORKS[4],
  [NETWORKS[5]]: NETWORKS[5],
  [NETWORKS[6]]: NETWORKS[6],
  [NETWORKS[7]]: NETWORKS[7],
  [NETWORKS[8]]: NETWORKS[8],
  [NETWORKS[9]]: NETWORKS[9],
  [NETWORKS[10]]: NETWORKS[10]
} as const;
