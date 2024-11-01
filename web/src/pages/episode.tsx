import { useParams } from 'react-router-dom';

export function Episode() {
  const params = useParams();

  return (
    <div>
      <span>Episode { params.episode }</span>
      <span>Season { params.season }</span>
      <span>Show Id { params.showId }</span>
    </div>
  );
}
