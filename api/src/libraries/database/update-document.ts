import { Document, InferIdType, MongoClient, UpdateOptions } from 'mongodb';
import { DATABASE_NAME, DATABASE_URI } from './config';
import { Update } from './types';

export async function updateDocument<D extends Document>(
  collectionName: string,
  _id: InferIdType<D>,
  updates: Update<D>,
  options?: UpdateOptions
): Promise<void> {
  const client = new MongoClient(DATABASE_URI);

  try {
    await client.connect();
    await client
      .db(DATABASE_NAME)
      .collection(collectionName)
      .updateOne({ _id }, updates, options);
  } finally {
    await client.close();
  }
}
