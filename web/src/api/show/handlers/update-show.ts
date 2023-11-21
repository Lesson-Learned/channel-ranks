import { SHOWS_URL } from '../constants';
import { Show, ShowFormFields } from '../types';

export async function updateShow(
  id: string,
  updates: ShowFormFields
): Promise<Partial<Show>> {
  const route = new URL(`${ SHOWS_URL }/${ id }`);

  const response = await fetch(route, {
    body: JSON.stringify(updates),
    method: 'PATCH'
  });

  if (response.status === 200) {
    return (await response.json());
  }

  throw new Error('Failed to update show.');
}
