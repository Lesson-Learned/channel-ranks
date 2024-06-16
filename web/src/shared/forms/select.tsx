import { ChangeEvent } from 'react';

type Props<T extends string> =
  Omit<JSX.IntrinsicElements['select'], 'onChange'> & {
  labelStyle?: string;
  labelText: string;
  onChange(value: T): void;
}

export function Select<T extends string>({
  labelStyle,
  labelText,
  onChange,
  ...props
}: Props<T>) {
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    onChange(event.target.value as T);
  }

  return (
    <label className={ labelStyle }>
      { labelText }{ ' ' }
      <select { ...props } onChange={ handleChange } />
    </label>
  );
}
