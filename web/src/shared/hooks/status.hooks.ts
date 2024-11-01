import { useState } from 'react';

export function useStatus(init: Status = 'none') {
  const [status, setStatus] = useState(init);

  function clear() {
    setStatus('none');
  }

  function setError() {
    setStatus('error');
  }

  function setLoading() {
    setStatus('loading');
  }

  return {
    clear,
    error: status === 'error',
    loading: status === 'loading',
    setError,
    setLoading
  };
}

type Status = 'error' | 'loading' | 'none';
