import { Show, SHOWS_URL } from './show';

export async function readShow(showId: string): Promise<Show> {
  const response = await fetch(
    new URL(`${SHOWS_URL}/${showId}`)
  );

  if (response.status === 200) {
    return (await response.json());
  }

  throw new Error('Failed to read show.');
}
