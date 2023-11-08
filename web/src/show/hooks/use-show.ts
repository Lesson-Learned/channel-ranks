import { readShow, Show } from '@api';
import { useEffect, useState } from 'react';

export function useShow(id: string) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState<Show | null>(null);

  useEffect(() => {
    if (!id) {
      return setLoading(false);
    }

    async function run() {
      try {
        setShow(await readShow(id));
      } catch (e) {
        console.log(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    run();
  }, [id]);

  return { error, loading, show };
}
