import { getFileUrl } from '../get-file-url';
import { getShowBannerPath } from './get-paths';

export async function getShowBannerUrl(showId: string): Promise<string> {
  try {
    return (await getFileUrl(getShowBannerPath(showId)));
  } catch {
    return '';
  }
}
