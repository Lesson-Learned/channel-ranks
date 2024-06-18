import { ObjectId, MongoClient } from 'mongodb';
import { DATABASE_NAME, DATABASE_URI } from './config';

export async function deleteDocument(
  collectionName: string,
  _id: ObjectId
): Promise<void> {
  const client = new MongoClient(DATABASE_URI);

  try {
    await client.connect();

    await client
      .db(DATABASE_NAME)
      .collection(collectionName)
      .findOneAndDelete({ _id });
  } finally {
    await client.close();
  }
}
