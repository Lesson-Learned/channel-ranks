import { Document, MongoClient, WithId } from 'mongodb';
import { DATABASE_NAME, DATABASE_URI } from '../../config';
import { ReadOptions } from './types';

export async function readDocuments<D extends Document>(
  collectionName: string,
  options: ReadOptions<D> = {}
): Promise<WithId<D>[]> {
  const client = new MongoClient(DATABASE_URI);

  await client.connect();

  const database = client.db(DATABASE_NAME);
  const collection = database.collection<D>(collectionName);

  const docs = await collection.find({ ...options.query }, {
    limit: options.limit,
    sort: options.sort
  }).toArray();

  await client.close();

  return docs;
}