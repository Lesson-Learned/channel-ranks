import { ChangeEvent } from 'react';

type Props = Omit<JSX.IntrinsicElements['input'], 'onChange' | 'type'> & {
  onChange(value: File): void;
}

export function FileInput({ onChange, ...props }: Props) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files?.length) {
      onChange(event.target.files[0]);
    }
  }

  return (
    <input
      { ...props }
      onChange={ handleChange }
      type="file"
    />
  );
}
