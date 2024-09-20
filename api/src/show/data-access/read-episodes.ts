import {
  EPISODE_COLLECTION,
  readDocuments,
  ReadOptions,
  WithId
} from '../../libraries';
import { Episode } from '../models';

export function readEpisodeDocuments(
  options: ReadOptions<Episode> = {}
): Promise<WithId<Episode>[]> {
  return readDocuments(EPISODE_COLLECTION, options);
}
