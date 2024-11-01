export interface Profile {
  _id: string;
  name?: string;
  photo?: string;
}

export type ProfileShow = {
  _id: string;
  numberOfEpisodesWatched?: number;
  status: ProfileShowStatus;
};

export type ProfileShowStatus =
  'completed' |
  'dropped' |
  'planToWatch' |
  'watching';

export const PROFILE_URL = `${import.meta.env.VITE_API_URL}/profile`;
