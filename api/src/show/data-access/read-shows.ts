import { WithId } from 'mongodb';
import { readDocuments, ReadOptions, SHOW_COLLECTION } from '../../libraries';
import { Show } from '../models/show';

export function readShowDocuments(
  options: ReadOptions<Show> = {}
): Promise<WithId<Show>[]> {
  return readDocuments(SHOW_COLLECTION, options);
}
