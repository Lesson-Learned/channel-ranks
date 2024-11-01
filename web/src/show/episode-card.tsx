import { routes } from '@shared';
import { Link } from 'react-router-dom';

export function EpisodeCard({
  episodeNumber,
  seasonNumber,
  showId
}: Props) {
  function markEpisodeAsWatched() {}

  return (
    <div>
      <Link to={ routes.episode(showId, seasonNumber, episodeNumber) }>
        Episode { episodeNumber }
      </Link>

      <button onClick={ markEpisodeAsWatched }>
        +
      </button>
    </div>
  );
}

type Props = {
  episodeNumber: number;
  seasonNumber: number;
  showId: string;
};
