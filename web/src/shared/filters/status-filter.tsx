import { Status, STATUSES } from '@api';
import { ChangeEvent } from 'react';
import { Filters } from './filters.hooks';

export function StatusFilter({ setStatus, status }: Props) {
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    setStatus(event.target.value as Status);
  }

  return (
    <select onChange={ handleChange } value={ status ?? '' }>
      <option value="">All</option>

      { STATUSES.map(status => (
        <option key={ status } value={ status }>{ status }</option>
      ))}
    </select>
  );
}

type Props = Pick<Filters, 'setStatus' |'status'>;
