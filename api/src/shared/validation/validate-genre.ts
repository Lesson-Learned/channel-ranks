import { formError } from '../errors/form-error';
import { Genre, GENRE_VALUE_MAP } from '../types';
import { validateArray } from './validate-array';

export function validateGenre(value: unknown): Genre[] {
  const list = validateArray(value).required();

  if (list.value) {
    const genres: Genre[] = [];

    for (const item of list.value) {
      const genre = GENRE_VALUE_MAP[item as Genre];

      if (genre) {
        genres.push(genre);
      }
    }

    if (genres.length) {
      return genres;
    }
  }

  throw formError({ genre: 'Invalid genre.' });
}
