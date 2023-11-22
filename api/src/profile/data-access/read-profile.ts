import { PROFILE_COLLECTION } from '../../config';
import { readDocuments, ReadOptions } from '../../services/database';
import { Profile } from '../models/profile';

export async function readProfileDocument(
  options: ReadOptions<Profile> = {}
): Promise<Profile> {
  const [ profile ] = await readDocuments(PROFILE_COLLECTION, options);

  return profile;
}
