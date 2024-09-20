import { Genre } from '@api';
import { useSearchParams } from 'react-router-dom';

export function useSearchQuery(): SearchQuery {
  const [query, setQuery] = useSearchParams();

  function setGenre(genre: Genre) {
    setQuery(
      (query) => {
        if (!genre) {
          query.delete(genreQueryKey);
        } else {
          query.set(genreQueryKey, genre);
        }

        return query;
      },
      { replace: true }
    );
  }

  return {
    genre: query.get(genreQueryKey) as Genre,
    setGenre,
    urlQuery: query.toString()
  };
}

export type SearchQuery = {
  genre: Genre;
  setGenre(genre: Genre): void;
  urlQuery: string;
};

const genreQueryKey = 'genre';
