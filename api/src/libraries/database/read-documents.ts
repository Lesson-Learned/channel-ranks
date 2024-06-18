import { Document, MongoClient, WithId } from 'mongodb';
import { DATABASE_NAME, DATABASE_URI } from './config';
import { ReadOptions } from './types';

export async function readDocuments<D extends Document>(
  collectionName: string,
  options: ReadOptions<D> = {}
): Promise<WithId<D>[]> {
  const client = new MongoClient(DATABASE_URI);

  try {
    await client.connect();

    const documents = await client
      .db(DATABASE_NAME)
      .collection<D>(collectionName)
      .find(
        options.query ?? {},
        { limit: options.limit, sort: options.sort }
      )
      .toArray();

    return documents;
  } finally {
    await client.close();
  }
}
