import {
  PROFILE_COLLECTION,
  readDocuments,
  ReadOptions,
  WithId
} from '../../libraries';
import { Profile } from '../models';

export function readProfileDocuments(
  options: ReadOptions<Profile> = {}
): Promise<WithId<Profile>[]> {
  return readDocuments(PROFILE_COLLECTION, options);
}
