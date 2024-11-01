import { Profile } from '../models';
import { getProfilePublicId } from './get-profile-public-id';

export function buildProfile(uid: string): Profile {
  return {
    _id: uid,
    publicId: getProfilePublicId(uid),
    shows: []
  };
}
