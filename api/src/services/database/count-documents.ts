import { Document, MongoClient } from 'mongodb';
import { DATABASE_NAME, DATABASE_URI } from '../../config';
import { Query } from './types';

export async function countDocuments<D extends Document>(
  collectionName: string,
  query: Query<D> = {}
): Promise<number> {
  const client = new MongoClient(DATABASE_URI);

  try {
    await client.connect();

    const database = client.db(DATABASE_NAME);
    const collection = database.collection<D>(collectionName);

    const count = await collection.countDocuments(query);

    return count;
  } finally {
    await client.close();
  }
}
