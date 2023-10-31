import { ObjectId } from 'mongodb';
import { SHOW_COLLECTION } from '../../config';
import { deleteDocument } from '../../services';

export async function deleteShow(showId: ObjectId) {
  await deleteDocument(SHOW_COLLECTION, showId);
}