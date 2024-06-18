import {
  PROFILE_COLLECTION,
  Query,
  readDocument,
  WithId
} from '../../libraries';
import { Profile } from '../models';

export function readProfileDocument(
  query: Query<Profile>
): Promise<WithId<Profile>> {
  return readDocument(PROFILE_COLLECTION, query);
}
