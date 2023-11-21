import { Show } from '@api';

export interface ShowFormFields extends Omit<Show,
  '_id' |
  'banner' |
  'endDate' |
  'poster' |
  'releaseDate'> {
  banner: File | null;
  endDate: string;
  poster: File | null;
  releaseDate: string;
}
