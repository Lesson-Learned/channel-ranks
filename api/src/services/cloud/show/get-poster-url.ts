import { getFileUrl } from '../get-file-url';
import { getShowPosterPath } from './get-paths';

export async function getShowPosterUrl(showId: string): Promise<string> {
  try {
    return (await getFileUrl(getShowPosterPath(showId)));
  } catch {
    return '';
  }
}
