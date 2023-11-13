import { Profile } from '../models/profile';

export function buildProfile(_id: number): Profile {
  return {
    _id,
    name: `Member ${ _id }` 
  };
}
