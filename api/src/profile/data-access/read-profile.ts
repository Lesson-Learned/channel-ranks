import {
  DocId,
  PROFILE_COLLECTION,
  readDocument,
  WithId
} from '../../libraries';
import { Profile } from '../models';

export function readProfileDocument(
  _id: DocId<Profile>
): Promise<WithId<Profile> | null> {
  return readDocument<Profile>(PROFILE_COLLECTION, { _id });
}
