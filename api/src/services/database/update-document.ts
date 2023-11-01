import { Document, ObjectId, MongoClient } from 'mongodb';
import { DATABASE_NAME, DATABASE_URI } from '../../config';
import { Update } from './types';

export async function updateDocument<D extends Document>(
  collectionName: string,
  id: ObjectId,
  updates: Update<D>
): Promise<void> {
  const client = new MongoClient(DATABASE_URI);

  try {
    await client.connect();

    const database = client.db(DATABASE_NAME);
    const collection = database.collection(collectionName);

    await collection.updateOne({ _id: id }, updates);
  } finally {
    await client.close();
  }
}