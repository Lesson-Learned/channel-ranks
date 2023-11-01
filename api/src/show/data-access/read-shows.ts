import { WithId } from 'mongodb';
import { SHOW_COLLECTION } from '../../config';
import { readDocuments, ReadOptions } from '../../services';
import { Show } from '../models/show';

export async function readShowDocuments(
  options: ReadOptions<Show> = {}
): Promise<WithId<Show>[]> {
  return await readDocuments(SHOW_COLLECTION, options);
}