import { useShows } from '@show';
import { ShowItem } from './components/show-item';

export function ReadShows() {
  const showData = useShows();

  if (showData.loading) {
    return <div>Loading TV Shows.</div>;
  }

  if (showData.error || !showData.shows) {
    return <div>Failed to load TV shows.</div>;
  }

  return (
    <section>
      { showData.shows.map(show => (
        <ShowItem key={ show._id } show={ show } />
      ))}
    </section>
  );
}
