import {
  DocId,
  EPISODE_COLLECTION,
  updateDocument,
  Update
} from '../../libraries';
import { Episode } from '../models';

export function updateEpisodeDocument(
  _id: DocId<Episode>,
  updates: Update<Episode>
): Promise<void> {
  return updateDocument(EPISODE_COLLECTION, _id, updates);
}
