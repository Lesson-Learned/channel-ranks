import { getFileUrl, getShowPosterPath } from '../../services';

export async function getPosterUrls(showIds: string[]) {
  return (await Promise.all(
    showIds.map(showId => getPosterUrl(getShowPosterPath(showId)))
  ));
}

async function getPosterUrl(path: string): Promise<string> {
  try {
    return (await getFileUrl(path));
  } catch {
    return '';
  }
}
