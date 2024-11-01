import { Show } from '@api';
import { Season } from './season';

export function Episodes({ show }: Props) {
  return (
    <div style={ div }>
      { show.seasons.map((numberOfEpisodes, season) => (
        <Season
          key={ season }
          numberOfEpisodes={ numberOfEpisodes }
          season={ season + 1 }
          showId={ show._id }
        />
      ))}
    </div>
  );
}

type Props = {
  show: Show;
};

const div = {
  border: '5px solid yellow',
  marginBottom: '10px',
  padding: '10px'
};
