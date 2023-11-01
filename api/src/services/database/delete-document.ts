import { ObjectId, MongoClient } from 'mongodb';
import { DATABASE_NAME, DATABASE_URI } from '../../config';

export async function deleteDocument(
  collectionName: string,
  id: ObjectId
): Promise<void> {
  const client = new MongoClient(DATABASE_URI);

  try {
    await client.connect();

    const database = client.db(DATABASE_NAME);
    const collection = database.collection(collectionName);

    await collection.findOneAndDelete({ _id: id });
  } finally {
    await client.close();
  }
}