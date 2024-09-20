export interface Profile {
  _id: string;
}

export function buildProfile(uid: string): Profile {
  return {
    _id: uid
  };
}
