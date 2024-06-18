import {
  DocId,
  SHOW_COLLECTION,
  updateDocument,
  Update
} from '../../libraries';
import { Show } from '../models';

export function updateShowDocument(
  _id: DocId<Show>,
  updates: Update<Show>
) {
  return updateDocument(SHOW_COLLECTION, _id, updates);
}
