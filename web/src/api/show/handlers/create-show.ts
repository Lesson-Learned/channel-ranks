import { SHOWS_URL } from '../constants';
import { Show, ShowFormFields } from '../types';

export async function createShow(show: ShowFormFields): Promise<Show> {
  const route = new URL(SHOWS_URL);

  const response = await fetch(route, {
    body: JSON.stringify(show),
    method: 'POST',
  });

  if (response.status === 201) {
    return (await response.json());
  }

  if (response.status === 400) {
    throw (await response.json());
  }

  throw new Error('Failed to create show.');
}
