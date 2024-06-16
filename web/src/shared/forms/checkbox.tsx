import { ChangeEvent } from 'react';

type Props<T> = Omit<JSX.IntrinsicElements['input'], 'onChange' | 'type'> & {
  onChange(value: T, checked: boolean): void;
}

export function Checkbox<T>({ onChange, ...props }: Props<T>) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value as T, event.target.checked);
  }

  return (
    <input { ...props } onChange={ handleChange } type="checkbox" />
  );
}
