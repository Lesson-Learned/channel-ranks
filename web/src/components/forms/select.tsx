import { ChangeEvent, HTMLProps } from 'react';

interface Props<T extends string> extends
  Omit<HTMLProps<HTMLSelectElement>, 'onChange'> {
  labelStyle?: string;
  labelText: string;
  onChange(value: T): void;
}

export function Select<T extends string>({
  labelStyle,
  labelText,
  onChange,
  ...selectProps
}: Props<T>) {
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    onChange(event.target.value as T);
  }

  return (
    <label className={ labelStyle }>
      { labelText }{ ' ' }
      <select { ...selectProps } onChange={ handleChange } />
    </label>
  );
}
