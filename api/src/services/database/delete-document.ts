import { ObjectId, MongoClient } from 'mongodb';
import { DATABASE_NAME, DATABASE_URI } from '../../config';

export async function deleteDocument(
  collectionName: string,
  id: ObjectId
) {
  const client = new MongoClient(DATABASE_URI);

  await client.connect();

  const database = client.db(DATABASE_NAME);
  const collection = database.collection(collectionName);

  const result = await collection.findOneAndDelete({ _id: id });

  await client.close();

  return result;
}