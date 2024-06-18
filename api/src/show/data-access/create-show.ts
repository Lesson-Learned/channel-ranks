import { createDocument, DocId, SHOW_COLLECTION } from '../../libraries';
import { Show } from '../models';

export function createShowDocument(show: Show): Promise<DocId<Show>> {
  return createDocument(SHOW_COLLECTION, show);
}
