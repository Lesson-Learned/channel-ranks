import { DocId, readDocument, SHOW_COLLECTION, WithId } from '../../libraries';
import { Show } from '../models';

export function readShowDocument(
  showDocumentId: DocId<Show>
): Promise<WithId<Show>> {
  return readDocument<Show>(SHOW_COLLECTION, { _id: showDocumentId });
}
