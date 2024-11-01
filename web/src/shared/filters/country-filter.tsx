import { COUNTRIES, Country } from '@api';
import { ChangeEvent } from 'react';
import { Filters } from './filters.hooks';

export function CountryFilter({ country, setCountry }: Props) {
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    setCountry(event.target.value as Country);
  }

  return (
    <select onChange={ handleChange } value={ country ?? '' }>
      <option value="">All</option>

      { COUNTRIES.map(country => (
        <option key={ country } value={ country }>{ country }</option>
      ))}
    </select>
  );
}

type Props = Pick<Filters, 'country' | 'setCountry'>;
