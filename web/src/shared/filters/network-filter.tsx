import { Network, NETWORKS } from '@api';
import { ChangeEvent } from 'react';
import { Filters } from './filters.hooks';

export function NetworkFilter({ network, setNetwork }: Props) {
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    setNetwork(event.target.value as Network);
  }

  return (
    <select onChange={ handleChange } value={ network ?? '' }>
      <option value="">All</option>

      { NETWORKS.map(network => (
        <option key={ network } value={ network }>{ network }</option>
      ))}
    </select>
  );
}

type Props = Pick<Filters, 'network' | 'setNetwork'>;
