import { PageTitle } from '@shared';
import {
  ShowDetails,
  ShowHeader,
  ShowPageContainer,
  useShow
} from '@show';
import { useParams } from 'react-router-dom';

export function ShowPage() {
  const showId = useParams().id ?? '';
  const showMap = useShow(showId);

  if (showMap.loading) {
    return <div>Loading...</div>;
  }

  if (showMap.error || !showMap.show) {
    return <div>Failed to load show.</div>;
  }

  return (
    <PageTitle title={ showMap.show.name }>
      <ShowPageContainer show={ showMap.show }>
        <ShowHeader show={ showMap.show } />
        <ShowDetails show={ showMap.show } />
      </ShowPageContainer>
    </PageTitle>
  );
}
