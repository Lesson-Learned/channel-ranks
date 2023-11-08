import { SHOWS_URL } from '../constants';

export async function deleteShow(id: string): Promise<void> {
  const route = new URL(`${ SHOWS_URL }/${ id }`);

  const response = await fetch(route, {
    method: 'DELETE'
  });

  if (response.status !== 204) {
    throw new Error('Failed to delete show.');
  }
}
