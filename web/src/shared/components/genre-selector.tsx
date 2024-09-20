import { Genre, GENRES } from '@api';
import { ChangeEvent } from 'react';
import { SearchQuery } from '../hooks/use-search-query';

export function GenreSelector({ genre, setGenre }: Props) {
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

type Props = Pick<SearchQuery, 'genre' | 'setGenre'>;
