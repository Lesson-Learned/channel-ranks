import {
  DocId,
  PROFILE_COLLECTION,
  readDocument,
  WithId
} from '../../libraries';
import { Profile } from '../models';

export function readProfileDocument(
  _id: DocId<Profile>
): Promise<WithId<Profile>> {
  return readDocument(PROFILE_COLLECTION, { _id });
}
