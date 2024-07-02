import { createShow } from '@api';
import { getAuthToken } from '@auth';
import { uploadFile } from '@libraries';
import { PageContainer } from './components/page-container';
import { ShowForm } from './components/show-form';
import { CreateShowForm } from './hooks/use-show-form';

export function CreateShow() {
  async function save({
    banner,
    poster,
    ...body
  }: CreateShowForm): Promise<void> {
    const errors: Record<string, string> = {};
    let hasErrors = false;

    if (!banner) {
      errors.banner = 'Please select an image file.';
      hasErrors = true;
    }

    if (!poster) {
      errors.poster = 'Please select an image file.';
      hasErrors = true;
    }

    if (hasErrors) {
      throw { FORM_ERROR: errors };
    }

    const token = await getAuthToken();
    const { paths } = await createShow(body, token);

    await Promise.all([
      uploadFile(banner!, paths.banner),
      uploadFile(poster!, paths.poster)
    ]);
  }

  return (
    <PageContainer>
      <ShowForm save={ save } />
    </PageContainer>
  );
}
