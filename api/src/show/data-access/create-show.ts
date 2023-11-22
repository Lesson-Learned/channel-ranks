import { ObjectId } from 'mongodb';
import { SHOW_COLLECTION } from '../../config';
import { createDocument } from '../../services/database';
import { Show } from '../models/show';

export async function createShowDocument(show: Show): Promise<ObjectId> {
  return await createDocument(SHOW_COLLECTION, show);
}