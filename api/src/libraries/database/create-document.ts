import {
  Document,
  InferIdType,
  MongoClient,
  OptionalUnlessRequiredId
} from 'mongodb';
import { DATABASE_NAME, DATABASE_URI } from './config';

export async function createDocument<D extends Document>(
  collectionName: string,
  document: OptionalUnlessRequiredId<D>
): Promise<InferIdType<D>> {
  const client = new MongoClient(DATABASE_URI);

  try {
    await client.connect();

    const result = await client
      .db(DATABASE_NAME)
      .collection<D>(collectionName)
      .insertOne(document);

    return result.insertedId;
  } finally {
    await client.close();
  }
}
