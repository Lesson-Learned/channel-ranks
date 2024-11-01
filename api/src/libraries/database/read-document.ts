import { Document, Filter, MongoClient, WithId } from 'mongodb';
import { DATABASE_NAME, DATABASE_URI } from './config';

export async function readDocument<D extends Document>(
  collectionName: string,
  query: Filter<D>
): Promise<WithId<D>> {
  const client = new MongoClient(DATABASE_URI);

  try {
    await client.connect();

    const document = await client
      .db(DATABASE_NAME)
      .collection<D>(collectionName)
      .findOne(query);

    if (document) {
      return document;
    }

    throw new Error('No document found.');
  } finally {
    await client.close();
  }
}
