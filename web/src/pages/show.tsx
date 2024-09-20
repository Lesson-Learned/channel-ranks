import { PageTitle } from '@shared';
import {
  ShowDetails,
  ShowHeader,
  ShowPageContainer,
  useShow
} from '@show';
import { useParams } from 'react-router-dom';

export function ShowPage() {
  const { showId } = useParams();
  const { loading, show } = useShow(showId ?? '');

  if (show) {
    return (
      <PageTitle title={ show.name }>
        <ShowPageContainer show={ show }>
          <ShowHeader show={ show } />
          <ShowDetails show={ show } />
        </ShowPageContainer>
      </PageTitle>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>Failed to load show.</div>;
}
