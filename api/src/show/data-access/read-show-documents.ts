import {
  readDocuments,
  ReadOptions,
  SHOW_COLLECTION,
  WithId
} from '../../libraries';
import { Show } from '../models';

export function readShowDocuments(
  options: ReadOptions<Show> = {}
): Promise<WithId<Show>[]> {
  return readDocuments(SHOW_COLLECTION, options);
}
