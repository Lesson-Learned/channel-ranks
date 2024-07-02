import { Show, updateShow } from '@api';
import { getAuthToken } from '@auth';
import { uploadFile } from '@libraries';
import { PageContainer } from './components/page-container';
import { ShowForm } from './components/show-form';
import { CreateShowForm } from './hooks/use-show-form';

interface Props {
  show: Show;
}

export function UpdateShow({ show }: Props) {
  async function save({
    banner,
    poster,
    ...body
  }: CreateShowForm): Promise<void> {
    const token = await getAuthToken();
    const { paths } = await updateShow(show._id, body, token);

    await Promise.all([
      banner && uploadFile(banner, paths.banner),
      poster && uploadFile(poster, paths.poster)
    ]);
  }

  return (
    <PageContainer>
      <ShowForm save={ save } show={ show } />
    </PageContainer>
  );
}
