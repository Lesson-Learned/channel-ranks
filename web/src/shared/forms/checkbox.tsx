import { ChangeEvent } from 'react';

type Props<T> =
  Omit<JSX.IntrinsicElements['input'], 'onChange' | 'type' | 'value'> & {
  onChange(value: T, checked: boolean): void;
  value: T;
}

export function Checkbox<T extends string>({
  onChange,
  value,
  ...props
}: Props<T>) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value as T, event.target.checked);
  }

  return (
    <input
      { ...props }
      onChange={ handleChange }
      type="checkbox"
      value={ value }
    />
  );
}
