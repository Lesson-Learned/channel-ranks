import { createDocument, DocId, PROFILE_COLLECTION } from '../../libraries';
import { Profile } from '../models';

export function createProfileDocument(
  profile: Profile
): Promise<DocId<Profile>> {
  return createDocument(PROFILE_COLLECTION, profile);
}
