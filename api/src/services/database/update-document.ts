import { Document, ObjectId, MongoClient, UpdateResult } from 'mongodb';
import { DATABASE_NAME, DATABASE_URI } from '../../config';
import { Update } from './types';

export async function updateDocument<D extends Document>(
  collectionName: string,
  id: ObjectId,
  values: Update<D>
): Promise<UpdateResult> {
  const client = new MongoClient(DATABASE_URI);

  await client.connect();

  const database = client.db(DATABASE_NAME);
  const collection = database.collection(collectionName);

  const result = await collection.updateOne({ _id: id }, values);

  await client.close();

  return result;
}