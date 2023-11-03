import { AdminRoutes } from '@shared';
import { Link } from 'react-router-dom';
import { Dashboard } from '../components/dashboard/dashboard';

export function ShowDashboard() {
  return (
    <Dashboard title="TV Shows">
      <Link to={ AdminRoutes.AddShow }>Add Show</Link>
    </Dashboard>
  );
}
