import { CreateShowBody, Show, updateShow } from '@api';
import { getAuthToken } from '@auth';
import { PageContainer } from './components/page-container';
import { ShowForm } from './components/show-form';

interface Props {
  show: Show;
}

export function UpdateShow({ show }: Props) {
  async function save(body: CreateShowBody): Promise<Show> {
    return (await updateShow(show._id, body, await getAuthToken())) as Show;
  }

  return (
    <PageContainer>
      <ShowForm save={ save } show={ show } />
    </PageContainer>
  );
}
