import { Dashboard } from '../components/dashboard/dashboard';
import { ReadStats } from './read-stats';

export function OverviewDashboard() {
  return (
    <Dashboard title="Overview">
      <ReadStats />
    </Dashboard>
  );
}
