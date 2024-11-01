import {
  EPISODE_COLLECTION,
  Query,
  Update,
  updateDocuments
} from '../../libraries';
import { Episode } from '../models';

export function updateEpisodeDocuments(
  query: Query<Episode>,
  updates: Update<Episode>
): Promise<void> {
  return updateDocuments(EPISODE_COLLECTION, query, updates);
}
