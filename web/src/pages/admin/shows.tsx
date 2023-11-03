import { ShowDashboard } from '@admin';
import { PageTitle } from '@shared';

export function AdminShowsPage() {
  return (
    <PageTitle title="TV Shows">
      <ShowDashboard />
    </PageTitle>
  );
}
