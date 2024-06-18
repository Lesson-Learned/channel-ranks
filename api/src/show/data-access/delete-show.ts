import {
  DocId,
  deleteDocument,
  SHOW_COLLECTION,
  WithId
} from '../../libraries';
import { Show } from '../models';

export function deleteShowDocument(
  _id: DocId<Show>
): Promise<WithId<Show> | null> {
  return deleteDocument(SHOW_COLLECTION, _id);
}
