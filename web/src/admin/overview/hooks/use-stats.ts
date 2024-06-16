import { readStats, Stats } from '@api';
import { getAuthToken } from '@auth';
import { useEffect, useState } from 'react';

export function useStats() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    async function run() {
      try {
        const stats = await readStats(await getAuthToken());
        setStats(stats);
      } catch {
        alert('Failed to load stats.');
      } finally {
        setLoading(false);
      }
    }

    run();
  }, []);

  return { loading, stats };
}
