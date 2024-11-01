import {
  DocId,
  PROFILE_COLLECTION,
  Update,
  updateDocument,
  UpdateOptions
} from '../../libraries';
import { Profile } from '../models';

export function updateProfileDocument(
  profileId: DocId<Profile>,
  updates: Update<Profile>,
  options?: UpdateOptions
): Promise<void> {
  return updateDocument(PROFILE_COLLECTION, profileId, updates, options);
}
