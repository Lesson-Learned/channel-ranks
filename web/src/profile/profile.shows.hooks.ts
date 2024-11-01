import {
  ProfileShowStatus,
  readProfileShows,
  ReadShowsResponse,
  Show
} from '@api';
import { getAuthToken } from '@auth';
import { useStatus } from '@shared';
import { useEffect, useState } from 'react';

export function useProfileShows() {
  const [numberOfShows, setNumberOfShows] = useState(0);
  const [shows, setShows] = useState<Show[]>([]);
  const [showStatus, setShowStatus] = useState<ProfileShowStatus>('watching');

  const status = useStatus('loading');

  async function getProfileShows() {
    console.log('[GET PROFILE SHOWS] shows', shows);
    console.log('[GET PROFILE SHOWS] showStatus', showStatus);
    status.setLoading();

    const token = await getAuthToken();
    const response = await readProfileShows(
      showStatus,
      { start: shows.length },
      token
    );
    console.log('[GET PROFILE SHOWS] response', response);

    console.log('[GET PROFILE SHOWS] shows (2)', shows);
    console.log('[GET PROFILE SHOWS] shows.length', shows.length);
    if (shows.length) {
      setShows(shows => [ ...shows, ...response.shows ]);

      cache[showStatus]?.shows.push(...response.shows);
    } else {
      setNumberOfShows(response.numberOfShows);
      setShows([ ...response.shows ]);

      cache[showStatus] = {
        numberOfShows: response.numberOfShows,
        shows: response.shows
      };
    }

    console.log('[GET PROFILE SHOWS] cache', cache);
    status.clear();
  }

  function selectShowStatus(showStatus: ProfileShowStatus) {
    setShowStatus(showStatus);
    getProfileShows()
      .catch(status.setError);
  }

  useEffect(() => {
    if (cache[showStatus]) {
      setNumberOfShows(cache[showStatus].numberOfShows);
      setShows(cache[showStatus].shows);
      status.clear();
    } else {
      getProfileShows()
        .catch(status.setError);
    }
  }, []);

  return {
    error: status.error,
    loading: status.loading,
    numberOfShows,
    selectShowStatus,
    shows,
    showStatus
  };
}

const cache: Partial<Record<ProfileShowStatus, ReadShowsResponse>> = {};
