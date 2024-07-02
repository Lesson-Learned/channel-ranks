import { MediaRow } from '@shared';
import { useShows } from '../hooks/use-shows';
import { ShowCard } from './show-card';
import css from './show-row.module.css';

export function ShowRow() {
  const { loading, shows } = useShows();

  return (
    <MediaRow title="TV Shows">
      {
        ( shows?.length && shows.map(show => (
          <ShowCard key={ show._id } show={ show } />
        ))) ||
        ( shows && <div className={ css.message }>No shows found.</div> ) ||
        ( loading && <div className={ css.message }>Loading...</div> ) ||
        ( <div className={ css.message }>Failed to load shows.</div> )
      }
    </MediaRow>
  );
}
