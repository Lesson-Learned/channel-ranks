import { Document, ObjectId, MongoClient } from 'mongodb';
import { DATABASE_NAME, DATABASE_URI } from './config';
import { Update } from './types';

export async function updateDocument<D extends Document>(
  collectionName: string,
  _id: ObjectId,
  updates: Update<D>
) {
  const client = new MongoClient(DATABASE_URI);

  try {
    await client.connect();

    return client
      .db(DATABASE_NAME)
      .collection(collectionName)
      .updateOne({ _id }, updates);
  } finally {
    await client.close();
  }
}
