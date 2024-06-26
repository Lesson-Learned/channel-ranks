import { adminRoutes } from '@shared';
import { Link } from 'react-router-dom';
import { Dashboard } from '../components/dashboard/dashboard';
import { ReadShows } from './read-shows';

export function ShowDashboard() {
  return (
    <Dashboard
      action={ <Link to={ adminRoutes.addShow }>Add Show</Link> }
      title="TV Shows">
      <ReadShows />
    </Dashboard>
  );
}
