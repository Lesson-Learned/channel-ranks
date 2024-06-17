import { useState } from 'react';

export function useStatus(init: Status = 'none') {
  const [status, setStatus] = useState(init);

  function setError() {
    setStatus('error');
  }

  function setLoading() {
    setStatus('loading');
  }

  function setNone() {
    setStatus('none');
  }

  return {
    error: status === 'error',
    loading: status === 'loading',
    none: status === 'none',
    setError,
    setLoading,
    setNone
  };
}

type Status = 'error' | 'loading' | 'none';
