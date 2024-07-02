import { ChangeEvent } from 'react';

type Props = Omit<JSX.IntrinsicElements['input'], 'onChange' | 'type'> & {
  onChange(file: File): void;
};

export function ImageFileInput({ onChange, ...props }: Props) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files?.length) {
      onChange(event.target.files[0]);
    }
  }

  return (
    <input
      { ...props }
      accept=".jpeg, .jpg, .png"
      onChange={ handleChange }
      type="file"
    />
  );
}
