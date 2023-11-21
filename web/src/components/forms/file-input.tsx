import { ChangeEvent, HTMLProps } from 'react';

interface Props extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
  onChange(value: File): void;
}

export function FileInput({ onChange, ...props }: Props) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return;
    }

    onChange(event.target.files[0]);
  }

  return (
    <input
      { ...props }
      onChange={ handleChange }
      type="file"
    />
  );
}
