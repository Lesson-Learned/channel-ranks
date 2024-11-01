import {
  DocId,
  EPISODE_COLLECTION,
  readDocument,
  WithId
} from '../../libraries';
import { Episode } from '../models';

export function readEpisodeDocument(
  episodeDocumentId: DocId<Episode>
): Promise<WithId<Episode>> {
  return readDocument(EPISODE_COLLECTION, { _id: episodeDocumentId });
}
