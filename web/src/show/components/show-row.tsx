import { MediaRow } from '@shared';
import { useShows } from '../hooks/use-shows';
import { ShowCard } from './show-card';
import css from './show-row.module.css';

export function ShowRow() {
  const showMap = useShows();

  function renderShows() {
    if (showMap.loading) {
      return <div className={ css.message }>Loading...</div>;
    }

    if (showMap.error || !showMap.shows) {
      return <div className={ css.message }>Failed to load shows.</div>;
    }

    if (!showMap.shows.length) {
      return <div className={ css.message }>No shows found.</div>;
    }

    return showMap.shows.map(show => (
      <ShowCard key={ show._id } show={ show } />
    ));
  }

  return (
    <MediaRow title="TV Shows">
      { renderShows() }
    </MediaRow>
  );
}
