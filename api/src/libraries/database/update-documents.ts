import { Document, Filter, MongoClient, UpdateOptions } from 'mongodb';
import { DATABASE_NAME, DATABASE_URI } from './config';
import { Update } from './types';

export async function updateDocuments<D extends Document>(
  collectionName: string,
  query: Filter<D>,
  updates: Update<D>,
  options?: UpdateOptions
): Promise<void> {
  const client = new MongoClient(DATABASE_URI);

  try {
    await client.connect();
    await client
      .db(DATABASE_NAME)
      .collection<D>(collectionName)
      .updateMany(query, updates, options);
  } finally {
    await client.close();
  }
}
