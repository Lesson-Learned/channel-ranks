import { readShow, Show } from '@api';
import { useStatus } from '@shared';
import { useEffect, useState } from 'react';

export function useShow(showId: string) {
  const [show, setShow] = useState<Show>();
  const status = useStatus('loading');

  useEffect(() => {
    if (cache[showId]) {
      setShow(cache[showId]);
      status.setNone();
    } else {
      (async function() {
        const show = await readShow(showId);

        setShow(show);
        cache[showId] = show;
        status.setNone();
      })()
      .catch(status.setError);
    }
  }, [showId]);

  return {
    loading: status.loading,
    show
  };
}

const cache = <Record<string, Show>> {};
