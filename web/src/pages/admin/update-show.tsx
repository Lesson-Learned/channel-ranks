import { UpdateShow } from '@admin';
import { AdminGuard } from '@auth';
import { PageTitle } from '@shared';
import { useShow } from '@show';
import { useParams } from 'react-router-dom';

export function UpdateShowPage() {
  const showId = useParams().id ?? '';
  const { loading, show } = useShow(showId);

  if (show) {
    return (
      <AdminGuard>
        <PageTitle title={ show.name }>
          <UpdateShow show={ show } />
        </PageTitle>
      </AdminGuard>
    );
  }

  if (loading) {
    return <div>Loading TV Show.</div>;
  }

  return <div>Failed to load TV Show.</div>;
}
