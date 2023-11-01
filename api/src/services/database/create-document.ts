import {
  Document,
  InferIdType,
  MongoClient,
  OptionalUnlessRequiredId
} from 'mongodb';
import { DATABASE_NAME, DATABASE_URI } from '../../config';

export async function createDocument<D extends Document>(
  collectionName: string,
  document: OptionalUnlessRequiredId<D>
): Promise<InferIdType<D>> {
  const client = new MongoClient(DATABASE_URI);

  try {
    await client.connect();

    const database = client.db(DATABASE_NAME);
    const collection = database.collection<D>(collectionName);

    const result = await collection.insertOne(document);

    return result.insertedId;
  } finally {
    await client.close();
  }
}