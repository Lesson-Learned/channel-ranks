import { ObjectId } from 'mongodb';
import { SHOW_COLLECTION } from '../../config';
import { deleteDocument } from '../../services/database';

export async function deleteShowDocument(showId: ObjectId) {
  await deleteDocument(SHOW_COLLECTION, showId);
}