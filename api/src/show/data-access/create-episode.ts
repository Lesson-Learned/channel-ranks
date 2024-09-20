import { createDocument, DocId, EPISODE_COLLECTION } from '../../libraries';
import { Episode } from '../models';

export function createEpisodeDocument(
  episode: Episode
): Promise<DocId<Episode>> {
  return createDocument(EPISODE_COLLECTION, episode);
}
