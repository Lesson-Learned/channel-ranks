import { SHOWS_URL } from '../constants';
import { Show } from '../types';

export async function updateShow(
  id: string,
  updates: Partial<Show>
): Promise<Partial<Show>> {
  const route = new URL(id, SHOWS_URL);

  const response = await fetch(route, {
    body: JSON.stringify(updates),
    method: 'PATCH'
  });

  if (response.status === 200) {
    return (await response.json());
  }

  throw new Error('Failed to update show.');
}
