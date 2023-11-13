import { PROFILE_COLLECTION } from '../../config';
import { createDocument } from '../../services';
import { Profile } from '../models/profile';

export async function createProfileDocument(profile: Profile) {
  await createDocument(PROFILE_COLLECTION, profile);
}
