import { useState } from 'react';

export function useInput(init = '') {
  const [error, setError] = useState('');
  const [value, setValue] = useState(init);

  function clean(): string {
    return value.trim();
  }

  function clear() {
    setError('');
    setValue('');
  }

  function empty(): boolean {
    return !value.trim().length;
  }

  function reset() {
    setError('');
    setValue(init);
  }

  function updateError(error: string) {
    setError(error);
  }

  function updateValue(value: string) {
    setValue(value);
  }

  return {
    clean,
    clear,
    empty,
    error,
    get: value,
    reset,
    set: updateValue,
    setError: updateError
  };
}
