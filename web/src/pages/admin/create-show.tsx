import { CreateShow } from '@admin';
import { AdminGuard } from '@auth';
import { PageTitle } from '@shared';

export function CreateShowPage() {
  return (
    <AdminGuard>
      <PageTitle title="Add TV Show">
        <CreateShow />
      </PageTitle>
    </AdminGuard>
  );
}
