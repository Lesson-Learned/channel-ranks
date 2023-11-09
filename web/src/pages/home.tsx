import { AdminRoutes } from '@shared';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <Link to={ AdminRoutes.Home }>Admin Shows</Link>
    </>
  );
}
