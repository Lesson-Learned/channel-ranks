import {
  DocId,
  PROFILE_COLLECTION,
  readDocument,
  WithId
} from '../../libraries';
import { Profile } from '../models';

export function readProfileDocument(
  profileDocumentId: DocId<Profile>
): Promise<WithId<Profile>> {
  return readDocument(PROFILE_COLLECTION, { _id: profileDocumentId });
}
