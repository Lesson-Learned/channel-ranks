import { Document, MongoClient } from 'mongodb';
import { DATABASE_NAME, DATABASE_URI } from './config';
import { Query } from './types';

export async function countDocuments<D extends Document>(
  collectionName: string,
  query: Query<D> = {}
): Promise<number> {
  const client = new MongoClient(DATABASE_URI);

  try {
    await client.connect();

    return client
      .db(DATABASE_NAME)
      .collection<D>(collectionName)
      .countDocuments(query);
  } finally {
    await client.close();
  }
}
