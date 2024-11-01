import { Show } from '@api';
import { ShowCard } from './components/show-card/show-card';

export function Shows({ shows }: Props) {
  return (
    <div style={ div }>
      { shows.map(show => (
        <ShowCard key={ show._id } show={ show } />
      ))}
    </div>
  );
}

type Props = {
  shows: Show[];
};

const div = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto',
  justifyContent: 'center'
};
