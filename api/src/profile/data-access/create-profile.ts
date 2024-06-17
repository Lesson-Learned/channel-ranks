import { PROFILE_COLLECTION } from '../../config';
import { createDocument } from '../../services/database';
import { Profile } from '../models';

export async function createProfileDocument(profile: Profile) {
  await createDocument(PROFILE_COLLECTION, profile);
}
