import {
  DocId,
  EPISODE_COLLECTION,
  readDocument,
  WithId
} from '../../libraries';
import { Episode } from '../models';

export async function readEpisodeDocument(
  _id: DocId<Episode>
): Promise<WithId<Episode>> {
  const episodeDocument = await readDocument<Episode>(
    EPISODE_COLLECTION,
    { _id }
  );

  if (episodeDocument) {
    return episodeDocument;
  }

  throw new Error('Episode document not found.');
}
