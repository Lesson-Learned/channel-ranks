import { Document, MongoClient } from 'mongodb';
import { DATABASE_NAME, DATABASE_URI } from './config';

export async function aggregate(
  collectionName: string,
  pipeline: Document[]
): Promise<Document> {
  const client = new MongoClient(DATABASE_URI);

  try {
    await client.connect();

    const cursor = client
      .db(DATABASE_NAME)
      .collection(collectionName)
      .aggregate(pipeline);

    const documents = [];

    for await (const document of cursor) {
      documents.push(document);
    }

    return documents;
  } finally {
    await client.close();
  }
}
