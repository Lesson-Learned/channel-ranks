import { Show } from '@api';

export interface ShowForm
  extends Omit<Show, '_id' | 'endDate' | 'releaseDate'> {
  endDate: string;
  releaseDate: string;
}
