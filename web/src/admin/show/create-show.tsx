import { createShow, CreateShowBody, Show } from '@api';
import { getAuthToken } from '@auth';
import { PageContainer } from './components/page-container';
import { ShowForm } from './components/show-form';

export function CreateShow() {
  async function save(body: CreateShowBody): Promise<Show> {
    return (await createShow(body, await getAuthToken()));
  }

  return (
    <PageContainer>
      <ShowForm save={ save } />
    </PageContainer>
  );
}
