import { GenreSelector, useSearchQuery } from '@shared';
import { ShowCard, useShows } from '@show';

export function ShowsPage() {
  const { genre, setGenre, urlQuery } = useSearchQuery();
  const { error, loading, shows } = useShows(urlQuery);

  return (<>
    <GenreSelector genre={ genre } setGenre={ setGenre } />

    { loading && <div>Loading...</div> }
    { shows.length > 0 && shows.map(show => (
      <ShowCard key={ show._id } show={ show } />
    ))}
    { !error && !shows.length && <div>No shows found.</div> }
    { error && <div>Failed to load shows.</div> }
  </>);
}
