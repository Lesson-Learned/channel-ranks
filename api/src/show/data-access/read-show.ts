import { DocId, readDocument, SHOW_COLLECTION, WithId } from '../../libraries';
import { Show } from '../models';

export async function readShowDocument(
  _id: DocId<Show>
): Promise<WithId<Show>> {
  const showDocument = await readDocument<Show>(SHOW_COLLECTION, { _id });

  if (showDocument) {
    return showDocument;
  }

  throw new Error('Show document not found.');
}
