import { useState } from 'react';

export function useCheckbox<T extends string>(init: Record<T, boolean>) {
  const [error, setError] = useState('');
  const [map, setMap] = useState({ ...init });

  function empty(): boolean {
    return toList().length === 0;
  }

  function toList(): T[] {
    return Object.keys(map).filter(key => map[key as T]) as T[];
  }

  function updateError(error: string) {
    setError(error);
  }

  function updateMap(value: T, checked: boolean) {
    setMap(map => ({ ...map, [value]: checked }));
  }

  return {
    empty,
    error,
    map,
    set: updateMap,
    setError: updateError,
    toList
  };
}
