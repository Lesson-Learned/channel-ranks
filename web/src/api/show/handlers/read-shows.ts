import { SHOWS_URL } from '../constants';
import { Show } from '../types';

export async function readShows(): Promise<Show[]> {
  const route = new URL(SHOWS_URL);

  const response = await fetch(route);

  if (response.status === 200) {
    return (await response.json());
  }

  throw new Error('Failed to read shows.');
}
