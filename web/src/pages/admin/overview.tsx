import { OverviewDashboard } from '@admin';
import { AdminGuard } from '@auth';
import { PageTitle } from '@shared';

export function OverviewPage() {
  return (
    <AdminGuard>
      <PageTitle title="Overview">
        <OverviewDashboard />
      </PageTitle>
    </AdminGuard>
  );
}
