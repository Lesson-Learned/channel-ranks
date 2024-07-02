import { readShows, Show } from '@api';
import { useStatus } from '@shared';
import { useEffect, useState } from 'react';

export function useShows() {
  const [shows, setShows] = useState<Show[]>();
  const status = useStatus('loading');

  useEffect(() => {
    (async function() {
      const shows = await readShows();
      
      setShows(shows);
      status.setNone();
    })()
    .catch(status.setError);
  }, []);

  return {
    loading: status.loading,
    shows
  };
}
