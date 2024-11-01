import { Genre, GENRES } from '@api';
import { ChangeEvent } from 'react';
import { Filters } from './filters.hooks';

export function GenreFilter({ genre, setGenre }: Props) {
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    setGenre(event.target.value as Genre);
  }

  return (
    <select onChange={ handleChange } value={ genre ?? '' }>
      <option value="">All</option>

      { GENRES.map(genre => (
        <option key={ genre } value={ genre }>{ genre }</option>
      ))}
    </select>
  );
}

type Props = Pick<Filters, 'genre' | 'setGenre'>;
