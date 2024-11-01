import { ReadShowsResponse } from '../show/show';
import { AuthToken } from '../types';
import { ProfileShowStatus, PROFILE_URL } from './profile';

export async function readProfileShows(
  showStatus: ProfileShowStatus,
  query: ReadProfileShowsQuery,
  token: AuthToken
): Promise<ReadShowsResponse> {
  const urlQuery = buildUrlQuery(query);

  const response = await fetch(
    new URL(`${PROFILE_URL}/shows/${showStatus}${urlQuery}`),
    {
      headers: { ...token }
    }
  );

  if (response.status === 200) {
    return (await response.json());
  }

  throw new Error('Failed to read profile shows.');
}

function buildUrlQuery(query: ReadProfileShowsQuery): string {
  const urlQuery = new URLSearchParams();

  if (query.start) {
    urlQuery.set('start', String(query.start));
  }

  return '?' + urlQuery.toString();
}

type ReadProfileShowsQuery = {
  start: number;
};
