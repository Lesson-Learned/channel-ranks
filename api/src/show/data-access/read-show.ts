import { DocId, readDocument, SHOW_COLLECTION, WithId } from '../../libraries';
import { Show } from '../models';

export function readShowDocument(_id: DocId<Show>): Promise<WithId<Show>> {
  return readDocument(SHOW_COLLECTION, { _id });
}
