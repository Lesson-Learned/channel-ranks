import { AdminRoutes } from '@shared';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <Link to={ AdminRoutes.Shows }>Admin Shows</Link>
    </>
  );
}
