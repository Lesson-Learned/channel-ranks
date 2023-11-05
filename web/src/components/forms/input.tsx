import { classes } from '@shared';
import { ChangeEvent, HTMLProps } from 'react';
import css from './input.module.css';

interface Props extends Omit<HTMLProps<HTMLInputElement>, 'onChange'> {
  onChange(value: string): void;
}

export function Input({ onChange, ...inputProps }: Props) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  return (
    <input
      { ...inputProps }
      className={ classes(css.container, inputProps.className) }
      onChange={ handleChange }
    />
  );
}
