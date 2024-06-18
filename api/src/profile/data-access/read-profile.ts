import { PROFILE_COLLECTION, Query, readDocument } from '../../libraries';
import { Profile } from '../models';

export function readProfileDocument(query: Query<Profile>): Promise<Profile> {
  return readDocument(PROFILE_COLLECTION, query);
}
