import { SHOWS_URL } from '../constants';
import { ShowFiles } from '../types';

export async function readShowFilePaths(id: string): Promise<ShowFiles> {
  const route = new URL(`${ SHOWS_URL }/file-paths/${ id }`);

  const response = await fetch(route);

  if (response.status === 200) {
    return (await response.json());
  }

  throw new Error('Failed to read show file paths.');
}
