import { DocId } from '../libraries';
import { Rating } from '../shared';
import { Show } from '../show';

export interface ClientProfile extends Pick<Profile, 'name'> {
  _id: string;
  photo?: string
}

export interface Profile {
  _id: string;
  name?: string;
  publicId: number;
  shows: ProfileShow[];
}

export type ProfileShow = {
  _id: DocId<Show>;
  numberOfEpisodesWatched?: number;
  rating?: Rating;
  status: ProfileShowStatus;
};

export type ProfileShowStatus =
  'completed' |
  'dropped' |
  'planToWatch' |
  'watching';
