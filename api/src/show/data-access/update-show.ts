import { ObjectId } from 'mongodb';
import { SHOW_COLLECTION, updateDocument, Update } from '../../libraries';
import { Show } from '../models/show';

export function updateShowDocument(
  showId: ObjectId,
  updates: Update<Show>
) {
  return updateDocument(SHOW_COLLECTION, showId, updates);
}
