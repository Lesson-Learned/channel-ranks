import { UpdateShow } from '@admin';
import { PageTitle } from '@shared';
import { useShow } from '@show';
import { useParams } from 'react-router-dom';

export function UpdateShowPage() {
  const showId = useParams().id ?? '';
  const showData = useShow(showId);

  if (showData.loading) {
    return <div>Loading TV Show.</div>;
  }

  if (showData.error || !showData.show) {
    return <div>Failed to load TV Show</div>;
  }

  return (
    <PageTitle title={ showData.show.name }>
      <UpdateShow show={ showData.show } />
    </PageTitle>
  );
}
