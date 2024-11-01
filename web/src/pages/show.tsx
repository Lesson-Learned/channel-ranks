import { Episodes, ProfileShow, Show, useShow } from '@show';
import { useParams } from 'react-router-dom';

export function ShowPage() {
  const params = useParams();
  const showId = String(params.showId);

  const showData = useShow(showId);

  return (<>
    <Show { ...showData } />
    <ProfileShow showId={ showId } />
    { showData.show && <Episodes show={ showData.show } /> }
  </>);
}
