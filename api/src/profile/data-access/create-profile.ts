import { createDocument, PROFILE_COLLECTION } from '../../libraries';
import { Profile } from '../models';

export function createProfileDocument(profile: Profile): Promise<string> {
  return createDocument(PROFILE_COLLECTION, profile);
}
