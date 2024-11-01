import { useState } from 'react';
import { EpisodeCard } from './episode-card';

export function Season({
  numberOfEpisodes,
  season,
  showId
}: Props) {
  const [collapsed, setCollapsed] = useState(true);

  function markSeasonAsWatched() {}

  function toggle() {
    setCollapsed(collapsed => !collapsed);
  }

  return (
    <div>
      <div>
        Season { season }

        <button onClick={ toggle }>
          { collapsed ? '+' : '-' }
        </button>

        <button onClick={ markSeasonAsWatched }>+</button>
      </div>

      { collapsed || (
        listEpisodes(numberOfEpisodes, season, showId)
      )}
    </div>
  );
}

function listEpisodes(
  numberOfEpisodes: number,
  season: number,
  showId: string
): JSX.Element[] {
  const episodes: JSX.Element[] = [];

  for (let i = 1; i <= numberOfEpisodes; i++) {
    episodes.push((
      <EpisodeCard
        episodeNumber={ i }
        key={ i }
        seasonNumber={ season }
        showId={ showId }
      />
    ))
  }

  return episodes;
}

type Props = {
  numberOfEpisodes: number;
  season: number;
  showId: string;
};
