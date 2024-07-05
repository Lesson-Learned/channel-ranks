import { clientFormError } from '../errors/client-form-error';
import { Genre, GENRES } from '../types';
import { validateArray } from './validate-array';

export function validateGenre(value: unknown): Genre[] {
  const list = validateArray(value).required();

  if (list.value) {
    const genres: Genre[] = [];

    for (const item of list.value) {
      const genre = GENRE_VALUE_INDEX[item as Genre];

      if (genre) {
        genres.push(genre);
      }
    }

    if (genres.length) {
      return genres;
    }
  }

  throw clientFormError({ genre: 'Invalid genre.' });
}

const GENRE_VALUE_INDEX = {
  [GENRES[0]]: GENRES[0],
  [GENRES[1]]: GENRES[1],
  [GENRES[2]]: GENRES[2],
  [GENRES[3]]: GENRES[3],
  [GENRES[4]]: GENRES[4],
  [GENRES[5]]: GENRES[5],
  [GENRES[6]]: GENRES[6]
} as const;
