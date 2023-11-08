import { readShows, Show } from '@api';
import { useEffect, useState } from 'react';

export function useShows() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [shows, setShows] = useState<Show[] | null>(null);

  useEffect(() => {
    async function run() {
      try {
        setShows(await readShows());
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    run();
  }, []);

  return { error, loading, shows };
}
