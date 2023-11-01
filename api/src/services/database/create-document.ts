import { Document, MongoClient, OptionalUnlessRequiredId } from 'mongodb';
import { DATABASE_NAME, DATABASE_URI } from '../../config';

export async function createDocument<D extends Document>(
  collectionName: string,
  document: OptionalUnlessRequiredId<D>
) {
  const client = new MongoClient(DATABASE_URI);

  await client.connect();

  const database = client.db(DATABASE_NAME);
  const collection = database.collection<D>(collectionName);

  const result = await collection.insertOne(document);

  await client.close();

  return result.insertedId;
}