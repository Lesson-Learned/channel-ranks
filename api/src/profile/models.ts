export interface Profile {
  _id: string;
  admin?: true;
  name: string;
}

export function buildProfile(uid: string, name: string): Profile {
  return {
    _id: uid,
    name
  };
}
