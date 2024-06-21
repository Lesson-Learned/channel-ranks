import { useState } from 'react';

export function useSelect<T extends string>(init?: T) {
  const [error, setError] = useState('');
  const [value, setValue] = useState(init);

  function clear() {
    setError('');
    setValue(init);
  }

  function updateError(error: string) {
    setError(error);
  }

  function updateValue(value: T) {
    setValue(value);
  }

  return {
    clear,
    error,
    get: value,
    set: updateValue,
    setError: updateError
  };
}
