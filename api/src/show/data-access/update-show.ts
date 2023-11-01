import { ObjectId } from 'mongodb';
import { SHOW_COLLECTION } from '../../config';
import { Update, updateDocument } from '../../services';
import { Show } from '../models/show';

export async function updateShowDocument(
  showId: ObjectId,
  updates: Update<Show>
) {
  await updateDocument(SHOW_COLLECTION, showId, updates);
}