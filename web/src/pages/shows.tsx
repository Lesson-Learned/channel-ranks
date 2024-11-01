import { 
  CountryFilter,
  GenreFilter,
  MainHeader,
  NetworkFilter,
  StatusFilter,
  useFilters
} from '@shared';
import { Shows, useShows } from '@show';

export function ShowsPage() {
  const filters = useFilters();
  const shows = useShows(filters);

  return (<>
    <MainHeader />
    <CountryFilter
      country={ filters.country }
      setCountry={ filters.setCountry }
    />
    <GenreFilter
      genre={ filters.genre }
      setGenre={ filters.setGenre }
    />
    <NetworkFilter
      network={ filters.network }
      setNetwork={ filters.setNetwork }
    />
    <StatusFilter
      setStatus={ filters.setStatus }
      status={ filters.status }
    />
    <Shows shows={ shows.shows } />
    { shows.shows.length < shows.numberOfShows && (
      <button onClick={ shows.getNextShows }>
        Load More
      </button>
    )}
  </>);
}
