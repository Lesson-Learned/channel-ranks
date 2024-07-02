import { useShows } from '@show';
import { ShowItem } from './components/show-item';

export function ReadShows() {
  const { loading, shows } = useShows();

  if (shows) {
    if (shows.length) {
      return (
        <div>
          { shows.map(show => (
            <ShowItem key={ show._id } show={ show } />
          ))}
        </div>
      );
    }

    return <div>No shows found.</div>;
  }

  if (loading) {
    return <div>Loading TV Shows.</div>;
  }

  return <div>Failed to load TV shows.</div>;
}
