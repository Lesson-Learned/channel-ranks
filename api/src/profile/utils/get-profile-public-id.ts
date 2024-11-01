import { hashString } from '../../shared';

export function getProfilePublicId(uid: string): number {
  return hashString(uid);
}
