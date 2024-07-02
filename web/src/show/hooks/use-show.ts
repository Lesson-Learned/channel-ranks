import { readShow, Show } from '@api';
import { useStatus } from '@shared';
import { useEffect, useState } from 'react';

export function useShow(id: string) {
  const [show, setShow] = useState<Show>();
  const status = useStatus('loading');

  useEffect(() => {
    (async function() {
      const show = await readShow(id);

      setShow(show);
      status.setNone();
    })()
    .catch(status.setError);
  }, [id]);

  return {
    loading: status.loading,
    show
  };
}
