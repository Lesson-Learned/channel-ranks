import { ShowDashboard } from '@admin';
import { PageTitle } from '@shared';

export function ReadShowsPage() {
  return (
    <PageTitle title="TV Shows">
      <ShowDashboard />
    </PageTitle>
  );
}
