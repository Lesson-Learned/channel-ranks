import { ChangeEvent } from 'react';

type Props<T> =
  Omit<JSX.IntrinsicElements['select'], 'onChange' | 'value'> & {
  labelClassName?: string;
  labelText: string;
  onChange(value: T): void;
  value: T | undefined;
}

export function Select<T extends number | string>({
  labelClassName,
  labelText,
  onChange,
  value,
  ...props
}: Props<T>) {
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    onChange(event.target.value as T);
  }

  return (
    <label className={ labelClassName }>
      { labelText }{ ' ' }
      <select { ...props } onChange={ handleChange } value={ value } />
    </label>
  );
}
