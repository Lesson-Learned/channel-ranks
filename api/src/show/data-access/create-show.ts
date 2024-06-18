import { ObjectId } from 'mongodb';
import { createDocument, SHOW_COLLECTION } from '../../libraries';
import { Show } from '../models/show';

export function createShowDocument(show: Show): Promise<ObjectId> {
  return createDocument(SHOW_COLLECTION, show);
}
