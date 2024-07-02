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

  function isValid(): boolean {
    if (value.trim().length) {
      return true;
    }

    setError('Please enter a value.');
    return false;
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
    isValid,
    reset,
    set: updateValue,
    setError: updateError
  };
}
