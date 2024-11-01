import { readShow, Show } from '@api';
import { useStatus } from '@shared';
import { useEffect, useState } from 'react';

export function useShow(showId: string): ShowData {
  const [show, setShow] = useState<Show>();

  const status = useStatus('loading');

  useEffect(() => {
    if (cache[showId]) {
      setShow(cache[showId]);
      status.clear();
    } else {
      (async function() {
        const show = await readShow(showId);

        setShow(show);
        cache[showId] = show;

        status.clear();
      })()
      .catch((e) => {
        console.log('[USE SHOW] error', e);
        status.setError();
      });
    }
  }, [showId]);

  return {
    error: status.error,
    loading: status.loading,
    show
  };
}

export type ShowData = {
  error: boolean;
  loading: boolean;
  show: Show | undefined;
};

const cache: Record<string, Show> = {};
