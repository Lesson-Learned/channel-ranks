import { ObjectId } from 'mongodb';

export function convertToDocumentId(id: string): ObjectId {
  return new ObjectId(id);
}
