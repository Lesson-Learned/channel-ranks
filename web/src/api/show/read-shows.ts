import { Country, Genre, Network, Status } from '../types';
import { ReadShowsResponse, SHOWS_URL } from './show';

export async function readShows(
  query: ReadShowsQuery
): Promise<ReadShowsResponse> {
  const queryString = buildQueryString(query);

  const response = await fetch(
    new URL(`${SHOWS_URL}${queryString}`)
  );

  if (response.status === 200) {
    return (await response.json());
  }

  throw new Error('Failed to read shows.');
}

export type ReadShowsQuery = {
  country?: Country;
  genre?: Genre;
  lastId?: string;
  network?: Network;
  status?: Status;
};

function buildQueryString(query: ReadShowsQuery): string {
  const urlQuery = new URLSearchParams(query);

  if (urlQuery.size > 0) {
    return '?' + urlQuery.toString();
  }

  return '';
}
