import { Document, InferIdType, MongoClient, WithId } from 'mongodb';
import { DATABASE_NAME, DATABASE_URI } from './config';

export async function deleteDocument<D extends Document>(
  collectionName: string,
  _id: InferIdType<D>
): Promise<WithId<D> | null> {
  const client = new MongoClient(DATABASE_URI);

  try {
    await client.connect();

    return client
      .db(DATABASE_NAME)
      .collection<D>(collectionName)
      .findOneAndDelete({ _id: _id as any });
  } finally {
    await client.close();
  }
}
