import { Document, MongoClient, WithId } from 'mongodb';
import { DATABASE_NAME, DATABASE_URI } from './config';
import { Query } from './types';

export async function readDocument<D extends Document>(
  collectionName: string,
  query: Query<D>
): Promise<WithId<D>> {
  const client = new MongoClient(DATABASE_URI);

  try {
    await client.connect();

    const documents = await client
      .db(DATABASE_NAME)
      .collection<D>(collectionName)
      .find(query)
      .toArray();

    if (documents.length === 1) {
      return documents[0];
    }

    throw 'Single document query did not return one document.';
  } finally {
    await client.close();
  }
}
