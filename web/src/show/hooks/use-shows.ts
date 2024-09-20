import { readShows, Show } from '@api';
import { useStatus } from '@shared';
import { useEffect, useState } from 'react';

export function useShows(apiUrlQuery: string) {
  const [numberOfShows, setNumberOfShows] = useState(0);
  const [shows, setShows] = useState<Show[]>([]);
  const status = useStatus('loading');

  useEffect(() => {
    if (cache[apiUrlQuery]) {
      setNumberOfShows(cache[apiUrlQuery].numberOfShows);
      setShows(cache[apiUrlQuery].shows);
      status.setNone();
    } else {
      status.setLoading();

      (async function() {
        const { numberOfShows, shows } = await readShows(apiUrlQuery);
        
        setNumberOfShows(numberOfShows);
        setShows(shows);

        cache[apiUrlQuery] = { numberOfShows, shows };
        status.setNone();
      })()
      .catch(status.setError);
    }
  }, [apiUrlQuery]);

  return {
    error: status.error,
    loading: status.loading,
    numberOfShows,
    shows
  };
}

const cache = <Record<string, Result>> {};

type Result = {
  numberOfShows: number;
  shows: Show[];
};
