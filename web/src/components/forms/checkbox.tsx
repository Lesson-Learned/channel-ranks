import { ChangeEvent, HTMLProps } from 'react';

interface Props<T> extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
  onChange(value: T, checked: boolean): void;
}

export function Checkbox<T>({ onChange, ...inputProps }: Props<T>) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value as T, event.target.checked);
  }

  return (
    <input { ...inputProps } onChange={ handleChange } type="checkbox" />
  );
}
