import { ShowDashboard } from '@admin';
import { AdminGuard } from '@auth';
import { PageTitle } from '@shared';

export function ReadShowsPage() {
  return (
    <AdminGuard>
      <PageTitle title="TV Shows">
        <ShowDashboard />
      </PageTitle>
    </AdminGuard>
  );
}
