import { Document, Filter, MongoClient, WithId } from 'mongodb';
import { DATABASE_NAME, DATABASE_URI } from './config';

export async function readDocument<D extends Document>(
  collectionName: string,
  _id: Filter<D>['_id']
): Promise<WithId<D> | null> {
  const client = new MongoClient(DATABASE_URI);

  try {
    await client.connect();

    const document = await client
      .db(DATABASE_NAME)
      .collection<D>(collectionName)
      .findOne(_id);

    return document;
  } finally {
    await client.close();
  }
}
