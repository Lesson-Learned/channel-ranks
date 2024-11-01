import { Country, Genre, Network, Status } from '@api';
import { useSearchParams } from 'react-router-dom';

export function useFilters(): Filters {
  const [query, setQuery] = useSearchParams();

  function setCountry(country: Country) {
    setQuery(
      (query) => {
        if (country) {
          query.set(countryQueryKey, country);
        } else {
          query.delete(countryQueryKey);
        }

        return query;
      },
      { replace: true }
    );
  }

  function setGenre(genre: Genre) {
    setQuery(
      (query) => {
        if (genre) {
          query.set(genreQueryKey, genre);
        } else {
          query.delete(genreQueryKey);
        }

        return query;
      },
      { replace: true }
    );
  }

  function setNetwork(network: Network) {
    setQuery(
      (query) => {
        if (network) {
          query.set(networkQueryKey, network);
        } else {
          query.delete(networkQueryKey);
        }

        return query;
      },
      { replace: true }
    );
  }

  function setStatus(status: Status) {
    setQuery(
      (query) => {
        if (status) {
          query.set(statusQueryKey, status);
        } else {
          query.delete(statusQueryKey);
        }

        return query;
      },
      { replace: true }
    );
  }

  return {
    country: query.get(countryQueryKey) as Country,
    genre: query.get(genreQueryKey) as Genre,
    network: query.get(networkQueryKey) as Network,
    queryString: query.toString(),
    setCountry,
    setGenre,
    setNetwork,
    setStatus,
    status: query.get(statusQueryKey) as Status
  };
}

export type Filters = {
  country: Country | null;
  genre: Genre | null;
  network: Network | null;
  queryString: string;
  setCountry(country: Country | ''): void;
  setGenre(genre: Genre | ''): void;
  setNetwork(network: Network | ''): void;
  setStatus(status: Status | ''): void;
  status: Status | null;
};

const countryQueryKey = 'country';
const genreQueryKey = 'genre';
const networkQueryKey = 'network';
const statusQueryKey = 'status';
