import { ObjectId } from 'mongodb';
import { deleteDocument, SHOW_COLLECTION } from '../../libraries';

export function deleteShowDocument(showId: ObjectId): Promise<void> {
  return deleteDocument(SHOW_COLLECTION, showId);
}
